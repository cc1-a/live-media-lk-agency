import React from 'react';

const BRANDS = [
  "Acme Corp", "Global Tech", "Stark Industries", "Wayne Enterprises", 
  "Cyberdyne Systems", "Massive Dynamic", "InGen", "Umbrella Corp", 
  "Oscorp", "Soylent Corp"
];

export default function BrandsCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-12 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="flex w-[200%] animate-marquee">
        {/* First set of brands */}
        <div className="flex-1 flex justify-around items-center px-4">
          {BRANDS.map((brand, i) => (
            <div key={`brand-1-${i}`} className="text-xl md:text-2xl font-bold text-gray-500 uppercase tracking-widest px-8">
              {brand}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex-1 flex justify-around items-center px-4">
          {BRANDS.map((brand, i) => (
            <div key={`brand-2-${i}`} className="text-xl md:text-2xl font-bold text-gray-500 uppercase tracking-widest px-8">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
