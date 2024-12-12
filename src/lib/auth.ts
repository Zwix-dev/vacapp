import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, getUserById } from "@/data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import bcrypt, { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Invalid credentials.");
        }
        const user = await getUserByEmail(credentials.email);
        if (!user) {
          throw new Error("User not found.");
        }
        if (!user.emailVerified) {
           throw new Error("E-mail not verified.");
        }
        if (user.password) {
          const isMatch = await compare(credentials.password, user.password);
          if (isMatch) {
            return user;
          } else {
            throw new Error("Invalid password.");
          }
        } else {
          throw new Error("Password cannot be null.");
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      return token
    },
    session({ session, token }) {
      return session
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
