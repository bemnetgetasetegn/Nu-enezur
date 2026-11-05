"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Tag = tag as keyof React.JSX.IntrinsicElements;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const words = containerRef.current?.querySelectorAll(".reveal-word");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        {
          y: "110%",
          opacity: 0,
          rotateZ: 2,
        },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: 1.1,
          stagger: 0.035,
          ease: "power3.out",
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const words = children.split(" ");

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Tag className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden pb-1 mr-[0.25em] last:mr-0 align-bottom"
          >
            <span className="reveal-word inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
