import heroImage from "@/public/images/products/student-exams/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Student Exams",
    description:
      "Our Student Exams module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end exam rules for Indian Government University digitization.",
    patternType: "exams",
    backgroundImage: heroImage,
    icon: "chart" as const,
  },
  features: [
    {
      icon: "sparkle",
      title: "Exam Scheduling",
      desc: "Automated exam scheduling and timetable management",
    },
    {
      icon: "book",
      title: "Question Papers",
      desc: "Secure question paper upload and download system",
    },
    {
      icon: "chart",
      title: "Result Processing",
      desc: "Automated result generation and grade calculation",
    },
    {
      icon: "check",
      title: "Attendance Tracking",
      desc: "Exam attendance monitoring and reporting",
    },
  ],
  submodules: [
    {
      code: "EPC",
      title: "Examination Pattern Configurator",
      desc: "Examination Pattern Configuration Module",
    },
    {
      code: "ERC",
      title: "Examination Rules and configuration",
      desc: "Configurable Exam Rules can be created for examination as required by the board",
    },
    {
      code: "RH",
      title: "Roll number/Hall ticket no allocation for examination",
      desc: "Roll nos for the examination can be created automatically and printed. Intimated to the students can be given via portal, sms or email",
    },
    {
      code: "ES",
      title: "Exam Schedule",
      desc: "Exam schedule can be defined in the system and published for the students in portal",
    },
    {
      code: "ECA",
      title: "Examination centre allocation",
      desc: "Manual allocation of the examination center for the students degree courses wise can be provided in the system. Notification of center allocation would be provided to students and hall tickets would have this information",
    },
    {
      code: "EC",
      title: "Exam Hall/Calls Room definition",
      desc: "Classroom capacity, rows, column etc. can be defined in the system so that based on the same seating arrangement can be made.",
    },
    {
      code: "SA",
      title: "Seating arrangement",
      desc: "Configurable screen would be provided for making seating arrangements during exam before hall ticket is printed",
    },
    {
      code: "EEM",
      title: "External examiners management",
      desc: "College Exam Dept can set the examiners in the system",
    },
    {
      code: "I",
      title: "Invigilation",
      desc: "Invigilator based on the exam classrooms or halls can be assigned in the system",
    },
    {
      code: "QPU",
      title: "Question paper upload",
      desc: "Facility to upload the question paper online by the designated faculty and once the Question paper is finalized by the exam department OTP based downloading of question paper",
    },
    {
      code: "AM",
      title: "Assignment Management",
      desc: "Uploading –Browse & attach (Any format) – Staff & Student Portal. Viewing the Attached file – Staff & Student Portal. Report highlighting assignments not completed. Reminder on the assignment last date",
    },
    {
      code: "IM",
      title: "Internal marks feeding online",
      desc: "Subject wise marks can be entered manually in the system. Subject in charge in each college will feed the marks online manually",
    },
    {
      code: "FAF",
      title: "Faculty assessment feeding",
      desc: "Subject in charge in each college will feed the marks online",
    },
    {
      code: "EA",
      title: "Examination attendance",
      desc: "Manually examination related attendance can Maintenance of Question banks – course wise. Manual paper setting. Offline (for Subjective) exam options. Exam Supervisor will mark the absent students for each exam in the system. Preparation of paper wise absentee list. Attendance could be tracked via smartcards for which cards and device has to be procured and provided by College",
    },
    {
      code: "CAP",
      title: "Centralized Assessment process",
      desc: "CAP center process with dual authentication is also available in the system so that the marks entries can be done centrally",
    },
    {
      code: "ASE",
      title: "Answer sheet encoding",
      desc: "Method is available where the encoded nos can be generated from the software which hides the student's identity and then the complete assessment of the answer sheet is done. Answers allotment process is there to examiners",
    },
    {
      code: "FMF",
      title: "Final marks feeding",
      desc: "Examiner for each subject will input the final marks manually in the system for the students under his/her scope OR the College Exam Dept. This would be done based on the question paper set",
    },
    {
      code: "RG",
      title: "Result generation and notification",
      desc: "College Exam Dept Officer will generate the reports and publish. Result format would be customized based on the format provided by the College",
    },
    {
      code: "RLP",
      title: "Rank list preparation",
      desc: "Configurable rank master would be provided where by based on the rules ranks of the students would be generated and printed",
    },
    {
      code: "RE",
      title: "Re-evaluation",
      desc: "Student can apply online for re-evaluation of recently conducted exams up to a certain date. Fees for re-evaluation can be paid online or by cash/draft. Fee-paid students will be assigned to moderators for each subject. Moderators will update the re-evaluated marks in the system. Record of marks before re-evaluation will be preserved. Results of Re-evaluation students will be published by Examination Dept officials",
    },
    {
      code: "GCG",
      title: "Grade card generation",
      desc: "Based on the rules defined on ranks and grades for degree courses grade cards would be printed in the College format",
    },
    {
      code: "TSG",
      title: "Transcript sheet generation",
      desc: "Detailed mark sheet as transcript for students would be provided",
    },
    {
      code: "DG",
      title: "Degree Generation",
      desc: "Degree rules would be configured in the system so that the degree through which student is passed out would be derived automatically from the system",
    },
    {
      code: "CP",
      title: "Certificates printing",
      desc: "Certificates will be printed automatically from the system based on the rules defined",
    },
    { code: "RAS", title: "Result Announcement System", desc: "" },
    {
      code: "ER",
      title: "Examination Result declaration through online portal",
      desc: "Results can be accessed on the online portal by the student",
    },
    {
      code: "ERS",
      title: "Examination Result by SMS on mobile phones",
      desc: "SMS will be sent on publishing of result by the College (Note: SMS gateway to be made available by the College",
    },
    {
      code: "MR",
      title: "Moderation & Revaluation",
      desc: "Result Report would be made available which can be published if required",
    },
    {
      code: "CP2",
      title: "Convocation Process",
      desc: "Online Application/Registration form. Online fee payment. Confirmation with issue of certificate",
    },
  ],
  cta: {
    title: "Ready to Digitize Your Exams?",
    description:
      "Contact us for a personalized demo and see how our Student Exams module can streamline your examination management.",
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
