import React, { useState } from 'react';
import { Plane, FileCheck, Building2, Car, Palmtree, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { QuoteTabType } from '../types';
import { COMPANY_INFO } from '../data/mockData';

export const QuoteWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<QuoteTabType>('flights');
  const [submitted, setSubmitted] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState('');

  // Form states
  const [flightData, setFlightData] = useState({ origin: 'Abuja (ABV)', destination: 'Dubai (DXB)', date: '', passengers: '1 Adult', cabin: 'Economy' });
  const [visaData, setVisaData] = useState({ country: 'United Kingdom', purpose: 'Tourism', travelDate: '' });
  const [hotelData, setHotelData] = useState({ destination: 'London', checkIn: '', checkOut: '', rooms: '1 Room' });
  const [carData, setCarData] = useState({ serviceType: 'Airport Transfer (ABV)', date: '', vehicle: 'Luxury SUV' });
  const [packageData, setPackageData] = useState({ packageTitle: 'Dubai Royal Luxury Escape', travelers: '2 Guests' });

  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    let details = '';
    if (activeTab === 'flights') {
      details = `Flight Inquiry: ${flightData.origin} to ${flightData.destination}, Date: ${flightData.date || 'Flexible'}, ${flightData.passengers}, ${flightData.cabin}`;
    } else if (activeTab === 'visa') {
      details = `Visa Assistance Inquiry: ${visaData.country} (${visaData.purpose}), Target Travel: ${visaData.travelDate || 'Soon'}`;
    } else if (activeTab === 'hotels') {
      details = `Hotel Reservation Inquiry: ${hotelData.destination}, Check-in: ${hotelData.checkIn}, Check-out: ${hotelData.checkOut}, ${hotelData.rooms}`;
    } else if (activeTab === 'cars') {
      details = `Car Rental Inquiry: ${carData.serviceType}, Date: ${carData.date}, Vehicle: ${carData.vehicle}`;
    } else if (activeTab === 'packages') {
      details = `Vacation Package Inquiry: ${packageData.packageTitle}, Travelers: ${packageData.travelers}`;
    }
    setQuoteDetails(details);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Hello GT&T Concierge,\n\nI just submitted a quote request on Goldtravels.ng:\n${quoteDetails}\n\nName: ${contactInfo.name}\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#0A0A0C]/90 backdrop-blur-xl border border-[#8B6B2E]/50 rounded-2xl shadow-2xl overflow-hidden">
      
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-[#8B6B2E]/30 bg-[#1C2440]/50">
        <button
          onClick={() => { setActiveTab('flights'); setSubmitted(false); }}
          className={`flex-1 min-w-[100px] py-4 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all border-b-2 ${
            activeTab === 'flights' ? 'border-[#E3C077] text-[#E3C077] bg-[#0A0A0C]/60' : 'border-transparent text-[#F6F1E7]/70 hover:text-[#E3C077]'
          }`}
        >
          <Plane className="w-4 h-4 shrink-0" />
          <span>Flights</span>
        </button>

        <button
          onClick={() => { setActiveTab('visa'); setSubmitted(false); }}
          className={`flex-1 min-w-[100px] py-4 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all border-b-2 ${
            activeTab === 'visa' ? 'border-[#E3C077] text-[#E3C077] bg-[#0A0A0C]/60' : 'border-transparent text-[#F6F1E7]/70 hover:text-[#E3C077]'
          }`}
        >
          <FileCheck className="w-4 h-4 shrink-0" />
          <span>Visa Assistance</span>
        </button>

        <button
          onClick={() => { setActiveTab('hotels'); setSubmitted(false); }}
          className={`flex-1 min-w-[100px] py-4 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all border-b-2 ${
            activeTab === 'hotels' ? 'border-[#E3C077] text-[#E3C077] bg-[#0A0A0C]/60' : 'border-transparent text-[#F6F1E7]/70 hover:text-[#E3C077]'
          }`}
        >
          <Building2 className="w-4 h-4 shrink-0" />
          <span>Hotels</span>
        </button>

        <button
          onClick={() => { setActiveTab('cars'); setSubmitted(false); }}
          className={`flex-1 min-w-[100px] py-4 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all border-b-2 ${
            activeTab === 'cars' ? 'border-[#E3C077] text-[#E3C077] bg-[#0A0A0C]/60' : 'border-transparent text-[#F6F1E7]/70 hover:text-[#E3C077]'
          }`}
        >
          <Car className="w-4 h-4 shrink-0" />
          <span>Cars & Transfer</span>
        </button>

        <button
          onClick={() => { setActiveTab('packages'); setSubmitted(false); }}
          className={`flex-1 min-w-[100px] py-4 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all border-b-2 ${
            activeTab === 'packages' ? 'border-[#E3C077] text-[#E3C077] bg-[#0A0A0C]/60' : 'border-transparent text-[#F6F1E7]/70 hover:text-[#E3C077]'
          }`}
        >
          <Palmtree className="w-4 h-4 shrink-0" />
          <span>Packages</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold gold-gradient-text">Quote Request Received!</h3>
            <p className="text-sm text-[#F6F1E7]/80 max-w-md">
              Thank you {contactInfo.name || 'Valued Traveler'}. Our Abuja concierge desk has logged your request and will provide curated pricing and availability within 15 minutes.
            </p>
            <div className="p-4 bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl text-xs font-mono text-[#E3C077] max-w-lg w-full text-left">
              {quoteDetails}
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={handleWhatsAppRedirect}
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 shadow-lg transition-all"
              >
                <span>Continue on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E]/40 text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider border border-[#8B6B2E]/40"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Tab Specific Inputs */}
            {activeTab === 'flights' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">ORIGIN CITY</label>
                  <input
                    type="text"
                    value={flightData.origin}
                    onChange={(e) => setFlightData({...flightData, origin: e.target.value})}
                    required
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">DESTINATION CITY</label>
                  <input
                    type="text"
                    value={flightData.destination}
                    onChange={(e) => setFlightData({...flightData, destination: e.target.value})}
                    required
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">TRAVEL DATE</label>
                  <input
                    type="date"
                    value={flightData.date}
                    onChange={(e) => setFlightData({...flightData, date: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">CABIN CLASS</label>
                  <select
                    value={flightData.cabin}
                    onChange={(e) => setFlightData({...flightData, cabin: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'visa' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">TARGET COUNTRY</label>
                  <select
                    value={visaData.country}
                    onChange={(e) => setVisaData({...visaData, country: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="United States">United States (US)</option>
                    <option value="Schengen">Schengen Europe</option>
                    <option value="Canada">Canada</option>
                    <option value="Dubai / UAE">Dubai / UAE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">PURPOSE OF TRAVEL</label>
                  <select
                    value={visaData.purpose}
                    onChange={(e) => setVisaData({...visaData, purpose: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="Tourism">Tourism / Vacation</option>
                    <option value="Study">Study Abroad</option>
                    <option value="Business">Business Conference</option>
                    <option value="Family Visit">Family Visit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">PLANNED TRAVEL DATE</label>
                  <input
                    type="date"
                    value={visaData.travelDate}
                    onChange={(e) => setVisaData({...visaData, travelDate: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
              </div>
            )}

            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">HOTEL DESTINATION</label>
                  <input
                    type="text"
                    value={hotelData.destination}
                    onChange={(e) => setHotelData({...hotelData, destination: e.target.value})}
                    placeholder="e.g. Dubai, London, Paris"
                    required
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">CHECK-IN</label>
                  <input
                    type="date"
                    value={hotelData.checkIn}
                    onChange={(e) => setHotelData({...hotelData, checkIn: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">CHECK-OUT</label>
                  <input
                    type="date"
                    value={hotelData.checkOut}
                    onChange={(e) => setHotelData({...hotelData, checkOut: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
              </div>
            )}

            {activeTab === 'cars' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">SERVICE TYPE</label>
                  <select
                    value={carData.serviceType}
                    onChange={(e) => setCarData({...carData, serviceType: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="Airport Transfer (ABV)">Airport Transfer (Abuja ABV)</option>
                    <option value="Chauffeur Daily Rental">Daily Chauffeur Service</option>
                    <option value="Executive Security Escort">Executive Security Escort</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">DATE & TIME</label>
                  <input
                    type="date"
                    value={carData.date}
                    onChange={(e) => setCarData({...carData, date: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">VEHICLE CLASS</label>
                  <select
                    value={carData.vehicle}
                    onChange={(e) => setCarData({...carData, vehicle: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="Luxury SUV (Land Cruiser)">Luxury SUV (Land Cruiser)</option>
                    <option value="Executive Sedan (Mercedes S-Class)">Executive Sedan (Mercedes S-Class)</option>
                    <option value="VIP Van (Mercedes V-Class)">VIP Van (Mercedes V-Class)</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">SIGNATURE PACKAGE</label>
                  <select
                    value={packageData.packageTitle}
                    onChange={(e) => setPackageData({...packageData, packageTitle: e.target.value})}
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  >
                    <option value="Dubai Royal Luxury Escape">Dubai Royal Luxury Escape (₦1.85m)</option>
                    <option value="London West End & Culture Tour">London West End & Culture Tour (₦2.4m)</option>
                    <option value="Maldives Overwater Bungalow Retreat">Maldives Overwater Bungalow Retreat (₦3.5m)</option>
                    <option value="Zanzibar Spice & Beach Paradise">Zanzibar Spice & Beach Paradise (₦1.65m)</option>
                    <option value="Parisian Romance & Haute Couture">Parisian Romance & Haute Couture (₦2.15m)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E3C077] mb-1">NUMBER OF TRAVELERS</label>
                  <input
                    type="text"
                    value={packageData.travelers}
                    onChange={(e) => setPackageData({...packageData, travelers: e.target.value})}
                    placeholder="e.g. 2 Guests / Family of 4"
                    className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                  />
                </div>
              </div>
            )}

            {/* Contact Details Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#8B6B2E]/20">
              <div>
                <label className="block text-xs font-mono text-[#E3C077] mb-1">YOUR FULL NAME</label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  placeholder="e.g. Emeka Ojukwu"
                  required
                  className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#E3C077] mb-1">PHONE / WHATSAPP</label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  placeholder="e.g. 08030000000"
                  required
                  className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#E3C077] mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  placeholder="e.g. emeka@email.com"
                  required
                  className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-lg px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-2">
              <span className="text-xs text-[#F6F1E7]/60 font-mono mb-3 sm:mb-0">
                ⚡ 100% Free Quote • No instant payment required • Expert Abuja Concierge
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-widest hover:opacity-95 shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}
      </div>

    </div>
  );
};
