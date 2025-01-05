import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "@/components/common/navbar";
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Yeira Putri Nandika",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased bg-white`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
