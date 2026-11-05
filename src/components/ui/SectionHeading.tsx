import React from "react";
import TextReveal from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "dark";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "left",
  className = "",
  theme = "light",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[alignment];

  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignClass, className)}>
      {subtitle && (
        <div className="flex items-center gap-3 mb-4">
          <span className={cn("h-[1px] w-6", isDark ? "bg-[#c9a96e]" : "bg-stone-500")} />
          <span
            className={cn(
              "text-xs uppercase tracking-[0.25em] font-medium",
              isDark ? "text-[#c9a96e]" : "text-stone-600"
            )}
          >
            {subtitle}
          </span>
          {alignment === "center" && (
            <span className={cn("h-[1px] w-6", isDark ? "bg-[#c9a96e]" : "bg-stone-500")} />
          )}
        </div>
      )}

      <TextReveal
        tag="h2"
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15]",
          isDark ? "text-stone-100" : "text-stone-900"
        )}
      >
        {title}
      </TextReveal>

      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg font-light leading-relaxed max-w-2xl",
            isDark ? "text-stone-400" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
