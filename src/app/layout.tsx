import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import ChatWidget from "@/app/ui/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aditya Pranjal | Software Engineer",
    template: "%s | Aditya Pranjal",
  },
  description:
    "Software engineer building intelligent systems, scalable backend APIs, and developer-focused tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-black text-white pt-14`}
      >
        <Navbar />
        {children}

        {/* ✅ PORTAL ROOT (REQUIRED) */}
        <div id="chat-root" />

        <ChatWidget />

        <Footer />
      </body>
    </html>
  );
}
