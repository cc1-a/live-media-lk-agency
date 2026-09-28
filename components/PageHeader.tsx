import React from 'react';
import GradientBlob from './GradientBlob';
import SlotMachine from './SlotMachine';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden pt-32 pb-16 px-6 ${className}`}>
      <GradientBlob />
      
      {/* Decorative SVG Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <g filter="url(#glow)">
            <path fill="url(#grad1)" d="M-100,-100 L200,400 L500,200 Z" />
            <path fill="url(#grad2)" d="M800,-50 L1200,300 L600,600 Z" />
          </g>
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFBF00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFBF00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFBF00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFBF00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {typeof title === 'string' ? (
          <SlotMachine 
            tag="h1" 
            text={title} 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 w-full text-center" 
          />
        ) : (
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
