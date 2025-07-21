import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden pb-32 lg:pb-40 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <div className="container mx-auto px-4 relative z-10">
        <Card
          variant="gradient"
          className="relative overflow-hidden p-8 md:p-12 text-center"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0470b6]/20 to-[#0891b2]/20 dark:from-[#fbbf24]/20 dark:to-[#f59e0b]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0891b2]/20 to-[#0470b6]/20 dark:from-[#f59e0b]/20 dark:to-[#fbbf24]/20 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <GradientText>Ready to Transform Your Institution?</GradientText>
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 650+ campuses that have already digitized their
              operations with iWebTechno. Schedule a demo today and see how we
              can help you streamline your campus management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button variant="none" size="xl" showRipple>
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="gradient" size="xl" effect="fade" showRipple>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
