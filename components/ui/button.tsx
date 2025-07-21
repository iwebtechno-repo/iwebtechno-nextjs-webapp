import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type ColorVariant, type ComponentEffect } from "@/lib/morphy-ui/types";
import { getVariantStyles, getRippleColor } from "@/lib/morphy-ui/utils";
import { useRipple } from "@/lib/morphy-ui/ripple";
import { type IconWeight } from "@phosphor-icons/react";
import { useIconWeight } from "@/lib/morphy-ui/icon-theme-context";

// ============================================================================
// BUTTON VARIANTS
// ============================================================================

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        xl: "h-14 px-16 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?: ColorVariant;
  effect?: ComponentEffect;
  showRipple?: boolean;
  icon?: {
    icon: React.ComponentType<{ className?: string; weight?: IconWeight }>;
    title?: string;
    weight?: IconWeight;
    gradient?: boolean;
  };
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gradient",
      effect = "glass",
      size,
      showRipple = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const { addRipple, resetRipple, ripple } = useRipple();
    const iconWeight = useIconWeight();

    // Get centralized styles
    const variantStyles = getVariantStyles(variant, effect);

    // Icon component
    const IconComponent = icon?.icon;

    // Accent color for icon (blue in light, yellow in dark)
    const accentColor = "text-[#0470b6] dark:text-[#fbbf24]";

    // Decoupled icon background and color logic (muted to gradient)
    const getIconBoxStyle = (isGradient: boolean) => {
      if (isGradient) {
        // Always: solid brand gradient background
        return "bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] border border-transparent";
      }
      // For false, transparent bg, accent border on hover
      return `bg-transparent border border-solid transition-colors duration-300 border-transparent`;
    };

    const getIconColor = (isGradient: boolean) => {
      if (isGradient) {
        // Always: white (light), black (dark)
        return "text-white dark:text-black";
      }
      return accentColor;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (showRipple) {
        addRipple(e);
      }
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (showRipple) {
        resetRipple();
      }
      props.onMouseLeave?.(e);
    };

    // Helper to render the icon block (like Card)
    const renderIconBlock = () => {
      if (!IconComponent) return null;
      const isGradientIcon = icon?.gradient;
      const gradient = !!isGradientIcon;
      return (
        <div className="relative flex items-center justify-center mr-2.5">
          <div
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-400 border",
              getIconBoxStyle(gradient)
            )}
          >
            <IconComponent
              className={cn(
                "h-4 w-4 transition-colors duration-400",
                getIconColor(gradient)
              )}
              weight={icon?.weight || iconWeight}
            />
          </div>
        </div>
      );
    };

    return (
      <button
        className={cn(
          buttonVariants({ size }),
          variantStyles,
          showRipple ? "relative overflow-hidden" : "",
          className
        )}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type={props.type || "button"}
        {...props}
      >
        {IconComponent && renderIconBlock()}
        {children}
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
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
