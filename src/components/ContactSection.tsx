import React, { useState } from 'react';
import { GARAGE_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageCircle, AlertTriangle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#08090b] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Direct Concierge & Location
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Connect With Our <span className="text-metallic-silver">Master Technicians</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Have a custom build requirement, track setup inquiry, or need emergency enclosed transport? 
            Our dedicated service advisors are available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Channels & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Phone Card */}
            <div className="p-6 rounded-xl bg-[#0f1118] border border-white/10 hover:border-red-600/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-red-500 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Direct Service Line
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold uppercase">
                  Line Open
                </span>
              </div>
              <a
                href={`tel:${GARAGE_INFO.phone}`}
                className="text-2xl font-bold font-racing tracking-wide text-white hover:text-red-400 transition-colors block"
              >
                {GARAGE_INFO.phone}
              </a>
              <p className="text-xs text-slate-400 mt-1">
                Mon - Sat: 08:00 AM – 07:30 PM PST
              </p>
            </div>

            {/* 24/7 VIP Emergency Hotline */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-red-950/40 to-[#0f1118] border border-red-900/40">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                <span>24/7 Trackside & Breakdown Hotline</span>
              </div>
              <a
                href={`tel:${GARAGE_INFO.emergencyLine}`}
                className="text-xl font-bold font-racing text-white hover:text-red-400 transition-colors block"
              >
                {GARAGE_INFO.emergencyLine}
              </a>
              <p className="text-xs text-slate-400 mt-1">
                Immediate dispatch of enclosed hydraulic recovery transport.
              </p>
            </div>

            {/* Email & Location Card */}
            <div className="p-6 rounded-xl bg-[#0f1118] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Concierge Inquiries
                  </span>
                  <a
                    href={`mailto:${GARAGE_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-red-400 transition-colors"
                  >
                    {GARAGE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Workshop & Dyno Facility
                  </span>
                  <p className="text-sm text-slate-200 mt-0.5">
                    {GARAGE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Operating Schedule
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {GARAGE_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/917510504507?text=Hello%20Four%20Eleven%20Car%20Garage,%20I%20have%20an%20inquiry%20regarding%20my%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Concierge Chat</span>
            </a>
          </div>

          {/* Right Column: Stylized Radar Map & Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Dark Mode Workshop Map Visualizer */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0a0c10] shadow-2xl flex flex-col justify-between p-6">
              {/* Map background radar aesthetic */}
              <div className="absolute inset-0 bg-hex-grid opacity-40 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-red-500/20 animate-ping [animation-duration:4s] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_15px_#ef4444]" />

              {/* Map Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-slate-300 uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>GPS: 34.0736° N, 118.4004° W (Apex Bay 4)</span>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/10"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-500" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Pinpoint Location Marker */}
              <div className="relative z-10 self-center text-center mt-auto mb-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/90 border border-red-500/60 shadow-[0_0_20px_rgba(225,29,72,0.4)] backdrop-blur-md">
                  <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
                  <span className="text-xs font-black uppercase text-white tracking-wider">
                    FOUR ELEVEN CAR GARAGE HQ
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between text-[11px] text-slate-400 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded border border-white/5">
                <span>Secure Enclosed Trailer Intake Lane Available</span>
                <span className="text-red-400 font-semibold">Bay 1-8 Climate Controlled</span>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/10 shadow-xl space-y-4"
            >
              <h3 className="text-lg font-bold uppercase text-white tracking-tight">
                Send Direct Message to Master Tech Team
              </h3>

              {formSent ? (
                <div className="py-6 text-center space-y-2 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white uppercase">Inquiry Dispatched</h4>
                  <p className="text-xs text-slate-400">
                    A service advisor will review your vehicle specifications and respond within 2 business hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Julian Sterling"
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Email or Phone</label>
                      <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="julian@collector.com"
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Vehicle & Inquiry Details</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. 2024 GT3 RS dyno tuning & titanium exhaust fitment quote..."
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-white/10 hover:bg-red-600 text-white font-bold uppercase tracking-wider text-xs rounded-md transition-colors flex items-center justify-center gap-2 border border-white/10 hover:border-red-500 shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Workshop</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
