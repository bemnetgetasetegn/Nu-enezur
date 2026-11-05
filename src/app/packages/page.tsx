import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { tourPackages } from "@/data/ethiopia";

export const metadata = {
  title: "Tour Packages — Nu-Enezur Ethiopia",
  description: "Browse our complete range of certified Ethiopian tour packages, from Addis Ababa city tours to Omo Valley tribal explorations.",
};

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-14 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block mb-2">
            Complete Package Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#143823] tracking-tight">
            Curated Ethiopian Tour Packages
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
            All itineraries include licensed local guides, air-conditioned 4WD Toyota Land Cruisers, village permits, and full logistical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#143823]/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {pkg.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white text-[#143823] text-xs font-extrabold shadow-lg">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 text-xs text-stone-500 font-medium mb-3">
                    <span className="flex items-center gap-1.5 text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-[#C88219]" />
                      {pkg.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-stone-700">
                      <Users className="w-3.5 h-3.5 text-[#C88219]" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#143823] group-hover:text-[#C88219] transition-colors leading-snug mb-3">
                    {pkg.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3 mb-6">
                    {pkg.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                      Itinerary Glimpse:
                    </span>
                    {pkg.itinerary.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C88219] mt-0.5 shrink-0" />
                        <span>
                          <strong className="text-stone-900">{item.day}:</strong> {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href={`/packages/${pkg.id}`}
                  className="w-full bg-[#143823] hover:bg-[#C88219] text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-center shadow-sm"
                >
                  <span>Book Package & View Detailed Plan</span>
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
