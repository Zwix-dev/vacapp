import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionsWrapper from "@/lib/sessionWrapper"
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/lib/themeProvider"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vac'Action",
  description: "Planning manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionsWrapper>
      <html lang="fr">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          
          <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionsWrapper>

  );
}
