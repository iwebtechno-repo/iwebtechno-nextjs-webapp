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
  ListChecksIcon,
  ChartBarIcon,
  CheckCircleIcon,
  BookOpenIcon,
} from "@phosphor-icons/react";

import Link from "next/link";

const submodules = [
  {
    code: "PIM",
    title: "Personal Information Management System",
    desc: "Employee Records. Employee Confirmation. Employee Increment. Employee Name change. Employee Transfer. Service Book",
  },
  {
    code: "RM",
    title: "Recruitment Management",
    desc: "HR Requisition form. Online Job Application Form. Screening of Resume. Shortlisting Resumes/Candidates. Conducting Interviews & Rating. Offer and Appointment Process. Joining Process",
  },
  {
    code: "AM",
    title: "Attendance Management",
    desc: "Shift Management. Overtime Management. Early Going Late Coming Management. Integration with Attendance device (Format required is SQL or .XLS)",
  },
  {
    code: "LM",
    title: "Leave Management",
    desc: "Setup leave records. Setup leave Policy. Leave Application Approval. Leave Accrual. Leave Encashment",
  },
  {
    code: "PM",
    title: "Payroll Management",
    desc: "Declaration of Investments. Claims and Reimbursement. Arears Management. Processing attendance and leave from the above modules based on the pay structure defined",
  },
  {
    code: "PM2",
    title: "Pension Management",
    desc: "Define Pension Rate. Set Pension Opening Balance. Pension Monthly update. Pension Ledger. My Pension Statement in Employee Self Service Portal",
  },
  {
    code: "PFM",
    title: "Provident Fund Management",
    desc: "Define PF Rate. Set PF Opening Balance. PF Monthly update. PF Ledger. My PF Statement in Employee Self Service Portal",
  },
  {
    code: "PM3",
    title: "Project Management",
    desc: "Core/University Proposed grant. Core/University Grant Sanction. Core/University Grant Release. Revised Core Proposal. Personal Grant Allotment. Allotment of Project Cordinators/Incharge/Project Assistant. Personal Grants. Proposed Project/Center Master. Project Sanction Master. Project Grant Release Master. Budget Re-appropriation. Budget sheet V/s Actual Sheet. Budgeting of Expenses. Receipts and Payments. Project Incharge project wise details. Budget Utilization Report. Print UC/SOE",
  },
  {
    code: "SI",
    title: "Summer Internships",
    desc: "Listing students for summer internships. Assign companies for the internships. Project details. Project / Internship Feedback",
  },
  {
    code: "PM4",
    title: "Placement Management",
    desc: "Registering Companies. Apply for Placement- Staff portal. Placement Feedback. Interview management. Allocation of students to the selected firms",
  },
];

const HRMSPayrollPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="HRMS & Payroll"
        description="Our HRMS & Payroll Management module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end Payroll rules for Indian Government University digitization."
        patternType="hrms"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: ListChecksIcon,
                title: "Employee Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Complete employee lifecycle from recruitment to retirement
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: ChartBarIcon,
                title: "Payroll Processing",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Automated payroll with tax calculations and compliance
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: CheckCircleIcon,
                title: "Attendance Tracking",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Integrated attendance management with shift and overtime
                tracking
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: BookOpenIcon,
                title: "Leave Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Comprehensive leave policy and approval workflow management
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
              <h2 className="text-3xl font-bold font-heading-exo2">
                <GradientText>Comprehensive Modules</GradientText>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete suite of HRMS and payroll features designed
              to streamline every aspect of human resource management.
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
                                  <h3 className="font-semibold text-lg font-heading-exo2">
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
                        <h3 className="font-semibold font-heading-exo2">
                          {submodule.title}
                        </h3>
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
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-heading-exo2">
                <GradientText>
                  Ready to Transform Your HR Operations?
                </GradientText>
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of institutions that have transformed their HR and
                payroll management with our comprehensive digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule-demo">
                  <Button variant="blue" size="xl" showRipple>
                    Schedule Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="gradient" size="xl" effect="fade" showRipple>
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

export default HRMSPayrollPage;
