import React, { useState } from 'react';
import { Shield, Award, Wrench, CheckCircle, Flame, Eye } from 'lucide-react';
import detailingStudioImage from '../assets/images/detailing_bay_studio_1789723476044.jpg';
import fleetLineupImage from '../assets/images/exotic_fleet_lineup_1789723488532.jpg';
import { WORKSHOP_FEATURES } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [activeFacilityTab, setActiveFacilityTab] = useState<number>(0);

  const facilityPhotos = [
    {
      title: "Cleanroom Detailing Lab",
      subtitle: "360-degree high-CRI shadowless LED array for flawless 9H ceramic & PPF fitment",
      image: detailingStudioImage
    },
    {
      title: "Exotic Engineering Fleet Bay",
      subtitle: "Dedicated high-security climate-controlled bays for bespoke customer builds",
      image: fleetLineupImage
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#08090b] relative overflow-hidden border-t border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Philosophy & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              The Four Eleven Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              A Sanctuary For <br />
              <span className="text-metallic-silver">Mechanical Purity</span> & Performance
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded by motorsport engineers and dedicated supercar collectors, 
              <strong className="text-white"> FOUR ELEVEN CAR GARAGE</strong> was conceived as 
              an antidote to assembly-line dealership mentalities. We bridge the gap 
              between high-stakes Formula motorsport telemetry and concourse perfection.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether blueprinting a twin-turbo engine on our 1,500 HP all-wheel-drive dyno cell, 
              or hand-jeweling clear-coat in our ISO Class 7 cleanroom under 6,000K daylight-spectrum 
              LEDs, every millimeter of your automobile is preserved with obsessive reverence.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0f1117] border border-white/10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span className="text-xs uppercase tracking-wider font-bold text-white">
                    Factory Diagnostic
                  </span>
                </div>
                <p className="text-[12px] text-slate-400">
                  PIWIS 4, Ferrari SD3, and Lamborghini factory software preserved.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1117] border border-white/10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-4 h-4 text-red-500" />
                  <span className="text-xs uppercase tracking-wider font-bold text-white">
                    Master Certification
                  </span>
                </div>
                <p className="text-[12px] text-slate-400">
                  Over 18 years average tenure across our master motorsport tech team.
                </p>
              </div>
            </div>

            {/* Bullet List of Facility Certifications */}
            <div className="space-y-2 pt-2">
              {[
                "12,000 sq.ft climate-controlled facility with 24/7 biometric armed security",
                "OEM factory-approved Motul 300V motorsport lubricants exclusively used",
                "Zero-incline hydraulic enclosed vehicle transport fleet"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Workshop Facility Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0f1117] shadow-2xl p-2">
              {/* Image Preview with Switcher */}
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden">
                <img
                  src={facilityPhotos[activeFacilityTab].image}
                  alt={facilityPhotos[activeFacilityTab].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-red-500" />
                  <span>Certified Facility</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                    {facilityPhotos[activeFacilityTab].title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {facilityPhotos[activeFacilityTab].subtitle}
                  </p>
                </div>
              </div>

              {/* Photo Selector Switcher */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                {facilityPhotos.map((photo, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveFacilityTab(index)}
                    className={`p-2.5 rounded-lg text-left transition-all border ${
                      activeFacilityTab === index
                        ? 'bg-red-950/40 border-red-500 text-white'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold uppercase block tracking-wider truncate">
                      {photo.title}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                      View Facility Bay
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Hardware Features Strip */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WORKSHOP_FEATURES.map((wf, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-red-600/30 transition-colors">
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-red-500" />
                    {wf.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
