"use client";

import React, { useRef, useState, useEffect } from "react";
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
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Star,
} from "lucide-react";
import { ethiopianDestinations } from "@/data/ethiopia";

export default function HeroAndDestinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const destinationsSectionRef = useRef<HTMLElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const heroTitleAnchorRef = useRef<HTMLDivElement>(null);
  const targetSlotRef = useRef<HTMLDivElement>(null);
  const floatingTextRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  // Booking states
  const [destination, setDestination] = useState("Lalibela & Omo Valley");
  const [date, setDate] = useState("Nov 2026 - Jan 2027");
  const [guests, setGuests] = useState("2 Travelers");

  // Destination carousel pagination states
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIdx) => (prevIdx === 0 ? ethiopianDestinations.length - 3 : prevIdx - 1));
  };

  const next = () => {
    setStartIndex((prevIdx) => (prevIdx >= ethiopianDestinations.length - 3 ? 0 : prevIdx + 1));
  };

  const visibleCards = ethiopianDestinations.slice(startIndex, startIndex + 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const floatingText = floatingTextRef.current;
      const heroAnchor = heroTitleAnchorRef.current;
      const targetSlot = targetSlotRef.current;
      const heroSection = heroSectionRef.current;
      const destSection = destinationsSectionRef.current;

      if (!container || !floatingText || !heroAnchor || !targetSlot || !heroSection || !destSection) {
        return;
      }

      // 1. Mountain subtle parallax zoom on scroll
      if (mountainRef.current) {
        gsap.to(mountainRef.current, {
          scale: 1.08,
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. HERO "NU-ENEZUR" TEXT FLIGHT ANIMATION INTO DESTINATIONS
      const calculatePositions = () => {
        const containerRect = container.getBoundingClientRect();
        const heroRect = heroAnchor.getBoundingClientRect();
        const targetRect = targetSlot.getBoundingClientRect();

        // Natural unscaled dimensions of the floating text
        const naturalWidth = floatingText.offsetWidth || 1200;
        const naturalHeight = floatingText.offsetHeight || 240;

        // Coordinates of Hero anchor center relative to container
        const x1 = heroRect.left - containerRect.left + heroRect.width / 2;
        const y1 = heroRect.top - containerRect.top + heroRect.height / 2;

        // Coordinates of Destinations target slot center relative to container
        const x2 = targetRect.left - containerRect.left + targetRect.width / 2;
        const y2 = targetRect.top - containerRect.top + targetRect.height / 2;

        // Scale ratio to fit into target slot
        const scaleX = targetRect.width / naturalWidth;
        const scaleY = (targetRect.height * 1.25) / naturalHeight;
        const scale = Math.max(0.2, Math.min(scaleX, scaleY));

        return { x1, y1, x2, y2, scale };
      };

      // Set initial state on the floating text
      const initialPos = calculatePositions();

      gsap.set(floatingText, {
        x: initialPos.x1,
        y: initialPos.y1,
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        color: "#ffffff",
        opacity: 0.95,
        force3D: true,
      });

      // Create scroll-synchronized timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          endTrigger: destSection,
          end: "top 120px",
          scrub: 1, // Smooth scrub tied directly to scroll position
          invalidateOnRefresh: true, // Recalculates dynamically on resize
        },
      });

      tl.fromTo(
        floatingText,
        {
          x: () => calculatePositions().x1,
          y: () => calculatePositions().y1,
          scale: 1,
          color: "#ffffff",
          opacity: 0.95,
        },
        {
          x: () => calculatePositions().x2,
          y: () => calculatePositions().y2,
          scale: () => calculatePositions().scale,
          color: "#143823", // Seamlessly darkens to deep green once it reaches cream Destinations
          opacity: 0.92,
          ease: "power2.inOut",
        }
      );

      // Force recalculation after layout settles
      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* ========================================================
          FLOATING HERO -> DESTINATIONS TYPOGRAPHY LAYER
          Positioned absolute inside containerRef at z-30.
          Floats seamlessly over the hero and into the destinations
          header without ever clipping or hiding behind cards.
          ======================================================== */}
      <div
        ref={floatingTextRef}
        className={`absolute top-0 left-0 z-30 pointer-events-none select-none font-black tracking-tighter uppercase font-sans whitespace-nowrap text-[14vw] leading-none will-change-transform ${
          mounted ? "opacity-95" : "opacity-0"
        }`}
        style={{
          transformOrigin: "center center",
          backfaceVisibility: "hidden",
        }}
        aria-hidden="true"
      >
        NU-ENEZUR
      </div>

      {/* ========================================================
          1. HERO SECTION (Layout, navigation & background intact)
          ======================================================== */}
      <section
        ref={heroSectionRef}
        className="relative z-10 min-h-[105vh] flex flex-col justify-between bg-[#143823] text-white pt-28 pb-12 px-6 md:px-14 select-none"
      >
        {/* Background Simien Mountains / Ethiopian Highlands Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            ref={mountainRef}
            className="absolute inset-0 will-change-transform"
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
        </div>

        {/* Hero Title Anchor: Preserves layout spacing, visible before JS mounts */}
        <div
          ref={heroTitleAnchorRef}
          className="relative z-10 w-full text-center mt-6 md:mt-8 pointer-events-none select-none"
        >
          <h1
            className={`text-[14vw] font-black tracking-tighter text-white/95 leading-none select-none uppercase drop-shadow-sm font-sans inline-block transition-opacity duration-300 ${
              mounted ? "opacity-0" : "opacity-95"
            }`}
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

            {/* Right Floating White Booking Card */}
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

      {/* ========================================================
          2. DESTINATIONS SECTION (Target arrival area)
          ======================================================== */}
      <section
        id="destinations"
        ref={destinationsSectionRef}
        className="relative z-10 pt-16 pb-8 md:pt-20 md:pb-10 bg-[#F8F6F0] text-stone-900 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto">
          {/* Subtitle tag */}
          <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
            Our Destinations
          </span>

          {/* Header row with heading on left, TARGET SLOT on right, and See All button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-[1.15] max-w-xl">
              Your Journey to the Heart of
              <br />
              Ethiopia Begins Here
            </h2>

            {/* Target Area where the Hero NU-ENEZUR text lands on scroll */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:self-end">
              <div
                ref={targetSlotRef}
                className="w-full sm:w-[280px] md:w-[380px] lg:w-[460px] h-12 md:h-16 flex items-center justify-center sm:justify-end pointer-events-none select-none"
                aria-hidden="true"
              >
                {/* Invisible sizing anchor that mirrors target dimensions */}
              </div>

              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-stone-300 hover:border-[#143823] text-xs font-bold text-stone-900 hover:bg-[#143823] hover:text-white transition-all duration-300 shrink-0 group shadow-sm self-start sm:self-auto"
              >
                <span>See All Destinations</span>
                <span className="w-7 h-7 rounded-full bg-[#143823] text-white group-hover:bg-[#C88219] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
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
    </div>
  );
}
