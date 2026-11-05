"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/ethiopia";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const active = testimonials[currentIndex];
  const activeTrans = t.testimonials.quotes[active.id] || {};
  const displayQuote = activeTrans.quote || active.quote;
  const displayTour = activeTrans.tourTaken || active.tourTaken;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#EFE9DB] text-stone-900 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
            {t.testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823]">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-stone-200 relative">
          <Quote className="w-12 h-12 text-[#C88219] opacity-30 mb-6" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl text-stone-900 font-normal leading-relaxed mb-10">
            &ldquo;{displayQuote}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-stone-100 gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C88219]">
                <Image
                  src={active.avatar}
                  alt={active.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">
                  {active.author}
                </h4>
                <p className="text-xs text-stone-500">
                  {active.location} • <span className="text-[#C88219] font-medium">{displayTour}</span>
                </p>
                <div className="flex items-center gap-1 mt-1 text-[#C88219]">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-[#143823] hover:text-white hover:border-[#143823] transition-colors"
                aria-label="Previous story"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone-500 px-2 font-medium">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-[#143823] hover:text-white hover:border-[#143823] transition-colors"
                aria-label="Next story"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
