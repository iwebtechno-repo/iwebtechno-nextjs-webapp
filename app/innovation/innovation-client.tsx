"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GradientText } from "@/components/ui/gradient-text";

const InnovationClient = () => {
  return (
    <main className="min-h-screen">
      <section className="py-10 py-20 px-4 pb-32 lg:pb-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Driving <GradientText>Innovation</GradientText> in Education
          </h1>
          <p className="text-lg mb-8">
            Discover our innovative approaches to educational technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule-demo">
              <Button variant="gradient" size="xl" showRipple>
                Schedule Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xl" effect="glass" showRipple>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InnovationClient;
