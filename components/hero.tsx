"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Play } from "lucide-react";
import { GradientText } from "./ui/gradient-text";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute -bottom-[10%] -left-[10%] h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your <GradientText variant="multi">Campus</GradientText>{" "}
              with Digital Solutions for{" "}
              <GradientText variant="green">Free</GradientText>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-300">
              Comprehensive campus digitization solutions designed to streamline
              operations, enhance learning experiences, and drive institutional
              growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default">
                <Link href="/schedule-demo">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <Play className="h-4 w-4" /> Watch Video
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <GlassCard intensity="medium" className="overflow-hidden p-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Campus Digitization Dashboard"
                width={800}
                height={600}
                className="rounded-md object-cover"
              />
            </GlassCard>
          </div>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Trusted by leading educational institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-auto">
                <Image
                  src={`/placeholder.svg?height=48&width=120&text=Partner${i}`}
                  alt={`Partner ${i}`}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
