import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-3">
            [ 07 CORE SERVICES ]
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Complete Luxury Travel & Concierge Desk
          </h1>
          <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
            From premier GDS flight ticketing and high-success visa consultancy to elite hotel reservations and private chauffeur services. Every service is managed with meticulous Abuja precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <FlightPathDivider label="ABV → DEDICATED CONCIERGE" />

        {/* WhatsApp Consultation Banner */}
        <div className="mt-16 bg-[#1C2440] border border-[#8B6B2E]/40 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
            [ INSTANT ADVISORY ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F6F1E7]">
            Need a Custom Itinerary or Corporate Account?
          </h2>
          <p className="text-sm text-[#F6F1E7]/80 max-w-xl">
            Our Abuja concierge desk is available instantly via WhatsApp to craft bespoke travel packages tailored to your schedule.
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20need%20assistance%20with%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Abuja Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
