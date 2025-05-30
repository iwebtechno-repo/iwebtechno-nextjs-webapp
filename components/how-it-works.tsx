import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import {
  GraduationCap,
  Calendar,
  CreditCard,
  BookOpen,
  FileText,
  MonitorCog,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceVariant = "blue" | "purple" | "green" | "orange" | "multi";

interface Service {
  title: string;
  icon: React.ElementType;
  description: string[];
  variant: ServiceVariant;
}

const variantColors = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
  },
  multi: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
};

export default function HowItWorks() {
  const services: Service[] = [
    {
      title: "Admission Management",
      icon: GraduationCap,
      description: [
        "Maintain University",
        "College Registration",
        "Maintain Colleges",
        "Import/Export Utility",
        "Program Creation",
      ],
      variant: "blue",
    },
    {
      title: "Student Attendance",
      icon: Calendar,
      description: [
        "Staff Performance",
        "Student attendance marking",
        "Academic calendar",
        "Faculty course allocation",
        "Time Table Creation",
      ],
      variant: "purple",
    },
    {
      title: "Fee Collection",
      icon: CreditCard,
      description: [
        "Fee Management",
        "Online Payment",
        "Detailed Grants Utilisation",
        "Funds & Grants Management",
        "Online Budgeting",
      ],
      variant: "orange",
    },
    {
      title: "Student Exams & Results",
      icon: BookOpen,
      description: [
        "Exam Schedule",
        "Question paper upload",
        "Examination attendance",
        "Answer sheet encoding",
        "Degree generation",
      ],
      variant: "green",
    },
    {
      title: "Purchase & Stores Inventory",
      icon: MonitorCog,
      description: [
        "Purchase Requisition",
        "Supplier Pricing & Quotation",
        "Quality Control",
        "Goods Inward/GRN",
        "Inventory with Barcode",
      ],
      variant: "blue",
    },
    {
      title: "HRMS & Payroll",
      icon: FileText,
      description: [
        "Employee Service Book",
        "Claims & Reimbursement",
        "Pension/PF/Gratuity",
        "Arrear & Bonus",
        "Loan Management",
      ],
      variant: "purple",
    },
  ];

  return (
    <section className="py-16 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How <GradientText variant="blue">iWeb's</GradientText> Campus
          Digitization Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} variant={service.variant} intensity="medium">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="h-5 w-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                  <h3 className="text-lg font-semibold leading-none">
                    <GradientText variant={service.variant}>
                      {service.title}
                    </GradientText>
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-[10px]",
                          variantColors[service.variant].bg,
                          variantColors[service.variant].text
                        )}
                      >
                        ✓
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
