"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? "bg-[#143823]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden bg-white/95 p-0.5 shadow-md">
            <Image
              src="/brand/logo.png"
              alt="Nu-Enezur Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight">
              <span className="text-[#C88219]">NU-</span>
              <span className="text-white">ENEZUR</span>
            </div>
            <span className="text-[8px] uppercase tracking-[0.25em] text-white/70 font-semibold -mt-0.5">
              Explore • Connect • Inspire
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-white/85 hover:text-[#C88219] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+251911000000"
            className="hidden xl:flex items-center gap-1.5 text-xs text-white/80 hover:text-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#C88219]" />
            <span className="font-mono text-[11px]">+251 91 123 4567</span>
          </a>

          <Link
            href="/packages/book-addis-ababa-city-tour"
            className="flex items-center gap-2 pl-5 pr-2 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-[#C88219] hover:border-transparent transition-all duration-300 text-xs font-bold text-white tracking-wide shadow-sm group"
          >
            <span>Book Tour</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#143823] flex items-center justify-center group-hover:bg-white group-hover:text-[#C88219] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0D2617]/98 backdrop-blur-2xl p-6 border-b border-white/10 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-white/90 hover:text-[#C88219] py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/packages/book-addis-ababa-city-tour"
            onClick={() => setMobileOpen(false)}
            className="mt-3 text-center py-3.5 rounded-full bg-[#C88219] hover:bg-[#a66910] text-white font-bold text-xs uppercase tracking-wider shadow-md"
          >
            Book Tour Package
          </Link>
        </div>
      )}
    </header>
  );
}
