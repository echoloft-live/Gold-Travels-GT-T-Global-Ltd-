import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar for Click-to-Call & Quick info */}
      <div className="bg-[#0A0A0C] border-b border-[#8B6B2E]/20 text-xs py-2 px-4 sm:px-8 text-[#F6F1E7]/80 flex flex-wrap justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Abuja HQ, FCT Nigeria</span>
          </span>
          <span className="hidden md:inline-block text-[#8B6B2E]">|</span>
          <span className="hidden md:inline-block font-mono text-[#E3C077]">
            Mon - Sat: 8:00 AM - 6:00 PM
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href={`tel:${COMPANY_INFO.phones[0]}`}
            className="flex items-center space-x-1 hover:text-[#E3C077] transition-colors font-mono"
            aria-label="Call Us"
          >
            <Phone className="w-3.5 h-3.5 text-[#E3C077]" />
            <span>{COMPANY_INFO.phones[0]}</span>
          </a>
          <span className="text-[#8B6B2E]">/</span>
          <a 
            href={`tel:${COMPANY_INFO.phones[1]}`}
            className="flex items-center space-x-1 hover:text-[#E3C077] transition-colors font-mono hidden sm:inline-flex"
            aria-label="Call Us Secondary"
          >
            <span>{COMPANY_INFO.phones[1]}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0C]/95 backdrop-blur-md shadow-2xl border-b border-[#8B6B2E]/30 py-3' : 'bg-[#0A0A0C] py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center border border-[#8B6B2E]/60 shadow-lg overflow-hidden p-1">
              <img src="/src/assets/logo.png" alt="GT&T Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wide gold-gradient-text">
                Gold Travels
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#E3C077] uppercase -mt-1">
                GT&T Global Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-[#E3C077] transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => navigate('/services')}
                className="flex items-center space-x-1 text-sm font-medium hover:text-[#E3C077] transition-colors py-2 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#E3C077]' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#0A0A0C] border border-[#8B6B2E]/40 shadow-2xl rounded-xl py-3 mt-1 grid grid-cols-1 gap-1 z-50 animate-fade-in">
                  <div className="px-4 py-1.5 border-b border-[#8B6B2E]/20 text-[11px] font-mono text-[#E3C077] uppercase tracking-wider">
                    Our 7 Core Services
                  </div>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="px-4 py-2 text-xs hover:bg-[#1C2440] hover:text-[#E3C077] transition-colors flex items-center justify-between group/item"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] text-[#8B6B2E] bg-[#8B6B2E]/10 px-1.5 py-0.5 rounded">
                          {service.code}
                        </span>
                        <span className="font-medium">{service.title}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#E3C077]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/destinations" className="text-sm font-medium hover:text-[#E3C077] transition-colors">
              Destinations & Packages
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-[#E3C077] transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="text-sm font-medium hover:text-[#E3C077] transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#E3C077] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20would%20like%20to%20plan%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="p-2.5 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E]/30 text-[#E3C077] border border-[#8B6B2E]/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider gold-gradient text-[#0A0A0C] hover:opacity-95 shadow-lg transition-all transform hover:scale-105"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F6F1E7] hover:text-[#E3C077] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0C] border-b border-[#8B6B2E]/40 shadow-2xl py-6 px-6 z-50 animate-fade-in flex flex-col space-y-4">
            <Link to="/" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10">
              Home
            </Link>
            <Link to="/services" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10 flex items-center justify-between">
              <span>Services (7 Core)</span>
              <ArrowRight className="w-4 h-4 text-[#E3C077]" />
            </Link>
            <div className="pl-4 grid grid-cols-1 gap-2 py-1">
              {SERVICES.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} className="text-xs text-[#F6F1E7]/80 hover:text-[#E3C077] py-1">
                  • {s.title} ({s.code})
                </Link>
              ))}
            </div>
            <Link to="/destinations" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10">
              Destinations & Packages
            </Link>
            <Link to="/about" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10">
              About Us
            </Link>
            <Link to="/faq" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10">
              FAQ
            </Link>
            <Link to="/contact" className="text-base font-medium hover:text-[#E3C077] py-1 border-b border-[#8B6B2E]/10">
              Contact Us
            </Link>

            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center space-x-2 text-sm font-mono text-[#E3C077]"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
              <Link
                to="/contact"
                className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider gold-gradient text-[#0A0A0C]"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
