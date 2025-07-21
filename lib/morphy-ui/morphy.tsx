// ============================================================================
// MORPHY-UI MAIN ENTRY POINT - UNIVERSITY FOCUSED
// ============================================================================

// Core types
export type {
  ColorVariant,
  ComponentEffect,
  GradientDirection,
  IconPosition,
  IconConfig,
  ButtonVariant,
  CardVariant,
  EffectPreset,
  RippleState,
  RippleProps,
  RippleHookReturn,
} from "./types";

// Ripple effects
export { useRipple, Ripple, rippleKeyframes } from "./ripple";

// Icon system
export {
  useIconWeight,
  IconThemeProvider,
  useIconTheme,
} from "./icon-theme-context";

export { IconWrapper, useGlobalIconWeight } from "./icon-utils";

// Social icons
export {
  GoogleIcon,
  AppleIcon,
  InstagramIcon,
  SocialIcons,
} from "./social-icons";

// Toast utilities
export { useMorphyToast, morphyToast } from "./toast-utils";

// Utilities
export {
  gradientPresets,
  getVariantStyles,
  getVariantStylesNoHover,
  getIconColor,
  getRippleColor,
  createGradient,
  getVariantGradient,
  getRippleGradient,
  glassEffect,
} from "./utils";

// ============================================================================
// UNIVERSITY TYPOGRAPHY SYSTEM (CENTRALIZED)
// All typography classes and font families must be referenced via this object.
// Headings: Exo 2 (.font-heading-exo2), Body: Quicksand (.font-body-quicksand)
// ============================================================================

export const typography = {
  // Font families
  fonts: {
    sans: ["Quicksand", "system-ui", "sans-serif"],
    heading: ["Exo 2", "system-ui", "sans-serif"],
    display: ["Exo 2", "system-ui", "sans-serif"],
  },
  // Font sizes with line heights
  sizes: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  // Typography classes
  classes: {
    heading: "font-heading-exo2",
    body: "font-body-quicksand",
    display: "font-heading-exo2",
  },
} as const;

// ============================================================================
// UNIVERSITY COLOR SYSTEM
// ============================================================================

export const colors = {
  // Primary blue palette (professional, trustworthy)
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#0470b6", // Primary brand blue
    600: "#0891b2", // Secondary blue
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },

  // Accent yellow palette (energy, optimism)
  yellow: {
    50: "#fefce8",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24", // Primary brand yellow
    500: "#f59e0b", // Secondary yellow
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Neutral grays for content
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
} as const;

// ============================================================================
// UNIVERSITY GRADIENT SYSTEM
// ============================================================================

export const gradients = {
  // Primary university gradient - blue to blue (professional)
  primary: "from-[#0470b6] to-[#0891b2]",

  // Secondary university gradient - yellow to yellow (accent)
  secondary: "from-[#fbbf24] to-[#f59e0b]",

  // Brand gradient - blue to blue (light mode) / yellow to yellow (dark mode)
  brand: "from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b]",

  // Light mode gradients
  light: {
    blue: "from-[#0470b6] to-[#0891b2]",
    yellow: "from-[#fbbf24] to-[#f59e0b]",
  },

  // Dark mode gradients
  dark: {
    blue: "from-[#0891b2] to-[#0470b6]",
    yellow: "from-[#f59e0b] to-[#fbbf24]",
  },
} as const;

// ============================================================================
// UNIVERSITY ANIMATION SYSTEM
// ============================================================================

export const animations = {
  ripple: {
    keyframes: {
      "0%": { transform: "scale(0)", opacity: "1" },
      "100%": { transform: "scale(4)", opacity: "0" },
    },
    duration: "0.6s",
    timing: "linear",
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const getTypographyClass = (type: keyof typeof typography.classes) => {
  return typography.classes[type];
};

export const getColorClass = (
  color: keyof typeof colors,
  shade: keyof typeof colors.blue
) => {
  return `text-[${colors[color][shade]}]`;
};

export const getGradientClass = (gradient: keyof typeof gradients) => {
  return `bg-gradient-to-r ${gradients[gradient]}`;
};

export const getAnimationClass = (animation: keyof typeof animations) => {
  const anim = animations[animation];
  return `animate-[${animation}_${anim.duration}_${anim.timing}]`;
};
