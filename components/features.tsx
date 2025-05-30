import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          <GradientText variant="multi" className="font-bold">
            Comprehensive
          </GradientText>{" "}
          Campus Digitization
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <GlassCard variant="blue" intensity="medium" className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText variant="blue">Seamless Integration</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Our platform integrates all aspects of campus management into a
              single, unified system. From admissions to alumni management,
              everything works together seamlessly.
            </p>
            <div className="mt-auto">
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20"
              >
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </GlassCard>

          {/* Feature 2 */}
          <GlassCard variant="purple" intensity="medium" className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText variant="purple">
                Mobile-First Approach
              </GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Access your campus management system anytime, anywhere with our
              mobile-first approach. Our responsive design works on all devices,
              from desktops to smartphones.
            </p>
            <div className="mt-auto">
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 hover:from-purple-500/20 hover:to-pink-600/20"
              >
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </GlassCard>

          {/* Feature 3 */}
          <GlassCard variant="green" intensity="medium" className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText variant="green">
                Data Security & Compliance
              </GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              We prioritize the security of your data with industry-leading
              encryption and compliance with educational data protection
              regulations.
            </p>
            <div className="mt-auto">
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-green-500/10 to-teal-600/10 hover:from-green-500/20 hover:to-teal-600/20"
              >
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </GlassCard>

          {/* Feature 4 */}
          <GlassCard variant="orange" intensity="medium" className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText variant="orange">Scalable Solutions</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Whether you're a small college or a large university with multiple
              campuses, our platform scales to meet your needs without
              compromising performance.
            </p>
            <div className="mt-auto">
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-orange-500/10 to-amber-600/10 hover:from-orange-500/20 hover:to-amber-600/20"
              >
                <Link href="/products">Learn More</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
