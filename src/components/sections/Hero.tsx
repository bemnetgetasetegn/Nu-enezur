"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MapPin,
  Calendar as CalendarIcon,
  Users,
  Compass,
  Camera,
  Coffee,
  Mountain,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bigWatermarkRef = useRef<HTMLHeadingElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);

  const [destination, setDestination] = useState("Lalibela & Omo Valley");
  const [date, setDate] = useState("Nov 2026 - Jan 2027");
  const [guests, setGuests] = useState("2 Travelers");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Watermark text parallax
      if (bigWatermarkRef.current) {
        gsap.to(bigWatermarkRef.current, {
          yPercent: -20,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Mountain scale
      if (mountainRef.current) {
        gsap.to(mountainRef.current, {
          scale: 1.08,
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] flex flex-col justify-between overflow-hidden bg-[#143823] text-white pt-28 pb-12 px-6 md:px-14 select-none"
    >
      {/* Background Simien Mountains / Ethiopian Highlands Layer */}
      <div
        ref={mountainRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=90"
          alt="Majestic Ethiopian Highlands Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Ethiopian Green & Earthy Vignette Overlays matching the logo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#143823] via-[#143823]/40 to-[#0D2617]/50" />
      </div>

      {/* Massive Bold Center Typography "NU-ENEZUR" */}
      <div className="relative z-10 w-full text-center mt-6 md:mt-8 pointer-events-none">
        <h1
          ref={bigWatermarkRef}
          className="text-[14vw] font-black tracking-tighter text-white/95 leading-none select-none uppercase drop-shadow-sm font-sans"
        >
          NU-ENEZUR
        </h1>
      </div>

      {/* Hero Bottom Mid Section: Heading on Left + Booking / Exploration Box on Right */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto pt-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C88219] text-[11px] font-bold uppercase tracking-wider mb-3">
              <span>Origin of Humanity</span>
              <span>•</span>
              <span className="text-white">Land of Origins</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Uncover Ethiopia&apos;s
              <br />
              Sacred &amp; Untamed Wonders.
            </h2>
          </div>

          {/* Right Floating White Booking Card - Properly Padded & Aligned */}
          <div
            id="booking"
            className="lg:col-span-7 bg-white rounded-2xl md:rounded-full px-5 py-3 md:px-6 md:py-3.5 shadow-2xl text-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/40"
          >
            {/* Field 1: Destination */}
            <div className="w-full md:w-auto px-2 py-1 border-b md:border-b-0 md:border-r border-stone-200">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                Destination
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="text-xs font-semibold text-stone-800 focus:outline-none bg-transparent w-full md:w-36"
                />
              </div>
            </div>

            {/* Field 2: Date */}
            <div className="w-full md:w-auto px-2 py-1 border-b md:border-b-0 md:border-r border-stone-200">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                Season / Month
              </label>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="text-xs font-semibold text-stone-800 focus:outline-none bg-transparent w-full md:w-36"
                />
              </div>
            </div>

            {/* Field 3: Guests */}
            <div className="w-full md:w-auto px-2 py-1">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                Travelers
              </label>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="text-xs font-semibold text-stone-800 focus:outline-none bg-transparent w-full md:w-24"
                />
              </div>
            </div>

            {/* Book schedule Button */}
            <Link
              href="/packages/book-addis-ababa-city-tour"
              className="w-full md:w-auto bg-[#143823] hover:bg-[#C88219] text-white text-xs font-bold px-6 py-3 rounded-full transition-all duration-300 shrink-0 shadow-md text-center whitespace-nowrap"
            >
              Book schedule
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/85 font-normal">
        {/* Left Stats & Badges */}
        <div className="flex items-center gap-4">
          <div>
            <span className="font-bold text-white text-sm block">12 UNESCO</span>
            <span className="text-[11px] text-[#C88219] font-semibold block">World Heritage Sites</span>
          </div>

          <div className="flex items-center gap-2 ml-2">
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center border border-white/20" title="Coffee Ceremony">
              <Coffee className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center border border-white/20" title="Mountain Expeditions">
              <Mountain className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center border border-white/20" title="Cultural Photography">
              <Camera className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center border border-white/20" title="Authentic Expeditions">
              <Compass className="w-3.5 h-3.5 text-white" />
            </span>
          </div>
        </div>

        {/* Right Description */}
        <p className="max-w-xl text-[12px] leading-relaxed text-white/80 font-light">
          Discover Ethiopia&apos;s finest sanctuaries — from ancient monolithic rock-hewn churches in Lalibela and living ancestral cultures of the Omo Valley to the extraterrestrial salt plains of the Danakil Depression.
        </p>
      </div>
    </section>
  );
}
