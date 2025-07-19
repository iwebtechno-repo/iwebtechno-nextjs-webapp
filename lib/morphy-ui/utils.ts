import { type ColorVariant, type ComponentEffect } from "./types";

// ============================================================================
// UNIVERSITY-FOCUSED GRADIENT PRESETS
// ============================================================================

export const gradientPresets = {
  // Primary university gradient - blue to blue (professional)
  primary: "from-[#0470b6] to-[#0891b2]",

  // Secondary university gradient - yellow to yellow (accent)
  secondary: "from-[#fbbf24] to-[#f59e0b]",

  // Success - blue family (trustworthy)
  success: "from-[#0470b6] to-[#0891b2]",

  // Warning - yellow family (attention)
  warning: "from-[#fbbf24] to-[#f59e0b]",

  // Multi - blue to blue (light mode) / yellow to yellow (dark mode) - like active navbar
  multi: "from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b]",

  // Base colors - simplified university palette
  blue: "from-[#0470b6] to-[#0891b2]",
  yellow: "from-[#fbbf24] to-[#f59e0b]",

  // Gradient variants - university focused
  "blue-gradient": "from-[#0470b6] to-[#0891b2]",
  "yellow-gradient": "from-[#fbbf24] to-[#f59e0b]",
} as const;

// ============================================================================
// VARIANT STYLES - UNIVERSITY FOCUSED
// ============================================================================

export const getVariantStyles = (
  variant: ColorVariant,
  effect: ComponentEffect = "fill"
): string => {
  switch (variant) {
    case "gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.primary} hover:from-[#0470b6]/90 hover:to-[#0891b2]/90 text-white shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "blue":
      if (effect === "fill") {
        return "bg-gradient-to-r from-[#0891b2] to-[#0470b6] text-white shadow-lg transition-shadow,transition-colors duration-200 dark:from-[#fbbf24] dark:to-[#f59e0b] dark:text-black";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "blue-gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets["blue-gradient"]} hover:from-university-blue-400/90 hover:to-university-blue-600/90 text-white shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-blue-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "yellow":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.yellow} hover:from-university-yellow-300/90 hover:to-university-yellow-500/90 text-black shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-yellow-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "yellow-gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets["yellow-gradient"]} hover:from-university-yellow-300/90 hover:to-university-yellow-500/90 text-black shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-yellow-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "purple":
    case "purple-gradient":
      // Fallback to blue for university consistency
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.blue} hover:from-university-blue-400/90 hover:to-university-blue-600/90 text-white shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-blue-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "green":
    case "green-gradient":
      // Fallback to blue for university consistency
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.blue} hover:from-university-blue-400/90 hover:to-university-blue-600/90 text-white shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-blue-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "orange":
    case "orange-gradient":
      // Fallback to yellow for university consistency
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.yellow} hover:from-university-yellow-300/90 hover:to-university-yellow-500/90 text-black shadow-lg transition-shadow,transition-colors duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-yellow-500/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "multi":
      if (effect === "fill") {
        return "bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] text-white dark:text-black shadow-lg transition-shadow,transition-colors duration-200";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }

    case "link":
      return "text-[#374151] dark:text-[#e5e7eb] hover:text-[#0470b6] dark:hover:text-[#fbbf24] underline-offset-4 hover:underline transition-colors duration-200 bg-transparent border-none shadow-none";

    case "outline":
      return "text-[#0470b6] dark:text-[#fbbf24] bg-[#eff6ff] dark:bg-[#fefce8]/10 border border-[#bfdbfe] dark:border-[#fde68a]/30 hover:bg-[#dbeafe] dark:hover:bg-[#fef3c7]/20 shadow-sm transition-colors duration-200";

    case "none":
    default:
      if (effect === "fill") {
        return "bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[var(--fadeGrey)] backdrop-blur-[10px] hover:shadow-[0px_15px_40px_var(--activeShadowColor)] transition-shadow,transition-colors duration-200";
      }
  }
};

// ============================================================================
// VARIANT STYLES WITHOUT HOVER (FOR NON-RIPPLE CARDS)
// ============================================================================

