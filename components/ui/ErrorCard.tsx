"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  WarningIcon,
  NumberCircleFourIcon,
  NumberCircleZeroIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { typography } from "@/lib/morphy-ui/morphy";

interface ErrorCardProps {
  iconType: "error" | "404";
  heading: string;
  message: string;
  homeButtonText: string;
  tryAgain?: () => void;
}

export function ErrorCard({
  iconType,
  heading,
  message,
  homeButtonText,
  tryAgain,
}: ErrorCardProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347] p-4">
      <Card
        variant="none"
        effect="glass"
        className="max-w-lg w-full mx-auto p-10 flex flex-col items-center gap-6 shadow-2xl"
      >
        {iconType === "error" ? (
          <WarningIcon
            className="h-16 w-16 text-yellow-500 dark:text-yellow-400 mb-2"
            weight="duotone"
          />
        ) : (
          <span className="flex items-center mb-2">
            <NumberCircleFourIcon
              className="h-16 w-16 text-blue-500 dark:text-yellow-400"
              weight="duotone"
            />
            <NumberCircleZeroIcon
              className="h-16 w-16 text-blue-500 dark:text-yellow-400 -ml-4"
              weight="duotone"
            />
            <NumberCircleFourIcon
              className="h-16 w-16 text-blue-500 dark:text-yellow-400 -ml-4"
              weight="duotone"
            />
          </span>
        )}
        <h1
          className={`text-3xl md:text-4xl font-bold mb-2 text-center ${typography.classes.heading}`}
        >
          {heading}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-6 font-body-quicksand">
          {message}
        </p>
        <div className="flex gap-4">
          {tryAgain && (
            <Button
              variant="gradient"
              effect="fade"
              size="xl"
              showRipple
              onClick={tryAgain}
            >
              Try Again
            </Button>
          )}
          <Link href="/">
            <Button variant="gradient" effect="fade" size="xl" showRipple>
              {homeButtonText}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
