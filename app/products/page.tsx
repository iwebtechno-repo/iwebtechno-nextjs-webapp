import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Laptop,
  Users,
  CreditCard,
  BookOpen,
  Calendar,
  FileText,
  BarChart,
  ChevronRight,
} from "lucide-react";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "Products | iWebTechno",
  description:
    "Explore iWebTechno's comprehensive suite of campus digitization products",
};

const products = [
  {
    id: "admission-management",
    title: "Admission Management",
    description:
      "Streamline the entire admission process from application to enrollment with our comprehensive solution.",
    icon: Laptop,
    color: "blue",
    features: [
      "Online application forms",
      "Document verification",
      "Admission workflow automation",
      "Communication management",
      "Reporting and analytics",
    ],
  },
  {
    id: "student-attendance",
    title: "Student Attendance",
    description:
      "Track and manage student attendance with automated systems and real-time reporting for better insights.",
    icon: Users,
    color: "purple",
    features: [
      "Biometric integration",
      "Mobile attendance marking",
      "Automated notifications",
      "Attendance reports",
      "Leave management",
    ],
  },
  {
    id: "fee-collection",
    title: "Fee Collection",
    description:
      "Simplify fee collection with integrated payment gateways and multiple payment options for convenience.",
    icon: CreditCard,
    color: "orange",
    features: [
      "Multiple payment gateways",
      "Installment plans",
      "Fee reminders",
      "Receipt generation",
      "Payment reconciliation",
    ],
  },
  {
    id: "learning-management",
    title: "Learning Management",
    description:
      "Provide a comprehensive platform for online learning and course management for modern education.",
    icon: BookOpen,
    color: "green",
    features: [
      "Course creation tools",
      "Assignment management",
      "Discussion forums",
      "Resource library",
      "Progress tracking",
    ],
  },
  {
    id: "timetable-management",
    title: "Timetable Management",
    description:
      "Create and manage class schedules efficiently with our intuitive timetable management system.",
    icon: Calendar,
    color: "blue",
    features: [
      "Automated scheduling",
      "Conflict detection",
      "Teacher workload balancing",
      "Room allocation",
      "Schedule changes notification",
    ],
  },
  {
    id: "examination-system",
    title: "Examination System",
    description:
      "Manage exams, generate report cards, and analyze performance metrics with our examination system.",
    icon: FileText,
    color: "purple",
    features: [
      "Exam scheduling",
      "Question bank management",
      "Online examination",
      "Result processing",
      "Performance analytics",
    ],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Gain insights into institutional performance with comprehensive analytics and reporting tools.",
    icon: BarChart,
    color: "orange",
    features: [
      "Customizable dashboards",
      "Real-time data visualization",
      "Trend analysis",
      "Export capabilities",
      "Performance indicators",
    ],
  },
];

export default function ProductsPage() {
  return <HowItWorks />;
}
