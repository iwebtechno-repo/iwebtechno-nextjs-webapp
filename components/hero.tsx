"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import { colors } from "@/lib/morphy-ui/morphy";
import { Play } from "@phosphor-icons/react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[${colors.blue[200]}]/30 blur-3xl dark:bg-[${colors.blue[900]}]/20`}
        ></div>
        <div
          className={`absolute -bottom-[10%] -left-[10%] h-[300px] w-[300px] rounded-full bg-[${colors.yellow[200]}]/30 blur-3xl dark:bg-[${colors.yellow[900]}]/20`}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`transform-gpu transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your <GradientText>Campus</GradientText> with Digital
              Solutions for <GradientText>Free</GradientText>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-300">
              Comprehensive campus digitization solutions designed to streamline
              operations, enhance learning experiences, and drive institutional
              growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/schedule-demo">
                <Button variant="gradient" size="xl" showRipple>
                  Get Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="xl"
                effect="glass"
                showRipple
                icon={{ icon: Play }}
              >
                Watch Video
              </Button>
            </div>
          </div>

          <div
            className={`transform-gpu transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Card className="overflow-hidden p-2">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Campus Digitization Dashboard"
                width={800}
                height={600}
                className="rounded-md object-cover"
              />
            </Card>
          </div>
        </div>

        <div
          className={`mt-20 transform-gpu transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Trusted by leading educational institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-auto">
                <img
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
};

export default Hero;
