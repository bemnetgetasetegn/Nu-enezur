import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, HeartHandshake, Coffee, Award } from "lucide-react";

export default function WhyChooseNuEnezur() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F6F0] text-stone-900 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story and Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143823]/10 text-[#143823] text-xs font-bold uppercase tracking-wider">
              <span>Why Nu-Enezur?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143823] leading-tight">
              Rooted in Ethiopian Hospitality, Driven by Purpose.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              <strong className="text-[#143823] font-semibold">&quot;Nu-Enezur&quot;</strong> in Amharic translates to <em>&quot;Come, Let Us Explore Together.&quot;</em> Born from a collective of veteran local tour directors, cultural anthropologists, and mountaineers, we offer deep-rooted connections rather than superficial tourism.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">Licensed &amp; Insured</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">Ministry of Tourism registered with private Toyota Land Cruisers.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">Indigenous Partnerships</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">Direct fair-trade village compensation across Omo &amp; Afar.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">Bespoke &amp; Small Group</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">Private itineraries tailored to your photography &amp; trekking pace.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C88219] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#143823]">Expert Local Storytellers</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">Guides with decades of historical and cultural fluency.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C88219] hover:text-[#143823] transition-colors"
              >
                <span>Read our complete founding story &amp; ethics charter</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Logo & Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85"
                alt="Ethiopian church and mountain valley"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143823]/80 via-transparent to-black/20" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/95 p-6 rounded-2xl shadow-xl border border-white/40 flex items-center gap-4">
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
                    Certified Sustainable Tour Operator
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-snug">
                    Operating in full harmony with local village councils and nature reserves throughout Ethiopia.
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
