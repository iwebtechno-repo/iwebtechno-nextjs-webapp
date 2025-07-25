"use client";
import {
  SparkleIcon,
  BookOpen,
  ChartBar,
  UsersThreeIcon,
  DotsThreeIcon,
} from "@phosphor-icons/react";

export function ProductHeaderIcon({
  icon,
}: {
  icon: "sparkle" | "book" | "chart" | "users" | "dots";
}) {
  if (icon === "sparkle")
    return <SparkleIcon className="h-8 w-8 text-primary" />;
  if (icon === "book") return <BookOpen className="h-8 w-8 text-primary" />;
  if (icon === "chart") return <ChartBar className="h-8 w-8 text-primary" />;
  if (icon === "users")
    return <UsersThreeIcon className="h-8 w-8 text-primary" />;
  if (icon === "dots")
    return <DotsThreeIcon className="h-8 w-8 text-primary" />;
  return null;
}
