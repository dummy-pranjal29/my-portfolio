import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Inter } from "next/font/google";

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
  keywords: [
    "Aditya Pranjal",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "AI",
    "Next.js",
    "Open Source",
  ],
  openGraph: {
    title: "Aditya Pranjal | Software Engineer",
    description:
      "Projects, open source contributions, and experience in building intelligent systems.",
    url: "https://your-domain.vercel.app", // change after deploy
    siteName: "Aditya Pranjal Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aditya Pranjal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Pranjal | Software Engineer",
    description:
      "Projects, open source contributions, and experience in building intelligent systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white pt-14`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
