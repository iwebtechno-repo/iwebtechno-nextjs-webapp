"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { type ColorVariant } from "@/lib/morphy-ui/types";
import { getVariantGradient } from "@/lib/morphy-ui/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: ClassValue;
  /**
   * Color variant for the gradient. Defaults to 'gradient' (brand blue→orange).
   * Accepts any ColorVariant from morphy-ui.
   */
  variant?: ColorVariant;
}

/**
 * GradientText is the ONLY allowed wrapper for gradient text in headers, per design system exception.
 * It uses the centralized morphy-ui gradient system and supports all ColorVariant gradients.
 * Default: brand blue→orange in light mode, orange→blue in dark mode.
 */
export const GradientText = ({
  children,
  className,
  variant = "gradient",
}: GradientTextProps) => {
  // Compose the gradient class using morphy-ui utilities
  const gradient = getVariantGradient(variant);
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r",
        gradient,
        className
      )}
    >
      {children}
    </span>
  );
};
