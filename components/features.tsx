import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { colors } from "@/lib/morphy-ui/morphy";
import Link from "next/link";

const Features = () => {
  return (
    <section className="relative overflow-hidden py-10 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[${colors.blue[500]}]/10 blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[${colors.yellow[500]}]/10 blur-3xl`}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          <GradientText>Comprehensive</GradientText> Campus Digitization
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <Card variant="blue" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText>Seamless Integration</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Our platform integrates all aspects of campus management into a
              single, unified system. From admissions to alumni management,
              everything works together seamlessly.
            </p>
            <div className="mt-auto">
              <Link href="/products">
                <Button variant="outline" size="sm" showRipple>
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>

          {/* Feature 2 */}
          <Card variant="blue" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText>Mobile-First Approach</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Access your campus management system anytime, anywhere with our
              mobile-first approach. Our responsive design works on all devices,
              from desktops to smartphones.
            </p>
            <div className="mt-auto">
              <Link href="/products">
                <Button variant="outline" size="sm" showRipple>
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>

          {/* Feature 3 */}
          <Card variant="blue" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText>Data Security & Compliance</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              We prioritize the security of your data with industry-leading
              encryption and compliance with educational data protection
              regulations.
            </p>
            <div className="mt-auto">
              <Link href="/products">
                <Button variant="outline" size="sm" showRipple>
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>

          {/* Feature 4 */}
          <Card variant="blue" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <GradientText>Scalable Solutions</GradientText>
            </h3>
            <p className="mb-6 flex-grow">
              Whether you're a small college or a large university with multiple
              campuses, our platform scales to meet your needs without
              compromising performance.
            </p>
            <div className="mt-auto">
              <Link href="/products">
                <Button variant="outline" size="sm" showRipple>
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
