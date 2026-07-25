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

  /* shared field classes */
  const fieldBase =
    'w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#242220] placeholder:text-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all';

  return (
    <div className="bg-white">
      {submitted ? (
        <div className="py-10 text-center flex flex-col items-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-500">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-[#111111]">
            Message Received!
          </h3>
          <p className="text-sm text-gray-600 max-w-md leading-relaxed">
            Thank you. Our Abuja concierge team has received your enquiry and will contact you via phone or email shortly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={handleWhatsAppChat}
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 shadow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-full border border-gray-200 hover:border-[#C9A227] text-[#242220] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold text-[#111111] mb-1">
              Send an Enquiry
            </h3>
            <p className="text-sm text-gray-500 font-sans">
              Fill out the form below or connect via our 24/7 WhatsApp concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9C7A1E] mb-1.5 font-sans">
                Full Name
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder="e.g. Dr. Amina Bello"
                className={fieldBase}
              />
              {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9C7A1E] mb-1.5 font-sans">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="e.g. 07056103924"
                className={fieldBase}
              />
              {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9C7A1E] mb-1.5 font-sans">
                Email Address
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="e.g. amina@example.com"
                className={fieldBase}
              />
              {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9C7A1E] mb-1.5 font-sans">
                Service of Interest
              </label>
              <select {...register('service')} className={fieldBase}>
                <option value="">Select a service…</option>
                <option value="Flight Booking">Flight Booking (FLT)</option>
                <option value="Visa Assistance">Visa Assistance (VSA)</option>
                <option value="Study Abroad">Study Abroad (STY)</option>
                <option value="Hotel Reservation">Hotel Reservation (HTL)</option>
                <option value="Car Rental">Car Rental Services (CAR)</option>
                <option value="Vacation Packages">Vacation Packages (PKG)</option>
                <option value="Honeymoon & Celebrations">Destination Honeymoon &amp; Celebrations (HNY)</option>
              </select>
              {errors.service && <span className="text-[11px] text-red-500 mt-1 block">{errors.service.message}</span>}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9C7A1E] mb-1.5 font-sans">
              Travel Details / Message
            </label>
            <textarea
              rows={4}
              {...register('message')}
              placeholder="Tell us your destination, dates, traveler count, and any special requirements…"
              className={fieldBase}
            />
            {errors.message && <span className="text-[11px] text-red-500 mt-1 block">{errors.message.message}</span>}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-1 gap-4">
            <span className="text-xs text-gray-400 font-sans">
              ⚡ Abuja HQ · Response within 15 mins
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A227] text-[#1a1400] font-bold text-xs uppercase tracking-widest hover:bg-[#b08f20] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>{isSubmitting ? 'Sending…' : 'Send Enquiry'}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
