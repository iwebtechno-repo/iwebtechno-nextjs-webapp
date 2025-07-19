import { GradientText } from "@/components/ui/gradient-text";
import { type IconWeight } from "@phosphor-icons/react";
import { colors, gradients, typography } from "@/lib/morphy-ui/morphy";

interface ProductPageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string; weight?: IconWeight }>;
  patternType:
    | "admission"
    | "attendance"
    | "finance"
    | "exams"
    | "inventory"
    | "hrms"
    | "portal";
}

const patternConfigs = {
  admission: {
    pattern:
      'data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Ccircle cx="40" cy="40" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M0 80 Q40 40 80 80 T160 80 M80 0 Q120 40 80 80 T80 160"/%3E%3C/g%3E%3C/svg%3E',
  },
  attendance: {
    pattern:
      'data:image/svg+xml,%3Csvg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Crect x="30" y="30" width="30" height="30" rx="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M90 0 L90 180 M0 90 L180 90"/%3E%3C/g%3E%3C/svg%3E',
  },
  finance: {
    pattern:
      'data:image/svg+xml,%3Csvg width="110" height="110" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Crect x="35" y="35" width="40" height="40" rx="6"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M110 0 L110 220 M0 110 L220 110 M55 55 L165 165 M165 55 L55 165"/%3E%3C/g%3E%3C/svg%3E',
  },
  exams: {
    pattern:
      'data:image/svg+xml,%3Csvg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Cpath d="M70 20 L120 45 L120 95 L70 120 L20 95 L20 45 Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M140 0 L140 280 M0 140 L280 140 M70 70 L210 210 M210 70 L70 210"/%3E%3C/g%3E%3C/svg%3E',
  },
  inventory: {
    pattern:
      'data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Crect x="40" y="40" width="40" height="40" rx="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M0 120 L240 120 M120 0 L120 240 M60 60 L180 180 M180 60 L60 180"/%3E%3C/g%3E%3C/svg%3E',
  },
  hrms: {
    pattern:
      'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Ccircle cx="50" cy="50" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M100 0 L100 200 M0 100 L200 100 M50 50 L150 150 M150 50 L50 150"/%3E%3C/g%3E%3C/svg%3E',
  },
  portal: {
    pattern:
      'data:image/svg+xml,%3Csvg width="130" height="130" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230470b6" fill-opacity="0.08"%3E%3Cpath d="M65 15 L110 40 L110 90 L65 115 L20 90 L20 40 Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
    flowLines:
      'data:image/svg+xml,%3Csvg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%230470b6" stroke-width="1" stroke-opacity="0.1"%3E%3Cpath d="M130 0 L130 260 M0 130 L260 130 M65 65 L195 195 M195 65 L65 195"/%3E%3C/g%3E%3C/svg%3E',
  },
};

export const ProductPageHeader = ({
  title,
  subtitle,
  description,
  icon: IconComponent,
  patternType,
}: ProductPageHeaderProps) => {
  const config = patternConfigs[patternType];

  return (
    <section className="relative overflow-hidden py-10">
      {/* Contextual Background Pattern */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.light.blue}/15 ${gradients.light.yellow}/10 ${gradients.light.blue}/20 dark:${gradients.dark.blue}/25 dark:${gradients.dark.yellow}/20 dark:${gradients.dark.blue}/30`}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: `url('${config.pattern}')` }}
        ></div>
        {/* Flow Lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url('${config.flowLines}')` }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${gradients.light.blue}/10 ${gradients.light.yellow}/10 border border-[${colors.blue[500]}]/20 dark:border-[${colors.yellow[400]}]/20 mb-6`}
          >
            <IconComponent
              className={`h-4 w-4 text-[${colors.blue[500]}] dark:text-[${colors.yellow[400]}] mr-2`}
            />
            <span
              className={`text-sm font-medium text-[${colors.blue[500]}] dark:text-[${colors.yellow[400]}]`}
            >
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${typography.classes.heading}`}
          >
            <GradientText>{title}</GradientText>
          </h1>

          {/* Description */}
          <p
            className={`text-xl text-[${colors.gray[600]}] dark:text-[${colors.gray[300]}] max-w-3xl mx-auto ${typography.classes.body}`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
