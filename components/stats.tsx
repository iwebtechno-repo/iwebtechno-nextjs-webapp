import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { gradients } from "@/lib/morphy-ui/morphy";

const gradientVariants: Record<string, string> = {
  blue: "bg-gradient-to-r from-blue-700 to-blue-500",
  purple: "bg-gradient-to-r from-purple-700 to-purple-500",
  green: "bg-gradient-to-r from-green-700 to-green-500",
  orange: "bg-gradient-to-r from-orange-600 to-orange-400",
  multi: `bg-gradient-to-r ${gradients.brand}`,
  gradient: `bg-gradient-to-r ${gradients.brand}`,
  link: `bg-gradient-to-r ${gradients.brand}`,
  none: `bg-gradient-to-r ${gradients.brand}`,
  outline: `bg-gradient-to-r ${gradients.brand}`,
};

const Stats = () => {
  const stats = [
    {
      number: "250,000",
      description: "man hours in SaaS",
      variant: "blue" as const,
    },
    {
      number: "12+",
      description: "Universities on-boarded",
      variant: "purple" as const,
    },
    {
      number: "650+",
      description: "Campuses Digitized",
      variant: "green" as const,
    },
    {
      number: "1,000,000",
      description: "Students Live",
      variant: "orange" as const,
    },
    {
      number: "₹8 Billion+",
      description: "Fees Collected",
      variant: "multi" as const,
    },
  ];

  return (
    <section className="py-10 py-16 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              effect="glass"
              className="hover:shadow-md transition-all duration-300"
              variant={stat.variant}
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span
                    className={cn(
                      "bg-clip-text text-transparent",
                      gradientVariants[stat.variant]
                    )}
                  >
                    {stat.number}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
