"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TentCanvas from "@/components/ui/TentCanvas";

export default function GlobalTentJourney({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingTentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const floatingTent = floatingTentRef.current;
      if (!container || !floatingTent) return;

      const getAnchorCenter = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const c = container.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return null;
        return {
          x: r.left - c.left + r.width / 2,
          y: r.top - c.top + r.height / 2,
          width: r.width,
          height: r.height,
        };
      };

      const getScrollTarget = (id: string, viewportPercent: number) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY - window.innerHeight * viewportPercent;
      };

      const buildJourney = () => {
        const cRect = container.getBoundingClientRect();
        const baseWidth = 440;
        const baseHeight = 360;

        const a1 = getAnchorCenter("hero-tent-anchor");
        const a2 = getAnchorCenter("dest-header-tent-anchor");
        const a3 = getAnchorCenter("expedition-tent-anchor");
        const a4 = getAnchorCenter("packages-tent-anchor");
        const a5 = getAnchorCenter("why-tent-anchor");

        const p1 = a1 || { x: cRect.width * 0.25, y: 380, width: baseWidth, height: baseHeight };
        const p2 = a2 || { x: cRect.width * 0.65, y: 1200, width: 220, height: 120 };
        const p3 = a3 || { x: cRect.width * 0.22, y: 2100, width: 220, height: 130 };
        const p4 = a4 || { x: cRect.width * 0.65, y: 3050, width: 240, height: 135 };
        const p5 = a5 || { x: cRect.width * 0.72, y: 4150, width: 500, height: 500 };

        // Exact scroll offsets where each anchor reaches its prime viewing position in the viewport
        const s1 = 0;
        const s2 = Math.max(500, getScrollTarget("dest-header-tent-anchor", 0.40));
        const s3 = Math.max(s2 + 600, getScrollTarget("expedition-tent-anchor", 0.52));
        const s4 = Math.max(s3 + 600, getScrollTarget("packages-tent-anchor", 0.40));
        const s5 = Math.max(s4 + 700, getScrollTarget("why-tent-anchor", 0.48));

        const d1 = Math.max(200, s2 - s1); // Hero -> Destinations Header
        const d2 = Math.max(200, s3 - s2); // Destinations Header -> Expedition Basecamp
        const d3 = Math.max(200, s4 - s3); // Expedition Basecamp -> Packages Header (across sphere gap)
        const d4 = Math.max(200, s5 - s4); // Packages Header -> Why Nu-Enezur
        const totalScroll = s5;

        const scale1 = 1.0;
        const scale2 = Math.max(0.48, Math.min(p2.width / baseWidth, 0.62));
        const scale3 = Math.max(0.44, Math.min(p3.width / baseWidth, 0.54));
        const scale4 = Math.max(0.48, Math.min(p4.width / baseWidth, 0.60));
        const scale5 = 1.15;

        return { p1, scale1, p2, scale2, p3, scale3, p4, scale4, p5, scale5, d1, d2, d3, d4, totalScroll };
      };

      const data = buildJourney();

      // Initial placement at Hero left anchor
      gsap.set(floatingTent, {
        x: data.p1.x,
        y: data.p1.y,
        xPercent: -50,
        yPercent: -50,
        scale: data.scale1,
        opacity: 1,
        force3D: true,
      });

      // Master continuous timeline strictly synchronized with physical section scroll targets
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${buildJourney().totalScroll}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // ========================================================
      // STAGE 1: Hero Left Anchor -> Destinations Header Slot
      // ========================================================
      tl.fromTo(
        floatingTent,
        {
          x: () => buildJourney().p1.x,
          y: () => buildJourney().p1.y,
          xPercent: -50,
          yPercent: -50,
          scale: () => buildJourney().scale1,
          opacity: 1,
        },
        {
          x: () => buildJourney().p2.x,
          y: () => buildJourney().p2.y,
          xPercent: -50,
          yPercent: -50,
          scale: () => buildJourney().scale2,
          opacity: 1,
          ease: "power1.inOut",
          duration: () => buildJourney().d1 * 0.8,
        }
      )
      // Resting plateau in Destinations Header Slot
      .to(floatingTent, {
        x: () => buildJourney().p2.x,
        y: () => buildJourney().p2.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale2,
        opacity: 1,
        duration: () => buildJourney().d1 * 0.2,
      })

      // ========================================================
      // STAGE 2: Destinations Header Slot -> Behind Destination Cards -> Expedition Basecamp
      // Matches Position 3: Kaampii Imalaa (Basecamp) slot at bottom-left of Destinations
      // ========================================================
      .to(floatingTent, {
        x: () => buildJourney().p3.x,
        y: () => buildJourney().p3.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale3,
        opacity: 1,
        ease: "power1.inOut",
        duration: () => buildJourney().d2 * 0.78,
      })
      // Resting plateau in Expedition Basecamp slot
      .to(floatingTent, {
        x: () => buildJourney().p3.x,
        y: () => buildJourney().p3.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale3,
        opacity: 1,
        duration: () => buildJourney().d2 * 0.22,
      })

      // ========================================================
      // STAGE 3: Clean transition around Interactive Sphere
      // Leaves the 3D interactive sphere 100% clean and unobstructed:
      // 1. Gently fades out as user leaves Expedition Basecamp
      // 2. Transits while completely hidden across the sphere
      // 3. 'Comes' smoothly into view when reaching Featured Tour Packages
      // ========================================================
      // 3a. Gentle exit from Basecamp as user scrolls toward sphere
      .to(floatingTent, {
        y: () => buildJourney().p3.y + 45,
        opacity: 0,
        scale: () => buildJourney().scale3 * 0.75,
        ease: "power1.in",
        duration: () => buildJourney().d3 * 0.22,
      })
      // 3b. Invisible transit: moves safely to just above Packages header without obstructing the sphere
      .to(floatingTent, {
        x: () => buildJourney().p4.x,
        y: () => buildJourney().p4.y - 70,
        scale: () => buildJourney().scale4 * 0.85,
        opacity: 0,
        ease: "none",
        duration: () => buildJourney().d3 * 0.43,
      })
      // 3c. 'Let the tent come': glides in from above directly into Packages Header slot
      .to(floatingTent, {
        x: () => buildJourney().p4.x,
        y: () => buildJourney().p4.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale4,
        opacity: 1,
        ease: "power2.out",
        duration: () => buildJourney().d3 * 0.35,
      })
      // Resting plateau in Packages Header Slot
      .to(floatingTent, {
        x: () => buildJourney().p4.x,
        y: () => buildJourney().p4.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale4,
        opacity: 1,
        duration: () => buildJourney().d3 * 0.15,
      })

      // ========================================================
      // STAGE 4: Packages Header Slot -> Down Between Cards -> Why Nu-Enezur Mountain Container
      // Matches Position 5: "Second Home" inside the large mountain container
      // ========================================================
      .to(floatingTent, {
        x: () => buildJourney().p5.x,
        y: () => buildJourney().p5.y,
        xPercent: -50,
        yPercent: -50,
        scale: () => buildJourney().scale5,
        opacity: 1,
        ease: "power1.inOut",
        duration: () => buildJourney().d4,
      });

      // Refresh triggers after DOM settling
      ScrollTrigger.refresh();
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-x-clip">
      {/* ========================================================
          THE SINGLE PERSISTENT 3D TENT
          Continuous journey through all 5 keyframe anchors
          ======================================================== */}
      <div
        ref={floatingTentRef}
        className={`absolute top-0 left-0 z-20 pointer-events-none select-none will-change-transform w-[340px] h-[280px] sm:w-[440px] sm:h-[340px] md:w-[480px] md:h-[380px] ${
          mounted ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      >
        <TentCanvas scrollProgress={scrollProgress} lookAtMouse={true} />
      </div>

      {children}
    </div>
  );
}
