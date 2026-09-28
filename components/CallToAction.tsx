import React from 'react';
import Link from 'next/link';
import GradientBlob from './GradientBlob';
import SlotMachine from './SlotMachine';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="max-w-4xl mx-auto bg-white/5 border border-primary/20 rounded-3xl p-12 md:p-20 text-center relative backdrop-blur-md group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <SlotMachine 
            tag="h2" 
            text="Ready to scale your brand?" 
            className="text-4xl md:text-6xl font-bold mb-6 text-white w-full text-center" 
          />
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book a strategy session with our team to map out your visual identity and growth trajectory.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-black px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-full shadow-[0_0_40px_rgba(255,191,0,0.3)] hover:shadow-[0_0_60px_rgba(255,191,0,0.5)] hover:scale-105 transform duration-300"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
