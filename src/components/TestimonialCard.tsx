import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#0A0A0C] border border-[#8B6B2E]/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#8B6B2E]/20" />
      
      <div>
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#E3C077] text-[#E3C077]" />
          ))}
        </div>
        <p className="text-sm sm:text-base text-[#F6F1E7]/90 leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4 border-t border-[#8B6B2E]/20">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover border border-[#8B6B2E]/50" 
        />
        <div>
          <h4 className="font-display font-bold text-sm text-[#F6F1E7]">{testimonial.name}</h4>
          <p className="text-xs text-[#E3C077] font-mono">{testimonial.role} • {testimonial.location}</p>
          <span className="text-[10px] font-mono text-[#F6F1E7]/50 uppercase">{testimonial.serviceUsed}</span>
        </div>
      </div>

    </div>
  );
};
