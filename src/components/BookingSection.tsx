import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, GARAGE_INFO } from '../data/mockData';
import { Calendar, Clock, Truck, ShieldCheck, CheckCircle2, ChevronRight, Car, Phone, Mail, User, Download, ExternalLink, RefreshCw } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingSectionProps {
  preSelectedServiceId?: string;
  onClearPreSelected?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preSelectedServiceId,
  onClearPreSelected
}) => {
  // Form State
  const [vehicleMake, setVehicleMake] = useState('Porsche');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('2024');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preSelectedServiceId || SERVICES_DATA[0].id);
  const [valetPickup, setValetPickup] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [bookingConfirmation, setBookingConfirmation] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
      // scroll smoothly to booking
      const el = document.getElementById('booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preSelectedServiceId]);

  // Set default appointment date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Dynamic estimate calculation
  const basePriceNum = parseInt(selectedService.startingPrice.replace(/[^0-9]/g, ''), 10) || 1000;
  const valetFee = valetPickup ? 350 : 0;
  const totalEstimate = basePriceNum + valetFee;

  const makes = [
    'Porsche',
    'Ferrari',
    'Lamborghini',
    'McLaren',
    'Mercedes-AMG',
    'BMW M Power',
    'Audi RS / R8',
    'Aston Martin',
    'Bentley',
    'Rolls-Royce',
    'Custom / Exotic Other'
  ];

  const timeSlots = [
    '08:30 AM (Early Intake)',
    '10:00 AM (Morning)',
    '01:00 PM (Afternoon)',
    '03:30 PM (Late Afternoon)',
    'VIP Enclosed Valet Pickup'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refNum = `FE-${Math.floor(1000 + Math.random() * 9000)}`;
      const submission: BookingSubmission = {
        referenceId: refNum,
        customerName,
        email: customerEmail,
        phone: customerPhone,
        vehicleYear,
        vehicleMake,
        vehicleModel: vehicleModel || 'Supercar',
        serviceId: selectedService.id,
        serviceName: selectedService.title,
        preferredDate,
        preferredTime,
        valetPickup,
        notes,
        estimatedTotal: `$${totalEstimate.toLocaleString()}`,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      setBookingConfirmation(submission);
      setIsSubmitting(false);
      if (onClearPreSelected) onClearPreSelected();
    }, 600);
  };

  const handleDownloadCalendar = () => {
    if (!bookingConfirmation) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Four Eleven Car Garage//VIP Appointment//EN
BEGIN:VEVENT
SUMMARY:Four Eleven Car Garage - ${bookingConfirmation.serviceName}
DESCRIPTION:VIP Service intake for ${bookingConfirmation.vehicleYear} ${bookingConfirmation.vehicleMake} ${bookingConfirmation.vehicleModel}. Reference: ${bookingConfirmation.referenceId}
LOCATION:${GARAGE_INFO.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Four-Eleven-${bookingConfirmation.referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-24 bg-[#090a0e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-carbon-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            VIP Service Concierge
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Schedule Your <span className="text-metallic-silver">VIP Intake</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Reserve dedicated facility bay time with our master engineers. Receive an instant estimate 
            and white-glove intake scheduling.
          </p>
        </div>

        {bookingConfirmation ? (
          /* Confirmation Ticket Card */
          <div className="max-w-2xl mx-auto bg-[#0f1118] border-2 border-red-500/60 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(225,29,72,0.3)] animate-fadeIn relative">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">
                    VIP Reservation Confirmed
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    Intake Scheduled
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-semibold">Ref Code</span>
                <span className="text-lg font-bold font-racing text-metallic-silver tracking-wider">
                  #{bookingConfirmation.referenceId}
                </span>
              </div>
            </div>

            {/* Booking Summary Details */}
            <div className="py-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Vehicle Enrolled</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {bookingConfirmation.vehicleYear} {bookingConfirmation.vehicleMake} {bookingConfirmation.vehicleModel}
                  </span>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Service Package</span>
                  <span className="text-sm font-bold text-red-400 mt-0.5 block truncate">
                    {bookingConfirmation.serviceName}
                  </span>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Appointment Date & Time</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {bookingConfirmation.preferredDate} • {bookingConfirmation.preferredTime}
                  </span>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Intake Protocol</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {bookingConfirmation.valetPickup ? 'VIP Enclosed Valet Transport' : 'Direct Garage Bay Intake'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Estimated Base Investment</span>
                  <span className="text-2xl font-black font-racing text-white tracking-wide">
                    {bookingConfirmation.estimatedTotal}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 max-w-[200px] text-right">
                  Includes full multi-point diagnostic telemetry & deionized wash
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-red-500" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/917510504507?text=Hello%20Four%20Eleven%20Garage,%20I%20have%20scheduled%20VIP%20intake%20reference%20${bookingConfirmation.referenceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>

                <button
                  type="button"
                  onClick={() => setBookingConfirmation(null)}
                  className="p-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Schedule another vehicle"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form & Live Estimator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Intake Form (7 cols) */}
            <form
              onSubmit={handleBookingSubmit}
              className="lg:col-span-7 bg-[#0f1118] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 pb-2 border-b border-white/5">
                <Car className="w-4 h-4 text-red-500" />
                <span>Step 1: Vehicle Pedigree</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Manufacturer</label>
                  <select
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    {makes.map((mk) => (
                      <option key={mk} value={mk}>{mk}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Model / Trim</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 GT3 RS, F8 Tributo"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Model Year</label>
                  <input
                    type="text"
                    required
                    placeholder="2024"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Step 2: Primary Service */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 pb-2 mb-4 border-b border-white/5">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>Step 2: Service Discipline Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_DATA.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedServiceId === srv.id
                          ? 'bg-red-950/40 border-red-500 shadow-[0_0_20px_rgba(225,29,72,0.25)]'
                          : 'bg-black/30 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-white">
                          {srv.title.split('&')[0]}
                        </span>
                        <span className="text-xs font-racing font-bold text-red-400">
                          {srv.startingPrice}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {srv.shortDesc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Logistics & Timing */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 pb-2 border-b border-white/5">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>Step 3: Appointment Schedule & Logistics</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Intake Date</label>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Intake Window</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Enclosed Valet Transport Toggle */}
                <div
                  onClick={() => setValetPickup(!valetPickup)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    valetPickup
                      ? 'bg-red-950/40 border-red-500 shadow-md'
                      : 'bg-black/30 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-red-500">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-white tracking-wider block">
                        VIP Enclosed Transport Service (+$350)
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Hydraulic zero-incline trailer collection from your residence or paddock
                      </span>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={valetPickup}
                    onChange={() => {}}
                    className="w-5 h-5 accent-red-600 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Step 4: Contact Credentials */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 pb-2 border-b border-white/5">
                  <User className="w-4 h-4 text-red-500" />
                  <span>Step 4: Contact & Concierge Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Julian Sterling"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Direct Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="client@apex.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Modifications, Concerns or Special Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Existing Stage 1 tune, track day scheduled in two weeks, clear bra edges..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500 placeholder-slate-600"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="booking-submit-btn"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-extrabold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:shadow-[0_0_40px_rgba(225,29,72,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-red-500/60"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Allocating Workshop Bay...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Confirm VIP Service Reservation</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Right Column: Live Telemetry Quote Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0f1118] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                    Live Estimate Breakdown
                  </span>
                  <span className="text-[10px] font-bold text-red-400 bg-red-950/40 border border-red-800/40 px-2 py-0.5 rounded">
                    Fixed-Quote Guarantee
                  </span>
                </div>

                <div className="py-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{selectedService.title}</span>
                    <span className="font-bold text-white font-racing tracking-wide">{selectedService.startingPrice}</span>
                  </div>

                  {valetPickup && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Enclosed Valet Hydraulic Transport</span>
                      <span className="font-bold text-red-400 font-racing tracking-wide">+$350</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">120-Point Digital Diagnostic Scan</span>
                    <span className="text-emerald-400 font-bold text-xs uppercase">Included Free</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Deionized High-Lubricity Foam Wash</span>
                    <span className="text-emerald-400 font-bold text-xs uppercase">Included Free</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Estimated Investment
                    </span>
                    <span className="text-3xl font-black font-racing text-white tracking-wider">
                      ${totalEstimate.toLocaleString()}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    Turnaround: {selectedService.turnaround}
                  </span>
                </div>
              </div>

              {/* Concierge Guarantee Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  The Four Eleven Commitment
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>No unapproved work. Full video inspection before wrenching.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Stored exclusively inside climate-controlled clean bays.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Dyno telemetry and baseline vs post-tune graphs provided.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