export const getVariantStylesNoHover = (
  variant: ColorVariant,
  effect: ComponentEffect = "fill"
): string => {
  switch (variant) {
    case "gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.primary} text-white shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-blue-500/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "blue":
      if (effect === "fill") {
        return "bg-gradient-to-r from-university-blue-600 to-university-blue-500 text-white shadow-lg transition-all duration-200 dark:from-university-yellow-400 dark:to-university-yellow-500 dark:text-black";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-university-blue-500/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "blue-gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets["blue-gradient"]} text-white shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "yellow":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.yellow} text-black shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#fbbf24]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "yellow-gradient":
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets["yellow-gradient"]} text-black shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#fbbf24]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "purple":
    case "purple-gradient":
    case "green":
    case "green-gradient":
      // Fallback to blue for university consistency
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.blue} text-white shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "orange":
    case "orange-gradient":
      // Fallback to yellow for university consistency
      if (effect === "fill") {
        return `bg-gradient-to-r ${gradientPresets.yellow} text-black shadow-lg transition-all duration-200`;
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#fbbf24]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "multi":
      if (effect === "fill") {
        return "bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] text-white dark:text-black shadow-lg transition-all duration-200";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[#0470b6]/20 backdrop-blur-[10px] transition-all duration-200";
      }

    case "link":
      return "text-university-gray-700 dark:text-university-gray-200 underline-offset-4 transition-colors duration-200 bg-transparent border-none shadow-none";

    case "outline":
      return "text-university-blue-500 dark:text-university-yellow-400 bg-university-blue-50 dark:bg-university-yellow-50/10 border border-university-blue-200 dark:border-university-yellow-200/30 shadow-sm transition-all duration-200";

    case "none":
    default:
      if (effect === "fill") {
        return "bg-background border border-border transition-colors duration-200";
      } else {
        return "bg-[var(--activeGlassColor)] shadow-[0px_10px_30px_var(--activeShadowColor)] border border-[var(--fadeGrey)] backdrop-blur-[10px] transition-all duration-200";
      }
  }
};

// ============================================================================
// ICON COLORS - UNIVERSITY FOCUSED
// ============================================================================

export const getIconColor = (
  variant: ColorVariant,
  effect: ComponentEffect = "fill"
): string => {
  switch (variant) {
    case "gradient":
    case "blue":
    case "blue-gradient":
    case "purple":
    case "purple-gradient":
    case "green":
    case "green-gradient":
    case "multi":
      if (effect === "fill") {
        return "text-white";
      } else {
        return "text-university-blue-500";
      }

    case "yellow":
    case "yellow-gradient":
    case "orange":
    case "orange-gradient":
      if (effect === "fill") {
        return "text-black";
      } else {
        return "text-university-yellow-500";
      }

    case "link":
      return "text-[#374151] dark:text-[#e5e7eb]";

    case "outline":
      return "text-[#0470b6] dark:text-[#fbbf24]";

    case "none":
    default:
      if (effect === "fill") {
        return "text-foreground";
      } else {
        return "text-foreground";
      }
  }
};

// ============================================================================
// RIPPLE COLORS - UNIVERSITY FOCUSED
// ============================================================================

export const getRippleColor = (
  variant: ColorVariant,
  effect: ComponentEffect = "fill"
): string => {
  switch (variant) {
    case "gradient":
    case "blue":
    case "blue-gradient":
    case "purple":
    case "purple-gradient":
    case "green":
    case "green-gradient":
    case "multi":
      if (effect === "fill") {
        return "bg-white/20";
      } else {
        return "bg-university-blue-500/20";
      }

    case "yellow":
    case "yellow-gradient":
    case "orange":
    case "orange-gradient":
      if (effect === "fill") {
        return "bg-black/10";
      } else {
        return "bg-university-yellow-500/20";
      }

    case "link":
      return "bg-[#0470b6]/20 dark:bg-[#fbbf24]/20";

    case "outline":
      return "bg-[#0470b6]/20 dark:bg-[#fbbf24]/20";

    case "none":
    default:
      if (effect === "fill") {
        return "bg-foreground/10";
      } else {
        return "bg-foreground/10";
      }
  }
};

// ============================================================================
// GRADIENT UTILITIES
// ============================================================================

export const createGradient = (
  direction:
    | "to-r"
    | "to-l"
    | "to-t"
    | "to-b"
    | "to-tr"
    | "to-tl"
    | "to-br"
    | "to-bl" = "to-r",
  colors: string[]
): string => {
  return `bg-gradient-${direction} ${colors.join(" ")}`;
};

export const getVariantGradient = (variant: ColorVariant): string => {
  switch (variant) {
    case "gradient":
      return gradientPresets.primary;
    case "blue":
      return gradientPresets.blue;
    case "blue-gradient":
      return gradientPresets["blue-gradient"];
    case "purple":
      return gradientPresets.blue; // Fallback to blue for university consistency
    case "purple-gradient":
      return gradientPresets.blue; // Fallback to blue for university consistency
    case "green":
      return gradientPresets.blue; // Fallback to blue for university consistency
    case "green-gradient":
      return gradientPresets.blue; // Fallback to blue for university consistency
    case "orange":
      return gradientPresets.yellow; // Fallback to yellow for university consistency
    case "orange-gradient":
      return gradientPresets["yellow-gradient"]; // Fallback to yellow for university consistency
    case "multi":
      return gradientPresets.multi;
    default:
      return gradientPresets.primary;
  }
};

export const getRippleGradient = (variant: ColorVariant): string => {
  switch (variant) {
    case "gradient":
      return "from-white/20 to-white/10";
    case "blue":
    case "blue-gradient":
      return "from-blue-400/30 to-blue-400/15";
    case "purple":
    case "purple-gradient":
      return "from-purple-400/30 to-purple-400/15";
    case "green":
    case "green-gradient":
      return "from-green-400/30 to-green-400/15";
    case "orange":
    case "orange-gradient":
      return "from-orange-400/30 to-orange-400/15";
    case "multi":
      return "from-white/20 to-white/10";
    default:
      return "from-foreground/10 to-foreground/5";
  }
};

// ============================================================================
// GLASS EFFECT
// ============================================================================

export const glassEffect = {
  background: "bg-[var(--activeGlassColor)]",
  shadow: "shadow-[0px_10px_30px_var(--activeShadowColor)]",
  border: "border border-[var(--fadeGrey)]",
  blur: "backdrop-blur-[10px]",
  hover: "hover:shadow-[0px_15px_40px_var(--activeShadowColor)]",
  transition: "transition-all duration-200",
} as const;
