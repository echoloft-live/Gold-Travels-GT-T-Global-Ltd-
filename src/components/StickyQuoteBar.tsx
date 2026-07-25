import React, { useState, useEffect } from 'react';
import { Search, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const StickyQuoteBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-md border-t border-[#8B6B2E]/50 shadow-2xl py-3 px-4 sm:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-[#0A0A0C]">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-bold text-sm text-[#F6F1E7]">GT&T Quick Quote</span>
            <p className="text-[10px] font-mono text-[#E3C077]">Abuja Concierge Desk Active</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${COMPANY_INFO.phones[0]}`}
            className="hidden md:flex items-center space-x-1.5 text-xs font-mono text-[#F6F1E7] hover:text-[#E3C077]"
          >
            <Phone className="w-3.5 h-3.5 text-[#E3C077]" />
            <span>{COMPANY_INFO.phones[0]}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20would%20like%20a%20quick%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 shadow"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Quote</span>
          </a>

          <a
            href="/contact"
            className="px-5 py-2 rounded-full gold-gradient text-[#0A0A0C] text-xs font-semibold uppercase tracking-wider shadow hover:opacity-95"
          >
            Plan Trip
          </a>
        </div>
      </div>
    </div>
  );
};
