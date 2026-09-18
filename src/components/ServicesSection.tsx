import React, { useState } from 'react';
import { Gauge, Sparkles, Wrench, ShieldCheck, Zap, Truck, Check, ArrowRight, Clock, Shield, X, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'All Disciplines', value: 'all' },
    { label: 'Dyno & Performance', value: 'performance' },
    { label: 'Ceramic & PPF Detailing', value: 'detailing' },
    { label: 'Exotic Maintenance', value: 'maintenance' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge': return <Gauge className="w-5 h-5 text-red-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-red-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-red-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-red-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-red-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-red-500" />;
      default: return <Wrench className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0b0f] relative overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-carbon-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Specialized Engineering Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Bespoke <span className="text-metallic-silver">Automotive</span> Services
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Every vehicle entering Four Eleven Car Garage is treated to factory-accredited telemetry, 
              precision craftsmanship, and aerospace-level cleanroom protocols.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#12141a] rounded-lg border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                id={`services-tab-${cat.value}`}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-[#0f1117] rounded-xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.25)] hover:-translate-y-1"
            >
              {/* Top Image Preview with Dark Gradient Overlay */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/50 to-transparent" />
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow-lg border border-red-400">
                    Signature Package
                  </div>
                )}

                {/* Turnaround Pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-slate-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  <Clock className="w-3 h-3 text-red-500" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-red-500 font-bold">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Starting Price & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Starting At
                    </span>
                    <span className="text-lg font-bold text-white font-racing tracking-wide">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalService(service)}
                      className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                    >
                      Specs
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service.id)}
                      className="p-2 rounded-md bg-red-600 hover:bg-red-500 text-white transition-colors"
                      title="Book this service directly"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detailed Specs Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0f1117] border border-white/20 rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden flex-shrink-0">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/60 to-transparent" />
              
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-1">
                  Technical Specifications
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Typical Turnaround</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    {activeModalService.turnaround}
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Warranty Coverage</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-red-500" />
                    {activeModalService.warranty}
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Base Investment</span>
                  <span className="text-sm font-bold text-red-500 font-racing tracking-wide text-base mt-0.5 block">
                    {activeModalService.startingPrice}
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Included Scope & Procedures
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded bg-black/40 border border-white/5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Used */}
              {activeModalService.equipment && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Certified Hardware & Tooling
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalService.equipment.map((eq, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#090a0d] border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Investment</span>
                <span className="text-xl font-racing font-bold text-white tracking-wide">
                  {activeModalService.startingPrice}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = activeModalService.id;
                    setActiveModalService(null);
                    onSelectServiceForBooking(id);
                  }}
                  className="px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
