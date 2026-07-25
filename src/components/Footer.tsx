import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-[#8B6B2E]/30 text-[#F6F1E7]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        {/* Company Overview */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#8B6B2E]/60 overflow-hidden p-1">
              <img src="/src/assets/logo.png" alt="GT&T Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wide gold-gradient-text">
                Gold Travels
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#E3C077] uppercase">
                GT&T Global Ltd
              </span>
            </div>
          </div>
          <p className="text-xs text-[#F6F1E7]/70 leading-relaxed pr-4">
            Gold Travels and Tours (GT&T) Global Ltd is Abuja’s premier luxury travel agency. We curate bespoke global itineraries, seamless flight ticketing, elite hotel reservations, and high-success visa assistance for discerning travelers across Nigeria and beyond.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="w-9 h-9 rounded-full bg-[#1C2440] border border-[#8B6B2E]/40 flex items-center justify-center text-[#E3C077] hover:bg-[#8B6B2E] hover:text-[#0A0A0C] transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-9 h-9 rounded-full bg-[#1C2440] border border-[#8B6B2E]/40 flex items-center justify-center text-[#E3C077] hover:bg-[#8B6B2E] hover:text-[#0A0A0C] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-display text-sm font-semibold text-[#E3C077] tracking-wider uppercase">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>Services (7 Core)</span>
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>Destinations & Packages</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>Travel FAQ</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E3C077] transition-colors flex items-center space-x-1">
                <span>Contact Desk</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Services */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-display text-sm font-semibold text-[#E3C077] tracking-wider uppercase">
            Our Services
          </h4>
          <ul className="space-y-2 text-xs">
            {SERVICES.map(s => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="hover:text-[#E3C077] transition-colors flex items-center justify-between group">
                  <span>{s.title}</span>
                  <span className="font-mono text-[10px] text-[#8B6B2E] group-hover:text-[#E3C077]">[{s.code}]</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Address */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-display text-sm font-semibold text-[#E3C077] tracking-wider uppercase">
            Abuja Headquarters
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#E3C077] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#E3C077] shrink-0" />
              <div className="flex flex-col font-mono">
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#E3C077]">{COMPANY_INFO.phones[0]}</a>
                <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#E3C077]">{COMPANY_INFO.phones[1]}</a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#E3C077] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E3C077] truncate font-mono">{COMPANY_INFO.email}</a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-[#8B6B2E]/20 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F6F1E7]/50 font-mono">
        <p>© {new Date().getFullYear()} Gold Travels and Tours (GT&T) Global Ltd. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <span>Goldtravels.ng</span>
          <span>•</span>
          <span>Abuja, Nigeria</span>
          <span>•</span>
          <span>Luxury Travel Agency</span>
        </div>
      </div>
    </footer>
  );
};
