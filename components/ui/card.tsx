"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { type ColorVariant, type ComponentEffect } from "@/lib/morphy-ui/types";
import { type IconWeight } from "@phosphor-icons/react";
import {
  getVariantStyles,
  getVariantStylesNoHover,
  getRippleColor,
} from "@/lib/morphy-ui/utils";
import { useRipple } from "@/lib/morphy-ui/ripple";

// ============================================================================
// CARD COMPONENT
// ============================================================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ColorVariant;
  effect?: ComponentEffect;
  showRipple?: boolean;
  icon?: {
    icon: React.ComponentType<{ className?: string; weight?: IconWeight }>;
    title?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    gradient?: boolean;
  };
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "none",
      effect = "glass",
      showRipple = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const { addRipple, resetRipple, ripple } = useRipple();

    // Get centralized styles - use no-hover version when ripple is disabled
    const variantStyles = showRipple
      ? getVariantStyles(variant, effect)
      : getVariantStylesNoHover(variant, effect);

    // Icon component
    const IconComponent = icon?.icon;
    const iconPosition = icon?.position || "top-left";

    // Icon alignment classes for in-flow layout
    const iconAlignClasses = {
      "top-left": "justify-start mb-4",
      "top-right": "justify-end mb-4 flex-row-reverse",
      "bottom-left": "justify-start mt-4",
      "bottom-right": "justify-end mt-4 flex-row-reverse",
    };

    // Accent color for icon (blue in light, yellow in dark)
    const accentColor = "text-[#0470b6] dark:text-[#fbbf24]";

    // Decoupled icon background and color logic (muted to gradient)
    const getIconBoxStyle = (isGradient: boolean) => {
      if (isGradient) {
        // Always: solid brand gradient background
        return "bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] border border-transparent";
      }
      // For false, transparent bg, accent border on hover
      return `bg-transparent border border-solid transition-colors duration-75 border-transparent`;
    };

    const getIconColor = (isGradient: boolean) => {
      if (isGradient) {
        // Always: white (light), black (dark)
        return "text-white dark:text-black";
      }
      return accentColor;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (showRipple) {
        addRipple(e);
      }
      // Call the original onMouseEnter if it exists
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (showRipple) {
        resetRipple();
      }
      // Call the original onMouseLeave if it exists
      props.onMouseLeave?.(e);
    };

    // Helper to render the icon block
    const renderIconBlock = () => {
      if (!IconComponent) return null;

      // Check if gradient icon is requested
      const isGradientIcon = icon?.gradient;

      const gradient = !!isGradientIcon;
      return (
        <div
          className={cn(
            "flex items-center gap-3 w-full",
            iconAlignClasses[iconPosition]
          )}
        >
          <div className="relative">
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-400 border",
                getIconBoxStyle(gradient)
              )}
            >
              <IconComponent
                className={cn(
                  "h-5 w-5 transition-colors duration-400",
                  getIconColor(gradient)
                )}
                weight="regular"
              />
            </div>
          </div>
          {icon?.title && (
            <div className="flex flex-col">
              {icon?.title && (
                <span className="text-sm font-semibold">{icon.title}</span>
              )}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-solid bg-card text-card-foreground shadow-sm relative p-6 transition-colors duration-75",
          variantStyles,
          showRipple ? "overflow-hidden" : "",
          "border-transparent",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Render icon block at top or bottom, in flow, never absolute */}
        {IconComponent &&
          (iconPosition === "top-left" || iconPosition === "top-right") &&
          renderIconBlock()}
        {children}
        {IconComponent &&
          (iconPosition === "bottom-left" || iconPosition === "bottom-right") &&
          renderIconBlock()}
        {/* Ripple element */}
        {showRipple && ripple && (
          <span
            className={cn(
              "absolute rounded-full animate-ripple pointer-events-none",
              getRippleColor(variant, effect)
            )}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

// ============================================================================
// CARD SUBCOMPONENTS
// ============================================================================

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between pt-4 border-t border-border",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
