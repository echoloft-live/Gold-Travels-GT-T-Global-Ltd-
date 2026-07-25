import React from 'react';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { ShieldCheck, Award, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-3">
            [ ABOUT GT&T GLOBAL LTD ]
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Aviation Heritage, Precision & Warmth
          </h1>
          <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
            Headquartered in the Federal Capital Territory (FCT) Abuja, Gold Travels and Tours (GT&T) Global Ltd is Nigeria's premier full-service luxury travel agency.
          </p>
        </div>

        {/* Vision & Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
              [ OUR DNA ]
            </span>
            <h2 className="font-display text-3xl font-bold">
              Crafting Distinguished Luxury Travel From Abuja to the World
            </h2>
            <p className="text-sm text-[#F6F1E7]/80 leading-relaxed">
              Our brand identity—derived from our signature black and gold emblem and flight-path motif—embodies aviation heritage, precision, and warmth. We reject generic travel-blue reskins in favor of an atmospheric luxury aesthetic that mirrors top-tier global operators like Black Tomato and Scott Dunn.
            </p>
            <p className="text-sm text-[#F6F1E7]/80 leading-relaxed">
              Whether managing complex corporate multi-city itineraries, securing high-success visa approvals for the UK and US, or curating overwater honeymoon hideaways in the Maldives, GT&T provides white-glove advisory at every step.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#8B6B2E]/40 shadow-2xl h-80 sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" 
              alt="GT&T Aviation Heritage" 
              className="w-full h-full object-cover filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
          </div>
        </div>

        <FlightPathDivider label="ABV → CORE PILLARS" />

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20">
          <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Personalized Planning</h3>
            <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
              Curated itineraries tailored precisely to your personal or executive travel style.
            </p>
          </div>

          <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Visa Expertise</h3>
            <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
              Rigorous document audits and embassy appointment scheduling with industry-leading approval rates.
            </p>
          </div>

          <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">24/7 WhatsApp Concierge</h3>
            <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
              Instant responsiveness and on-ground support across global time zones.
            </p>
          </div>

          <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Abuja HQ & Nigerian Trust</h3>
            <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
              Proudly based in FCT Abuja, supporting seamless local payment rails and click-to-call support.
            </p>
          </div>
        </div>

        {/* CTA Band */}
        <div className="bg-[#1C2440] border border-[#8B6B2E]/40 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
            [ EXPERIENCE THE STANDARD ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F6F1E7]">
            Ready to Plan Your Next Journey?
          </h2>
          <p className="text-sm text-[#F6F1E7]/80 max-w-xl">
            Connect with our Abuja concierge team today via WhatsApp or phone for immediate travel advisory.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 flex items-center space-x-2"
          >
            <span>Contact Abuja Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
