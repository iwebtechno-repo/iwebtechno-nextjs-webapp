import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export default function CTA() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <GlassCard intensity="heavy" className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <GradientText variant="multi">Transform</GradientText> Your
            Institution?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Join over 650+ campuses that have already digitized their operations
            with iWebTechno. Schedule a demo today and see how we can help you
            streamline your campus management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Link href="/schedule-demo">Schedule a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
