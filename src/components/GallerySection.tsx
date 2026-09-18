import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronRight, Sliders, Calendar } from 'lucide-react';

interface GallerySectionProps {
  onInquireBuild: (carTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onInquireBuild }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'supercars' | 'detailing' | 'performance' | 'classics'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50); // percentage

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'All Masterpieces', value: 'all' },
    { label: 'Supercars & Hypercars', value: 'supercars' },
    { label: 'Detailing & PPF Shield', value: 'detailing' },
    { label: 'Performance & Dyno Builds', value: 'performance' },
    { label: 'Classics & Restomods', value: 'classics' }
  ] as const;

  return (
    <section id="gallery" className="py-24 bg-[#0a0b0e] relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-hex-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Workshop Showcase & Provenance
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Curated <span className="text-metallic-silver">Mastery</span> Gallery
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Explore bespoke engineering projects, track-focused aerodynamic enhancements, 
              and mirror-finish concourse detailing delivered from our facility bays.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#12141a] rounded-lg border border-white/10 self-start md:self-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                id={`gallery-filter-${f.value}`}
                onClick={() => setActiveFilter(f.value)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeFilter === f.value
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before/After Detailing Spotlight Banner */}
        <div className="mb-14 p-6 rounded-2xl bg-[#0f1118] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-red-600/20 text-red-400 text-[10px] font-bold uppercase tracking-widest border border-red-500/30">
                <Sliders className="w-3 h-3 text-red-500" />
                <span>Interactive Paint Correction Inspector</span>
              </div>
              <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                Concourse Paint Transformation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Drag the interactive slider to inspect our 4-stage rotary jeweling process 
                eliminating swirl marks and oxidation on this Ferrari F8 Tributo clear coat.
              </p>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  Pre-Correction (Swirled)
                </span>
                <span className="flex items-center gap-1.5 text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Post-9H Graphene Shield
                </span>
              </div>
            </div>

            {/* Before/After Split Slider Visual */}
            <div className="w-full lg:w-2/3">
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden select-none border border-white/15 shadow-2xl">
                {/* After Image (Full Background) */}
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
                  alt="Post-correction gloss finish"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Before Image (Clipped Left Side) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${beforeAfterSlider}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80"
                    alt="Pre-correction original condition"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-slate-300 border border-white/10">
                    Original Condition
                  </div>
                </div>

                {/* After Label */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-white border border-red-400 shadow-md">
                  Four Eleven Concourse Finish
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                  style={{ left: `${beforeAfterSlider}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-lg text-white">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Native Range input for effortless drag / touch */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterSlider}
                  onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before and after comparison slider"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 rounded-xl overflow-hidden bg-slate-900 border border-white/10 hover:border-red-500/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.3)] hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  {item.category}
                </span>

                <div className="p-2 rounded-full bg-black/50 text-white/80 group-hover:text-white group-hover:bg-red-600 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-bold block mb-1">
                  {item.vehicle}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>

                {/* Quick specs pill */}
                {item.specs.power && (
                  <p className="mt-1 text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {item.specs.power}
                  </p>
                )}

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#0f1117] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/95 text-slate-300 hover:text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Preview */}
            <div className="relative h-72 sm:h-96 w-full bg-black overflow-hidden flex-shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-1">
                  {selectedItem.vehicle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body & Specifications */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedItem.specs.power && (
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Dyno Output / Power</span>
                    <span className="text-sm font-bold text-white mt-1 block">{selectedItem.specs.power}</span>
                  </div>
                )}
                {selectedItem.specs.treatment && (
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 sm:col-span-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Treatment Executed</span>
                    <span className="text-sm font-bold text-white mt-1 block">{selectedItem.specs.treatment}</span>
                  </div>
                )}
                {selectedItem.specs.parts && (
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 sm:col-span-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Hardware & Components</span>
                    <span className="text-sm font-bold text-white mt-1 block">{selectedItem.specs.parts}</span>
                  </div>
                )}
                {selectedItem.specs.turnaround && (
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Project Turnaround</span>
                    <span className="text-sm font-bold text-white mt-1 block">{selectedItem.specs.turnaround}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-red-950/40 border border-red-800/40 text-red-300 rounded text-xs font-semibold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#090a0d] border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Interested in replicating this build or treatment?
              </span>

              <button
                type="button"
                onClick={() => {
                  const title = selectedItem.title;
                  setSelectedItem(null);
                  onInquireBuild(title);
                }}
                className="px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Inquire About This Build</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
