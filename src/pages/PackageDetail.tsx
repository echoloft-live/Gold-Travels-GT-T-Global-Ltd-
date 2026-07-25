import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TRAVEL_PACKAGES, COMPANY_INFO } from '../data/mockData';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { MapPin, Clock, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const PackageDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const pkg = TRAVEL_PACKAGES.find(p => p.slug === slug) || TRAVEL_PACKAGES[0];

  const whatsappMessage = encodeURIComponent(`Hello GT&T Abuja Desk, I am interested in booking the package "${pkg.title}" (${pkg.routeCode}) priced at ${pkg.priceNaira}. Please guide me through the next steps.`);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/destinations')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-[#E3C077] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Packages</span>
        </button>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#8B6B2E]/40 shadow-2xl mb-12">
          <div className="absolute inset-0 z-0">
            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover filter brightness-[0.4]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-16 max-w-3xl flex flex-col space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#1C2440] text-[#E3C077] border border-[#8B6B2E]/40 tracking-widest">
                ROUTE: [{pkg.routeCode}]
              </span>
              {pkg.badge && (
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full gold-gradient text-[#0A0A0C]">
                  {pkg.badge}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F6F1E7]">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#E3C077]">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4" />
                <span>{pkg.destination}, {pkg.country}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4" />
                <span>{pkg.duration}</span>
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-xs font-mono text-[#F6F1E7]/60 block">Starting From</span>
                <span className="font-mono text-2xl font-bold text-[#E3C077]">{pkg.priceNaira}</span>
                <span className="text-xs font-mono text-[#F6F1E7]/60 ml-2">({pkg.priceUSD})</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book / Enquire via WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 flex items-center space-x-2"
              >
                <span>Request Custom Invoice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Main Description & Highlights */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0A0A0C] border border-[#8B6B2E]/30 rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold mb-4">Overview</h3>
              <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold mb-6 text-[#F6F1E7]">Package Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#F6F1E7]/90">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Included Sidebar */}
          <div className="bg-[#0A0A0C] border border-[#8B6B2E]/40 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold mb-6 text-[#E3C077] border-b border-[#8B6B2E]/30 pb-3">
                What’s Included
              </h3>
              <ul className="space-y-4 mb-8">
                {pkg.includes.map((inc, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F6F1E7]/90">
                    <span className="w-2 h-2 rounded-full bg-[#E3C077] shrink-0 mt-1.5"></span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider text-center shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>

        </div>

        <FlightPathDivider label="ABV → OTHER PACKAGES" />

        {/* Other Packages */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-bold mb-8">Explore Other Itineraries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {TRAVEL_PACKAGES.filter(p => p.slug !== pkg.slug).map(p => (
              <Link
                key={p.id}
                to={`/packages/${p.slug}`}
                className="px-5 py-2.5 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E]/30 text-xs font-mono text-[#E3C077] border border-[#8B6B2E]/40 transition-all"
              >
                {p.title} ({p.routeCode})
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
