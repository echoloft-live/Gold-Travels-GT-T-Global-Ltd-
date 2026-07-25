import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/mockData';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-3">
            [ TRAVEL GUIDES & FAQ ]
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
            Find answers to common questions regarding our luxury concierge services, visa assistance, payment methods, and Abuja operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 rounded-2xl overflow-hidden shadow-xl transition-all"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#F6F1E7]">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#E3C077] transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-sm text-[#F6F1E7]/80 leading-relaxed font-sans border-t border-[#8B6B2E]/20 mt-2">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <FlightPathDivider label="ABV → STILL HAVE QUESTIONS?" />

        {/* CTA */}
        <div className="mt-16 bg-[#1C2440] border border-[#8B6B2E]/40 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
            [ DIRECT CONCIERGE ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F6F1E7]">
            Have a Specific Question Not Listed Here?
          </h2>
          <p className="text-sm text-[#F6F1E7]/80 max-w-xl">
            Our Abuja concierge team is available instantly via WhatsApp or phone to answer any travel inquiry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20have%20a%20question%20about...`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
    </div>
  );
};
