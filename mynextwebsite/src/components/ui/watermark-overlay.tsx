import React from 'react';

interface WatermarkOverlayProps {
  className?: string;
}

export default function WatermarkOverlay({ className = '' }: WatermarkOverlayProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}
      style={{
        background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)',
        mixBlendMode: 'overlay',
        willChange: 'transform'
      }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center text-white/20 text-2xl font-bold"
        style={{
          transform: 'rotate(-45deg)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          willChange: 'transform'
        }}
      >
        DY Productions
      </div>
    </div>
  );
} 