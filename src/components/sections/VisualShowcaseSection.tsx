"use client";

import React, { useMemo } from "react";
import InfiniteMenu, { InfiniteMenuItem } from "@/components/ui/InfiniteMenu";
import { useLanguage } from "@/context/LanguageContext";

const RAW_SPHERE_ITEMS: { image: string; key: string; link: string }[] = [
  {
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    key: "Bete Giyorgis Monolith",
    link: "/packages/historic-north-lalibela-gondar",
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    key: "Erta Ale & Dallol",
    link: "/packages/danakil-erta-ale-adventure",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    key: "Simien High Escarpments",
    link: "/destinations#simien-mountains",
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    key: "Omo Valley Ceremonies",
    link: "/packages/omo-valley-cultural-expedition",
  },
  {
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=80",
    key: "Addis Ababa Capital",
    link: "/packages/book-addis-ababa-city-tour",
  },
  {
    image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
    key: "Sanetti Plateau & Wolves",
    link: "/destinations#bale-mountains",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    key: "Highland Sanctuaries",
    link: "/destinations",
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    key: "Fasil Ghebbi Castles",
    link: "/packages/historic-north-lalibela-gondar",
  },
];

export default function VisualShowcaseSection() {
  const { t, language } = useLanguage();

  const sphereItems: InfiniteMenuItem[] = useMemo(() => {
    return RAW_SPHERE_ITEMS.map((item) => {
      const trans = t.sphere.items[item.key] || {
        title: item.key,
        description: "",
      };
      return {
        image: item.image,
        title: trans.title,
        description: trans.description,
        link: item.link,
      };
    });
  }, [t, language]);

  return (
    <section className="pt-8 pb-12 bg-[#F8F6F0] text-stone-900 overflow-hidden w-full relative">
      {/* Subtle, elegant header */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 mb-4 text-center relative z-30">
        <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block">
          {t.sphere.badge}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143823] tracking-tight mt-1">
          {t.sphere.title}
        </h2>
      </div>

      {/* Seamless edge-to-edge InfiniteMenu 3D interactive sphere - z-30 layers cleanly in FRONT of the floating tent (z-20) */}
      <div className="w-full relative z-30 h-[560px] sm:h-[600px] md:h-[640px]">
        <InfiniteMenu
          items={sphereItems}
          count={160}
          tileSize={0.63}
          roundness={0.2}
          zoom={1.65}
          pullBack={1}
          stretch={0.6}
          inertia={0.6}
          autoplay={3}
          grayscale={true}
          dim={0.5}
          intro={true}
          showInfo={true}
          theme="light"
          accentColor="#C88219"
          backgroundColor="transparent"
        />
      </div>
    </section>
  );
}
