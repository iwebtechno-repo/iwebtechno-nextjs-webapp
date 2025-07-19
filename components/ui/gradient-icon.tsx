import { type IconWeight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface GradientIconProps {
  icon: React.ComponentType<{ className?: string; weight?: IconWeight }>;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export const GradientIcon = ({
  icon: IconComponent,
  className,
  size = "md",
}: GradientIconProps) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 bg-gradient-to-r rounded-lg flex items-center justify-center from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b]",
        sizeClasses[size],
        className
      )}
    >
      <IconComponent className="text-white dark:text-black" />
    </div>
  );
};
