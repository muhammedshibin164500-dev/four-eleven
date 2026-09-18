import React, { useState } from 'react';
import { Calendar, ChevronRight, Gauge, Shield, Award, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import heroGarageImage from '../assets/images/hero_four_eleven_garage_1789723461528.jpg';
import { GARAGE_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeMarque, setActiveMarque] = useState<'porsche' | 'ferrari' | 'lamborghini' | 'mclaren' | 'amg'>('porsche');
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  const marques = [
    { id: 'porsche', name: 'Porsche GT & Turbo', desc: 'OEM PIWIS 4 Diagnostic • Manthey Track Alignments • Stage 2/3 Remaps' },
    { id: 'ferrari', name: 'Ferrari V8 & V12', desc: 'Factory DEIS Calibration • Valvetronic Exhausts • 9H Ceramic Armor' },
    { id: 'lamborghini', name: 'Lamborghini V10 & V12', desc: 'Bespoke Twin Turbo Builds • Inconel Systems • XPEL Stealth Wrap' },
    { id: 'mclaren', name: 'McLaren Super Series', desc: 'ProActive Chassis 2 Tuning • Downpipes • Trackside Support' },
    { id: 'amg', name: 'Mercedes-AMG / Black Series', desc: 'M177/M178 Twin-Turbo Upgrades • TCU Quickshift • Corner Weighting' },
  ] as const;

  const toggleSound = () => {
    // Generate a sleek ambient engine rumble using Web Audio API
    if (!ambientAudioActive) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(45, ctx.currentTime); // Deep V8 idle rumble
          
          gain.gain.setValueAtTime(0.01, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.3);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          
          // Slight pitch rev modulation
          setTimeout(() => {
            if (ctx.state !== 'closed') {
              osc.frequency.exponentialRampToValueAtTime(95, ctx.currentTime + 0.8);
              osc.frequency.exponentialRampToValueAtTime(48, ctx.currentTime + 1.8);
            }
          }, 400);

          setTimeout(() => {
            try {
              gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
              setTimeout(() => {
                ctx.close();
                setAmbientAudioActive(false);
              }, 600);
            } catch {
              setAmbientAudioActive(false);
            }
          }, 3200);

          setAmbientAudioActive(true);
        }
      } catch {
        setAmbientAudioActive(false);
      }
    } else {
      setAmbientAudioActive(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#08090b]">
      {/* Background Cinematic Visual with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGarageImage}
          alt="FOUR ELEVEN CAR GARAGE Supercar Workshop"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Obsidian & Crimson Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/60 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Hex Grid Overlay */}
        <div className="absolute inset-0 bg-hex-grid opacity-30 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full mt-auto mb-auto">
        <div className="max-w-3xl">
          {/* Eyebrow / Brand Subtitle */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-slate-300">
              FOUR ELEVEN CAR GARAGE • APEX PERFORMANCE
            </span>
          </div>

          {/* Primary High-Impact Display Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white">
            <span className="block text-metallic-silver drop-shadow-lg">
              Engineered For The
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
              Extraordinary.
            </span>
          </h1>

          {/* Paragraph Overview */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-red-600 pl-4 bg-black/30 backdrop-blur-sm py-2">
            The premier sanctuary for supercar engineering, 1,500 HP dynamometer calibration, 
            concourse 9H graphene detailing, and bespoke exotic fleet care. We preserve 
            uncompromising precision for those who demand absolute perfection.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              id="hero-book-vip-btn"
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md text-sm font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-[0_0_30px_rgba(225,29,72,0.45)] hover:shadow-[0_0_40px_rgba(225,29,72,0.7)] transition-all cursor-pointer group border border-red-500"
            >
              <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>Book VIP Service</span>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              id="hero-explore-services-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-sm font-bold tracking-wider uppercase text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 hover:border-slate-400 backdrop-blur-md transition-all group"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Ambient Exhaust Audio Simulator Button */}
            <button
              type="button"
              id="hero-audio-rumble-btn"
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-4 py-4 rounded-md text-xs font-semibold uppercase tracking-wider transition-all border ${
                ambientAudioActive
                  ? 'bg-red-950/60 border-red-500 text-red-400 shadow-[0_0_15px_rgba(225,29,72,0.5)]'
                  : 'bg-black/40 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
              title="Experience V8 Twin-Turbo Dyno Rumble"
            >
              {ambientAudioActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-red-500 animate-bounce" />
                  <span>Dyno Idle Active...</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">Sound of Power</span>
                </>
              )}
            </button>
          </div>

          {/* Marque Specialization Quick Selector */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Specialized Marque Engineering Suites
            </p>
            <div className="flex flex-wrap gap-2">
              {marques.map((marque) => (
                <button
                  key={marque.id}
                  type="button"
                  onClick={() => setActiveMarque(marque.id)}
                  className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeMarque === marque.id
                      ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)] border border-red-500'
                      : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {marque.name}
                </button>
              ))}
            </div>
            <div className="mt-3 text-xs text-slate-400 font-medium flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-white/5">
              <span className="text-red-500 font-bold uppercase tracking-wider">Capabilities:</span>
              <span>{marques.find(m => m.id === activeMarque)?.desc}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Stats Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#0e1015]/90 border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl">
          {GARAGE_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-r border-white/5 last:border-none pr-4">
              <div className="flex items-center gap-2">
                <span className="font-racing text-3xl sm:text-4xl text-metallic-silver font-bold tracking-normal leading-none">
                  {stat.value}
                </span>
                {idx === 0 && <Gauge className="w-4 h-4 text-red-500" />}
                {idx === 1 && <Shield className="w-4 h-4 text-red-500" />}
                {idx === 2 && <Award className="w-4 h-4 text-red-500" />}
              </div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
