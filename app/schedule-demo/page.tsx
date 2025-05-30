import type { Metadata } from "next";
import DemoForm from "@/components/demo-form";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Schedule a Demo | iWebTechno",
  description:
    "Schedule a personalized demo of iWebTechno's campus digitization solutions",
};

export default function ScheduleDemoPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Schedule a{" "}
              <GradientText variant="multi">Personalized Demo</GradientText>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              See how iWebTechno can transform your institution with our
              comprehensive campus digitization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <GlassCard intensity="medium" className="p-8">
                <DemoForm />
              </GlassCard>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-6">
                <GradientText variant="blue">Why Schedule a Demo?</GradientText>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">
                      Personalized walkthrough
                    </span>{" "}
                    of our platform tailored to your institution's needs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Live Q&A session</span> with
                    our product specialists
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">
                      Custom implementation roadmap
                    </span>{" "}
                    for your institution
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Pricing information</span>{" "}
                    and special offers for early adopters
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Free trial setup</span> for
                    your team to explore the platform
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
