import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import "./globals.css";

const Preloader = dynamic(() => import("@/components/Preloader"));
const CursorRingField = dynamic(() => import("@/components/CursorRingField"));

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Live Media LK - Creative Agency",
  description: "Premium Photography, Videography, and Creative Shoots in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-background text-white antialiased">
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
