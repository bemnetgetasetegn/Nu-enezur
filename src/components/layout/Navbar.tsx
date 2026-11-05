"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, currentLanguageOption, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.packages, href: "/packages" },
    { label: t.nav.destinations, href: "/destinations" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              {t.hero.tagline}
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-white/85 hover:text-[#C88219] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Language Selector */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          {/* Language Selector Dropdown (Replaces Phone Number) */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-xs text-white/90 hover:text-white transition-all duration-200"
              aria-label={t.nav.selectLanguage}
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#C88219] shrink-0" />
              <span className="font-semibold text-xs tracking-wide">{currentLanguageOption.native}</span>
              <ChevronDown
                className={cn(
                  "w-3 h-3 text-white/60 transition-transform duration-200",
                  langDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0D2617]/95 backdrop-blur-xl border border-white/15 p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C88219]">
                  {t.nav.selectLanguage}
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left",
                      language === lang.code
                        ? "bg-[#C88219] text-white font-bold shadow-sm"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <div className="flex flex-col">
                        <span>{lang.native}</span>
                        <span className="text-[10px] opacity-75">{lang.label}</span>
                      </div>
                    </div>
                    {language === lang.code && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/packages/book-addis-ababa-city-tour"
            className="flex items-center gap-2 pl-5 pr-2 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-[#C88219] hover:border-transparent transition-all duration-300 text-xs font-bold text-white tracking-wide shadow-sm group"
          >
            <span>{t.nav.bookTour}</span>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-white/90 hover:text-[#C88219] py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Language Selector */}
          <div className="py-2 border-b border-white/5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C88219] block mb-2">
              {t.nav.langTitle}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "flex flex-col items-center justify-center py-2 px-2 rounded-xl text-xs font-semibold transition-all border",
                    language === lang.code
                      ? "bg-[#C88219] border-[#C88219] text-white shadow-md"
                      : "bg-white/5 border-white/10 text-white/75 hover:bg-white/10"
                  )}
                >
                  <span className="text-base mb-0.5">{lang.flag}</span>
                  <span className="text-[11px] leading-tight">{lang.native}</span>
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/packages/book-addis-ababa-city-tour"
            onClick={() => setMobileOpen(false)}
            className="mt-3 text-center py-3.5 rounded-full bg-[#C88219] hover:bg-[#a66910] text-white font-bold text-xs uppercase tracking-wider shadow-md"
          >
            {t.nav.bookTour}
          </Link>
        </div>
      )}
    </header>
  );
}
