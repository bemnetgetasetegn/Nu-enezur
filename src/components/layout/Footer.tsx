import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D2617] text-stone-200 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-md">
                  <Image
                    src="/brand/logo.png"
                    alt="Nu-Enezur Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight">
                    <span className="text-[#C88219]">NU-</span>
                    <span className="text-white">ENEZUR</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold block">
                    Explore • Connect • Inspire
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-sm mb-6">
                Your premier Ethiopian travel specialist. Inspired by the living traditions of the Omo Valley,
                the ancient sanctity of Lalibela, and the untamed frontiers of Danakil and Simien Mountains.
              </p>
            </div>

            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C88219]" />
                <span>Bole Road, Near Medhanialem, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C88219]" />
                <span className="font-mono">+251 91 123 4567 / +251 92 987 6543</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C88219]" />
                <span>info@nu-enezur-tours.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C88219] font-bold mb-5">
              Popular Packages
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li>
                <Link href="/packages/book-addis-ababa-city-tour" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Addis Ababa City Tour</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C88219] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/packages/omo-valley-cultural-expedition" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Omo Valley Tribal Safari</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C88219] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/packages/danakil-erta-ale-adventure" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Danakil & Erta Ale Volcano</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C88219] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/packages/historic-north-lalibela-gondar" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Lalibela & Northern Circuit</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C88219] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#C88219] font-medium pt-2 block hover:underline">
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Ethiopian Destinations */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C88219] font-bold mb-5">
              Destinations
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li><Link href="/destinations#addis-ababa" className="hover:text-white">Addis Ababa</Link></li>
              <li><Link href="/destinations#lalibela" className="hover:text-white">Lalibela</Link></li>
              <li><Link href="/destinations#omo-valley" className="hover:text-white">Omo Valley</Link></li>
              <li><Link href="/destinations#simien-mountains" className="hover:text-white">Simien Mountains</Link></li>
              <li><Link href="/destinations#danakil-depression" className="hover:text-white">Danakil Depression</Link></li>
              <li><Link href="/destinations#bale-mountains" className="hover:text-white">Bale Mountains</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C88219] font-bold mb-5">
              Explore Nu-Enezur
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li><Link href="/about" className="hover:text-white">About Our Story</Link></li>
              <li><Link href="/packages" className="hover:text-white">Curated Packages</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white">Guest Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact & Support</Link></li>
              <li><Link href="/contact" className="hover:text-white">Tailor-Made Tour</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Nu-Enezur Tour & Travel Ethiopia. Licensed Operator.</p>
          <div className="flex items-center gap-2 text-stone-300">
            <Globe className="w-3.5 h-3.5 text-[#C88219]" />
            <span>Official Licensed Operator under Ministry of Tourism Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
