"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  GraduationCap,
  Calendar,
  CreditCard,
  BookOpen,
  FileText,
  MonitorCog,
  BarChart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const productMenuItems = [
  {
    title: "Admission Management",
    icon: GraduationCap,
    href: "/products/admission-management",
  },
  {
    title: "Student Attendance",
    icon: Calendar,
    href: "/products/student-attendance",
  },
  {
    title: "Fee Collection",
    icon: CreditCard,
    href: "/products/fee-collection",
  },
  {
    title: "Learning Management",
    icon: CreditCard,
    href: "/products/learning-management",
  },
  {
    title: "Timetable Management",
    icon: Calendar,
    href: "/products/timetable-management",
  },
  {
    title: "Examination System",
    icon: FileText,
    href: "/products/examination-system",
  },
  {
    title: "Analytics Dashboard",
    icon: BarChart,
    href: "/products/analytics-dashboard",
  },
];

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full ${scrolled ? "" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="iWebTechno Logo"
            width={180}
            height={40}
            className="h-10 w-auto dark:hidden"
          />
          <Image
            src="/logo.png"
            alt="iWebTechno Logo"
            width={180}
            height={40}
            className="hidden h-10 w-auto dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>PRODUCTS</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="icon-container-blue">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Ready to transform your institution?
                      </p>
                      <Button asChild size="sm">
                        <Link href="/products">View All Products</Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/innovation" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    INNOVATION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    PARTNERS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    BLOG
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/clients" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    CLIENTS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/genzdealz-ai" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    GENZDEALZ.AI
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 lg:flex">
          <ThemeToggle />
          <Button asChild className="btn-gradient-blue card-hover-scale">
            <Link href="/schedule-demo">SCHEDULE A DEMO</Link>
          </Button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 glassEffect-heavy duration-300 lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <nav className="container mx-auto h-full overflow-y-auto px-4 py-8">
          <ul className="flex flex-col space-y-6">
            <li>
              <Link
                href="/"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <div className="space-y-4">
                <p className="text-lg font-medium text-emphasis">PRODUCTS</p>
                <div className="ml-4 space-y-3">
                  {productMenuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="icon-container-blue">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-emphasis">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/innovation"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                INNOVATION
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                PARTNERS
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                CLIENTS
              </Link>
            </li>
            <li>
              <Link
                href="/genzdealz-ai"
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                GENZDEALZ.AI
              </Link>
            </li>
            <li className="pt-6">
              <Button
                asChild
                className="w-full btn-gradient-blue card-hover-scale"
              >
                <Link
                  href="/schedule-demo"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SCHEDULE A DEMO
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
