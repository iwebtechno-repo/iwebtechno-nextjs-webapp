"use client";

import { ProductPageHeader } from "@/components/ui/product-page-header";
import { GradientIcon } from "@/components/ui/gradient-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { gradients } from "@/lib/morphy-ui/morphy";
import {
  SparkleIcon,
  WarningCircleIcon,
  CheckCircleIcon,
  ListChecksIcon,
  PlusCircleIcon,
  ChartBar,
  BookOpen,
  type Icon as PhosphorIconType,
} from "@phosphor-icons/react";
import Link from "next/link";

const submodules = [
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
];

const submoduleIcons: Record<string, PhosphorIconType> = {
  EPC: ListChecksIcon,
  ERC: ListChecksIcon,
  RH: CheckCircleIcon,
  ES: ChartBar,
  ECA: BookOpen,
  EC: BookOpen,
  SA: CheckCircleIcon,
  EEM: PlusCircleIcon,
  I: WarningCircleIcon,
  QPU: BookOpen,
  AM: ListChecksIcon,
  IM: ChartBar,
  FAF: PlusCircleIcon,
  EA: CheckCircleIcon,
  CAP: WarningCircleIcon,
  ASE: BookOpen,
  FMF: ChartBar,
  RG: ListChecksIcon,
  RLP: PlusCircleIcon,
  RE: WarningCircleIcon,
  GCG: BookOpen,
  TSG: ChartBar,
  DG: ListChecksIcon,
  CP: PlusCircleIcon,
  RAS: WarningCircleIcon,
  ER: BookOpen,
  ERS: ChartBar,
  MR: ListChecksIcon,
  CP2: PlusCircleIcon,
};

const StudentExamsPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="Student Exams & Results"
        subtitle="Examination Management System"
        description="Our Student Exams & Results module will digitize your University, College, School or even Coaching Classes / Tutorials with ease. Comprehensive examination management from scheduling to result generation."
        icon={SparkleIcon}
        patternType="exams"
      />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={SparkleIcon} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Exam Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automated exam scheduling and timetable management
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={BookOpen} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Question Papers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure question paper upload and download system
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={ChartBar} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Result Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automated result generation and grade calculation
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={CheckCircleIcon} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Attendance Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exam attendance monitoring and reporting
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Submodules Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Comprehensive Modules</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete suite of examination and result management
              features designed to streamline every aspect of academic
              assessment.
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
                            value={submodule.code}
                            className="border rounded-lg"
                          >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <div className="flex items-center gap-4 text-left">
                                <GradientIcon
                                  icon={submoduleIcons[submodule.code]}
                                  size="sm"
                                />
                                <div>
                                  <h3 className="font-semibold text-lg">
                                    {submodule.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {submodule.desc}
                                  </p>
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
                  <AccordionTrigger className="px-4 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <GradientIcon
                        icon={submoduleIcons[submodule.code]}
                        size="sm"
                      />
                      <div>
                        <h3 className="font-semibold">{submodule.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {submodule.desc}
                        </p>
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
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Card
          variant="gradient"
          effect="glass"
          className="p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradients.brand}/5`}
          >
            <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-30'></div>
          </div>

          <div className="relative z-10">
            <h3
              className={`text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${gradients.brand}`}
            >
              Ready to streamline your examinations?
            </h3>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us for a personalized demo and see how our Student Exams
              module can streamline your institute's examination processes with
              modern, efficient workflows.
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
      </section>
    </main>
  );
};

export default StudentExamsPage;
