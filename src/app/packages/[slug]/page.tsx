import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { tourPackages } from "@/data/ethiopia";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    slug: pkg.id,
  }));
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = tourPackages.find((p) => p.id === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-[#F8F6F0] min-h-screen text-stone-900">
      {/* Hero Header */}
      <div className="relative h-[420px] md:h-[500px] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2617] via-black/40 to-black/30" />

        <div className="absolute bottom-8 left-6 md:left-14 right-6 max-w-5xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88219] text-white text-[11px] font-bold uppercase tracking-wider mb-3">
            <span>{tour.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/90">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#C88219]" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#C88219]" />
              {tour.groupSize}
            </span>
            <span className="text-[#C88219] font-extrabold text-sm">
              {tour.price}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content & Booking Form Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Itinerary Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#143823] mb-4">Tour Overview</h2>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {tour.summary}
              </p>
            </div>

            {/* Detailed Day-by-Day Itinerary */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#143823] mb-6">
                Day-by-Day Itinerary
              </h2>

              <div className="space-y-6">
                {tour.itinerary.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-6 border-b border-stone-100 last:border-b-0 last:pb-0">
                    <span className="w-16 sm:w-20 shrink-0 text-xs font-bold text-[#C88219] uppercase tracking-wider pt-0.5">
                      {item.day}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
                <h3 className="text-base font-bold text-[#143823] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  What is Included
                </h3>
                <ul className="space-y-2.5 text-xs text-stone-600">
                  {tour.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
                <h3 className="text-base font-bold text-[#143823] mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  What is Excluded
                </h3>
                <ul className="space-y-2.5 text-xs text-stone-600">
                  {tour.excluded.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Box */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl sticky top-28 space-y-6">
              <div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                  Package Price
                </span>
                <span className="text-3xl font-black text-[#143823] block mt-1">
                  {tour.price}
                </span>
                <span className="text-[11px] text-stone-500 font-light">
                  Includes all local transportation, permits &amp; licensed guide
                </span>
              </div>

              <form action="#booking-success" className="space-y-4 pt-4 border-t border-stone-100">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel Green"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. samuel@domain.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Target Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Number of Guests
                  </label>
                  <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#C88219]">
                    <option>1 Person (Solo Traveler)</option>
                    <option>2 People (Couple / Duo)</option>
                    <option>3 - 5 People (Small Group)</option>
                    <option>6+ People (Private Group)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#143823] hover:bg-[#C88219] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-colors shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C88219]" />
                  <span>Free cancellation up to 14 days prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C88219]" />
                  <span>Call Desk: +251 91 123 4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
