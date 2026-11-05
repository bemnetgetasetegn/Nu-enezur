"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { interactiveRegions } from "@/data/ethiopia";

export default function EthiopiaInteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState(interactiveRegions[0]);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const activeRegion = interactiveRegions.find((r) => r.id === (hoveredRegion || selectedRegion.id)) || selectedRegion;

  return (
    <section
      id="interactive-map"
      className="py-14 md:py-20 bg-[#143823] text-white px-6 md:px-14 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#C88219] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Expedition Atlas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Explore Ethiopia by Region
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm font-light mt-2 leading-relaxed">
            Hover over or click any destination pin on the golden topographical map of Ethiopia to discover cultural landmarks, optimal seasons, and tailored routes.
          </p>
        </div>

        {/* Map & Card Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Radiant Golden Vector Map of Ethiopia */}
          <div className="lg:col-span-7 bg-[#0D2617] rounded-3xl p-5 sm:p-8 border border-[#C88219]/30 relative shadow-2xl flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-2 text-xs text-stone-300 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A83B] animate-ping" />
                Hover or click any regional landmark:
              </span>
              <span className="text-[11px] font-mono text-[#E5A83B] bg-white/5 px-2.5 py-0.5 rounded-full border border-[#C88219]/30">
                9.1450° N, 40.4897° E
              </span>
            </div>

            {/* Glowing Map Container */}
            <div className="relative w-full aspect-[4/3] max-w-[620px] my-auto flex items-center justify-center">
              {/* Vibrant Golden SVG Render with dynamic brightness & drop shadow */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Ambient gold glow behind map */}
                <div className="absolute inset-4 rounded-full bg-[#C88219]/15 blur-3xl pointer-events-none" />

                <img
                  src="/images/et-02.svg"
                  alt="Accurate Map of Ethiopia"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(200,130,25,0.45)] transition-all duration-500"
                  style={{
                    filter: "invert(65%) sepia(85%) saturate(750%) hue-rotate(5deg) brightness(115%) contrast(105%)",
                  }}
                />
              </div>

              {/* Interactive Region Pins positioned accurately with hover color changes */}
              {interactiveRegions.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                const isHovered = hoveredRegion === region.id;
                const isActive = isSelected || isHovered;

                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-30 focus:outline-none cursor-pointer"
                    aria-label={`Select ${region.name}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <span className="absolute w-9 h-9 rounded-full bg-[#C88219]/60 animate-ping pointer-events-none" />
                      )}

                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-xl ${
                          isActive
                            ? "bg-[#C88219] border-white text-white scale-125 ring-4 ring-[#C88219]/40"
                            : "bg-[#0D2617] border-[#C88219] text-[#E5A83B] hover:scale-115 hover:bg-[#C88219] hover:text-white"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Tooltip on Pin */}
                      <span
                        className={`absolute bottom-full mb-2 whitespace-nowrap text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xl pointer-events-none transition-all duration-200 z-40 ${
                          isActive
                            ? "bg-white text-[#143823] opacity-100 translate-y-0 scale-105"
                            : "bg-black/90 text-white opacity-0 group-hover:opacity-100 -translate-y-1"
                        }`}
                      >
                        {region.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick selector buttons below map with active hover states */}
            <div className="w-full flex flex-wrap gap-1.5 justify-center mt-3 pt-3 border-t border-white/10">
              {interactiveRegions.map((r) => {
                const isActive = selectedRegion.id === r.id || hoveredRegion === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r)}
                    onMouseEnter={() => setHoveredRegion(r.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#C88219] text-white shadow-md scale-105"
                        : "bg-white/10 text-white/80 hover:bg-[#C88219]/40 hover:text-white"
                    }`}
                  >
                    {r.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Region Highlight Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white text-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 transition-all duration-500">
              {/* Region Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={activeRegion.image}
                  alt={activeRegion.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A83B] block mb-1">
                    {activeRegion.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                    {activeRegion.title}
                  </h3>
                </div>
              </div>

              {/* Region Content Details */}
              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-[#C88219] block mb-1">
                    {activeRegion.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {activeRegion.description}
                  </p>
                </div>

                {/* Key Attractions Pills */}
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-2">
                    Signature Highlights
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRegion.keyAttractions.map((attraction, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F8F6F0] text-[#143823] border border-stone-200 flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#C88219]" />
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Season */}
                <div className="p-3.5 rounded-2xl bg-[#F8F6F0] border border-stone-200 flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#C88219] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#143823] block">
                      Recommended Travel Period
                    </span>
                    <span className="text-xs text-stone-600 font-light">
                      {activeRegion.bestTime}
                    </span>
                  </div>
                </div>

                {/* Call to action */}
                <div className="pt-1">
                  <Link
                    href="/packages"
                    className="w-full bg-[#143823] hover:bg-[#C88219] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
                  >
                    <span>View Tours in This Region</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
