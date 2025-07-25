"use client";

import React from "react";
import {
  SparkleIcon,
  GraduationCap,
  ChartBar,
  BookOpen,
  UsersThreeIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

// Map icon names to Phosphor icon components
const ICON_MAP: Record<string, React.ElementType> = {
  sparkle: SparkleIcon,
  graduation: GraduationCap,
  chart: ChartBar,
  book: BookOpen,
  users: UsersThreeIcon,
  dots: DotsThreeIcon,
};

export type FeatureIconName = keyof typeof ICON_MAP;

/**
 * FeatureIcon - Client-only icon renderer for product pages.
 * Usage:
 *   <FeatureIcon name="sparkle" size={32} weight="duotone" className="text-primary" />
 */
export const FeatureIcon = ({
  name,
  size = 32,
  weight = "regular",
  className = "",
  ...props
}: {
  name: FeatureIconName;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  [key: string]: unknown;
}) => {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} weight={weight} className={className} {...props} />;
};
