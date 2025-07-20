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
  ListChecksIcon,
  BookOpen,
  ChartBar,
} from "@phosphor-icons/react";

import Link from "next/link";

const submodules = [
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
];

const PortalGADPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="Portals & GAD"
        subtitle="Digital Transformation System"
        description="Our Portals & GAD module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. Highly configurable role / department wise portals with integrated Document Management System."
        icon={SparkleIcon}
        patternType="portal"
        backgroundImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: SparkleIcon,
                title: "Role-Based Portals",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Customized portals for different user roles and departments
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: ListChecksIcon,
                title: "Document Management",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Integrated DMS for efficient document handling
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: ChartBar,
                title: "Analytics Dashboard",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Real-time insights and reporting capabilities
              </CardDescription>
            </Card>
            <Card
              variant="none"
              effect="glass"
              icon={{
                icon: BookOpen,
                title: "Process Automation",
                gradient: true,
              }}
              className="text-center p-6"
            >
              <CardDescription>
                Streamlined workflows and automated processes
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
              Explore our complete suite of portal and GAD features designed to
              streamline every aspect of digital governance.
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
                <GradientText>Ready to Digitize Your Institute?</GradientText>
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us for a personalized demo and see how our Portal & GAD
                module can streamline your institute's digital transformation
                with modern, efficient workflows.
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

export default PortalGADPage;
