"use client";

import React from "react";
import InfiniteMenu, { InfiniteMenuItem } from "@/components/ui/InfiniteMenu";

const ETHIOPIA_SPHERE_ITEMS: InfiniteMenuItem[] = [
  {
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    title: "Bete Giyorgis Monolith",
    description: "11th-century monolithic cruciform sanctuary carved deep into volcanic rock in Lalibela.",
    link: "/packages/historic-north-lalibela-gondar"
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    title: "Erta Ale & Dallol",
    description: "Alien salt geysers and one of Earth's only persistent active basaltic lava lakes.",
    link: "/packages/danakil-erta-ale-adventure"
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    title: "Simien High Escarpments",
    description: "Dramatic 4,000m Afro-Alpine ridges, home of endemic Walia ibex and Geladas.",
    link: "/destinations#simien-mountains"
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    title: "Omo Valley Ceremonies",
    description: "Living anthropology with the ancestral Hamer, Mursi, and Karo communities.",
    link: "/packages/omo-valley-cultural-expedition"
  },
  {
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=80",
    title: "Addis Ababa Capital",
    description: "The vibrant diplomatic hub of Africa, home to Lucy and panoramic Entoto Hills.",
    link: "/packages/book-addis-ababa-city-tour"
  },
  {
    image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
    title: "Sanetti Plateau & Wolves",
    description: "Afro-alpine sanctuary of the Ethiopian Wolf and primeval Harenna cloud forest.",
    link: "/destinations#bale-mountains"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Highland Sanctuaries",
    description: "Pristine vistas, sacred mountain monasteries, and pure Land of Origins horizons.",
    link: "/destinations"
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    title: "Fasil Ghebbi Castles",
    description: "The Camelot of Africa — 17th-century medieval stone palaces in historical Gondar.",
    link: "/packages/historic-north-lalibela-gondar"
  }
];

export default function VisualShowcaseSection() {
  return (
    <section className="pt-8 pb-12 bg-[#F8F6F0] text-stone-900 overflow-hidden w-full relative">
      {/* Subtle, elegant header */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 mb-4 text-center">
        <span className="text-xs font-bold text-[#C88219] uppercase tracking-wider block">
          Interactive Sphere
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143823] tracking-tight mt-1">
          Explore Ethiopia Beyond Horizons
        </h2>
      </div>

      {/* Seamless edge-to-edge InfiniteMenu 3D interactive sphere */}
      <div className="w-full relative h-[560px] sm:h-[600px] md:h-[640px]">
        <InfiniteMenu
          items={ETHIOPIA_SPHERE_ITEMS}
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
