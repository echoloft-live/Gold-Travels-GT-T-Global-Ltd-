import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formDataSummary, setFormDataSummary] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setFormDataSummary(data);
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    reset();
  };

  const handleWhatsAppChat = () => {
    if (!formDataSummary) return;
    const text = encodeURIComponent(
      `Hello GT&T Abuja Desk,\n\nName: ${formDataSummary.name}\nPhone: ${formDataSummary.phone}\nService: ${formDataSummary.service}\nMessage: ${formDataSummary.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#0A0A0C] border border-[#8B6B2E]/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
      {submitted ? (
        <div className="py-10 text-center flex flex-col items-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold gold-gradient-text">Message Received Successfully!</h3>
          <p className="text-sm text-[#F6F1E7]/80 max-w-md">
            Thank you. Our Abuja concierge team has received your enquiry and will contact you via phone or email shortly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={handleWhatsAppChat}
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continue on WhatsApp Now</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E]/40 text-[#F6F1E7] text-xs font-semibold uppercase tracking-wider border border-[#8B6B2E]/40"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="font-display text-2xl font-bold text-[#F6F1E7] mb-2">
            Send an Enquiry to Our Abuja Desk
          </h3>
          <p className="text-xs sm:text-sm text-[#F6F1E7]/70 mb-6">
            Fill out the form below or connect instantly via our 24/7 WhatsApp concierge line.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#E3C077] mb-1.5">FULL NAME</label>
              <input
                type="text"
                {...register('name')}
                placeholder="e.g. Dr. Amina Bello"
                className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl px-4 py-3 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
              />
              {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label className="block text-xs font-mono text-[#E3C077] mb-1.5">PHONE / WHATSAPP NUMBER</label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="e.g. 07056103924"
                className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl px-4 py-3 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
              />
              {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#E3C077] mb-1.5">EMAIL ADDRESS</label>
              <input
                type="email"
                {...register('email')}
                placeholder="e.g. amina@goldtravels.ng"
                className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl px-4 py-3 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
              />
              {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-xs font-mono text-[#E3C077] mb-1.5">SERVICE OF INTEREST</label>
              <select
                {...register('service')}
                className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl px-4 py-3 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
              >
                <option value="">Select a Service...</option>
                <option value="Flight Booking">Flight Booking (FLT)</option>
                <option value="Visa Assistance">Visa Assistance (VSA)</option>
                <option value="Study Abroad">Study Abroad (STY)</option>
                <option value="Hotel Reservation">Hotel Reservation (HTL)</option>
                <option value="Car Rental">Car Rental Services (CAR)</option>
                <option value="Vacation Packages">Vacation Packages (PKG)</option>
                <option value="Honeymoon & Celebrations">Destination Honeymoon & Celebrations (HNY)</option>
              </select>
              {errors.service && <span className="text-[11px] text-red-400 mt-1 block">{errors.service.message}</span>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#E3C077] mb-1.5">YOUR MESSAGE / TRAVEL DETAILS</label>
            <textarea
              rows={4}
              {...register('message')}
              placeholder="Tell us about your destination, dates, traveler count, and specific requirements..."
              className="w-full bg-[#1C2440]/60 border border-[#8B6B2E]/40 rounded-xl px-4 py-3 text-sm text-[#F6F1E7] focus:outline-none focus:border-[#E3C077]"
            ></textarea>
            {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message.message}</span>}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-2">
            <span className="text-xs font-mono text-[#F6F1E7]/60 mb-4 sm:mb-0">
              ⚡ Abuja HQ • Instant response within 15 mins
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-widest hover:opacity-95 shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
