import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareerPath AI — Guidance for Indian Youth",
  description: "Personalised career guidance for Indian students and professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}