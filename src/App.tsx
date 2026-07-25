import React, { useEffect, useState } from 'react';

import { COMPANY_INFO, SERVICES, TRAVEL_PACKAGES, TESTIMONIALS } from './data/mockData';
import { QuoteWidget } from './components/QuoteWidget';
import { ContactForm } from './components/ContactForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Award, ShieldCheck, Clock, Quote, Plane, FileCheck, GraduationCap, Building2, Car, Palmtree, HeartHandshake } from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  FileCheck,
  GraduationCap,
  Building2,
  Car,
  Palmtree,
  HeartHandshake,
};

export function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 400);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowBackTop(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection observer for reveals and counters
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Counters observer
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          const dur = 1600;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target).toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

    return () => {
      observer.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#242220] font-sans selection:bg-[#C9A227] selection:text-white">
      
      {/* Loader */}
      <div className={`fixed inset-0 z-50 bg-[#111111] flex items-center justify-center transition-opacity duration-700 ${loaderHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-16 h-16 rounded-full border border-[rgba(201,162,39,0.35)] flex items-center justify-center relative">
          <svg className="w-7 h-7 text-[#C9A227] animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-6 ${isScrolled ? 'bg-[#111111]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shadow-[0_0_0_1px_rgba(201,162,39,0.35)] overflow-hidden p-1">
              <img src="/src/assets/logo.png" alt="GT&T Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display text-2xl font-semibold text-white tracking-wide">
              Gold <em className="not-italic bg-gradient-to-r from-[#E9CE7E] to-[#C9A227] bg-clip-text text-transparent">Travels</em>.ng
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#destinations" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Destinations</a>
            <a href="#study" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Study Abroad</a>
            <a href="#testimonials" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-[#C9A227] text-[#1a1400] shadow-lg hover:-translate-y-0.5 transition-all">
              Book Now
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-7 h-5 relative flex flex-col justify-between bg-transparent border-none cursor-pointer z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col items-center justify-center space-y-6 z-40 px-8 animate-fade-in">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Services</a>
            <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Destinations</a>
            <a href="#study" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Study Abroad</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold text-white">Contact</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#C9A227] text-[#1a1400]">Book Now</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[720px] flex items-end bg-[#111111] overflow-hidden" id="home">
        {/* Hero Background with zoom animation */}
        <div className="absolute inset-0 bg-cover bg-center filter brightness-90 hero-bg-anim" style={{ backgroundImage: 'linear-gradient(180deg, rgba(10,9,8,0.35) 0%, rgba(10,9,8,0.55) 55%, rgba(10,9,8,0.92) 100%), url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80")' }}></div>

        {/* Animated Flight Path SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-55" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E9CE7E" stopOpacity="0"/>
              <stop offset="50%" stopColor="#E9CE7E" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#E9CE7E" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path className="route-path" d="M -50 620 Q 300 400 620 500 T 1250 260"/>
        </svg>

        {/* Floating Icons */}
        <svg className="float-icon" style={{ top: '22%', left: '8%', width: '34px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
        <svg className="float-icon" style={{ top: '16%', right: '12%', width: '30px', animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z"/>
        </svg>

        <div className="relative z-10 w-full pb-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8 max-w-[900px]">
            <span className="text-xs tracking-[0.22em] uppercase text-[#E9CE7E] font-bold inline-flex items-center gap-2 mb-4 reveal in">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span>
              Gold Travels & Tours (GT&T) Global Ltd
            </span>
            <h1 className="text-white text-[clamp(40px,6vw,76px)] leading-[1.05] font-display font-semibold mb-5 reveal in" style={{ transitionDelay: '0.1s' }}>
              Explore the World<br/>with <span className="italic bg-gradient-to-r from-[#E9CE7E] to-[#C9A227] bg-clip-text text-transparent">Confidence</span>
            </h1>
            <p className="text-white/80 text-lg max-w-[560px] mb-10 font-normal reveal in" style={{ transitionDelay: '0.2s' }}>
              Your trusted partner for flights, visas, study abroad, vacations and unforgettable experiences — planned with care, delivered without stress.
            </p>
            <div className="flex gap-4 flex-wrap mb-14 reveal in" style={{ transitionDelay: '0.3s' }}>
              <a href="#contact" className="px-8 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#1a1400] shadow-xl hover:-translate-y-1 transition-all">
                Book Your Trip
              </a>
              <a href="#services" className="px-8 py-4 rounded-full font-bold text-sm bg-transparent border border-white/55 text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
                Get Visa Assistance
              </a>
            </div>

            <div className="flex gap-6 sm:gap-12 border-t border-white/20 pt-7 flex-wrap reveal in" style={{ transitionDelay: '0.4s' }}>
              <div><span className="font-display text-white text-3xl font-semibold block"><em className="not-italic text-[#E9CE7E]" data-count="5000">0</em>+</span><span className="text-xs uppercase tracking-wider text-white/60">Happy Travelers</span></div>
              <div><span className="font-display text-white text-3xl font-semibold block"><em className="not-italic text-[#E9CE7E]" data-count="100">0</em>+</span><span className="text-xs uppercase tracking-wider text-white/60">Destinations</span></div>
              <div><span className="font-display text-white text-3xl font-semibold block"><em className="not-italic text-[#E9CE7E]" data-count="98">0</em>%</span><span className="text-xs uppercase tracking-wider text-white/60">Satisfaction</span></div>
              <div><span className="font-display text-white text-3xl font-semibold block"><em className="not-italic text-[#E9CE7E]" data-count="10">0</em>+</span><span className="text-xs uppercase tracking-wider text-white/60">Years Experience</span></div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-9 z-20 hidden md:flex flex-col items-center gap-2.5 text-white/60 text-[11px] tracking-[0.18em] uppercase">
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Quote Widget Section */}
      <section className="pt-8 pb-16 bg-white relative z-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto sm:-mt-24 relative z-30 shadow-2xl rounded-2xl overflow-hidden bg-white border border-[#C9A227]/30">
            <QuoteWidget />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-2xl mb-14 reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#9C7A1E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-semibold mt-4 text-[#111111]">Every step of your journey, arranged in one place</h2>
            <p className="text-gray-600 mt-4 text-base">From the first flight search to the last stamp in your passport, our consultants handle the details so your trip stays effortless.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className="group bg-white border border-gray-200/80 rounded-2xl p-8 hover:bg-[#111111] hover:text-white transition-all duration-500 hover:-translate-y-1.5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <span className="absolute top-6 right-6 font-display italic text-sm text-[#C9A227]/40">0{idx + 1}</span>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FBF7EE] group-hover:bg-white/10 flex items-center justify-center text-[#C9A227] group-hover:text-[#E9CE7E] mb-6 transition-colors">
                    {(() => { const Icon = SERVICE_ICONS[s.iconName]; return Icon ? <Icon className="w-5 h-5" /> : null; })()}
                  </div>
                  <h4 className="font-display text-2xl font-semibold mb-3 group-hover:text-white">{s.title}</h4>
                  <p className="text-sm text-gray-600 group-hover:text-white/70 leading-relaxed mb-6">{s.shortDesc}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#C9A227] group-hover:text-[#E9CE7E]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-[#111111] text-white relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,162,39,0.14),transparent_55%)] pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#E9CE7E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-semibold mt-4 text-white">Travel planning that feels like a trusted second opinion</h2>
            <p className="text-white/60 mt-4 text-base">We've guided thousands of Nigerian travelers through flights, visas and relocations — with the paperwork handled and the guesswork removed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
            <div className="border border-white/12 rounded-2xl p-8 bg-white/[0.03] hover:border-[#C9A227]/50 hover:-translate-y-1.5 transition-all">
              <Award className="w-8 h-8 text-[#E9CE7E] mb-6" />
              <h4 className="text-xl font-display font-semibold mb-3">Experienced Consultants</h4>
              <p className="text-sm text-white/55 leading-relaxed">A team that has handled thousands of itineraries and knows what each embassy expects.</p>
            </div>
            <div className="border border-white/12 rounded-2xl p-8 bg-white/[0.03] hover:border-[#C9A227]/50 hover:-translate-y-1.5 transition-all">
              <ShieldCheck className="w-8 h-8 text-[#E9CE7E] mb-6" />
              <h4 className="text-xl font-display font-semibold mb-3">Affordable Packages</h4>
              <p className="text-sm text-white/55 leading-relaxed">Transparent pricing built around your budget, without cutting corners on service.</p>
            </div>
            <div className="border border-white/12 rounded-2xl p-8 bg-white/[0.03] hover:border-[#C9A227]/50 hover:-translate-y-1.5 transition-all">
              <Clock className="w-8 h-8 text-[#E9CE7E] mb-6" />
              <h4 className="text-xl font-display font-semibold mb-3">Fast Visa Processing</h4>
              <p className="text-sm text-white/55 leading-relaxed">Documentation reviewed early and submitted right, so approvals move faster.</p>
            </div>
            <div className="border border-white/12 rounded-2xl p-8 bg-white/[0.03] hover:border-[#C9A227]/50 hover:-translate-y-1.5 transition-all">
              <MessageCircle className="w-8 h-8 text-[#E9CE7E] mb-6" />
              <h4 className="text-xl font-display font-semibold mb-3">24/7 Assistance</h4>
              <p className="text-sm text-white/55 leading-relaxed">Real support around the clock, before you fly and while you're away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-28 bg-white" id="destinations">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#9C7A1E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> Featured Destinations
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-semibold mt-4 text-[#111111]">Places our travelers keep going back to</h2>
            <p className="text-gray-600 mt-4 text-base">A shortlist of the routes we book most — each one planned door to door.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {TRAVEL_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md cursor-pointer">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] tracking-[0.14em] uppercase text-[#E9CE7E] mb-1.5 font-bold">{pkg.country}</span>
                  <h3 className="font-display text-2xl font-bold mb-1">{pkg.destination}</h3>
                  <p className="text-xs text-white/70 mb-4">{pkg.description.slice(0, 70)}...</p>
                  <a href="#contact" className="text-xs font-bold text-[#E9CE7E] inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore {pkg.destination}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Section */}
      <section className="py-28 bg-[#F8F9FA]" id="study">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl reveal">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80" alt="Students" className="w-full h-[540px] object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl flex items-center gap-4">
              <span className="font-display text-3xl font-bold text-[#9C7A1E]">5</span>
              <span className="text-xs text-gray-600 font-medium">Countries with active admissions support</span>
            </div>
          </div>
          <div className="reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#9C7A1E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> Study Abroad
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold mt-4 mb-6">Your admission letter is just the beginning</h2>
            <p className="text-gray-600 text-base mb-8">We guide students from application to arrival — matching you with schools, handling your visa file and arranging travel so you land ready to start.</p>
            
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['United Kingdom', 'Canada', 'USA', 'Australia', 'Ireland'].map((country, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full border border-[#C9A227]/40 text-sm font-semibold text-[#111111] bg-[#C9A227]/5">
                  {country}
                </span>
              ))}
            </div>

            <ul className="space-y-4 mb-10 text-gray-700 font-medium">
              <li className="flex items-center gap-3"><span className="text-[#9C7A1E]">✓</span> University admission support</li>
              <li className="flex items-center gap-3"><span className="text-[#9C7A1E]">✓</span> Student visa assistance</li>
              <li className="flex items-center gap-3"><span className="text-[#9C7A1E]">✓</span> Flight and travel arrangements</li>
              <li className="flex items-center gap-3"><span className="text-[#9C7A1E]">✓</span> Accommodation guidance on arrival</li>
            </ul>

            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm bg-[#111111] text-[#E9CE7E] hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#111111] text-white relative overflow-hidden" id="testimonials">
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#E9CE7E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-semibold mt-4 text-white">Trusted by travelers across Nigeria</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
                <div>
                  <div className="text-[#E9CE7E] text-sm tracking-widest mb-4">★★★★★</div>
                  <p className="text-white/80 text-base italic leading-relaxed mb-8">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-[#C9A227]/50" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                    <p className="text-xs text-[#E9CE7E]">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-36 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50" style={{ backgroundImage: 'linear-gradient(180deg, rgba(10,9,8,0.75), rgba(10,9,8,0.9)), url("https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1800&q=80")' }}></div>
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <span className="text-xs tracking-[0.22em] uppercase text-[#E9CE7E] font-bold block mb-4">Let's Plan It Together</span>
          <h2 className="text-white text-4xl sm:text-6xl font-display font-semibold mb-8">Ready for Your Next Adventure?</h2>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-sm bg-[#C9A227] text-[#1a1400] shadow-2xl hover:-translate-y-1 transition-all">
            Book Your Journey Today
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-28 bg-white" id="contact">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-10 sm:mb-16 reveal">
            <span className="text-xs tracking-[0.22em] uppercase text-[#9C7A1E] font-bold inline-flex items-center gap-2">
              <span className="w-7 h-[1px] bg-[#C9A227]"></span> Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-semibold mt-4 text-[#111111]">Tell us where you're headed</h2>
            <p className="text-gray-600 mt-4 text-base">Share a few details and a travel consultant will reach out within one business day.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 reveal">
            <div className="lg:col-span-5 bg-[#111111] text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(201,162,39,0.18),transparent_60%)] pointer-events-none"></div>
              <div className="relative z-10">
                <span className="text-xs tracking-[0.22em] uppercase text-[#E9CE7E] font-bold block mb-2">Gold Travels and Tours (GT&T) Global Ltd</span>
                <h3 className="text-2xl font-display font-semibold mb-6 sm:mb-8">Reach us directly</h3>
                
                <div className="space-y-5">
                  <div className="flex gap-4 pb-5 border-b border-white/10">
                    <MapPin className="w-5 h-5 text-[#E9CE7E] shrink-0 mt-1" />
                    <div><div className="text-[11px] uppercase tracking-wider text-white/50 mb-1">Address</div><div className="text-sm font-medium">{COMPANY_INFO.address}</div></div>
                  </div>
                  <div className="flex gap-4 pb-5 border-b border-white/10">
                    <Phone className="w-5 h-5 text-[#E9CE7E] shrink-0 mt-1" />
                    <div><div className="text-[11px] uppercase tracking-wider text-white/50 mb-1">Phone</div><div className="text-sm font-medium font-mono break-all">{COMPANY_INFO.phones[0]} · {COMPANY_INFO.phones[1]}</div></div>
                  </div>
                  <div className="flex gap-4 pb-5 border-b border-white/10">
                    <Mail className="w-5 h-5 text-[#E9CE7E] shrink-0 mt-1" />
                    <div><div className="text-[11px] uppercase tracking-wider text-white/50 mb-1">Email</div><div className="text-sm font-medium font-mono break-all">{COMPANY_INFO.email}</div></div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <div className="h-28 rounded-xl bg-white/5 border border-dashed border-[#C9A227]/40 flex items-center justify-center text-xs text-white/60 gap-2">
                  <MapPin className="w-4 h-4 text-[#E9CE7E]" />
                  <span>Map preview — FCT, Abuja</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-2xl p-5 sm:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0C] text-white/60 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#C9A227]/60 overflow-hidden p-1">
                  <img src="/src/assets/logo.png" alt="GT&T Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-display text-2xl font-semibold text-white tracking-wide">
                  Gold <em className="not-italic bg-gradient-to-r from-[#E9CE7E] to-[#C9A227] bg-clip-text text-transparent">Travels</em>.ng
                </span>
              </div>
              <p className="text-sm text-white/50 max-w-sm leading-relaxed mb-6">
                Nigeria's trusted travel partner for flights, visas, study abroad and unforgettable vacations.
              </p>
            </div>

            <div>
              <h5 className="text-white text-xs tracking-wider uppercase font-bold mb-6">Services</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-[#E9CE7E] transition-colors">Flight Booking</a></li>
                <li><a href="#services" className="hover:text-[#E9CE7E] transition-colors">Visa Assistance</a></li>
                <li><a href="#study" className="hover:text-[#E9CE7E] transition-colors">Study Abroad</a></li>
                <li><a href="#packages" className="hover:text-[#E9CE7E] transition-colors">Vacation Packages</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white text-xs tracking-wider uppercase font-bold mb-6">Company</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-[#E9CE7E] transition-colors">About Us</a></li>
                <li><a href="#destinations" className="hover:text-[#E9CE7E] transition-colors">Destinations</a></li>
                <li><a href="#testimonials" className="hover:text-[#E9CE7E] transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#E9CE7E] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white text-xs tracking-wider uppercase font-bold mb-6">Contact</h5>
              <ul className="space-y-3 text-sm">
                <li>FCT, Abuja, Nigeria</li>
                <li className="font-mono">{COMPANY_INFO.phones[0]}</li>
                <li className="font-mono">{COMPANY_INFO.phones[1]}</li>
                <li className="font-mono">{COMPANY_INFO.handle}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40">
            <span>© {new Date().getFullYear()} Gold Travels and Tours (GT&T) Global Ltd. All Rights Reserved.</span>
            <span>Designed for seamless travel, everywhere.</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Back to Top */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#111111] text-[#E9CE7E] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}

export default App;
