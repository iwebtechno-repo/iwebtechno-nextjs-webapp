"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  FileText,
  UserCircle,
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Award,
} from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import Link from "next/link";

export default function AdmissionManagement() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Academic Management",
      icon: BookOpen,
      description: [
        "Program and course management",
        "Curriculum planning and tracking",
        "Academic calendar management",
        "Faculty assignment and scheduling",
      ],
      variant: "blue" as const,
    },
    {
      title: "Student Portal",
      icon: Users,
      description: [
        "Online registration and enrollment",
        "Course selection and registration",
        "Academic progress tracking",
        "Document submission and verification",
      ],
      variant: "purple" as const,
    },
    {
      title: "Examination System",
      icon: Calendar,
      description: [
        "Exam scheduling and management",
        "Result processing and publication",
        "Grade management system",
        "Performance analytics",
      ],
      variant: "green" as const,
    },
    {
      title: "Library Management",
      icon: BookOpen,
      description: [
        "Digital library catalog",
        "Book issue and return tracking",
        "E-resource management",
        "Reading history and analytics",
      ],
      variant: "orange" as const,
    },
    {
      title: "Achievement Tracking",
      icon: Award,
      description: [
        "Student performance records",
        "Extra-curricular activities",
        "Certification management",
        "Portfolio development",
      ],
      variant: "blue" as const,
    },
    {
      title: "Analytics Dashboard",
      icon: BarChart3,
      description: [
        "Institutional performance metrics",
        "Student success analytics",
        "Resource utilization tracking",
        "Strategic decision support",
      ],
      variant: "purple" as const,
    },
    {
      title: "Communication Hub",
      icon: MessageSquare,
      description: [
        "Integrated messaging system",
        "Announcement management",
        "Parent-teacher communication",
        "Event notifications",
      ],
      variant: "green" as const,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute -bottom-[10%] -left-[10%] h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <GradientText variant="blue">Admission Management</GradientText>{" "}
            System
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Digitize your University, College, School or Coaching Classes with
            ease. Our Admission Management module works both as a standalone
            solution and integrates seamlessly with Fee Collection & Accounts
            Module.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/schedule-demo">
              Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div
          className={`mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <GlassCard
              key={index}
              variant={service.variant}
              intensity="medium"
              className="h-full"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <service.icon className="h-5 w-5 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold leading-none">
                    <GradientText variant={service.variant}>
                      {service.title}
                    </GradientText>
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {service.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Integration Section */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold">
            <GradientText variant="green">Ready to Transform</GradientText> Your
            Institution?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Our Admission Module comes with ready online fee collection APIs
            with leading banks & fintech / Payment Gateways including BBPS –
            Bharat Bill Payment System supporting all modes of fee payments
            including UPI and QR code based payments.
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
