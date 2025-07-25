"use client";

import { Card, CardDescription } from "@/components/ui/card";
import {
  SparkleIcon,
  DotsThreeIcon,
  ChartBar,
  BookOpen,
  GraduationCap,
  ListChecksIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  CalendarIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { type IconWeight } from "@phosphor-icons/react";
import React from "react";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; weight?: IconWeight }>
> = {
  sparkle: SparkleIcon,
  dots: DotsThreeIcon,
  chart: ChartBar,
  book: BookOpen,
  graduation: GraduationCap,
  list: ListChecksIcon,
  plus: PlusCircleIcon,
  check: CheckCircleIcon,
  calendar: CalendarIcon,
  users: UsersThreeIcon,
};

export interface ProductFeature {
  icon: keyof typeof ICON_MAP;
  title: string;
  desc: string;
}

export function ProductFeatureCardListClient({
  features,
}: {
  features: ProductFeature[];
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12 container mx-auto px-4">
      {features.map((f) => {
        const Icon = ICON_MAP[f.icon];
        return (
          <Card
            key={f.title}
            variant="none"
            effect="glass"
            icon={{
              icon: Icon,
              title: f.title,
              gradient: true,
            }}
            className="text-center p-6"
          >
            <CardDescription>{f.desc}</CardDescription>
          </Card>
        );
      })}
    </div>
  );
}
