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
  CalendarIcon,
  UsersIcon,
  CheckCircleIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";

import Link from "next/link";

const submodules = [
  {
    code: "SFT",
    title: "Student / Faculty Timetable Creation",
    desc: "Generate timetables for students and faculty for each college, with detailed scheduling.",
  },
  {
    code: "SC",
    title: "Scholarship & Concession",
    desc: "Automate fee waivers and concessions as per government rules for qualifying students.",
  },
  {
    code: "AC",
    title: "Academic Calendar",
    desc: "Create and manage academic calendars, including holidays and semester dates, for each program.",
  },
  {
    code: "AB",
    title: "Allot Batches",
    desc: "Distribute students into batches for practical and tutorial sessions.",
  },
  {
    code: "ACB",
    title: "Allot Clinical Batches",
    desc: "Assign students to clinical and tutorial batches for hands-on learning.",
  },
  {
    code: "FCA",
    title: "Faculty Course Allocation",
    desc: "Allocate courses to faculty for each college, managed by the college admin.",
  },
  {
    code: "CTM",
    title: "Course Topic Master",
    desc: "Maintain topics and subtopics for theory, practical, clinical, and tutorial subjects.",
  },
  {
    code: "CP",
    title: "Course Planner",
    desc: "Assign faculty to topics and subtopics for scheduled lectures.",
  },
  {
    code: "TTC",
    title: "Time Table Creation",
    desc: "Create department- and course-wise timetables, manage teacher/classroom clashes.",
  },
  {
    code: "SA",
    title: "Student Attendance",
    desc: "Mark attendance manually or digitally for each class, subject, or full day.",
  },
  {
    code: "MLA",
    title: "Mark Extra Lecture Attendance",
    desc: "Record attendance for extra lectures conducted by teachers.",
  },
  {
    code: "MAR",
    title: "Mark Attendance for Replaced/Swapped Lectures",
    desc: "Track attendance for lectures that are replaced or swapped by teachers.",
  },
  {
    code: "CDM",
    title: "Condone & Defaulter Management",
    desc: "Manage condonation for short attendance and generate defaulter lists instantly.",
  },
  {
    code: "MRG",
    title: "Statistical Report Generation",
    desc: "Generate detailed statistical and graphical attendance reports.",
  },
];

const StudentAttendancePage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="Student Attendance"
        subtitle="Digital Attendance System"
        description="Our Student Attendance module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end attendance rules for Indian Government University digitization."
        icon={SparkleIcon}
        patternType="attendance"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                icon: CalendarIcon,
                title: "Timetable Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Create and manage student and faculty timetables efficiently
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: CheckCircleIcon,
                title: "Digital Attendance",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Mark attendance manually or digitally for each class and subject
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: ChartBarIcon,
                title: "Analytics & Reports",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Generate detailed statistical and graphical attendance reports
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: UsersIcon,
                title: "Batch Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Distribute students into batches for practical and tutorial
                sessions
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
              Explore our complete suite of student attendance features designed
              to streamline every aspect of attendance tracking.
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
                <GradientText>Ready to Digitize Your Attendance?</GradientText>
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of institutions that have transformed their
                attendance tracking with our comprehensive digital solution.
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

export default StudentAttendancePage;
