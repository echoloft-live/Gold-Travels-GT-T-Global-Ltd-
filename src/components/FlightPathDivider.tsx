import React from 'react';

interface FlightPathDividerProps {
  className?: string;
  label?: string;
}

export const FlightPathDivider: React.FC<FlightPathDividerProps> = ({ className = "my-12", label }) => {
  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-[#8B6B2E]/30" />
      </div>
      <div className="relative flex items-center justify-center px-4 bg-transparent">
        {/* Animated flight route arc dot or plane */}
        <div className="flex items-center space-x-3 bg-[#0A0A0C] px-6 py-1.5 rounded-full border border-[#8B6B2E]/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E3C077] animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[#E3C077] uppercase">
            {label || "ABV → GLOBAL ROUTE"}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#8B6B2E]" />
        </div>
      </div>
    </div>
  );
};
