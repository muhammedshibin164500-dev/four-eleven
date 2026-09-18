/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Calendar, Phone } from 'lucide-react';
import { GARAGE_INFO } from './data/mockData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireBuild = (carTitle: string) => {
    setSelectedServiceId('bespoke-tuning');
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-[#f1f5f9] selection:bg-red-600 selection:text-white relative">
      {/* Top Fixed Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Services Section */}
        <ServicesSection onSelectServiceForBooking={handleOpenBooking} />

        {/* About & Workshop Heritage Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection onInquireBuild={handleInquireBuild} />

        {/* Verified Reviews Section */}
        <ReviewsSection />

        {/* VIP Booking / Quote Section */}
        <BookingSection
          preSelectedServiceId={selectedServiceId}
          onClearPreSelected={() => setSelectedServiceId(undefined)}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Concierge Action Trigger for Quick Access */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        <a
          href={`tel:${GARAGE_INFO.phone}`}
          className="p-3 rounded-full bg-[#111318] hover:bg-black text-slate-300 hover:text-white border border-white/20 shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
          title="Direct Phone Line"
        >
          <Phone className="w-5 h-5 text-red-500" />
        </a>

        <button
          type="button"
          id="floating-vip-book-btn"
          onClick={() => handleOpenBooking()}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(225,29,72,0.5)] border border-red-500 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book VIP Intake</span>
        </button>
      </div>
    </div>
  );
}
