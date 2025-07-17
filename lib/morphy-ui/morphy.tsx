// ============================================================================
// MORPHY-UI MAIN ENTRY POINT
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

// Animation system removed

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
