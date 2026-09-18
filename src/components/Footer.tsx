import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { GARAGE_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, ArrowUp, CheckCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterSent(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="full" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier sanctuary for high-performance supercar engineering, 
              AWD dynamometer tuning, 9H graphene ceramic protection, and bespoke exotic car maintenance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Affiliations:
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-semibold border border-white/5">
                ASE Master
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-semibold border border-white/5">
                TÜV Certified
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-semibold border border-white/5">
                XPEL Elite
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">Home Showcase</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">Bespoke Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">About & Facility</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">Mastery Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-red-400 transition-colors">Verified Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-red-400 transition-colors">VIP Intake Scheduler</a>
              </li>
            </ul>
          </div>

          {/* Specialized Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• 1,500 HP AWD Dynamometer Calibration</li>
              <li>• 9H Diamond Graphene Ceramic Armor</li>
              <li>• OEM Factory PIWIS 4 & SD3 Diagnostics</li>
              <li>• XPEL Stealth & High-Gloss PPF Wrap</li>
              <li>• Titanium Exhaust & Valvetronic Tuning</li>
              <li>• Enclosed Hydraulic Valet Transport</li>
            </ul>
          </div>

          {/* VIP Newsletter & Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              VIP Track & Dyno Bulletins
            </h4>
            <p className="text-xs text-slate-400">
              Receive private invitations to private track days, dyno shootouts, and supercar arrivals.
            </p>

            {newsletterSent ? (
              <div className="flex items-center gap-2 p-2.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs">
                <CheckCircle className="w-4 h-4" />
                <span>Enrolled in VIP Bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="vip@collector.com"
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-md text-xs text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs rounded-md transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-500">
              Direct Emergency: <span className="text-red-500 font-semibold">{GARAGE_INFO.emergencyLine}</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {GARAGE_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#booking" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
