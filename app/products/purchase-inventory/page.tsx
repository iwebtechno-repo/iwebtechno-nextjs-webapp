"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SparkleIcon,
  CheckCircleIcon,
  ListChecksIcon,
  PlusCircleIcon,
  ChartBarIcon,
  BookOpenIcon,
  type Icon as PhosphorIconType,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import { GradientText } from "@/components/ui/gradient-text";

const sampleScreens = [
  {
    name: "Purchase Requisition",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/purchase-n-store-srm-1.jpg",
  },
  {
    name: "Purchase Order",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/purchase-n-store-srm-2.jpg",
  },
  {
    name: "Request For Quotation",
    url: "https://iwebtechno.com/wp-content/uploads/2019/11/purchase-n-store-srm-3.jpg",
  },
];

const submodules = [
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
];

const submoduleIcons: Record<string, PhosphorIconType> = {
  PR: ListChecksIcon,
  SM: PlusCircleIcon,
  TM: ChartBarIcon,
  SPO: BookOpenIcon,
  SI: CheckCircleIcon,
  VM: PlusCircleIcon,
};

const PurchaseInventoryPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      {/* Modern Hero Section with Purchase Inventory Contextual Background */}
      <section className="relative overflow-hidden py-10">
        {/* Contextual Background Pattern - Supply Chain/Inventory Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0470b6]/15 via-[#f49d2f]/10 to-[#0470b6]/20 dark:from-[#0470b6]/25 dark:via-[#f49d2f]/20 dark:to-[#0470b6]/30">
          {/* Supply Chain Pattern */}
          <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Crect x="40" y="40" width="40" height="40" rx="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-60'></div>
          {/* Supply Chain Flow Lines */}
          <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M0 120 L240 120 M120 0 L120 240 M60 60 L180 180 M180 60 L60 180"/%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-40'></div>
        </div>

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0470b6]/10 to-[#f49d2f]/10 border border-[#0470b6]/20 dark:border-[#f49d2f]/20">
                  <SparkleIcon className="h-4 w-4 text-[#0470b6] dark:text-[#f49d2f] mr-2" />
                  <span className="text-sm font-medium text-[#0470b6] dark:text-[#f49d2f]">
                    Purchase & Stores Inventory Module
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
                    <GradientText>Purchase & Stores Inventory</GradientText>
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Supply Chain Management
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Our Purchase & Stores Inventory Management module will
                  digitize your University, College, School or even Coaching
                  Classes / Tutorials with ease. Our Purchase enables to work
                  across different purchase modes like domestic, foreign,
                  tender, rate contracts, GEM Procurement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  effect="glass"
                  size="lg"
                  icon={{ icon: SparkleIcon }}
                  className="text-lg px-8 py-4"
                  onClick={() =>
                    window.open("https://iwebtechno.com/contact", "_blank")
                  }
                >
                  Schedule a Demo
                </Button>
                <Button
                  variant="outline"
                  effect="glass"
                  size="lg"
                  className="text-lg px-8 py-4 border-[#0470b6] text-[#0470b6] hover:bg-[#0470b6] hover:text-white dark:border-[#f49d2f] dark:text-[#f49d2f] dark:hover:bg-[#f49d2f] dark:hover:text-white"
                >
                  Learn More
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0470b6] to-[#f49d2f] rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Purchase Requisition
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0470b6] to-[#f49d2f] rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Supplier Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0470b6] to-[#f49d2f] rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Inventory Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0470b6] to-[#f49d2f] rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Vendor Management
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <Card
                  variant="gradient"
                  effect="glass"
                  className="p-8 lg:p-12 shadow-2xl border-0"
                >
                  <img
                    src="https://iwebtechno.com/wp-content/uploads/2019/11/icon-purchase-stores-invontory.jpg"
                    alt="Purchase & Stores Inventory System"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                  />
                  <div className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Complete Supply Chain Solution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Streamline your procurement and inventory management with
                      our integrated purchase and stores system.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0470b6]/20 to-[#f49d2f]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#f49d2f]/20 to-[#0470b6]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Screens Gallery */}
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>Sample Screens</GradientText>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our comprehensive purchase and inventory interface with
            modern, user-friendly screens designed for efficient supply chain
            management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleScreens.map((img) => (
            <Card
              key={img.url}
              variant="multi"
              effect="glass"
              className="p-4 flex flex-col items-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                <img
                  src={img.url}
                  alt={img.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  title={img.name}
                />
              </div>
              <div className="text-center">
                <span
                  className="text-sm font-semibold text-gray-900 dark:text-white"
                  title={img.name}
                >
                  {img.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Submodules Section - Ultra Compact List Design */}
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>Sub Modules</GradientText>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive suite of modules designed to handle every aspect of
            purchase and inventory management.
          </p>
        </div>

        {/* Desktop: Row-linked accordions - Ultra Compact */}
        <div className="hidden lg:flex flex-col max-w-5xl mx-auto">
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
                              className="border-b border-gray-200 dark:border-gray-700 py-2"
                            >
                              <AccordionTrigger className="hover:no-underline py-1">
                                <span className="flex items-center gap-2 w-full">
                                  <span className="flex-shrink-0 text-sm font-bold bg-gradient-to-r from-[#0470b6] to-[#f49d2f] bg-clip-text text-transparent">
                                    {submodules.findIndex(
                                      (m) => m.code === mod.code
                                    ) + 1}
                                    .
                                  </span>
                                  <div className="flex items-center gap-2 flex-1">
                                    <Icon
                                      className="h-4 w-4 text-[#0470b6] dark:text-[#f49d2f]"
                                      weight="regular"
                                    />
                                    <span className="font-semibold text-sm text-gray-900 dark:text-white">
                                      {mod.title}
                                    </span>
                                  </div>
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="mt-1 ml-6 pr-4">
                                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {mod.desc}
                                  </span>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })()
                      : null
                  )}
                </div>
              </Accordion>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile & Tablet: Single column, independent accordions - Ultra Compact */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <Accordion type="multiple" className="w-full">
            {submodules.map((mod) => {
              const Icon = submoduleIcons[mod.code] || CheckCircleIcon;
              return (
                <AccordionItem
                  value={mod.code}
                  key={mod.code}
                  className="border-b border-gray-200 dark:border-gray-700 py-2"
                >
                  <AccordionTrigger className="hover:no-underline py-1">
                    <span className="flex items-center gap-2 w-full">
                      <span className="flex-shrink-0 text-sm font-bold bg-gradient-to-r from-[#0470b6] to-[#f49d2f] bg-clip-text text-transparent">
                        {submodules.findIndex((m) => m.code === mod.code) + 1}.
                      </span>
                      <div className="flex items-center gap-2 flex-1">
                        <Icon
                          className="h-4 w-4 text-[#0470b6] dark:text-[#f49d2f]"
                          weight="regular"
                        />
                        <span className="font-semibold text-sm text-gray-900 dark:text-white">
                          {mod.title}
                        </span>
                      </div>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-1 ml-6 pr-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {mod.desc}
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Card
          variant="gradient"
          effect="glass"
          className="p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0470b6]/5 to-[#f49d2f]/5">
            <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-30'></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f]">
              Ready to optimize your supply chain?
            </h3>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us for a personalized demo and see how our Purchase &
              Stores Inventory module can streamline your institute's
              procurement processes with modern, efficient workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                effect="glass"
                size="lg"
                icon={{ icon: SparkleIcon }}
                className="text-lg px-8 py-4"
                onClick={() =>
                  window.open("https://iwebtechno.com/contact", "_blank")
                }
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                effect="glass"
                size="lg"
                className="text-lg px-8 py-4 border-[#0470b6] text-[#0470b6] hover:bg-[#0470b6] hover:text-white dark:border-[#f49d2f] dark:text-[#f49d2f] dark:hover:bg-[#f49d2f] dark:hover:text-white"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default PurchaseInventoryPage;
