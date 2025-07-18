"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaretRightIcon, SparkleIcon } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  CalendarIcon,
  UsersIcon,
  GraduationCapIcon,
  UserPlusIcon,
  ChalkboardTeacherIcon,
  BookOpenIcon,
  ListChecksIcon,
  ClockIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  ArrowsClockwiseIcon,
  WarningCircleIcon,
  ChartBarIcon,
  type Icon as PhosphorIconType,
} from "@phosphor-icons/react";
import React from "react";
import { GradientText } from "@/components/ui/gradient-text";

const sampleScreens = [
  {
    name: "Dashboard",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-attendance-1-v01.jpg",
  },
  {
    name: "Time Table",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-attendance-2-v01.jpg",
  },
  {
    name: "Attendance Dashboard",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-attendance-3-v01.jpg",
  },
];

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

// Map submodule code to icon
const submoduleIcons: Record<string, PhosphorIconType> = {
  SFT: CalendarIcon,
  SC: GraduationCapIcon,
  AC: CalendarIcon,
  AB: UsersIcon,
  ACB: UserPlusIcon,
  FCA: ChalkboardTeacherIcon,
  CTM: BookOpenIcon,
  CP: ListChecksIcon,
  TTC: ClockIcon,
  SA: CheckCircleIcon,
  MLA: PlusCircleIcon,
  MAR: ArrowsClockwiseIcon,
  CDM: WarningCircleIcon,
  MRG: ChartBarIcon,
};

const StudentAttendancePage = () => {
  // Group submodules into rows of two
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <Card
          variant="gradient"
          effect="glass"
          showRipple
          className="p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl"
        >
          <img
            src="https://iwebtechno.com/wp-content/uploads/2019/11/icon-student-attendance.jpg"
            alt="Student Attendance System"
            className="w-40 h-32 rounded-xl object-cover shadow-lg border border-white/30 bg-white/10"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
              <GradientText>Student Attendance</GradientText>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Digitize your University, College, School, or Coaching Classes
              with our advanced Attendance Management module. Integrated with
              biometric devices and face readers for real-time, seamless
              attendance tracking for students and staff.
            </p>
            <Button
              variant="gradient"
              effect="glass"
              showRipple
              size="lg"
              icon={{ icon: SparkleIcon }}
              className="mt-2"
              onClick={() =>
                window.open("https://iwebtechno.com/contact", "_blank")
              }
            >
              Schedule a Demo
            </Button>
          </div>
        </Card>
      </section>
      {/* Features Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          <GradientText>Why Choose Our Attendance Module?</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="blue" effect="glass" showRipple className="p-6">
            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">
              Real-Time Biometric & Face Reader Integration
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Supports biometric handhelds and face readers for instant,
              accurate attendance capture for both students and staff.
            </p>
          </Card>
          <Card variant="purple" effect="glass" showRipple className="p-6">
            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">
              Alerts, Notifications & Exam Integration
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Automated alerts, notifications, and seamless integration with the
              examination process for complete workflow automation.
            </p>
          </Card>
        </div>
      </section>
      {/* Sample Screens Gallery */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          <GradientText>Sample Screens</GradientText>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleScreens.map((img) => (
            <Card
              key={img.url}
              variant="multi"
              effect="glass"
              showRipple
              className="p-2 flex flex-col items-center"
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-2">
                <img
                  src={img.url}
                  alt={img.name}
                  className="object-cover w-full h-full"
                  title={img.name}
                />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-medium truncate" title={img.name}>
                  {img.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
      {/* Submodules Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          <GradientText>Sub Modules</GradientText>
        </h2>

        {/* Desktop: Row-linked accordions */}
        <div className="hidden md:flex flex-col">
          {rows.map((pair, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <Accordion type="multiple" className="w-full">
                <div className="grid grid-cols-2 gap-x-6 items-stretch">
                  {pair.map((mod) =>
                    mod
                      ? (() => {
                          const Icon =
                            submoduleIcons[mod.code] || CheckCircleIcon;
                          return (
                            <AccordionItem
                              value={`row-${rowIdx}`}
                              key={mod.code}
                              className="md:border-b-0"
                            >
                              <AccordionTrigger>
                                <span className="flex items-center gap-2">
                                  <span className="font-bold text-[#0470b6] dark:text-[#f49d2f]">
                                    {submodules.findIndex(
                                      (m) => m.code === mod.code
                                    ) + 1}
                                  </span>
                                  <Icon
                                    className="h-5 w-5 text-[#0470b6] dark:text-[#f49d2f]"
                                    weight="regular"
                                  />
                                  <span className="font-semibold text-base">
                                    {mod.title}
                                  </span>
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <span className="text-gray-600 dark:text-gray-400 text-sm block mt-2 ml-[52px] pr-10">
                                  {mod.desc}
                                </span>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })()
                      : null
                  )}
                </div>
              </Accordion>
              {rowIdx < rows.length - 1 && (
                <div className="hidden md:block col-span-2 border-b border-border w-full" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Single column, independent accordions */}
        <div className="md:hidden">
          <Accordion type="multiple" className="w-full">
            {submodules.map((mod) => {
              const Icon = submoduleIcons[mod.code] || CheckCircleIcon;
              return (
                <AccordionItem value={mod.code} key={mod.code}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-[#0470b6] dark:text-[#f49d2f]">
                        {submodules.findIndex((m) => m.code === mod.code) + 1}
                      </span>
                      <Icon
                        className="h-5 w-5 text-[#0470b6] dark:text-[#f49d2f]"
                        weight="regular"
                      />
                      <span className="font-semibold text-base">
                        {mod.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className="text-gray-600 dark:text-gray-400 text-sm block mt-2 ml-[52px] pr-10">
                      {mod.desc}
                    </span>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <Card variant="gradient" effect="glass" showRipple className="p-8">
          <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
            Ready to digitize your attendance?
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Contact us for a personalized demo and see how our Attendance
            Management module can automate your institute's attendance process.
          </p>
          <Button
            variant="gradient"
            effect="glass"
            showRipple
            size="lg"
            icon={{ icon: CaretRightIcon }}
            onClick={() =>
              window.open("https://iwebtechno.com/contact", "_blank")
            }
          >
            Get Started
          </Button>
        </Card>
      </section>
    </main>
  );
};

export default StudentAttendancePage;
