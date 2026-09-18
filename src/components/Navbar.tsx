import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Calendar, Menu, X, Shield, Clock } from 'lucide-react';
import { GARAGE_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'services', 'about', 'gallery', 'reviews', 'booking', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Telemetry & Status Bar */}
      <div className={`hidden md:flex justify-between items-center px-6 lg:px-12 py-1.5 text-[11px] font-medium tracking-wider transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#060709]/95 text-slate-400 border-white/5 py-1'
          : 'bg-[#08090b]/80 backdrop-blur-md text-slate-300 border-white/10'
      }`}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-slate-300 font-semibold tracking-wide">WORKSHOP ACTIVE</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Accepting Supercar Bookings</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-red-500" />
            <span>Mon–Sat 08:00 – 19:30</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Shield className="w-3.5 h-3.5 text-red-500" />
            <span>ASE Master & TÜV Certified</span>
          </div>

          <a
            href={`tel:${GARAGE_INFO.phone}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-red-400 transition-colors"
          >
            <Phone className="w-3 h-3 text-red-500" />
            <span className="font-semibold tracking-widest">{GARAGE_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className={`px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#090a0d]/80 via-[#090a0d]/40 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo with Custom Logo Upload capability */}
          <a href="#home" className="flex items-center gap-2" id="nav-brand-logo-link">
            <BrandLogo variant="full" allowCustomUpload={true} />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wider transition-all duration-200 uppercase rounded-md relative ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-600 rounded-full shadow-[0_0_8px_#ef4444]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${GARAGE_INFO.emergencyLine}`}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
              title="24/7 VIP Emergency & Transport Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>24/7 Hotline</span>
            </a>

            <button
              type="button"
              id="navbar-book-btn"
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs lg:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 transition-all duration-200 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_25px_rgba(225,29,72,0.6)] cursor-pointer group border border-red-500/50"
            >
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Book VIP Service</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-book-icon-btn"
              onClick={() => onOpenBooking()}
              className="p-2 text-red-400 hover:text-red-300 bg-red-950/40 border border-red-800/50 rounded-md"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-md border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10]/98 border-b border-red-900/30 px-6 py-6 backdrop-blur-2xl shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-semibold tracking-wider uppercase border-b border-white/5 ${
                  activeSection === link.id ? 'text-red-500' : 'text-slate-300'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded-md text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
              >
                <Calendar className="w-4 h-4" />
                <span>Book VIP Service</span>
              </button>

              <a
                href={`tel:${GARAGE_INFO.phone}`}
                className="w-full py-2.5 bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {GARAGE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
