import { Card } from "@/components/ui/card";
import Link from "next/link";

const CTA = () => {
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
        <Card variant="none" className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300">
              Transform
            </span>{" "}
            Your Institution?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Join over 650+ campuses that have already digitized their operations
            with iWebTechno. Schedule a demo today and see how we can help you
            streamline your campus management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-demo"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-600/90 hover:to-purple-600/90 h-12 px-8"
            >
              Schedule Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8"
            >
              Contact Us
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
