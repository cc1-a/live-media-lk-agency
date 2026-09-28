import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Media LK - Creative Agency",
  description: "Premium Photography, Videography, and Creative Shoots in Sri Lanka.",
};

import NavBar from "@/components/NavBar";
import CursorRingField from "@/components/CursorRingField";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Preloader />
        <div className="fixed inset-0 z-[-1] bg-black pointer-events-auto">
          <CursorRingField />
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
