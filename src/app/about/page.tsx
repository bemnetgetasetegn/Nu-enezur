import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Compass, Users, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Nu-Enezur — Explore • Connect • Inspire",
  description: "Learn about Nu-Enezur Ethiopia, our mission, conservation ethics, and expert local team.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F8F6F0] min-h-screen text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
            Our Heritage &amp; Ethos
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#143823] tracking-tight">
            About Nu-Enezur
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            &quot;Nu-Enezur&quot; (ኑ እንዙር) is the Amharic invitation to step out and wander together. We are your bridge to ancient civilizations and vibrant traditions.
          </p>
        </div>

        {/* Narrative Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-stone-700 text-sm sm:text-base font-light leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143823]">
              Born From a Passion for Authentic Storytelling
            </h2>
            <p>
              Founded in Addis Ababa, Nu-Enezur was created by a dedicated alliance of Ethiopian expedition leaders, cultural researchers, and conservationists. Having spent decades guiding travelers across the Great Rift Valley, we witnessed how mass tourism often skims the surface.
            </p>
            <p>
              We wanted to build something deeper: tours where travelers don&apos;t just snap photographs of the Mursi or Hamer, but sit down to share stories over coffee; where exploring Lalibela isn&apos;t rushed, but accompanied by subterranean candle-lit Orthodox chants that linger in memory forever.
            </p>
            <p>
              Every itinerary we conduct is fully certified, safe, and directly beneficial to the local indigenous communities whose ancestral lands we traverse.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/brand/logo.png"
              alt="Nu-Enezur Badge"
              fill
              className="object-contain p-12 bg-[#143823]"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#143823]/10 text-[#143823] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-[#C88219]" />
            </div>
            <h3 className="text-xl font-bold text-[#143823] mb-3">Explore</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              From Dallol’s sulfur acid geysers to the jagged peaks of Ras Dashen, we navigate Ethiopia&apos;s wildest and most breathtaking frontiers with modern 4WD safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#143823]/10 text-[#143823] flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6 text-[#C88219]" />
            </div>
            <h3 className="text-xl font-bold text-[#143823] mb-3">Connect</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We cultivate genuine human connection. Meet master weavers in the Chencha highlands, participate in traditional bunna coffee roasts, and bond with local elders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#143823]/10 text-[#143823] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#C88219]" />
            </div>
            <h3 className="text-xl font-bold text-[#143823] mb-3">Inspire</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We preserve what makes Ethiopia extraordinary. 5% of all package proceeds are reinvested into local village school trusts and community reforestation projects.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#143823] text-white p-8 sm:p-14 rounded-3xl text-center flex flex-col items-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Experience Ethiopia Through Our Eyes
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mb-8 font-light">
            Speak directly with an Ethiopian expedition planner to organize a private departure tailored to your group.
          </p>
          <Link
            href="/contact"
            className="bg-[#C88219] hover:bg-[#a66910] text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Start Planning Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
