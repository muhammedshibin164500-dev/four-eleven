import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquarePlus, X, Check, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newVehicle, setNewVehicle] = useState('');
  const [newService, setNewService] = useState('Bespoke Performance & Dyno Remapping');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      role: 'Verified Automobile Owner',
      vehicle: newVehicle || 'Exotic Sports Car',
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      serviceUsed: newService
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewAuthor('');
      setNewVehicle('');
      setNewComment('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-24 bg-[#08090b] relative overflow-hidden border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Verified Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Reputation Built on <span className="text-metallic-silver">Precision</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Read authentic feedback from collectors, racing drivers, and daily supercar drivers 
              who trust Four Eleven Car Garage with their highest-caliber machinery.
            </p>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0f1118] border border-white/10 flex items-center gap-5 self-start md:self-auto">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-black font-racing text-white leading-none">4.98</span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                    480+ Verified Reviews
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              id="reviews-write-modal-btn"
              onClick={() => setShowReviewModal(true)}
              className="px-3.5 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-red-500" />
              <span>Leave Review</span>
            </button>
          </div>
        </div>

        {/* Quality Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { metric: "100%", label: "Craftsmanship & Finish" },
            { metric: "100%", label: "Dyno Telemetry Transparency" },
            { metric: "99.4%", label: "On-Time Delivery Guarantee" },
            { metric: "100%", label: "Zero-Scratch Guarantee" }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-semibold">{item.label}</span>
              <span className="text-sm font-bold text-red-500 font-racing tracking-wider">{item.metric}</span>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-[#0e1016] border border-white/10 hover:border-red-600/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                    <span className="text-[11px] text-slate-500">{rev.date}</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {/* Service Tag */}
                <div className="mt-4 inline-block px-2.5 py-1 rounded bg-white/5 text-[11px] font-semibold text-slate-400 border border-white/5">
                  Service: <span className="text-slate-200">{rev.serviceUsed}</span>
                </div>
              </div>

              {/* Author & Vehicle Info */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{rev.role}</span>
                    <span>•</span>
                    <span className="text-red-400 font-medium">{rev.vehicle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0f1118] border border-white/20 rounded-xl overflow-hidden shadow-2xl p-6">
            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-1">
              Submit Your Client Review
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Share your experience with Four Eleven Car Garage.
            </p>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase">Thank You For Your Review</h4>
                <p className="text-xs text-slate-400">Your feedback has been verified and published.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Overall Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Sterling Hayes"
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Vehicle Make & Model</label>
                  <input
                    type="text"
                    value={newVehicle}
                    onChange={(e) => setNewVehicle(e.target.value)}
                    placeholder="e.g. 2023 Porsche 911 GT3 RS"
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Service Performed</label>
                  <select
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Bespoke Performance & Dyno Remapping">Bespoke Performance & Dyno Remapping</option>
                    <option value="9H Ceramic Coating & Concourse Detailing">9H Ceramic Coating & Concourse Detailing</option>
                    <option value="Factory Scheduled Exotic Maintenance">Factory Scheduled Exotic Maintenance</option>
                    <option value="Self-Healing XPEL Stealth PPF">Self-Healing XPEL Stealth PPF</option>
                    <option value="Titanium Exhaust & Suspension Geometry">Titanium Exhaust & Suspension Geometry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Feedback / Review</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Describe the craftsmanship, turnaround, and service quality..."
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs font-bold uppercase text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs tracking-wider shadow-lg shadow-red-900/40"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
