import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { ethiopianDestinations } from "@/data/ethiopia";

export const metadata = {
  title: "Destinations in Ethiopia — Nu-Enezur",
  description: "Explore the ancient rock-hewn wonders of Lalibela, tribal heritage in Omo Valley, and natural frontiers of Danakil & Simien.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-14 bg-[#F8F6F0] min-h-screen text-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
            The Ethiopian Sanctuary Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#143823] tracking-tight">
            Historic, Cultural &amp; Wild Destinations
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            Every region of Ethiopia is a distinct universe. Discover subterranean rock monoliths, nomadic geothermal deserts, and ancestral tribal lands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ethiopianDestinations.map((dest) => (
            <div
              key={dest.id}
              id={dest.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                    {dest.region}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white text-[#143823] text-xs font-extrabold shadow-md">
                    {dest.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-stone-500 font-medium mb-2">
                    <span className="flex items-center gap-1 text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-[#C88219]" />
                      {dest.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-stone-700">
                      <Star className="w-3.5 h-3.5 text-[#C88219] fill-[#C88219]" />
                      {dest.rating}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#143823] group-hover:text-[#C88219] transition-colors leading-snug mb-2">
                    {dest.name}
                  </h2>

                  <p className="text-xs text-[#C88219] font-semibold mb-3">
                    {dest.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Sparkles className="w-3 h-3 text-[#C88219] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/packages"
                  className="w-full bg-[#143823] hover:bg-[#C88219] text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-center shadow-sm"
                >
                  <span>Book Tour to {dest.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
