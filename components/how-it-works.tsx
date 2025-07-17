import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Calendar,
  CreditCard,
  BookOpen,
  Users,
  Package,
  Check,
} from "@phosphor-icons/react";
import { type ComponentType } from "react";
import { type ColorVariant } from "@/lib/morphy-ui/types";
import { type IconWeight } from "@phosphor-icons/react";

interface Service {
  title: string;
  icon: ComponentType<{ className?: string; weight?: IconWeight }>;
  description: string[];
  variant: ColorVariant;
}

const HowItWorks = () => {
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
      icon: Package,
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
      icon: Users,
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
          How{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            iWeb's
          </span>{" "}
          Campus Digitization Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              variant={service.variant}
              showRipple
              icon={{ icon: service.icon, title: service.title }}
            >
              <div className="p-6 flex flex-col h-full">
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-[10px] bg-green-500/20 text-green-500">
                        <Check weight="bold" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
