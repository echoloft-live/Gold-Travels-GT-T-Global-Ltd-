import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, TRAVEL_PACKAGES, TESTIMONIALS, COMPANY_INFO } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { PackageCard } from '../components/PackageCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FlightPathDivider } from '../components/FlightPathDivider';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7]">
      
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Background cinematic image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85" 
            alt="Gold Travels Runway Sunset" 
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-12 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1C2440]/80 border border-[#8B6B2E]/50 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#E3C077]" />
            <span className="text-xs font-mono text-[#E3C077] tracking-widest uppercase">
              Abuja’s Premier Luxury Travel Agency
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6">
            Curating Extraordinary Journeys <span className="gold-gradient-text">Across the Globe</span>
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/80 max-w-2xl font-sans mb-10 leading-relaxed">
            From seamless flight ticketing and expert visa assistance to overwater Maldives bungalows and executive chauffeur services. Experience precision and warmth with GT&T Global Ltd.
          </p>

          {/* Flight Path SVG decorative visual */}
          <div className="w-full max-w-md mx-auto mb-10 flex items-center justify-center space-x-3 opacity-90">
            <span className="w-3 h-3 rounded-full bg-[#E3C077] shadow-[0_0_12px_#E3C077]"></span>
            <div className="flex-1 border-t-2 border-dashed border-[#8B6B2E]"></div>
            <span className="font-mono text-xs text-[#E3C077] tracking-widest bg-[#0A0A0C]/80 px-3 py-1 rounded-full border border-[#8B6B2E]/40">
              ABV → DXB → LHR → MLE
            </span>
            <div className="flex-1 border-t-2 border-dashed border-[#8B6B2E]"></div>
            <span className="w-3 h-3 rounded-full bg-[#8B6B2E]"></span>
          </div>

        </div>

        {/* Multi-Tab Quote Widget anchored over lower third of hero */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 w-full -mb-16">
          {/* <QuoteWidget /> */}
        </div>
      </section>

      {/* Spacer for overlapping quote widget */}
      <div className="h-28 sm:h-24"></div>

      {/* Services Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-2">
              [ 07 CORE SERVICES ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F6F1E7]">
              Tailored Travel & Concierge Solutions
            </h2>
          </div>
          <Link 
            to="/services" 
            className="mt-4 md:mt-0 font-mono text-xs font-semibold text-[#E3C077] hover:underline flex items-center space-x-2"
          >
            <span>View All 7 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <FlightPathDivider label="ABV → FEATURED DESTINATIONS" />

      {/* Featured Packages Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-2">
              [ SIGNATURE ITINERARIES ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F6F1E7]">
              Handpicked Global Escapes
            </h2>
          </div>
          <Link 
            to="/destinations" 
            className="mt-4 md:mt-0 font-mono text-xs font-semibold text-[#E3C077] hover:underline flex items-center space-x-2"
          >
            <span>Browse All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_PACKAGES.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Why GT&T Trust Band (Midnight Indigo Background) */}
      <section className="bg-[#1C2440] py-20 border-y border-[#8B6B2E]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-2">
              [ THE GT&T ADVANTAGE ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F6F1E7]">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm text-[#F6F1E7]/70 mt-3">
              Rooted in Abuja, connected globally. We combine white-glove concierge attention with deep aviation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0A0A0C]/80 border border-[#8B6B2E]/40 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Personalized Planning</h3>
              <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
                Every itinerary is customized to your preferences, budget, and exact travel rhythm.
              </p>
            </div>

            <div className="bg-[#0A0A0C]/80 border border-[#8B6B2E]/40 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4 shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Visa Expertise</h3>
              <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
                Meticulous document audits and embassy appointment scheduling with remarkably high approval rates.
              </p>
            </div>

            <div className="bg-[#0A0A0C]/80 border border-[#8B6B2E]/40 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4 shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">24/7 WhatsApp Concierge</h3>
              <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
                Instant response and on-ground support whenever you are traveling across time zones.
              </p>
            </div>

            <div className="bg-[#0A0A0C]/80 border border-[#8B6B2E]/40 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-[#0A0A0C] mb-4 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Abuja HQ & Nigerian Trust</h3>
              <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">
                Conveniently located in FCT Abuja, supporting local banking rails (Transfer, USSD, Paystack).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honeymoon / Celebration Spotlight */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#8B6B2E]/50 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2000&q=85" 
              alt="Honeymoon Spotlight" 
              className="w-full h-full object-cover filter brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-16 max-w-2xl flex flex-col space-y-6">
            <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase">
              [ SIGNATURE EXPERIENCE ]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
              Destination Honeymoon & Landmark Celebrations
            </h2>
            <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
              Mark life's most precious milestones in breathtaking paradises. Overwater bungalows in the Maldives, private yacht charters in the Mediterranean, and candlelit dinners under African stars.
            </p>
            <div>
              <Link
                to="/services/honeymoon-celebrations"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-widest shadow-xl hover:opacity-95 transition-all"
              >
                <span>Plan Your Celebration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-2">
            [ CLIENT EXPERIENCES ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Trusted by Leaders & Families Across Nigeria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Start Planning Band */}
      <section className="bg-[#1C2440] py-16 border-t border-[#8B6B2E]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center space-y-6">
          <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
            [ READY TO EMBARK? ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F6F1E7]">
            Begin Your Next Journey with GT&T
          </h2>
          <p className="text-sm text-[#F6F1E7]/80 max-w-xl">
            Contact our Abuja concierge desk today for immediate assistance via WhatsApp or phone.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20am%20ready%20to%20plan%20my%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
            >
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
      </section>

    </div>
  );
};
