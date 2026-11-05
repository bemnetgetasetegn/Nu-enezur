"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Clock, Users, CheckCircle2 } from "lucide-react";
import { tourPackages } from "@/data/ethiopia";
import TentCanvas from "@/components/ui/TentCanvas";
import { useLanguage } from "@/context/LanguageContext";

export default function PackagesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const tentWrapperRef = useRef<HTMLDivElement>(null);
  const [tentScrollProgress, setTentScrollProgress] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !tentWrapperRef.current) return;

      gsap.fromTo(
        tentWrapperRef.current,
        {
          y: -35,
          scale: 0.9,
          opacity: 0.7,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1.2,
            onUpdate: (self) => {
              setTentScrollProgress(self.progress);
            },
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#EFE9DB] text-stone-900 px-6 md:px-14 select-none relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 relative z-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-3">
              {t.packages.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-tight">
              {t.packages.title}
            </h2>
            <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
              {t.packages.subtitle}
            </p>
          </div>

          {/* ========================================================
              3D TENT SLOT IN PACKAGES HEADER
              Matches Image 2 (red box between description & button)
              ======================================================== */}
          <div
            ref={tentWrapperRef}
            className="w-[200px] sm:w-[240px] md:w-[260px] h-[120px] sm:h-[135px] shrink-0 flex items-center justify-center pointer-events-none select-none relative my-2 lg:my-0"
            aria-hidden="true"
          >
            <div className="w-full h-full relative">
              <TentCanvas scrollProgress={tentScrollProgress} />
            </div>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full border border-stone-400/80 hover:border-[#143823] bg-white text-xs font-bold text-[#143823] hover:bg-[#143823] hover:text-white transition-all duration-300 self-start lg:self-end shadow-sm group shrink-0"
          >
            <span>{t.packages.exploreAll}</span>
            <span className="w-7 h-7 rounded-full bg-[#143823] text-white group-hover:bg-[#C88219] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Package Grid - Higher z-index (z-20) with solid white backgrounds so content is always fully readable without interference */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((pkg) => {
            const pkgTrans = t.packages.cards[pkg.id] || {};
            const pkgTitle = pkgTrans.title || pkg.title;
            const pkgCategory = pkgTrans.category || pkg.category;
            const pkgDuration = pkgTrans.duration || pkg.duration;
            const pkgGroupSize = pkgTrans.groupSize || pkg.groupSize;
            const pkgSummary = pkgTrans.summary || pkg.summary;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-300/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkgTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#143823]/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {pkgCategory}
                    </div>
                    <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#143823] text-xs font-extrabold shadow-lg">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 text-xs text-stone-500 font-medium mb-3">
                      <span className="flex items-center gap-1.5 text-stone-700">
                        <Clock className="w-3.5 h-3.5 text-[#C88219]" />
                        {pkgDuration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-stone-700">
                        <Users className="w-3.5 h-3.5 text-[#C88219]" />
                        {pkgGroupSize}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#143823] group-hover:text-[#C88219] transition-colors leading-snug mb-3">
                      {pkgTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3 mb-6">
                      {pkgSummary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-stone-100">
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                        Key Highlights:
                      </span>
                      {pkg.itinerary.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C88219] mt-0.5 shrink-0" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="w-full bg-[#143823] hover:bg-[#C88219] text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-center shadow-sm"
                  >
                    <span>{t.packages.viewItinerary}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
