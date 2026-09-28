import React from 'react';

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className = '' }: GradientBlobProps) {
  return (
    <div
      className={`absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] -z-20 blur-3xl pointer-events-none opacity-50 ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(255,191,0,0.15) 0%, rgba(255,191,0,0.05) 30%, transparent 70%)'
      }}
    />
  );
}
