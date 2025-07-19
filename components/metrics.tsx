"use client";

import { useState, useEffect } from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import {
  Clock,
  Users,
  Coins,
  TrendUp,
  SparkleIcon,
  CheckCircleIcon,
  ArrowUpIcon,
  type IconWeight,
} from "@phosphor-icons/react";

interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string; weight?: IconWeight }>;
  trend: number;
  color: string;
}

const metrics: Metric[] = [
  {
    id: "man-hours",
    value: 250,
    suffix: "K+",
    label: "Man Hours in SaaS",
    description: "Hours saved across campuses",
    icon: Clock,
    trend: 23.5,
    color: "from-[#0470b6] to-[#0891b2]",
  },
  {
    id: "universities",
    value: 12,
    suffix: "+",
    label: "Universities On-boarded",
    description: "Universities successfully digitized",
    icon: Users,
    trend: 67.8,
    color: "from-[#0470b6] to-[#0891b2]",
  },
  {
    id: "campuses",
    value: 650,
    suffix: "+",
    label: "Campuses Digitized",
    description: "Campuses successfully digitized",
    icon: TrendUp,
    trend: 12.3,
    color: "from-[#fbbf24] to-[#f59e0b]",
  },
  {
    id: "students",
    value: 1,
    suffix: "M+",
    label: "Students Live",
    description: "Students actively using our platform",
    icon: Users,
    trend: 45.2,
    color: "from-[#fbbf24] to-[#f59e0b]",
  },
  {
    id: "fees-collected",
    value: 8,
    suffix: "B+",
    label: "Fees Collected",
    description: "₹8 Billion+ fees processed digitally",
    icon: Coins,
    trend: 45.2,
    color: "from-[#fbbf24] to-[#f59e0b]",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("metrics-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  // Format the number based on suffix
  const formatNumber = (num: number, suffix: string) => {
    if (suffix === "K+") {
      return `${num}K+`;
    } else if (suffix === "M+") {
      return `${num}M+`;
    } else if (suffix === "B+") {
      return `₹${num}B+`;
    } else {
      return `${num.toLocaleString()}${suffix}`;
    }
  };

  return (
    <span className="text-4xl md:text-5xl font-bold">
      {formatNumber(count, suffix)}
    </span>
  );
};

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("metrics-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics-section" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#232347]">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0470b6]/5 to-[#fbbf24]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230470b6%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 dark:from-[#fbbf24]/10 dark:to-[#f59e0b]/10 border border-[#0470b6]/20 dark:border-[#fbbf24]/20 mb-6">
            <SparkleIcon className="h-4 w-4 text-[#0470b6] dark:text-black mr-2" />
            <span className="text-sm font-medium text-[#0470b6] dark:text-black">
              Real Impact, Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming <GradientText>Education</GradientText> Through Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our platform is revolutionizing campus management across
            India with measurable results and real impact.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card
              key={metric.id}
              variant="none"
              effect="glass"
              showRipple
              icon={{
                icon: metric.icon,
                title: metric.label,
              }}
              className={`relative overflow-hidden p-6 h-full flex flex-col transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Metric Value */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <CardDescription className="mb-4 flex-1">
                  {metric.description}
                </CardDescription>

                {/* Trend */}
                <div className="flex items-center mt-auto">
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{metric.trend}%</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    vs last month
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#fbbf24]/10 to-[#f59e0b]/10 dark:from-[#0470b6]/10 dark:to-[#f59e0b]/10 mb-4">
              <Users className="h-8 w-8 text-[#fbbf24] dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              25+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">States Covered</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0470b6]/10 to-[#0891b2]/10 dark:from-[#fbbf24]/10 dark:to-[#f59e0b]/10 mb-4">
              <TrendUp className="h-8 w-8 text-[#0470b6] dark:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              99.9%
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
