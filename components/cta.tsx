import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { gradients } from "@/lib/morphy-ui/morphy";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-10 py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.brand}/90 z-0`}
      ></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card variant="none" className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <GradientText>Transform</GradientText> Your Institution?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Join over 650+ campuses that have already digitized their operations
            with iWebTechno. Schedule a demo today and see how we can help you
            streamline your campus management.
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
        </Card>
      </div>
    </section>
  );
};

export default CTA;
