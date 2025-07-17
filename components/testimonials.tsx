import { Quotes } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const gradientVariants: Record<string, string> = {
  blue: "bg-gradient-to-r from-blue-700 to-blue-500",
  purple: "bg-gradient-to-r from-purple-700 to-purple-500",
  green: "bg-gradient-to-r from-green-700 to-green-500",
  orange: "bg-gradient-to-r from-orange-600 to-orange-400",
  multi: "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400",
  gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400", // default
  link: "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400", // default
  none: "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400", // default
  outline: "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400", // default
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We are digitizing our non-academic as well as all academic processes using iWeb’s IUMS. Thanks to Kotak & Axis Bank in integrating and working together with iWeb. Together it’s a seamless solution and we have started experiencing real tangible benefits of this digitization.",
      author: "Mr. Balaji",
      position: "FO, SDUAHER, Kollar, Karnataka",
      variant: "blue" as const,
    },
    {
      quote:
        "iWeb’s IUMS on a complete FREEMIUM Model has helped us digitize our Horticulture & Veterinary University operations and streamlined the admission & exam process for our University as well as affiliated colleges. We are proud to claim that we are 100% cashless & digital.",
      author: "Prof T V Ramana",
      position: "SVVU, Tirupati, Andhra Pradesh",
      variant: "purple" as const,
    },
    {
      quote:
        "Over the last 6 years we have digitized using iWeb’s IUMS – Integrated University Management System which is first of its kinds with Agricultural Universities in India encompassing 15,000 students staff and more than 25 colleges on a common system.",
      author: "Prof Ghorpade",
      position: "Officer-in-Charge, Dr PDKV, Akola, Maharashtra",
      variant: "green" as const,
    },
    {
      quote:
        "We are thankful to Kotak Bank & Paytm for introducing iWeb IUMS which now runs at our campus on a unique FREEMIUM Model. Since we are into Yoga Education having students enrolling even from abroad, iWeb’s Online Admission Management System on FREEMIUM is a big boon for us",
      author: "Prof Pradeep Kumar",
      position: "COE, SVYASA, Bengaluru, Karnataka",
      variant: "orange" as const,
    },
  ];

  return (
    <section className="py-16 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400">
            Clients
          </span>{" "}
          Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant={testimonial.variant} showRipple>
              <div className="p-6">
                <Quotes className="h-8 w-8 text-gray-300 dark:text-gray-700 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <h4 className="font-semibold">
                    <span
                      className={cn(
                        "bg-clip-text text-transparent",
                        gradientVariants[testimonial.variant]
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
