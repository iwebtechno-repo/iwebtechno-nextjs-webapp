"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

const DemoForm = dynamic(() => import("@/components/demo-form"), {
  ssr: false,
  loading: () => <p>Loading form...</p>,
});

const ScheduleDemoClient = () => {
  return (
    <main className="min-h-screen">
      <section className="relative py-10 py-20 px-4 overflow-hidden pb-32 lg:pb-40">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heading-michroma">
              Schedule Your <GradientText>Personalized Demo</GradientText>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              See how iWebTechno can transform your institution with our digital
              solutions for free.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8">
            <DemoForm />
          </Card>
        </div>
      </section>
    </main>
  );
};

export default ScheduleDemoClient;
