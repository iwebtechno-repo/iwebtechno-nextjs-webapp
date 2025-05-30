"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy";
  variant?: "blue" | "purple" | "green" | "orange" | "multi" | "none";
  className?: string;
  children?: React.ReactNode;
}

export function GlassCard({
  intensity = "medium",
  variant = "none",
  className,
  children,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    size: number;
  } | null>(null);
  const hasRippled = useRef(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hasRippled.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    setRipple({ x, y, size });
    hasRippled.current = true;

    // Reset after animation
    setTimeout(() => {
      setRipple(null);
    }, 600); // Match this with the CSS animation duration
  };

  const handleMouseLeave = () => {
    hasRippled.current = false;
  };

  const intensityStyles = {
    light: "glassEffect-light",
    medium: "glassEffect-medium",
    heavy: "glassEffect-heavy",
  };

  const borderColors = {
    blue: "border-blue-500/0 hover:border-blue-500/50",
    purple: "border-purple-500/0 hover:border-purple-500/50",
    green: "border-green-500/0 hover:border-green-500/50",
    orange: "border-orange-500/0 hover:border-orange-500/50",
    multi: "border-blue-500/0 hover:border-blue-500/50",
    none: "border-transparent",
  };

  const getRippleColor = () => {
    switch (variant) {
      case "blue":
        return "bg-blue-500/30 dark:bg-blue-400/30";
      case "purple":
        return "bg-purple-500/30 dark:bg-purple-400/30";
      case "green":
        return "bg-green-500/30 dark:bg-green-400/30";
      case "orange":
        return "bg-orange-500/30 dark:bg-orange-400/30";
      case "multi":
        return "bg-blue-500/30 dark:bg-blue-400/30";
      default:
        return "bg-gray-500/30 dark:bg-gray-400/30";
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-out border-4",
        intensityStyles[intensity],
        borderColors[variant],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Ripple container */}
      <div className="absolute inset-0 pointer-events-none">
        {ripple && (
          <div
            className={cn(
              "absolute rounded-full animate-ripple",
              getRippleColor()
            )}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              transform: "translate(-50%, -50%) scale(0)",
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
}
