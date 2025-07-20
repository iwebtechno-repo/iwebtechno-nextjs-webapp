"use client";

import React from "react";
import { ProductPageHeader } from "@/components/ui/product-page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import {
  SparkleIcon,
  GraduationCap,
  ChartBar,
  BookOpen,
} from "@phosphor-icons/react";

import Link from "next/link";

// Sample screens removed as they're not being used in the current implementation

const submodules = [
  {
    code: "OF",
    title: "Online Form Filling",
    desc: "Students can fill admission forms online with all required details and documents upload facility.",
  },
  {
    code: "DP",
    title: "Document Processing",
    desc: "Automated document verification and processing with digital signature support.",
  },
  {
    code: "PG",
    title: "Payment Gateway Integration",
    desc: "Seamless integration with multiple payment gateways including UPI, QR, BBPS, and traditional methods.",
  },
  {
    code: "AS",
    title: "Application Status Tracking",
    desc: "Real-time status tracking for students and parents throughout the admission process.",
  },
  {
    code: "AP",
    title: "Approval Process",
    desc: "Multi-level approval workflow with role-based access control and automated notifications.",
  },
  {
    code: "RM",
    title: "Registration Management",
    desc: "Complete student registration management with unique ID generation and profile creation.",
  },
  {
    code: "FC",
    title: "Fee Collection",
    desc: "Integrated fee collection with installment options and automated receipt generation.",
  },
  {
    code: "RP",
    title: "Reporting & Analytics",
    desc: "Comprehensive reporting and analytics dashboard for admission trends and insights.",
  },
];

const AdmissionManagementPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="Admission Management"
        subtitle="Digital Enrollment System"
        description="Our Admission Management module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end admission rules for Indian Government University digitization."
        icon={SparkleIcon}
        patternType="admission"
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: SparkleIcon,
                title: "Online Applications",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Digital application forms with real-time validation
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: GraduationCap,
                title: "Document Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Secure storage and verification of student documents
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: ChartBar,
                title: "Fee Collection",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Integrated payment processing and receipt generation
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: BookOpen,
                title: "Admission Reports",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Comprehensive analytics and reporting dashboard
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Submodules Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-lg flex items-center justify-center">
                <SparkleIcon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h2 className="text-3xl font-bold">
                <GradientText>Comprehensive Modules</GradientText>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete suite of admission management features
              designed to streamline every aspect of student enrollment.
            </p>
          </div>

          {/* Desktop: Accordion rows */}
          <div className="hidden md:block space-y-6">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex}>
                <Accordion type="single" collapsible className="w-full">
                  <div className="grid md:grid-cols-2 gap-6">
                    {row.map(
                      (submodule) =>
                        submodule && (
                          <AccordionItem
                            key={submodule.code}
                            value={`row-${rowIndex}`}
                            className="border rounded-lg"
                          >
                            <AccordionTrigger className="px-6 py-2 hover:no-underline">
                              <div className="flex items-center gap-4 text-left">
                                <div className="flex items-center gap-3">
                                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center text-white dark:text-black text-xs font-bold">
                                    {submodules.findIndex(
                                      (s) => s.code === submodule.code
                                    ) + 1}
                                  </span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg">
                                    {submodule.title}
                                  </h3>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <div className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300">
                                  {submodule.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {/* Features will be added here */}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )
                    )}
                  </div>
                </Accordion>
                {rowIndex < rows.length - 1 && (
                  <div className="border-b w-full my-6" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Single column */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              {submodules.map((submodule) => (
                <AccordionItem
                  key={submodule.code}
                  value={submodule.code}
                  className="border rounded-lg"
                >
                  <AccordionTrigger className="px-4 py-2 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center text-white dark:text-black text-xs font-bold">
                          {submodules.findIndex(
                            (s) => s.code === submodule.code
                          ) + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{submodule.title}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        {submodule.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {/* Features will be added here */}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 pb-32 lg:pb-40">
        <div className="container mx-auto px-4">
          <Card
            variant="gradient"
            className="relative overflow-hidden p-8 md:p-12 text-center"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0470b6]/20 to-[#0891b2]/20 dark:from-[#fbbf24]/20 dark:to-[#f59e0b]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0891b2]/20 to-[#0470b6]/20 dark:from-[#f59e0b]/20 dark:to-[#fbbf24]/20 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <GradientText>Ready to Digitize Your Admissions?</GradientText>
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of institutions that have transformed their
                admission process with our comprehensive digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule-demo">
                  <Button variant="blue" size="xl" showRipple>
                    Schedule Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="xl" effect="glass" showRipple>
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default AdmissionManagementPage;
