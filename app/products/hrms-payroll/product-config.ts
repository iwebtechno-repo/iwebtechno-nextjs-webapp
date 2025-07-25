import heroImage from "@/public/images/products/hrms-payroll/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "HRMS & Payroll",
    description:
      "Our HRMS & Payroll Management module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end Payroll rules for Indian Government University digitization.",
    patternType: "hrms",
    backgroundImage: heroImage,
    icon: "dots" as const,
  },
  features: [
    {
      icon: "list",
      title: "Employee Management",
      desc: "Comprehensive employee records and management",
    },
    {
      icon: "chart",
      title: "Payroll Processing",
      desc: "Automated payroll and compliance",
    },
    {
      icon: "check",
      title: "Attendance Tracking",
      desc: "Integrated attendance and leave management",
    },
    {
      icon: "book",
      title: "Leave Management",
      desc: "Flexible leave policies and approvals",
    },
  ],
  submodules: [
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
  ],
  cta: {
    title: "Ready to Digitize Your HR?",
    description:
      "Contact us for a personalized demo and see how our HRMS & Payroll module can streamline your HR processes.",
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
