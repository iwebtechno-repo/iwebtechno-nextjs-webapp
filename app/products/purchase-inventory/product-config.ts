import heroImage from "@/public/images/products/purchase-inventory/hero.jpg";
import type { ColorVariant, ComponentEffect } from "@/lib/morphy-ui/types";

const productConfig = {
  hero: {
    title: "Purchase & Inventory",
    description:
      "Our Purchase & Inventory module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. We cover end to end purchase and inventory rules for Indian Government University digitization.",
    patternType: "inventory",
    backgroundImage: heroImage,
    icon: "book" as const,
  },
  features: [
    {
      icon: "list",
      title: "Purchase Requisition",
      desc: "Automated and manual PR with approval workflows",
    },
    {
      icon: "plus",
      title: "Supplier Management",
      desc: "Complete supplier registration and contract management",
    },
    {
      icon: "check",
      title: "Inventory Tracking",
      desc: "Real-time stock management with QC and goods tracking",
    },
    {
      icon: "chart",
      title: "Tender Management",
      desc: "Complete tender process from bidder selection to work orders",
    },
  ],
  submodules: [
    {
      code: "PR",
      title: "Purchase Requisition",
      desc: "Auto and manual PR with approvals",
    },
    {
      code: "SM",
      title: "Supplier Management",
      desc: "Supplier Registration. Define Supplier product pricing. Define Supplier product based contract",
    },
    {
      code: "TM",
      title: "Tender Management",
      desc: "Bidder Selection. Enter bid. Sanction PO. Work Order creation",
    },
    {
      code: "SPO",
      title: "Purchase Order",
      desc: "Auto PO. PR from PO. Direct PO. Cash PO. Foreign PO. Gem PO. Service PO. Work Orders",
    },
    {
      code: "SI",
      title:
        "Stores & Inventory (Products with shelf life/without shelf life & Capital Goods/Assets )",
      desc: "Goods Inward. Goods Issue. QC Sampling. QC Results. Update Stock. Add opening Stock",
    },
    {
      code: "VM",
      title: "Vendor Management",
      desc: "Registration of Vendor. Approval of the goods and services offered under registration period. Blacklisting/Debarring of Vendors. Renewal of vendors. Online payment collection for registration and renewal",
    },
  ],
  cta: {
    title: "Ready to Digitize Your Inventory?",
    description:
      "Contact us for a personalized demo and see how our Purchase & Inventory module can streamline your inventory management.",
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
