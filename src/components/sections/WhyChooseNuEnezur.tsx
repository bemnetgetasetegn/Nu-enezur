"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Coffee, Award } from "lucide-react";
import TentCanvas from "@/components/ui/TentCanvas";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseNuEnezur() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F6F0] text-stone-900 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story and Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143823]/10 text-[#143823] text-xs font-bold uppercase tracking-wider">
              <span>{t.why.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-tight">
              {t.why.title}
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              <strong className="text-[#143823] font-semibold">{t.why.nameExplain}</strong>
              {t.why.nameQuote}
              <em>{t.why.nameMeaning}</em>
              {t.why.descriptionRest}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">{t.why.feature1Title}</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">{t.why.feature1Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">{t.why.feature2Title}</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">{t.why.feature2Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">{t.why.feature3Title}</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">{t.why.feature3Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">{t.why.feature4Title}</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">{t.why.feature4Desc}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C88219] hover:text-[#143823] transition-colors"
              >
                <span>{t.why.charterLink}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Camping Tent with Mountain Landscape Background & Cursor-Tracking Focus */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center group">
              {/* Majestic Ethiopian Mountain Landscape Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="/images/simien.jpg"
                  alt="Ethiopian Simien Mountains"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  priority
                />
                {/* Elegant overlay to complement the brand and make the tent & badge pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D12]/95 via-[#143823]/55 to-[#0A1D12]/40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#143823]/30 to-[#0A1D12]/80" />
              </div>

              {/* 3D Camping Tent - Actively watching and focusing on the cursor */}
              <div className="relative z-10 w-full h-full pb-20 pt-6 px-4 flex items-center justify-center">
                <TentCanvas className="w-full h-full" lookAtMouse={true} />
              </div>

              {/* Floating Sustainable Operator Badge - PRESERVED COMPLETELY */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/95 p-5 sm:p-6 rounded-2xl shadow-xl border border-white/40 flex items-center gap-4 z-20">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-100 p-1 shrink-0 border border-stone-200">
                  <Image
                    src="/brand/logo.png"
                    alt="Nu-Enezur Official Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C88219] block">
                    {t.why.certTitle}
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-snug">
                    {t.why.certDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
