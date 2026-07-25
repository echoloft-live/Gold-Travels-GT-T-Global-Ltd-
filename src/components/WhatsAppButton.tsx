import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface WhatsAppButtonProps {
  prefilledMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  prefilledMessage = "Hello Gold Travels (GT&T), I would like to inquire about your travel services." 
}) => {
  const encodedMessage = encodeURIComponent(prefilledMessage);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMessage}`;

  return (
    <aside aria-label="Support and Quick Links" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 group">
      <div className="hidden group-hover:flex items-center bg-[#0A0A0C] text-[#F6F1E7] text-xs px-3 py-1.5 rounded-lg border border-[#8B6B2E]/50 shadow-xl mb-1 animate-fade-in font-sans whitespace-nowrap">
        Chat with our Abuja Concierge ✈️
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[10px] items-center justify-center font-bold">1</span>
        </span>
      </a>
    </aside>
  );
};
