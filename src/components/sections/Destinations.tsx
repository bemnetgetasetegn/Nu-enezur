"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Star } from "lucide-react";
import { ethiopianDestinations } from "@/data/ethiopia";

export default function Destinations() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIdx) => (prevIdx === 0 ? ethiopianDestinations.length - 3 : prevIdx - 1));
  };

  const next = () => {
    setStartIndex((prevIdx) => (prevIdx >= ethiopianDestinations.length - 3 ? 0 : prevIdx + 1));
  };

  const visibleCards = ethiopianDestinations.slice(startIndex, startIndex + 3);

  return (
    <section id="destinations" className="pt-16 pb-8 md:pt-20 md:pb-10 bg-[#F8F6F0] text-stone-900 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Subtitle tag */}
        <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
          Our Destinations
        </span>

        {/* Header row with heading on left and See All Destination button on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-[1.15] max-w-xl">
            Your Journey to the Heart of
            <br />
            Ethiopia Begins Here
          </h2>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-stone-300 hover:border-[#143823] text-xs font-bold text-stone-900 hover:bg-[#143823] hover:text-white transition-all duration-300 self-start sm:self-auto group shadow-sm"
          >
            <span>See All Destinations</span>
            <span className="w-7 h-7 rounded-full bg-[#143823] text-white group-hover:bg-[#C88219] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* 3 Large Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visibleCards.map((card) => (
            <Link
              key={card.id}
              href={`/destinations#${card.id}`}
              className="group relative h-[460px] sm:h-[500px] rounded-3xl overflow-hidden bg-stone-900 shadow-md cursor-pointer select-none block"
            >
              {/* Card Image */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
              </div>

              {/* Gradient shadow for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top-Right Arrow Action Circle */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#C88219] group-hover:border-transparent transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Top-Left Category Badge */}
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold text-white tracking-widest">
                {card.region}
              </div>

              {/* Bottom Card Labels */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 text-xs text-white/80 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C88219]" />
                    {card.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#C88219] fill-[#C88219]" />
                    {card.rating}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white group-hover:text-[#C88219] transition-colors leading-snug">
                  {card.name}
                </h3>
                <p className="text-xs text-stone-300 font-light line-clamp-2 leading-relaxed mb-3">
                  {card.description}
                </p>
                <span className="inline-block text-xs font-bold text-[#C88219]">
                  From {card.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Bottom Arrow Pagination Navigation - Compact Margin */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-[#143823] hover:bg-[#143823] hover:text-white transition-colors"
            aria-label="Previous destination"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono font-medium text-stone-500 px-3">
            0{startIndex + 1} - 0{Math.min(startIndex + 3, ethiopianDestinations.length)} / 0{ethiopianDestinations.length}
          </span>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-[#143823] hover:bg-[#143823] hover:text-white transition-colors"
            aria-label="Next destination"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
