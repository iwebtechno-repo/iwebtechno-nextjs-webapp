import { Card } from "@/components/ui/card";
import Link from "next/link";

const Features = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
            Comprehensive
          </span>{" "}
          Campus Digitization
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <Card variant="blue" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                Seamless Integration
              </span>
            </h3>
            <p className="mb-6 flex-grow">
              Our platform integrates all aspects of campus management into a
              single, unified system. From admissions to alumni management,
              everything works together seamlessly.
            </p>
            <div className="mt-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </Card>

          {/* Feature 2 */}
          <Card variant="purple" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
                Mobile-First Approach
              </span>
            </h3>
            <p className="mb-6 flex-grow">
              Access your campus management system anytime, anywhere with our
              mobile-first approach. Our responsive design works on all devices,
              from desktops to smartphones.
            </p>
            <div className="mt-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </Card>

          {/* Feature 3 */}
          <Card variant="green" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
                Data Security & Compliance
              </span>
            </h3>
            <p className="mb-6 flex-grow">
              We prioritize the security of your data with industry-leading
              encryption and compliance with educational data protection
              regulations.
            </p>
            <div className="mt-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </Card>

          {/* Feature 4 */}
          <Card variant="orange" showRipple className="p-8">
            <h3 className="mb-4 text-xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                Scalable Solutions
              </span>
            </h3>
            <p className="mb-6 flex-grow">
              Whether you're a small college or a large university with multiple
              campuses, our platform scales to meet your needs without
              compromising performance.
            </p>
            <div className="mt-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
