import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";

export default function Stats() {
  const stats = [
    {
      number: "250,000",
      description: "man hours in SaaS",
      variant: "blue",
    },
    {
      number: "12+",
      description: "Universities on-boarded",
      variant: "purple",
    },
    {
      number: "650+",
      description: "Campuses Digitized",
      variant: "green",
    },
    {
      number: "1,000,000",
      description: "Students Live",
      variant: "orange",
    },
    {
      number: "₹8 Billion+",
      description: "Fees Collected",
      variant: "multi",
    },
  ];

  return (
    <section className="py-16 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <GlassCard
              key={index}
              intensity="light"
              className="hover:shadow-md transition-all duration-300"
              variant={stat.variant as any}
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <GradientText variant={stat.variant as any}>
                    {stat.number}
                  </GradientText>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
