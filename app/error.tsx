"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WarningIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { typography } from "@/lib/morphy-ui/morphy";

export default function ErrorPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347] p-4">
      <Card
        variant="none"
        effect="glass"
        className="max-w-lg w-full mx-auto p-10 flex flex-col items-center gap-6 shadow-2xl"
      >
        <WarningIcon
          className="h-16 w-16 text-yellow-500 dark:text-yellow-400 mb-2"
          weight="duotone"
        />
        <h1
          className={`text-3xl md:text-4xl font-bold mb-2 text-center ${typography.classes.heading}`}
        >
          Something went wrong
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-6 font-body-quicksand">
          Sorry, an unexpected error has occurred. Please try again or return to
          the home page.
        </p>
        <Link href="/">
          <Button variant="gradient" effect="fade" size="xl" showRipple>
            Go to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}
