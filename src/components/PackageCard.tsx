import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import type { TravelPackage } from '../types';

interface PackageCardProps {
  pkg: TravelPackage;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="group bg-[#0A0A0C] border border-[#8B6B2E]/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:border-[#E3C077] hover:-translate-y-1.5 flex flex-col h-full">
      
      {/* Image & Badge Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80"></div>
        
        {/* Route Code & Badge */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#0A0A0C]/90 text-[#E3C077] border border-[#8B6B2E]/50 tracking-wider">
            {pkg.routeCode}
          </span>
          {pkg.badge && (
            <span className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full gold-gradient text-[#0A0A0C] shadow-lg">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Destination & Price Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <div className="flex items-center space-x-1 text-xs text-[#E3C077] font-mono mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{pkg.destination}, {pkg.country}</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[#F6F1E7] leading-snug">
              {pkg.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#F6F1E7]/60 block">From</span>
            <span className="font-mono font-bold text-base text-[#E3C077]">{pkg.priceNaira}</span>
          </div>
        </div>
      </div>

      {/* Details & Enquire CTA */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="flex items-center space-x-2 text-xs text-[#F6F1E7]/70 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#8B6B2E]" />
          <span>{pkg.duration}</span>
        </div>

        <ul className="space-y-1.5 text-xs text-[#F6F1E7]/80">
          {pkg.highlights.slice(0, 3).map((h, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C077]"></span>
              <span className="truncate">{h}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-[#8B6B2E]/20 flex items-center justify-between">
          <Link
            to={`/packages/${pkg.slug}`}
            className="w-full py-2.5 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E] text-[#F6F1E7] hover:text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-2 border border-[#8B6B2E]/40"
          >
            <span>View Package & Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};
