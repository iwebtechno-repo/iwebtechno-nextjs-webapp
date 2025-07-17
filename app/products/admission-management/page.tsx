"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SparkleIcon,
  TrendUpIcon,
  CaretRightIcon,
  ImageSquare,
} from "@phosphor-icons/react";

const sampleScreens = [
  {
    name: "Login Screen",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-admission2-v01.jpg",
  },
  {
    name: "Student Details",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-admission3.jpg",
  },
  {
    name: "Admission Dashboard",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/student-admission3-v01.jpg",
  },
];

const submodules = [
  {
    code: "MU",
    title: "Maintain University",
    desc: "Register universities and manage details such as name, address, and academic years. Start academic years by adding courses/programs.",
  },
  {
    code: "CR",
    title: "College Registration",
    desc: "Colleges can register online and provide all necessary information for onboarding.",
  },
  {
    code: "MC",
    title: "Maintain Colleges",
    desc: "Register colleges, categorize them, and manage their programs, courses, and departments.",
  },
  {
    code: "IEU",
    title: "Import/Export Utility",
    desc: "Import and export students, courses, and results in Excel, CSV, or SQL format.",
  },
  {
    code: "PC",
    title: "Programs Creation",
    desc: "Create various types of programs (Diploma, Certificate, Graduate, Postgraduate, etc.).",
  },
  {
    code: "CC",
    title: "Courses/Subjects Creation",
    desc: "Create and map courses/subjects to programs and semesters.",
  },
  {
    code: "OR",
    title: "Online Registration",
    desc: "Students can register and select courses for their chosen program.",
  },
  {
    code: "OA",
    title: "Online Admission",
    desc: "Facilitate online admission and course mapping for students.",
  },
  {
    code: "OAP",
    title: "Online Admission Portal Config",
    desc: "Configure program settings, prospectus fees, entrance fees, and timetable preferences.",
  },
  {
    code: "ORW",
    title: "Offline Registration/Walk-ins",
    desc: "Admin cell can register walk-in students and manage their program registrations.",
  },
  {
    code: "SRP",
    title: "Student Registration Process",
    desc: "Centralized admission and registration with quota/non-quota system and fee category assignment.",
  },
  {
    code: "SEP",
    title: "Students Eligibility Process",
    desc: "Document verification and eligibility checks after profile submission.",
  },
  {
    code: "SIF",
    title: "Students Information System",
    desc: "Centralized access to student information for universities and boards, with approval/rejection workflows.",
  },
  {
    code: "AC",
    title: "Admission Cancellation",
    desc: "Configurable rules for admission cancellation and fee refunds.",
  },
  {
    code: "AT",
    title: "Admission Transfer",
    desc: "Transfer students between colleges in multi-campus setups.",
  },
  {
    code: "SP",
    title: "Student Profile (Mailing and SMS list)",
    desc: "Maintain complete student profiles, including mailing and SMS lists.",
  },
  {
    code: "R-Reg",
    title: "Re-registration",
    desc: "Allow repeaters and students with backlogs to re-register for courses.",
  },
  {
    code: "ERG",
    title: "Enrollment and Roll Number Generation",
    desc: "Automatically generate roll numbers for confirmed admissions.",
  },
  {
    code: "CR2",
    title: "Course Registration",
    desc: "Enable students to register for offered and elective courses, including backlogs.",
  },
  {
    code: "SPT",
    title: "Single Click Program/Semester Transfer",
    desc: "Promote students to the next semester/year or transfer to other programs.",
  },
  {
    code: "SCT",
    title: "Special Configurable Treatment for Reserve Class Students",
    desc: "Configure reservation rules as per government policies.",
  },
  {
    code: "CEG",
    title: "Configurable Enrollment Generation",
    desc: "Flexible enrollment generation for various academic needs.",
  },
  {
    code: "HGM",
    title: "Hostel & Guest House Management",
    desc: "Manage hostels, guest houses, room allocation, and asset management.",
  },
];

const AdmissionManagementPage = () => {
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
            src="https://iwebtechno.com/wp-content/uploads/2019/11/icon-admission-management.jpg"
            alt="Admission Management System"
            className="w-40 h-32 rounded-xl object-cover shadow-lg border border-white/30 bg-white/10"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
              Admission Management
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Digitize your University, College, School, or Coaching Classes
              with our comprehensive Admission Management module. Integrates
              seamlessly with Fee Collection, Accounts, and Payment Gateways
              (including UPI, QR, BBPS, and more).
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
        <h2 className="text-2xl font-semibold mb-6 text-[#0470b6] dark:text-[#f49d2f]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="blue" effect="glass" showRipple className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <TrendUpIcon className="h-6 w-6 text-blue-500" weight="bold" />
              <span className="font-semibold text-lg">
                Online & Offline Admissions
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Manage both online and walk-in admissions, with seamless
              integration to payment gateways and document verification.
            </p>
          </Card>
          <Card variant="purple" effect="glass" showRipple className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <SparkleIcon className="h-6 w-6 text-purple-500" weight="bold" />
              <span className="font-semibold text-lg">
                Automated Fee Collection
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Ready APIs for online fee collection with leading banks, fintech,
              and government-mandated systems (BBPS, UPI, QR).
            </p>
          </Card>
        </div>
      </section>
      {/* Sample Screens Gallery */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#0470b6] dark:text-[#f49d2f]">
          Sample Screens
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
                <ImageSquare className="h-4 w-4 text-[#d0427f]" />
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
        <h2 className="text-2xl font-semibold mb-6 text-[#0470b6] dark:text-[#f49d2f]">
          Sub Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submodules.map((mod) => (
            <Card
              key={mod.code}
              variant="multi"
              effect="glass"
              showRipple
              className="p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#0470b6] to-[#f49d2f] text-white font-bold text-xs shadow">
                  {mod.code}
                </span>
                <span className="font-semibold text-base">{mod.title}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                {mod.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <Card variant="gradient" effect="glass" showRipple className="p-8">
          <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
            Ready to transform your admissions?
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Contact us for a personalized demo and see how our Admission
            Management module can streamline your institute's enrollment
            process.
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

export default AdmissionManagementPage;
