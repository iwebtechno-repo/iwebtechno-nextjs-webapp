import heroImage from "@/public/images/products/portal-gad/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Portal & GAD",
    description:
      "Our Portal & GAD module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end portal and GAD rules for Indian Government University digitization.",
    patternType: "portal",
    backgroundImage: heroImage,
    icon: "dots" as const,
  },
  features: [
    {
      icon: "sparkle",
      title: "Role-Based Portals",
      desc: "Customized portals for different user roles and departments",
    },
    {
      icon: "dots",
      title: "Document Management",
      desc: "Integrated DMS for efficient document handling",
    },
    {
      icon: "chart",
      title: "Analytics Dashboard",
      desc: "Real-time insights and reporting capabilities",
    },
    {
      icon: "book",
      title: "Process Automation",
      desc: "Automation of repetitive processes and workflows",
    },
  ],
  submodules: [
    {
      code: "MR",
      title: "Maintain Resources",
      desc: "Details of different resources i.e. class rooms, conference rooms, meeting rooms, their building, floor and wing name can be maintained here.",
    },
    {
      code: "RBR",
      title: "Resource Booking Request",
      desc: "Employee can request for booking resources by specifying their purpose through this module. On utilization resources have to be released.",
    },
    {
      code: "AM",
      title: "Appointment Management",
      desc: "Appointments can be scheduled from this module so visitor details are available to the front office to view and intimate the concerned user.",
    },
    {
      code: "PCA",
      title: "Pest Control Activities",
      desc: "Tracking the activities with schedule after the contract is given to an agency.",
    },
    {
      code: "SR",
      title: "Sapling Register",
      desc: "Details of Trees, Sapling, Plants inventory can be maintained along with their shelf life, location of plantation, plant inventory etc.",
    },
    {
      code: "EC",
      title: "Register Services Manager",
      desc: "The personal and salary details of the contracted manpower can be maintained agency wise.",
    },
    {
      code: "CM",
      title: "Contact Master",
      desc: "The details and contact of companies and their contact persons can be maintained in this screen which can be used for the purpose of sending courier, Dak etc.",
    },
    {
      code: "GD",
      title: "Garbage Disposal",
      desc: "Disposal of all the garbage to be done and maintained in which form like bags or tunnel or cans.",
    },
    {
      code: "CR",
      title: "Complaint Register",
      desc: "Complaint Management System",
    },
    {
      code: "ECR",
      title: "Energy Consumption Register",
      desc: "Machine energy consumption register",
    },
    {
      code: "TM",
      title: "Trip Management",
      desc: "Request for Vehicle, Confirmation of Vehicle, Trip Completion, Bus Route Master, Bus Service Master",
    },
    {
      code: "DM",
      title: "Dak (Post) Management",
      desc: "Dak (Post) receipt entry by Front office. User can check status of his / her Dak dispatch / receipt in Status Register. Outward Dispatch of (Dak) via Front office.",
    },
    {
      code: "TM2",
      title: "Tender Management",
      desc: "Managing Tenders by defining their EMD, Documents, BG Information etc. Listing items / services for the tender process. Entering the bidders for the tender. Selecting on QCBS / L1 criteria the finalised bidder to start the purchase process",
    },
    {
      code: "FT",
      title: "File Tracking",
      desc: "Creating File Master, Send Files, View File Movement, File Archival",
    },
    {
      code: "DMS",
      title: "Document Management System DMS",
      desc: "File Upload, Upload the scanned documents to the server or the desired location, Create index for document attached by tagging various keywords, Create multiple catalogues or folders to index / attach the said document, View and download the attached document, Access control rights to view / edit documents.",
    },
    {
      code: "IN",
      title: "Important Notifications",
      desc: "Display of important notifications in a workflow targeted to select recipient groups.",
    },
    {
      code: "SSP",
      title: "Self Service Portals",
      desc: "Students Portal, Staff Portal, Parents Portal, Dashboard Access",
    },
    {
      code: "RG",
      title: "Students Portals",
      desc: "My courses, My Time Table /Attendance, My Exam Schedule, My Results, My Fees",
    },
    {
      code: "PP",
      title: "Parents Portal",
      desc: "My Child's Courses, My Child's Attendance Percentage, My Child's Performance, My Child's Results, My Childs's Fees",
    },
    {
      code: "SR2",
      title: "Staff Registration",
      desc: "Staff Profiling, Approval Workflow",
    },
  ],
  cta: {
    title: "Ready to Digitize Your Institute?",
    description:
      "Contact us for a personalized demo and see how our Portal & GAD module can streamline your institute's digital transformation with modern, efficient workflows.",
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
