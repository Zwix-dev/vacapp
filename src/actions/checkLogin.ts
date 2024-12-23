"use server"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function checkLogin() {
  try {
    const session = await getServerSession(authOptions)
    
    return session;
  } catch (err) {
    throw err;
  }
}
