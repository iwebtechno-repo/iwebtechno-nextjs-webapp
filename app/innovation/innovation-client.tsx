"use client";

import Link from "next/link";
import { GradientText } from "@/components/ui/gradient-text";

const InnovationClient = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Driving <GradientText>Innovation</GradientText> in Education
          </h1>
          <p className="text-lg mb-8">
            Discover our innovative approaches to educational technology.
          </p>
          <Link
            href="/schedule-demo"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-600/90 hover:to-purple-600/90 h-12 px-8"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default InnovationClient;
