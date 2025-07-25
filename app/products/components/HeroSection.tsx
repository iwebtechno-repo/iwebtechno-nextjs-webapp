"use client";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { ProductHeaderIcon } from "@/components/ui/ProductHeaderIcon";
import { typography } from "@/lib/morphy-ui/morphy";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  patternType: string;
  backgroundImage: string | StaticImageData;
  icon?: "sparkle" | "book" | "chart" | "users" | "dots";
}

export function HeroSection({
  title,
  description,
  backgroundImage,
  icon,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden min-h-[60vh] bg-cover bg-center bg-no-repeat py-20"
      style={
        backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {}
      }
    >
      {/* Local image background with Next.js <Image /> */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title + " hero background"}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          priority
        />
      )}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        {icon && <ProductHeaderIcon icon={icon} />}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${typography.classes.heading}`}
        >
          <Card variant="none" effect="glass">
            <GradientText>{title}</GradientText>
          </Card>
        </h1>
        <p
          className={`text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light ${typography.classes.body} text-gray-100`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
