import React, { useState } from 'react';
import { TRAVEL_PACKAGES, COMPANY_INFO } from '../data/mockData';
import { PackageCard } from '../components/PackageCard';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { Search, MessageCircle, ArrowRight } from 'lucide-react';

// List of featured country destinations (removed countries as requested)
const FEATURED_DESTINATIONS: string[] = [];

export const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = TRAVEL_PACKAGES.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-semibold text-[#E3C077] tracking-widest uppercase block mb-3">
            [ SIGNATURE ITINERARIES ]
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Handpicked Global Destinations & Packages
          </h1>
          <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed">
            Explore our curated selection of luxury escapes. From vibrant Dubai and historic London to overwater Maldives hideaways, every trip is managed with impeccable Abuja concierge care.
          </p>
        </div>

        {/* Featured Destinations Pills */}
        {FEATURED_DESTINATIONS.length > 0 && (
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2 justify-center mb-10">
            {FEATURED_DESTINATIONS.map((dest) => (
              <button
                key={dest}
                type="button"
                className="px-5 py-2.5 rounded-full border border-[#C9A227]/40 text-sm font-semibold text-[#F6F1E7] bg-[#C9A227]/5 hover:bg-[#C9A227]/15 transition"
                onClick={() => setSearchTerm(dest)}
              >
                {dest}
              </button>
            ))}
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-[#E3C077]" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destination (e.g. Dubai, London, Maldives)..."
            className="w-full bg-[#1C2440]/80 border border-[#8B6B2E]/50 rounded-full pl-12 pr-6 py-4 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077] shadow-xl"
          />
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-[#F6F1E7]/70 font-mono">No packages match your search criteria. Contact our concierge for a bespoke itinerary.</p>
          </div>
        )}

        <FlightPathDivider label="ABV → BESPOKE ENQUIRIES" />

        {/* Custom Package CTA */}
        <div className="mt-16 bg-[#1C2440] border border-[#8B6B2E]/40 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase">
            [ TAILORED GETAWAYS ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F6F1E7]">
            Have a Specific Destination in Mind?
          </h2>
          <p className="text-sm text-[#F6F1E7]/80 max-w-xl">
            Tell us your dream destination, preferred dates, and budget. Our Abuja travel designers will craft a bespoke quote within 15 minutes.
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20GT%26T,%20I%20would%20like%20a%20custom%20travel%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire Custom Package on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
