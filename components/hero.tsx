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
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/iwebtechno-gradient.svg"
                alt="iWebTechno Logo"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your <GradientText>Campus</GradientText> with Digital
              Solutions for <GradientText>Free</GradientText>
            </h1>
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                #GoDigital
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                #GoCashless
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                #GoGreen
              </span>
            </div>
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
      </div>
    </section>
  );
};

export default Hero;
