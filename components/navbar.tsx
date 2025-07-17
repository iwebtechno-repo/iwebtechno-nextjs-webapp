"use client";

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
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

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
      variant={isActive ? "gradient" : "link"}
      effect="fill"
      size={isDesktop ? "default" : "default"}
      className={cn(
        "h-auto transition-all duration-200 flex items-center gap-2", // always row
        isDesktop ? "font-semibold" : "rounded-full px-4 py-3"
      )}
      title={item.label}
      showRipple
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

  const allNavItems = [
    { href: "/", icon: HouseIcon, label: "Home" },
    // Products will be handled as a submenu below, so skip here
    { href: "/innovation", icon: SparkleIcon, label: "Innovation" },
    { href: "/partners", icon: UsersThreeIcon, label: "Partners" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/clients", icon: UserCircleIcon, label: "Clients" },
    { href: "/genzdealz-ai", icon: ChartBar, label: "GENZDEALZ.AI" },
  ];

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-[100] flex justify-center px-4 overflow-visible">
      {/* Mobile & Tablet Navbar (unchanged) */}
      <Card
        variant="none"
        className="w-auto mx-auto flex items-center justify-center gap-x-1 px-2 py-2 rounded-full lg:hidden"
      >
        {/* Home */}
        <NavButton
          key={allNavItems[0].href}
          item={allNavItems[0]}
          isActive={pathname === allNavItems[0].href}
        />
        {/* Products as a direct link for mobile */}
        <NavButton
          item={{
            href: "/products/admission-management",
            icon: SparkleIcon,
            label: "Products",
          }}
          isActive={pathname.startsWith("/products")}
        />
        {/* Render the rest of the nav items */}
        {allNavItems
          .slice(1)
          .map(
            (item) =>
              item.label !== "Home" && (
                <NavButton
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                />
              )
          )}
        <ThemeToggle />
        <div className="sm:hidden">
          <Separator orientation="vertical" className="h-10 mx-1" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="link"
                effect="glass"
                size="icon"
                className="rounded-full"
                showRipple
              >
                <DotsThreeIcon className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 mb-2 p-2" align="center">
              <div className="space-y-1">
                {allNavItems.map((item) => (
                  <Button
                    asChild
                    key={item.href}
                    variant="link"
                    effect="glass"
                    className="w-full justify-start"
                    showRipple
                  >
                    <Link href={item.href} aria-label={item.label}>
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.label}
                    </Link>
                  </Button>
                ))}
                {/* Products as a direct link in popover */}
                <Button
                  asChild
                  key="/products/admission-management"
                  variant="link"
                  effect="glass"
                  className="w-full justify-start"
                  showRipple
                >
                  <Link
                    href="/products/admission-management"
                    aria-label="Admission Mgmt"
                  >
                    <SparkleIcon className="mr-2 h-5 w-5" />
                    Admission Mgmt
                  </Link>
                </Button>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <span>Theme</span>
                <ThemeToggle />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Card>

      {/* Desktop Navbar with Products submenu */}
      <Card
        variant="none"
        className="w-full max-w-6xl mx-auto hidden lg:flex items-center justify-between px-4 py-2 rounded-full"
      >
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
            const [open, setOpen] = useState(false);
            return (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="link"
                    effect="fill"
                    size="default"
                    className="flex items-center gap-2 group"
                    showRipple
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    tabIndex={0}
                    aria-haspopup="menu"
                    aria-expanded={open}
                  >
                    <SparkleIcon className="h-5 w-5" />
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
                  <ul className="grid gap-2 md:grid-cols-2">
                    <li>
                      <Link
                        href="/products/admission-management"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
                          <SparkleIcon className="h-6 w-6 text-primary" />
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
                    <li>
                      <Link
                        href="/products/student-attendance"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
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
                    <li>
                      <Link
                        href="/products/fee-collection"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
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
                    <li>
                      <Link
                        href="/products/student-exams"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
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
                    <li>
                      <Link
                        href="/products/purchase-inventory"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
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
                    <li>
                      <Link
                        href="/products/hrml-payroll"
                        className="group grid grid-cols-[48px_1fr] items-center gap-x-4 px-4 py-4 rounded-lg transition-colors hover:bg-accent focus:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted group-hover:bg-accent/20">
                          <DotsThreeIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-base font-semibold leading-tight">
                            HRML & Payroll
                          </span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Manage HR, payroll, and staff records with ease.
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            );
          })()}
          {/* Render the rest of the nav items */}
          {allNavItems.slice(1).map(
            (item) =>
              // Skip index 0 (Home), Products is already rendered
              item.label !== "Home" && (
                <NavButton
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  isDesktop
                />
              )
          )}
        </div>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
        </div>
      </Card>
    </nav>
  );
};
