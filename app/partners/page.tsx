"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WarningIcon } from "@phosphor-icons/react";
import { typography } from "@/lib/morphy-ui/morphy";

const PartnersPage = () => {
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
          Page Under Construction
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-6 font-body-quicksand">
          We're working hard to bring you this page soon. Please check back
          later!
        </p>
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="gradient" effect="fade" size="xl" showRipple>
              Go to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PartnersPage;
