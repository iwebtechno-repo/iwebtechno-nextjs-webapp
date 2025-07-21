"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { CaretRightIcon } from "@phosphor-icons/react";

// Define breadcrumb item type
interface BreadcrumbItemType {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  isLast?: boolean;
}

// Define the breadcrumb mapping for different routes
const breadcrumbMap: Record<string, string> = {
  "/": "Home",
  "/products": "Products",
  "/products/admission-management": "Admission Management",
  "/products/student-attendance": "Student Attendance",
  "/products/fee-collection": "Fee Collection",
  "/products/student-exams": "Student Exams & Results",
  "/products/purchase-inventory": "Purchase & Stores Inventory",
  "/products/hrms-payroll": "HRMS & Payroll",
  "/products/portal-gad": "Portal GAD",
  "/innovation": "Innovation",
  "/partners": "Partners",
  "/blog": "Blog",
  "/clients": "Clients",
  "/genzdealz-ai": "GENZDEALZ.AI",
  "/schedule-demo": "Schedule Demo",
};

// Helper function to generate breadcrumb items
const generateBreadcrumbItems = (pathname: string): BreadcrumbItemType[] => {
  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItemType[] = [];

  // Build the path progressively starting from the visible parent
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label =
      breadcrumbMap[currentPath] ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    items.push({
      href: currentPath,
      label,
      isLast: index === segments.length - 1,
    });
  });

  return items;
};

export const BreadcrumbNav = () => {
  const pathname = usePathname();

  const breadcrumbItems = generateBreadcrumbItems(pathname);

  // Don't show breadcrumb if no items (home page or invalid path)
  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 z-[99]">
      <Card variant="none" effect="glass" className="px-4 py-2 rounded-full">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {item.isLast ? (
                    <BreadcrumbPage className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.icon ? (
                        <item.icon className="h-4 w-4 mr-1" />
                      ) : null}
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      asChild
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      <Link href={item.href} className="flex items-center">
                        {item.icon ? (
                          <item.icon className="h-4 w-4 mr-1" />
                        ) : null}
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <CaretRightIcon className="h-3 w-3 text-gray-400" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Card>
    </div>
  );
};
