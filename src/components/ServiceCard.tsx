import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, FileCheck, GraduationCap, Building2, Car, Palmtree, HeartHandshake, ArrowRight } from 'lucide-react';
import type { ServiceInfo } from '../types';

interface ServiceCardProps {
  service: ServiceInfo;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Plane': return <Plane className="w-6 h-6 text-[#E3C077]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#E3C077]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#E3C077]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#E3C077]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#E3C077]" />;
      case 'Palmtree': return <Palmtree className="w-6 h-6 text-[#E3C077]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#E3C077]" />;
      default: return <Plane className="w-6 h-6 text-[#E3C077]" />;
    }
  };

  return (
    <div className="group relative bg-[#0A0A0C] border border-[#8B6B2E]/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:border-[#E3C077] hover:-translate-y-1.5 flex flex-col h-full">
      
      {/* Background Image Reveal on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </div>

      {/* Top Header with Route Code Eyebrow */}
      <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#1C2440] text-[#E3C077] border border-[#8B6B2E]/40 tracking-widest">
              {service.code}
            </span>
            <div className="w-12 h-12 rounded-xl bg-[#1C2440]/80 border border-[#8B6B2E]/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              {getIcon(service.iconName)}
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-[#F6F1E7] mb-2 group-hover:text-[#E3C077] transition-colors">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#F6F1E7]/70 leading-relaxed mb-6">
            {service.shortDesc}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-[#8B6B2E]/20 flex items-center justify-between">
          <Link
            to={`/services/${service.id}`}
            className="text-xs font-mono font-semibold text-[#E3C077] flex items-center space-x-2 group-hover:underline"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[10px] font-mono text-[#8B6B2E] uppercase">GT&T Desk</span>
        </div>
      </div>

    </div>
  );
};
