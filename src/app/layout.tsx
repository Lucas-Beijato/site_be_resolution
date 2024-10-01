import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Be Resolution",
  description: "Somos um time de profissionais apaixonados por tecnologia e aprimoramento de sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn(
          "pt-24 min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Header/>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
