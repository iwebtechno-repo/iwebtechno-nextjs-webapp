import heroImage from "@/public/images/products/admission-management/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Admission Management",
    description:
      "Our Admission Management module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end admission rules for Indian Government University digitization.",
    patternType: "admission",
    backgroundImage: heroImage,
    icon: "sparkle" as const,
  },
  features: [
    {
      icon: "sparkle",
      title: "Online Applications",
      desc: "Digital application forms with real-time validation",
    },
    {
      icon: "graduation",
      title: "Document Management",
      desc: "Secure storage and verification of student documents",
    },
    {
      icon: "chart",
      title: "Fee Collection",
      desc: "Integrated payment processing and receipt generation",
    },
    {
      icon: "book",
      title: "Admission Reports",
      desc: "Comprehensive analytics and reporting dashboard",
    },
  ],
  submodules: [
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
  ],
  cta: {
    title: "Ready to Digitize Your Admissions?",
    description:
      "Contact us for a personalized demo and see how our Admission Management module can streamline your admissions process.",
    buttons: [
      {
        label: "Schedule Demo",
        href: "/schedule-demo",
        variant: "blue" as ColorVariant,
      },
      {
        label: "Contact Sales",
        href: "/contact",
        variant: "gradient" as ColorVariant,
        effect: "fade" as ComponentEffect,
      },
    ],
  },
};

export default productConfig;
