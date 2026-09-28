"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Home } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHome);
  const { scrollY } = useScroll();

  useEffect(() => {
    // If we navigate away from home, ensure it's visible.
    if (!isHome) {
      setIsVisible(true);
    } else {
      // Initialize properly on home page based on current scroll
      setIsVisible(window.scrollY > window.innerHeight * 3);
    }
  }, [isHome]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isHome) {
      // The scroll animation in ScrollSequence is 400vh long.
      // We reveal the nav bar once the user is mostly past it.
      if (latest > window.innerHeight * 3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  });

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-4 pointer-events-none"
    >
      <nav className="flex items-center justify-between bg-primary text-black p-2 pr-2 pl-2 rounded-full shadow-[0_20px_40px_rgba(255,191,0,0.3)] border border-black/10 pointer-events-auto">
        
        {/* Left Logo / Icon */}
        <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer text-primary">
          <Home size={18} strokeWidth={2.5} />
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/services/visual-production" className="hover:text-white transition-colors">Visuals</Link>
          <Link href="/services/content-strategy" className="hover:text-white transition-colors">Strategy</Link>
          <Link href="/services/campaign-launch" className="hover:text-white transition-colors">Campaigns</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>

        {/* Right Action Button */}
        <Link 
          href="/contact" 
          className="bg-black text-white text-xs font-medium py-2.5 px-4 rounded-full hover:bg-gray-900 transition-colors shrink-0"
        >
          livemedialkdigital@gmail.com
        </Link>
      </nav>
    </motion.div>
  );
}
