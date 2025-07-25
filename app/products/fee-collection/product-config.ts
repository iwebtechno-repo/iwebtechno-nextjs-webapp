import heroImage from "@/public/images/products/fee-collection/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Fee Collection",
    description:
      "Our Fee Collection module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end fee collection rules for Indian Government University digitization.",
    patternType: "finance",
    backgroundImage: heroImage,
    icon: "chart" as const,
  },
  features: [
    {
      icon: "sparkle",
      title: "Online Payments",
      desc: "Multiple payment gateways with real-time processing",
    },
    {
      icon: "graduation",
      title: "Fee Management",
      desc: "Flexible fee structures with installment options",
    },
    {
      icon: "chart",
      title: "Financial Reports",
      desc: "Comprehensive financial analytics and reporting",
    },
    {
      icon: "book",
      title: "Account Integration",
      desc: "Seamless integration with accounting systems",
    },
  ],
  submodules: [
    {
      code: "FM",
      title: "Fee Management",
      desc: "Configurable fee rule process available so that fees can be configured program wise, year wise or category wise by creating fee categories.",
    },
    {
      code: "FPO",
      title: "Fee Payment - Online/Offline",
      desc: "Online Mode: Student needs to login with their own registration no. & do the fee payment. Offline Mode: If any student has brought the cheque/DD/Cash, then admission convener can save the payment details.",
    },
    {
      code: "FI",
      title: "Fee Installments",
      desc: "Students can do the partial fee payment.",
    },
    {
      code: "FPC",
      title: "Fee Payment Cancelation",
      desc: "Fee payment transaction can be cancelled.",
    },
    {
      code: "FR",
      title: "Fee Refund",
      desc: "Excess student fee amount can be returned back to the student.",
    },
    {
      code: "MFP",
      title: "Miscellaneous Fee Payment - Online/Offline",
      desc: "Fees such as Transfer certificate, Examination fee, Provisional Certificate etc. can be paid which are not a part of the academic fees.",
    },
    {
      code: "OP",
      title: "Online Payment",
      desc: "Payment of these fees can be done online using payment gateways, wallet or via Debit Card, Credit Cards, Net Banking, UPI or the very Latest BBPS – Bharat Bill Payment System modes. Installment wise payments are also permitted.",
    },
    {
      code: "FIM",
      title: "Finance Management",
      desc: "Accounts Group/Chart of Accounts/Opening Balance. Receivables and Payables modules. Cash Management. Cost/Center/Annual Budgeting/Tax Structures. Funds & Grants Management. Track Payables/Vendor Ageing Analysis. Raise Debit/Credit Notes. Journal Voucher Transaction. Cash book Entries and managing the registers automatically. Advance Management and its settlement. Generate receipts on Settlement Bills. Inter P&A transfer. Income & Expenditure Reports. Detailed Grants Utilization. Balance sheet. Account Statements. Scheme wise Revenue Expenditure.",
    },
    {
      code: "OB",
      title: "Online Budgeting",
      desc: "Defining Budget Heads. Proposed Budget Management. Budget Allocation. Integrated Budget Management with Receipt and Expenditure Management. Budget Reports.",
    },
  ],
  cta: {
    title: "Ready to Digitize Your Finances?",
    description:
      "Contact us for a personalized demo and see how our Fee Collection module can streamline your financial management.",
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
