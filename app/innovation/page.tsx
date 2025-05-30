import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import { Lightbulb, Zap, Cpu, Sparkles, Brain, Rocket } from "lucide-react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Innovation | iWebTechno",
  description:
    "Discover the innovative technologies and approaches that power iWebTechno's solutions",
};

export default function InnovationPage() {
  const innovationAreas = [
    {
      title: "Artificial Intelligence",
      description:
        "Our AI-powered systems help institutions automate routine tasks, provide personalized learning experiences, and gain predictive insights for better decision-making.",
      icon: Brain,
      color: "purple",
    },
    {
      title: "Machine Learning",
      description:
        "We leverage machine learning algorithms to analyze patterns in student data, helping identify at-risk students and optimize institutional resources.",
      icon: Cpu,
      color: "blue",
    },
    {
      title: "Blockchain Technology",
      description:
        "Our blockchain solutions ensure secure, tamper-proof record-keeping for academic credentials, transcripts, and certificates.",
      icon: Zap,
      color: "orange",
    },
    {
      title: "Mobile-First Design",
      description:
        "All our solutions are built with a mobile-first approach, ensuring seamless access to campus systems from any device, anywhere.",
      icon: Sparkles,
      color: "green",
    },
    {
      title: "Data Analytics",
      description:
        "Our advanced analytics tools transform raw data into actionable insights, helping institutions make informed decisions.",
      icon: Lightbulb,
      color: "blue",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Our cloud-based infrastructure ensures scalability, reliability, and security for all campus digitization solutions.",
      icon: Rocket,
      color: "purple",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Driving{" "}
                <GradientText variant="multi" className="font-bold">
                  Innovation
                </GradientText>{" "}
                in Education
              </h1>
              <p className="text-xl text-white/90 mb-8">
                At iWebTechno, we're constantly pushing the boundaries of what's
                possible in educational technology. Discover the innovative
                approaches that power our solutions.
              </p>
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Link href="/schedule-demo">Explore Our Innovations</Link>
              </Button>
            </div>
            <div className="relative">
              <GlassCard intensity="light" className="p-6 relative z-10">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Innovation in Education"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </GlassCard>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-16 px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <GradientText variant="multi">Innovation</GradientText> Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationAreas.map((area, index) => (
              <GlassCard
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="p-6">
                  <div
                    className={`mb-4 p-3 rounded-lg inline-flex bg-gradient-to-r ${
                      area.color === "blue"
                        ? "from-blue-600 to-blue-400"
                        : area.color === "purple"
                        ? "from-purple-600 to-purple-400"
                        : area.color === "green"
                        ? "from-green-600 to-green-400"
                        : "from-orange-600 to-orange-400"
                    }`}
                  >
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <GradientText variant={area.color as any}>
                      {area.title}
                    </GradientText>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {area.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our{" "}
                <GradientText variant="blue">
                  Research & Development
                </GradientText>{" "}
                Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At iWebTechno, innovation isn't just a buzzword—it's a
                structured process. Our dedicated R&D team works closely with
                educational institutions to identify challenges, develop
                solutions, and continuously improve our offerings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Problem Identification
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We work with institutions to identify key challenges in
                      their digital transformation journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Solution Design</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our team designs innovative solutions leveraging
                      cutting-edge technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Prototype Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We develop working prototypes and test them in real
                      educational environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Refinement & Implementation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Based on feedback, we refine our solutions and implement
                      them at scale.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Continuous Improvement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We continuously monitor, evaluate, and improve our
                      solutions based on real-world usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <GlassCard className="p-4">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Research and Development Process"
                  width={600}
                  height={500}
                  className="rounded-lg"
                />
              </GlassCard>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Partners */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Innovation{" "}
            <GradientText variant="purple">Partners</GradientText>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We collaborate with leading technology companies, research
            institutions, and educational organizations to drive innovation in
            campus digitization.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Partner ${index}`}
                  alt={`Innovation Partner ${index}`}
                  width={160}
                  height={80}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Innovation{" "}
            <GradientText variant="orange">Case Studies</GradientText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-4">
                <GradientText variant="blue">
                  AI-Powered Attendance System
                </GradientText>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn how we implemented an AI-powered facial recognition
                attendance system at Delhi University, reducing administrative
                workload by 85%.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20"
              >
                <Link href="/case-studies/ai-attendance">Read Case Study</Link>
              </Button>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-4">
                <GradientText variant="purple">
                  Blockchain Certificates
                </GradientText>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover how we helped IIT Mumbai implement blockchain-based
                digital certificates, eliminating certificate fraud and
                streamlining verification.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 hover:from-purple-500/20 hover:to-pink-600/20"
              >
                <Link href="/case-studies/blockchain-certificates">
                  Read Case Study
                </Link>
              </Button>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-bold mb-4">
                <GradientText variant="orange">
                  Predictive Analytics
                </GradientText>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                See how our predictive analytics system helped Amity University
                identify at-risk students and improve retention rates by 32%.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-orange-500/10 to-amber-600/10 hover:from-orange-500/20 hover:to-amber-600/20"
              >
                <Link href="/case-studies/predictive-analytics">
                  Read Case Study
                </Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-purple-600/90 to-blue-600/90">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our{" "}
            <GradientText variant="multi">Innovations</GradientText>?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Schedule a demo today to see how our innovative solutions can
            transform your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Link href="/schedule-demo">Schedule a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
