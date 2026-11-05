"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "@/components/animations/TextReveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Button from "@/components/ui/Button";

export default function Introduction() {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!quoteRef.current) return;

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="introduction"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#F7F4EE] text-stone-900 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle decorative section index */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[1px] bg-stone-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium">
            01 / Introduction
          </span>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <TextReveal
                tag="h2"
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-stone-900 mb-8"
              >
                Travel Beyond The Ordinary.
              </TextReveal>

              <div className="space-y-6 text-stone-700 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                <p>
                  We believe true luxury is no longer defined by ostentation, but by
                  seclusion, space, and access to the untouched. We design quiet escapes for
                  discerning travellers seeking transformative connections with the planet’s
                  most sublime landscapes.
                </p>
                <p>
                  From secluded archipelago retreats in the Arctic to private solar camps in
                  the Namib, every voyage is custom-tailored with architectural sensitivity and
                  deep respect for local ecological heritage.
                </p>
              </div>
            </div>

            {/* Editorial quote */}
            <div
              ref={quoteRef}
              className="mt-12 pt-8 border-t border-stone-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <p className="font-serif italic text-xl text-stone-900">
                  “The journey is never about leaving where you are, but discovering who you can become.”
                </p>
                <span className="text-xs tracking-widest uppercase text-stone-500 mt-2 block font-medium">
                  — Founder & Creative Director, Wanderlust
                </span>
              </div>

              <Button href="#why-us" variant="primary" size="md">
                Our Manifesto
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Double Image Composition */}
          <div className="lg:col-span-5 relative flex flex-col gap-8">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85"
                alt="Secluded mountain lodge overlooking pine valley"
                className="w-full h-full"
              />
            </div>

            {/* Small floating caption card */}
            <div className="backdrop-blur-md bg-white/70 border border-stone-200/60 p-6 rounded-2xl shadow-sm max-w-xs -mt-16 ml-auto relative z-20 hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-[#8b7355] font-semibold block mb-1">
                Field Note • Dolomites Sanctuary
              </span>
              <p className="text-xs text-stone-600 font-light leading-snug">
                Private alpine hut at 2,400m altitude. Zero light pollution, heated cedar bath, and private mountain guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
