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
  destination: z.string().optional(),
  travelDate: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: 'Flight Booking',
    }
  });

  const onSubmit = (data: ContactFormData) => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    // Format message for WhatsApp
    const text = encodeURIComponent(
      `Hello GT&T Abuja Desk,\n\nI just submitted an enquiry on Goldtravels.ng:\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📧 Email: ${data.email}\n📍 Destination: ${data.destination || 'Not specified'}\n📅 Travel Date: ${data.travelDate || 'Flexible'}\n✈️ Service: ${data.service}\n💬 Message: ${data.message}`
    );

    // Open WhatsApp directly
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Name</label>
          <input
            type="text"
            {...register('name')}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Phone</label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="080..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          />
          {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Email</label>
          <input
            type="email"
            {...register('email')}
            placeholder="you@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          />
          {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Destination</label>
          <input
            type="text"
            {...register('destination')}
            placeholder="e.g. Dubai, London"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Travel Date</label>
          <input
            type="date"
            {...register('travelDate')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Service Required</label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
          >
            <option value="Flight Booking">Flight Booking</option>
            <option value="Visa Assistance">Visa Assistance</option>
            <option value="Study Abroad">Study Abroad</option>
            <option value="Hotel Reservations">Hotel Reservations</option>
            <option value="Vacation Package">Vacation Package</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#8a8477] mb-2">Message</label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder="Tell us a little about your trip..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#FBF9F4] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
        ></textarea>
        {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full font-bold text-sm bg-gradient-to-br from-[#E9CE7E] via-[#C9A227] to-[#9C7A1E] text-[#1a1400] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Submit Enquiry via WhatsApp</span>
      </button>
    </form>
  );
};
