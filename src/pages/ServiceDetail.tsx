import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../data/mockData';
import { FlightPathDivider } from '../components/FlightPathDivider';
import { CheckCircle2, ArrowRight, MessageCircle, ArrowLeft } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  const whatsappMessage = encodeURIComponent(`Hello GT&T Abuja Desk, I would like to inquire about ${service.title} (${service.code}).`);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F6F1E7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center space-x-2 text-xs font-mono text-[#E3C077] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#8B6B2E]/40 shadow-2xl mb-16">
          <div className="absolute inset-0 z-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover filter brightness-[0.35]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-16 max-w-3xl flex flex-col space-y-6">
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#1C2440] text-[#E3C077] border border-[#8B6B2E]/40 tracking-widest w-max">
              SERVICE CODE: [{service.code}]
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F6F1E7]">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/80 leading-relaxed font-sans">
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full gold-gradient text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 flex items-center space-x-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features & Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Features */}
          <div className="bg-[#1C2440]/60 border border-[#8B6B2E]/30 rounded-2xl p-8 shadow-xl">
            <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase block mb-2">
              [ SERVICE HIGHLIGHTS ]
            </span>
            <h3 className="font-display text-2xl font-bold mb-6 text-[#F6F1E7]">
              What’s Included
            </h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E3C077] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#F6F1E7]/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Process */}
          <div className="bg-[#0A0A0C] border border-[#8B6B2E]/30 rounded-2xl p-8 shadow-xl">
            <span className="font-mono text-xs text-[#E3C077] tracking-widest uppercase block mb-2">
              [ HOW IT WORKS ]
            </span>
            <h3 className="font-display text-2xl font-bold mb-6 text-[#F6F1E7]">
              Our Concierge Process
            </h3>
            <div className="space-y-6">
              {service.process?.map((proc, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="font-mono text-sm font-bold px-3 py-1 rounded bg-[#1C2440] text-[#E3C077] border border-[#8B6B2E]/40 shrink-0">
                    {proc.step}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#F6F1E7] mb-1">{proc.title}</h4>
                    <p className="text-xs text-[#F6F1E7]/70 leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <FlightPathDivider label="ABV → OTHER SERVICES" />

        {/* Other Services Navigation */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-bold mb-8">Explore Other Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICES.filter(s => s.id !== service.id).map(s => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="px-5 py-2.5 rounded-full bg-[#1C2440] hover:bg-[#8B6B2E]/30 text-xs font-mono text-[#E3C077] border border-[#8B6B2E]/40 transition-all"
              >
                {s.title} [{s.code}]
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
