import type * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "purple" | "green" | "orange" | "multi";
  className?: string;
  children: React.ReactNode;
}

export function GradientText({
  variant = "blue",
  className,
  children,
  ...props
}: GradientTextProps) {
  const gradientClasses = {
    blue: "bg-gradient-to-r from-blue-600 to-cyan-500",
    purple: "bg-gradient-to-r from-purple-600 to-pink-500",
    green: "bg-gradient-to-r from-green-500 to-teal-400",
    orange: "bg-gradient-to-r from-orange-500 to-amber-400",
    multi: "bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500",
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        gradientClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
