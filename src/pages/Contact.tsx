import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-3">
            [ ABUJA CONCIERGE DESK ]
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Get in Touch with GT&T Global Ltd
          </h1>
          <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
            Our luxury travel advisors in Abuja are ready to assist you with flight bookings, visa assistance, hotel reservations, and bespoke packages.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <div className="space-y-8">
            
            {/* Headquarters Card */}
            <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-xl font-bold text-[#E3C077] mb-6 border-b border-[#8B6B2E]/30 pb-3">
                Headquarters
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#F6F1E7]">Abuja Office</span>
                    <span className="text-[#F6F1E7]/70 font-mono text-xs">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#F6F1E7]">Click-to-Call Lines</span>
                    <div className="flex flex-col font-mono text-xs text-[#F6F1E7]/80 pt-1">
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#E3C077]">{COMPANY_INFO.phones[0]}</a>
                      <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#E3C077]">{COMPANY_INFO.phones[1]}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#F6F1E7]">Email Support</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-mono text-[#E3C077] hover:underline truncate block">{COMPANY_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#F6F1E7]">Operating Hours</span>
                    <span className="text-xs font-mono text-[#F6F1E7]/70">Mon - Sat: 8:00 AM - 6:00 PM (WAT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="bg-[#0A0A0C] border border-[#8B6B2E]/40 rounded-2xl p-8 shadow-xl text-center flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg">Instant WhatsApp Chat</h3>
              <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
                Need immediate response? Tap below to chat directly with our Abuja WhatsApp desk.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T%20Abuja%20Desk,%20I%20would%20like%20to%20inquire...`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Open WhatsApp Chat
              </a>
            </div>

          </div>

          {/* Form Column */}
          {/* <div className="lg:col-span-2"> */}
            <ContactForm />
          {/* </div> */}

        </div>

      </div>
    </div>
  );
};
