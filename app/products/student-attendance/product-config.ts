import heroImage from "@/public/images/products/student-attendance/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Student Attendance",
    description:
      "Our Student Attendance module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end attendance rules for Indian Government University digitization.",
    patternType: "attendance",
    backgroundImage: heroImage,
    icon: "users" as const,
  },
  features: [
    {
      icon: "calendar",
      title: "Timetable Management",
      desc: "Create and manage student and faculty timetables efficiently",
    },
    {
      icon: "check",
      title: "Digital Attendance",
      desc: "Mark attendance manually or digitally for each class and subject",
    },
    {
      icon: "chart",
      title: "Analytics & Reports",
      desc: "Generate detailed statistical and graphical attendance reports",
    },
    {
      icon: "users",
      title: "Batch Management",
      desc: "Distribute students into batches for practical and tutorial sessions",
    },
  ],
  submodules: [
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
  ],
  cta: {
    title: "Ready to Digitize Your Attendance?",
    description:
      "Contact us for a personalized demo and see how our Student Attendance module can streamline your attendance tracking.",
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
