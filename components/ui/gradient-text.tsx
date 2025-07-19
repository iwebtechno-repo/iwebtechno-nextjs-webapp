"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";
import { getVariantGradient } from "@/lib/morphy-ui/utils";
import { type ColorVariant } from "@/lib/morphy-ui/types";
import { typography } from "@/lib/morphy-ui/morphy";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: ColorVariant;
}

/**
 * GradientText is the ONLY allowed wrapper for gradient text in headers, per design system exception.
 * It uses the centralized morphy-ui gradient system and supports all ColorVariant gradients.
 * Default: university blue→yellow gradient for brand consistency.
 */
export const GradientText = ({
  children,
  className,
  variant = "gradient",
}: GradientTextProps) => {
  // Use university-focused gradients from Morphy UI
  const getUniversityGradient = () => {
    if (variant === "gradient") {
      // Use single color gradients like active navbar - blue in light mode, yellow in dark mode
      return "bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b]";
    }
    // For other variants, use the morphy-ui system
    const gradient = getVariantGradient(variant);
    return `bg-gradient-to-r ${gradient}`;
  };

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r",
        getUniversityGradient(),
        typography.classes.heading,
        className
      )}
    >
      {children}
    </span>
  );
};
