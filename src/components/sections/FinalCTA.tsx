"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Mail, Phone, Calendar, Users, MapPin } from "lucide-react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Addis Ababa + Omo Valley",
    dates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact-cta" className="relative min-h-[85vh] flex items-center justify-center py-24 md:py-32 bg-[#143823] text-white px-6 md:px-14 overflow-hidden">
      {/* Background with Darkened Simien/Landscape Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2560&q=90"
          alt="African Lake at sunset"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2617] via-[#143823]/80 to-[#143823]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C88219] font-bold mb-4 block">
          Your Ethiopian Odyssey
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Ready to Explore Ethiopia with Nu-Enezur?
        </h2>

        <p className="max-w-2xl text-stone-200 text-sm sm:text-base font-light leading-relaxed mb-12">
          Whether you want a private day excursion through Addis Ababa or a bespoke 14-day traverse across the Omo Valley, Danakil Depression, and Lalibela, our local expedition directors are ready to craft your journey.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-[#C88219]/50 p-8 rounded-3xl max-w-md w-full backdrop-blur-xl text-center">
            <div className="w-12 h-12 rounded-full bg-[#C88219]/20 text-[#C88219] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Amesegenalehu! (Thank You)
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              We have received your inquiry. A Nu-Enezur expedition designer will reach out with a customized itinerary within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl text-stone-800 flex flex-col gap-4 text-left border border-white/40"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. eleanor@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Preferred Route / Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                  Expected Travel Dates
                </label>
                <input
                  type="text"
                  placeholder="e.g. October 2026"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5">
                Special Requests or Interests
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your interests: Photography, Hiking, Coffee, Cultural Ceremonies..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#143823] hover:bg-[#C88219] text-white font-bold uppercase tracking-wider text-xs py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg cursor-pointer mt-2"
            >
              <span>Submit Tour Request</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 pt-3 border-t border-stone-200 gap-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C88219]" />
                Direct Hotline: +251 91 123 4567
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C88219]" />
                info@nu-enezur-tours.com
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
