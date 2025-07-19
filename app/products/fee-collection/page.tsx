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
  GraduationCap,
  ChartBar,
  BookOpen,
  CheckCircleIcon,
  PlusCircleIcon,
  WarningCircleIcon,
  ListChecksIcon,
  type IconWeight,
} from "@phosphor-icons/react";
import Link from "next/link";

const submodules = [
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
];

const submoduleIcons: Record<
  string,
  React.ComponentType<{ className?: string; weight?: IconWeight }>
> = {
  FM: ListChecksIcon,
  FPO: PlusCircleIcon,
  FI: ListChecksIcon,
  FPC: WarningCircleIcon,
  FR: CheckCircleIcon,
  MFP: PlusCircleIcon,
  OP: ChartBar,
  FIM: BookOpen,
  OB: ChartBar,
};

const FeeCollectionPage = () => {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
      <ProductPageHeader
        title="Fee Collection & Finance"
        subtitle="Financial Management System"
        description="Our Online Fee Collection module is integrated with Accounts and Finance and it will digitize your University, College, School or even Coaching Classes / Tutorials with ease. Multiple payment modes including UPI, BBPS, and traditional methods."
        icon={SparkleIcon}
        patternType="finance"
      />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={SparkleIcon} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Online Payments</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Multiple payment gateways with real-time processing
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={GraduationCap} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fee Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible fee structures with installment options
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={ChartBar} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Reports</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive financial analytics and reporting
              </p>
            </Card>
            <Card variant="none" className="text-center p-6">
              <GradientIcon icon={BookOpen} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Account Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamless integration with accounting systems
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
              Explore our complete suite of fee collection and finance features
              designed to streamline every aspect of financial management.
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
              Ready to streamline your financial operations?
            </h3>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us for a personalized demo and see how our Fee Collection
              & Finance module can streamline your institute's financial
              processes with modern, efficient workflows.
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

export default FeeCollectionPage;
