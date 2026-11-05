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
  Sparkles,
} from "lucide-react";
import { ethiopianDestinations } from "@/data/ethiopia";
import TentCanvas from "@/components/ui/TentCanvas";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroAndDestinations() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const destinationsSectionRef = useRef<HTMLElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);

  // 3D Tent flight references
  const heroTentAnchorRef = useRef<HTMLDivElement>(null);
  const destHeaderSlotRef = useRef<HTMLDivElement>(null);
  const expeditionSlotRef = useRef<HTMLDivElement>(null);
  const floatingTentRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [tentScrollProgress, setTentScrollProgress] = useState(0);

  // Booking states
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  // Keep booking inputs aligned with active language if untouched
  const activeDestination = destination || t.hero.destinationDefault;
  const activeDate = date || t.hero.seasonDefault;
  const activeGuests = guests || t.hero.travelersDefault;

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
      const floatingTent = floatingTentRef.current;
      const heroAnchor = heroTentAnchorRef.current;
      const destHeaderSlot = destHeaderSlotRef.current;
      const expeditionSlot = expeditionSlotRef.current;
      const heroSection = heroSectionRef.current;

      if (!container || !floatingTent || !heroAnchor || !destHeaderSlot || !expeditionSlot || !heroSection) {
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

      // 2. 3D TENT MULTI-STAGE TRAJECTORY:
      // Hero Left Anchor -> Destinations Header Slot (Image 1) -> Behind Cards -> Expedition Basecamp (Bottom-Left)
      const calculatePositions = () => {
        const containerRect = container.getBoundingClientRect();
        const heroRect = heroAnchor.getBoundingClientRect();
        const headerRect = destHeaderSlot.getBoundingClientRect();
        const expeditionRect = expeditionSlot.getBoundingClientRect();

        const naturalWidth = heroRect.width || 480;
        const naturalHeight = heroRect.height || 360;

        // Stage 1: Hero left anchor center
        const x1 = heroRect.left - containerRect.left + heroRect.width / 2;
        const y1 = heroRect.top - containerRect.top + heroRect.height / 2;
        const scale1 = 1;

        // Stage 2: Destinations Header slot center (Image 1 - between heading & button)
        const x2 = headerRect.left - containerRect.left + headerRect.width / 2;
        const y2 = headerRect.top - containerRect.top + headerRect.height / 2;
        const scale2 = Math.max(0.48, Math.min(headerRect.width / naturalWidth, headerRect.height / naturalHeight, 0.65));

        // Stage 3: Destinations Expedition Basecamp slot center (Bottom-Left)
        const x3 = expeditionRect.left - containerRect.left + expeditionRect.width / 2;
        const y3 = expeditionRect.top - containerRect.top + expeditionRect.height / 2;
        const scale3 = Math.max(0.42, Math.min(expeditionRect.width / naturalWidth, expeditionRect.height / naturalHeight, 0.52));

        return { x1, y1, scale1, x2, y2, scale2, x3, y3, scale3 };
      };

      // Set initial position at Hero left anchor
      const initialPos = calculatePositions();

      gsap.set(floatingTent, {
        x: initialPos.x1,
        y: initialPos.y1,
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        force3D: true,
      });

      // Smooth scrub timeline across the full Hero -> Destinations sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          endTrigger: expeditionSlot,
          end: "center 80%",
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setTentScrollProgress(self.progress);
          },
        },
      });

      // Segment A: Hero Left -> Destinations Header Slot (Image 1)
      tl.fromTo(
        floatingTent,
        {
          x: () => calculatePositions().x1,
          y: () => calculatePositions().y1,
          scale: 1,
        },
        {
          x: () => calculatePositions().x2,
          y: () => calculatePositions().y2,
          scale: () => calculatePositions().scale2,
          ease: "power2.inOut",
          duration: 0.45,
        }
      )
      // Segment B: Brief pause in Destinations Header Slot as section arrives
      .to(floatingTent, {
        x: () => calculatePositions().x2,
        y: () => calculatePositions().y2,
        scale: () => calculatePositions().scale2,
        duration: 0.08,
      })
      // Segment C: Glides BEHIND the destination cards down to Expedition Basecamp
      .to(floatingTent, {
        x: () => calculatePositions().x3,
        y: () => calculatePositions().y3,
        scale: () => calculatePositions().scale3,
        ease: "power2.inOut",
        duration: 0.47,
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* ========================================================
          FLOATING 3D TENT LAYER
          Positioned absolute inside containerRef at z-10.
          Starts in Hero (Left side) -> glides into Destinations Header
          slot (Image 1) -> glides BEHIND destination cards (z-20) ->
          settles in Expedition Basecamp slot at the bottom-left.
          ======================================================== */}
      <div
        ref={floatingTentRef}
        className={`absolute top-0 left-0 z-10 pointer-events-none select-none will-change-transform w-[340px] h-[280px] sm:w-[440px] sm:h-[340px] md:w-[480px] md:h-[380px] ${
          mounted ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        style={{
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      >
        <TentCanvas scrollProgress={tentScrollProgress} />
      </div>

      {/* ========================================================
          1. HERO SECTION (Side-by-side: Tent on Left, Text on Right)
          ======================================================== */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[100vh] flex flex-col justify-between bg-[#143823] text-white pt-24 pb-8 px-6 md:px-14 select-none"
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

        {/* Hero Main Content Row: Tent on LEFT, NU-ENEZUR Typography on RIGHT */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto pt-6 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: 3D Tent Spatial Anchor */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div
                ref={heroTentAnchorRef}
                className="w-[340px] h-[280px] sm:w-[420px] sm:h-[340px] md:w-[480px] md:h-[380px] pointer-events-none select-none flex items-center justify-center"
                aria-hidden="true"
              />
            </div>

            {/* Right Column: Expansive Brand Typography with ample breathing room */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C88219] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.badgeAuthentic}</span>
                <span>•</span>
                <span className="text-white">{t.hero.badgeOrigins}</span>
              </div>

              {/* Minimized, spacious NU-ENEZUR title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase font-sans mb-3 drop-shadow-sm">
                {t.hero.brandName}
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/95 leading-snug mb-2.5">
                {t.hero.headline}
              </h2>

              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-white/80 font-light">
                {t.hero.description}
              </p>
            </div>
          </div>

          {/* Floating White Booking Card */}
          <div
            id="booking"
            className="mt-6 bg-white rounded-2xl md:rounded-full px-5 py-3 md:px-6 md:py-3.5 shadow-2xl text-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/40"
          >
            {/* Field 1: Destination */}
            <div className="w-full md:w-auto px-2 py-1 border-b md:border-b-0 md:border-r border-stone-200">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                {t.hero.destinationLabel}
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={activeDestination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="text-xs font-semibold text-stone-800 focus:outline-none bg-transparent w-full md:w-36"
                />
              </div>
            </div>

            {/* Field 2: Date */}
            <div className="w-full md:w-auto px-2 py-1 border-b md:border-b-0 md:border-r border-stone-200">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                {t.hero.seasonLabel}
              </label>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={activeDate}
                  onChange={(e) => setDate(e.target.value)}
                  className="text-xs font-semibold text-stone-800 focus:outline-none bg-transparent w-full md:w-36"
                />
              </div>
            </div>

            {/* Field 3: Guests */}
            <div className="w-full md:w-auto px-2 py-1">
              <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-0.5">
                {t.hero.travelersLabel}
              </label>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
                <input
                  type="text"
                  value={activeGuests}
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
              {t.hero.bookSchedule}
            </Link>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/85 font-normal">
          {/* Left Stats & Badges */}
          <div className="flex items-center gap-4">
            <div>
              <span className="font-bold text-white text-sm block">{t.hero.unescoCount}</span>
              <span className="text-[11px] text-[#C88219] font-semibold block">{t.hero.unescoLabel}</span>
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
            {t.hero.bottomDesc}
          </p>
        </div>
      </section>

      {/* ========================================================
          2. DESTINATIONS SECTION
          Section has z-index auto so floating tent at z-10 paints
          over the section background, while destination cards at z-20
          layer cleanly in front of the tent as it glides behind them.
          ======================================================== */}
      <section
        id="destinations"
        ref={destinationsSectionRef}
        className="relative pt-16 pb-12 bg-[#F8F6F0] text-stone-900 px-6 md:px-14 select-none"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header row: Heading on left, 3D Tent slot in center/right (Image 1), See All button on right */}
          <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <div>
              <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
                {t.destinations.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-[1.15] max-w-xl">
                {t.destinations.titleLine1}
                <br />
                {t.destinations.titleLine2}
              </h2>
            </div>

            {/* ========================================================
                DESTINATIONS HEADER TARGET SLOT FOR 3D TENT
                Matches Image 1 (red box between heading & button)
                ======================================================== */}
            <div
              ref={destHeaderSlotRef}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-[100px] sm:h-[120px] shrink-0 flex items-center justify-center pointer-events-none select-none relative"
              aria-hidden="true"
            />

            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-stone-300 hover:border-[#143823] text-xs font-bold text-stone-900 hover:bg-[#143823] hover:text-white transition-all duration-300 shrink-0 group shadow-sm self-start lg:self-end"
            >
              <span>{t.destinations.seeAll}</span>
              <span className="w-7 h-7 rounded-full bg-[#143823] text-white group-hover:bg-[#C88219] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* 3 Large Rounded Cards - Higher z-index (z-20) with solid opaque backgrounds so the tent smoothly glides BEHIND them without blocking card texts */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleCards.map((card) => {
              const cardTrans = t.destinations.cards[card.id] || {};
              const cardName = cardTrans.name || card.name;
              const cardRegion = cardTrans.region || card.region;
              const cardDuration = cardTrans.duration || card.duration;
              const cardDesc = cardTrans.description || card.description;

              return (
                <Link
                  key={card.id}
                  href={`/destinations#${card.id}`}
                  className="group relative h-[460px] sm:h-[500px] rounded-3xl overflow-hidden bg-stone-900 shadow-xl cursor-pointer select-none block"
                >
                  {/* Card Image */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={cardName}
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
                    {cardRegion}
                  </div>

                  {/* Bottom Card Labels */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-3 text-xs text-white/80 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C88219]" />
                        {cardDuration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#C88219] fill-[#C88219]" />
                        {card.rating}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white group-hover:text-[#C88219] transition-colors leading-snug">
                      {cardName}
                    </h3>
                    <p className="text-xs text-stone-300 font-light line-clamp-2 leading-relaxed mb-3">
                      {cardDesc}
                    </p>
                    <span className="inline-block text-xs font-bold text-[#C88219]">
                      {t.destinations.from} {card.price.replace("From ", "")}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Center Bottom Arrow Pagination Navigation */}
          <div className="relative z-20 flex items-center justify-center gap-3 mt-6">
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

          {/* ========================================================
              BOTTOM-LEFT ARRIVAL SLOT FOR 3D TENT (EXPEDITION BASECAMP)
              Matches the destination arrival in user reference.
              ======================================================== */}
          <div className="relative z-20 mt-8 pt-6 border-t border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* The Target Slot for the 3D Tent on the LEFT */}
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div
                ref={expeditionSlotRef}
                className="w-[200px] sm:w-[230px] md:w-[250px] h-[120px] sm:h-[135px] flex items-center justify-center pointer-events-none select-none relative shrink-0"
                aria-hidden="true"
              >
                {/* Invisible sizing anchor that mirrors target dimensions */}
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#C88219] uppercase tracking-wider block">
                  {t.destinations.expeditionBasecamp}
                </span>
                <p className="text-xs text-stone-600 max-w-xs mt-0.5 font-light leading-relaxed">
                  {t.destinations.expeditionDesc}
                </p>
              </div>
            </div>

            {/* Right side prompt leading into 3D Interactive Sphere */}
            <div className="text-right hidden md:block">
              <span className="text-xs font-bold text-[#143823] block">
                {t.destinations.spherePrompt}
              </span>
              <span className="text-[11px] text-stone-500">
                {t.destinations.sphereSub}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
