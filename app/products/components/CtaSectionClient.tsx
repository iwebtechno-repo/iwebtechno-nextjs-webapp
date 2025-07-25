"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import Link from "next/link";
import React from "react";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

interface CTAButton {
  label: string;
  href: string;
  variant: ColorVariant;
  effect?: ComponentEffect;
}

interface CtaSectionClientProps {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export function CtaSectionClient({
  title,
  description,
  buttons,
}: CtaSectionClientProps) {
  return (
    <section className="py-10 pb-32 lg:pb-40">
      <div className="container mx-auto px-4">
        <Card
          variant="gradient"
          className="relative overflow-hidden p-8 md:p-12 text-center"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0470b6]/20 to-[#0891b2]/20 dark:from-[#fbbf24]/20 dark:to-[#f59e0b]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0891b2]/20 to-[#0470b6]/20 dark:from-[#f59e0b]/20 dark:to-[#fbbf24]/20 rounded-full blur-xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <GradientText>{title}</GradientText>
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((btn) => (
                <Link key={btn.href} href={btn.href}>
                  <Button
                    variant={btn.variant}
                    effect={btn.effect}
                    size="xl"
                    showRipple
                  >
                    {btn.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
