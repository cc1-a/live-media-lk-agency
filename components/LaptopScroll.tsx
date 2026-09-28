"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LaptopScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale the laptop frame up as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Intro text that fades out */}
        <motion.div style={{ opacity: textOpacity }} className="absolute top-32 z-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Discover Our Vision</h2>
          <p className="text-gray-400">Scroll to explore</p>
        </motion.div>

        {/* The Laptop Frame */}
        <motion.div
          style={{ scale, opacity }}
          className="relative w-[300px] md:w-[600px] lg:w-[800px] aspect-video bg-neutral-900 rounded-lg md:rounded-2xl border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden z-10"
        >
          {/* Laptop Screen Content (Video placeholder) */}
          <div className="absolute inset-0 bg-black flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-black mix-blend-overlay"></div>
             {/* A pulsing play icon as a placeholder for actual video scrubbing */}
             <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
             </div>
             <p className="absolute bottom-4 text-xs text-gray-500 font-mono">[Cinematic Video Placeholder]</p>
          </div>
          
          {/* Subtle reflection on the screen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Laptop Base (Keyboard area) - scales with the screen but is below it visually */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-[340px] md:w-[680px] lg:w-[900px] h-4 md:h-6 bg-gray-800 rounded-b-xl md:rounded-b-3xl mt-[-2px] z-10 border-t border-gray-700"
        >
           <div className="w-16 md:w-32 h-1 md:h-2 bg-gray-700 mx-auto rounded-b-md"></div>
        </motion.div>
      </div>
    </div>
  );
}
