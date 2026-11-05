"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  magnetic?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  magnetic = false,
  ...props
}: ButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium tracking-wider uppercase text-xs transition-all duration-300 rounded-full group overflow-hidden cursor-pointer select-none active:scale-95";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-[13px] tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-stone-900 text-stone-100 border border-stone-800 hover:bg-stone-800 hover:border-stone-700 shadow-sm",
    secondary:
      "bg-stone-100 text-stone-950 border border-stone-200 hover:bg-white hover:border-stone-300 shadow-sm",
    outline:
      "bg-transparent text-stone-100 border border-stone-400/30 hover:border-stone-100 hover:bg-stone-100/10 backdrop-blur-sm",
    ghost:
      "bg-transparent text-stone-800 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/50",
    gold: "bg-[#c9a96e] text-stone-950 font-semibold border border-[#d4b984] hover:bg-[#b89659] shadow-md",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 z-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  const style = magnetic
    ? {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
      }
    : undefined;

  if (href) {
    return (
      <Link
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
