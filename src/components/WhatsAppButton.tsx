import React from 'react';
import { COMPANY_INFO } from '../data/mockData';

// WhatsApp SVG Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g>
      <path d="M16.003 3.003c-7.18 0-13 5.82-13 13 0 2.293.624 4.529 1.789 6.489l-1.908 6.544a1 1 0 0 0 1.227 1.225l6.572-1.894a13.014 13.014 0 0 0 5.32 1.136h.001c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 24c-1.605 0-3.191-.318-4.676-.943a1 1 0 0 0-.687-.038l-5.079 1.465 1.468-5.031a1 1 0 0 0-.063-.69A10.983 10.983 0 0 1 6.003 16c0-6.065 4.938-11 11-11s11 4.935 11 11c0 6.065-4.938 11-11 11zm5.643-8.334c-.303-.153-1.782-.884-2.058-.984-.276-.1-.478-.153-.68.154-.203.306-.779.983-.955 1.187-.176.203-.353.229-.655.076-.303-.154-1.279-.471-2.438-1.507-.901-.805-1.51-1.803-1.688-2.104-.176-.305-.019-.47.134-.62.137-.135.305-.353.457-.53.151-.177.202-.305.302-.509.1-.203.05-.382-.025-.535-.075-.153-.68-1.642-.931-2.251-.246-.591-.497-.509-.684-.518l-.582-.011a1.12 1.12 0 0 0-.805.377c-.28.304-1.066 1.04-1.066 2.534 0 1.493 1.09 2.937 1.242 3.142.151.203 2.124 3.247 5.156 4.342.721.248 1.283.396 1.723.509.724.183 1.383.158 1.904.096.581-.068 1.783-.729 2.036-1.434.253-.704.253-1.307.177-1.434-.076-.127-.277-.202-.58-.355z" />
    </g>
  </svg>
);

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
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[10px] items-center justify-center font-bold">1</span>
        </span>
      </a>
    </aside>
  );
};
