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
        "h-auto transition-all duration-200",
        isDesktop
          ? "font-semibold flex-row"
          : "rounded-full px-4 py-3 flex-col gap-y-1"
      )}
      title={item.label}
      showRipple
    >
      <Link href={item.href} aria-label={item.label}>
        <item.icon
          className={cn("h-5 w-5", isDesktop && "mr-2")}
          weight={isActive ? "duotone" : iconWeight}
        />
        <span className={cn(!isDesktop && "text-xs font-medium")}>
          {item.label}
        </span>
      </Link>
    </Button>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  const allNavItems = [
    { href: "/", icon: HouseIcon, label: "Home" },
    { href: "/products", icon: GraduationCap, label: "Products" },
    { href: "/innovation", icon: SparkleIcon, label: "Innovation" },
    { href: "/partners", icon: UsersThreeIcon, label: "Partners" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/clients", icon: UserCircleIcon, label: "Clients" },
    { href: "/genzdealz-ai", icon: ChartBar, label: "GENZDEALZ.AI" },
  ];

  const visibleNavItems = allNavItems;

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Mobile & Tablet Navbar */}
      <Card
        variant="none"
        className="w-auto mx-auto flex items-center justify-center gap-x-1 px-2 py-2 rounded-full lg:hidden"
      >
        {visibleNavItems.map((item) => (
          <NavButton
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
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
                {visibleNavItems.map((item) => (
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

      {/* Desktop Navbar */}
      <Card
        variant="none"
        className="w-full max-w-6xl mx-auto hidden lg:flex items-center justify-between px-4 py-2 rounded-full"
      >
        <div className="flex items-center gap-x-2">
          {visibleNavItems.map((item) => (
            <NavButton
              key={item.href}
              item={item}
              isActive={pathname === item.href}
              isDesktop
            />
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
        </div>
      </Card>
    </nav>
  );
};
