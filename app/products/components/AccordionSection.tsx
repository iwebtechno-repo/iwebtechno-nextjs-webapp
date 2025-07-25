"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface Submodule {
  code: string;
  title: string;
  desc: string;
}

export function AccordionSection({ submodules }: { submodules: Submodule[] }) {
  // Group submodules into rows of two for desktop
  const rows = [];
  for (let i = 0; i < submodules.length; i += 2) {
    rows.push([submodules[i], submodules[i + 1]]);
  }
  return (
    <section className="py-10 mt-12">
      <div className="container mx-auto px-4">
        {/* Desktop: rows of two, both expand/collapse together */}
        <div className="hidden md:block space-y-6">
          {rows.map((row, rowIndex) => (
            <Accordion
              key={rowIndex}
              type="single"
              collapsible
              className="grid md:grid-cols-2 gap-6"
            >
              {row.map(
                (submodule, colIdx) =>
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
                              {rowIndex * 2 + colIdx + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg font-heading-michroma">
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
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
              )}
            </Accordion>
          ))}
        </div>
        {/* Mobile: single column, one at a time */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {submodules.map((submodule, idx) => (
              <AccordionItem
                key={submodule.code}
                value={submodule.code}
                className="border rounded-lg"
              >
                <AccordionTrigger className="px-4 py-2 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] rounded-full flex items-center justify-center text-white dark:text-black text-xs font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading-michroma">
                        {submodule.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      {submodule.desc}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
