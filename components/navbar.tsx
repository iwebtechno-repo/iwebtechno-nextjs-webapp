"use client";

import React from "react";
import {
  HouseIcon,
  UserCircleIcon,
  SparkleIcon,
  DotsThreeIcon,
  GraduationCap,
  BookOpen,
  ChartBar,
  UsersThreeIcon,
  CaretUpIcon,
  CaretRightIcon,
  InfoIcon,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIconWeight } from "@/lib/morphy-ui/icon-theme-context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavButton = ({
  item,
  isActive,
  isDesktop = false,
}: {
  item: {
    href: string;
    icon: React.ElementType;
    label: string;
  };
  isActive: boolean;
  isDesktop?: boolean;
}) => {
  const iconWeight = useIconWeight();

  return (
    <Button
      variant={isActive ? "multi" : "link"}
      effect="fill"
      size={isDesktop ? "default" : "default"}
      className={cn(
        "h-auto transition-all duration-200 flex items-center gap-2", // always row
        isDesktop ? "font-semibold" : "rounded-full px-4 py-3"
      )}
      title={item.label}
      showRipple={false}
    >
      <Link
        href={item.href}
        aria-label={item.label}
        className="flex items-center gap-2"
      >
        <item.icon
          className="h-5 w-5"
          weight={isActive ? "duotone" : iconWeight}
        />
        <span className="text-base font-medium">{item.label}</span>
      </Link>
    </Button>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  // Define the breadcrumb mapping for different routes
  const breadcrumbMap: Record<string, string> = {
    "/": "Home",
    "/about": "About",
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

  // Define which routes are actually clickable (have pages)
  const clickableRoutes = new Set([
    "/",
    "/about",
    "/products/admission-management",
    "/products/student-attendance",
    "/products/fee-collection",
    "/products/student-exams",
    "/products/purchase-inventory",
    "/products/hrms-payroll",
    "/products/portal-gad",
    "/innovation",
    "/partners",
    "/blog",
    "/clients",
    "/genzdealz-ai",
    "/schedule-demo",
  ]);

  // Define sibling pages for navigation
  const siblingPages: Record<string, Array<{ href: string; label: string }>> = {
    "/products": [
      { href: "/products/admission-management", label: "Admission Management" },
      { href: "/products/student-attendance", label: "Student Attendance" },
      { href: "/products/fee-collection", label: "Fee Collection" },
      { href: "/products/student-exams", label: "Student Exams & Results" },
      {
        href: "/products/purchase-inventory",
        label: "Purchase & Stores Inventory",
      },
      { href: "/products/hrms-payroll", label: "HRMS & Payroll" },
      { href: "/products/portal-gad", label: "Portal & GAD" },
    ],
  };

  // Helper function to generate breadcrumb items
  const generateBreadcrumbItems = (pathname: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const items: Array<{
      href: string;
      label: string;
      isLast: boolean;
      isClickable: boolean;
    }> = [];

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
        isClickable: clickableRoutes.has(currentPath),
      });
    });

    return items;
  };

  // Helper function to get current section and check if navigation should be shown
  const getCurrentSection = (pathname: string) => {
    if (pathname.startsWith("/products/")) {
      return "/products";
    }
    return null;
  };

  // Helper function to get next page in current section (continuous loop)
  const getNextPage = (pathname: string) => {
    const section = getCurrentSection(pathname);
    if (!section || !siblingPages[section]) return null;

    const currentIndex = siblingPages[section].findIndex(
      (page) => page.href === pathname
    );
    if (currentIndex === -1) return null;

    // Loop back to first page if at the end
    const nextIndex = (currentIndex + 1) % siblingPages[section].length;
    return siblingPages[section][nextIndex];
  };

  // Helper function to get previous page in current section (continuous loop)
  const getPreviousPage = (pathname: string) => {
    const section = getCurrentSection(pathname);
    if (!section || !siblingPages[section]) return null;

    const currentIndex = siblingPages[section].findIndex(
      (page) => page.href === pathname
    );
    if (currentIndex === -1) return null;

    // Loop to last page if at the beginning
    const prevIndex =
      currentIndex === 0 ? siblingPages[section].length - 1 : currentIndex - 1;
    return siblingPages[section][prevIndex];
  };

  const breadcrumbItems = generateBreadcrumbItems(pathname);
  const currentSection = getCurrentSection(pathname);
  const nextPage = getNextPage(pathname);
  const previousPage = getPreviousPage(pathname);
  const shouldShowNavigation = currentSection && siblingPages[currentSection];

  const allNavItems = [
    { href: "/", icon: HouseIcon, label: "Home" },
    // Products will be handled as a submenu below, so skip here
    { href: "/about", icon: InfoIcon, label: "About" },
    { href: "/innovation", icon: SparkleIcon, label: "Innovation" },
    { href: "/partners", icon: UsersThreeIcon, label: "Partners" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/clients", icon: UserCircleIcon, label: "Clients" },
    { href: "/genzdealz-ai", icon: ChartBar, label: "GENZDEALZ.AI" },
  ];

  const [open, setOpen] = useState(false); // Products popover
  const [moreOpen, setMoreOpen] = useState(false); // More popover

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-[100] flex justify-center px-4 overflow-visible">
      {/* Removed mobile & tablet navbar for now */}

      {/* Desktop Navbar with Breadcrumb above and Navigation below */}
      <div className="w-full max-w-6xl mx-auto hidden lg:flex flex-col gap-2 relative">
        {/* Modern floating indicator - subtle shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 rounded-full blur-xl opacity-50 pointer-events-none" />
        {/* Breadcrumb section - only show when in a section with sibling pages */}
        {shouldShowNavigation && (
          <Card
            variant="none"
            effect="glass"
            className="px-4 py-2 rounded-full relative group"
          >
            {/* Modern design indicator - subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-yellow-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <Breadcrumb>
              <BreadcrumbList className="flex items-center justify-between relative z-10">
                {/* Left side - Navigation indicator and breadcrumb */}
                <div className="flex items-center">
                  {/* Navigation indicator */}
                  <div className="flex items-center gap-2 mr-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Navigation
                    </span>
                  </div>

                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                      <BreadcrumbItem>
                        {item.isLast ? (
                          <BreadcrumbPage className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.label}
                          </BreadcrumbPage>
                        ) : item.isClickable ? (
                          <BreadcrumbLink
                            asChild
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors hover:underline"
                          >
                            <Link
                              href={item.href}
                              className="flex items-center"
                            >
                              {item.label}
                            </Link>
                          </BreadcrumbLink>
                        ) : (
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-500 cursor-default">
                            {item.label}
                          </span>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbItems.length - 1 && (
                        <BreadcrumbSeparator>
                          <CaretRightIcon className="h-3 w-3 text-gray-400 animate-pulse" />
                        </BreadcrumbSeparator>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Right side - Back and Next navigation */}
                <div className="flex items-center gap-8">
                  {/* Back navigation */}
                  {previousPage && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Back:
                      </span>
                      <Link
                        href={previousPage.href}
                        className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors hover:underline"
                      >
                        <CaretRightIcon className="h-3 w-3 rotate-180" />
                        <span>{previousPage.label}</span>
                      </Link>
                    </div>
                  )}

                  {/* Next navigation */}
                  {nextPage && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Next:
                      </span>
                      <Link
                        href={nextPage.href}
                        className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors hover:underline"
                      >
                        <span>{nextPage.label}</span>
                        <CaretRightIcon className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </Card>
        )}

        {/* Navigation section */}
        <Card
          variant="none"
          className="flex items-center justify-between px-4 py-2 rounded-full relative group"
        >
          {/* Modern design indicator - subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-yellow-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          {/* Left side - Navigation items */}
          <div className="flex items-center gap-x-2">
            {/* Home */}
            <NavButton
              key={allNavItems[0].href}
              item={allNavItems[0]}
              isActive={pathname === allNavItems[0].href}
              isDesktop
            />
            {/* Products submenu as Popover with hover and dropup indicator */}
            {(() => {
              // Check if we're on any product page
              const isOnProductPage = pathname.startsWith("/products/");
              return (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={isOnProductPage ? "multi" : "link"}
                      effect="fill"
                      size="default"
                      className="flex items-center gap-2 group"
                      showRipple={false}
                      onMouseEnter={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                      tabIndex={0}
                      aria-haspopup="menu"
                      aria-expanded={open}
                    >
                      <SparkleIcon
                        className="h-5 w-5"
                        weight={isOnProductPage ? "duotone" : "regular"}
                      />
                      <span className="text-base font-medium">Products</span>
                      <CaretUpIcon
                        className={`h-4 w-4 transition-transform duration-200 ml-1 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="start"
                    className="bg-popover text-popover-foreground shadow-lg border rounded-md w-[640px] p-6 z-[110]"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <ul className="grid gap-2 md:grid-cols-2 auto-rows-fr">
                      <li className="h-full">
                        <Link
                          href="/products/admission-management"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/admission-management"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/admission-management"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <SparkleIcon
                              className={cn(
                                "h-6 w-6",
                                pathname === "/products/admission-management"
                                  ? "text-primary"
                                  : "text-primary"
                              )}
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Admission Management
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Digitize your admission process with online forms
                              and fee collection.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/student-attendance"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/student-attendance"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/student-attendance"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Student Attendance
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Track and manage student attendance efficiently.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/fee-collection"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/fee-collection"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/fee-collection"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <ChartBar className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Fee Collection with Accounts & Finance
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Collect fees and manage accounts with seamless
                              integration.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/student-exams"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/student-exams"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/student-exams"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Student Exams & Results
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Manage exams, results, and student performance
                              online.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/purchase-inventory"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/purchase-inventory"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/purchase-inventory"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <UsersThreeIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Purchase & Stores Inventory
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Streamline purchasing and inventory for your
                              institution.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/hrms-payroll"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/hrms-payroll"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/hrms-payroll"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <DotsThreeIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              HRMS & Payroll
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Manage HR, payroll, and staff records with ease.
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="h-full">
                        <Link
                          href="/products/portal-gad"
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === "/products/portal-gad"
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === "/products/portal-gad"
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <DotsThreeIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-semibold leading-tight">
                              Portal & GAD
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              Student and staff portals with GAD integration.
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              );
            })()}
            {/* About and Innovation always visible */}
            {allNavItems
              .filter((item) => ["About", "Innovation"].includes(item.label))
              .map((item) => (
                <NavButton
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  isDesktop
                />
              ))}
            {/* More dropdown for less important links (cloned Products style) */}
            <Popover open={moreOpen} onOpenChange={setMoreOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="link"
                  effect="fill"
                  size="default"
                  className="flex items-center gap-2 group"
                  showRipple={false}
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                  tabIndex={0}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                >
                  <DotsThreeIcon className="h-5 w-5" />
                  <span className="text-base font-medium">More</span>
                  <CaretUpIcon
                    className={`h-4 w-4 transition-transform duration-200 ml-1 ${
                      moreOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                className="bg-popover text-popover-foreground shadow-lg border rounded-md w-[480px] p-6 z-[110]"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <ul className="grid gap-2 md:grid-cols-2 auto-rows-fr">
                  {allNavItems
                    .filter((item) =>
                      ["Partners", "Blog", "Clients", "GENZDEALZ.AI"].includes(
                        item.label
                      )
                    )
                    .map((item) => (
                      <li className="h-full" key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "group grid grid-cols-[48px_1fr] items-start gap-x-4 px-4 py-4 rounded-lg transition-colors focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-full",
                            pathname === item.href
                              ? "bg-accent/20 border border-primary/20"
                              : "hover:bg-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center h-12 w-12 rounded-full transition-colors",
                              pathname === item.href
                                ? "bg-primary/20"
                                : "bg-muted group-hover:bg-accent/20"
                            )}
                          >
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex flex-col justify-center items-center h-full w-full">
                            <span className="text-base font-semibold leading-tight text-center w-full">
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center gap-x-4">
            <Link href="/schedule-demo">
              <Button
                variant="gradient"
                effect="fade"
                size="default"
                showRipple
              >
                Schedule Demo
              </Button>
            </Link>
            <ThemeToggle />
            <Separator orientation="vertical" className="h-6" />
          </div>
        </Card>
      </div>
    </nav>
  );
};
