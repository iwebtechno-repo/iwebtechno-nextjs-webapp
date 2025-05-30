import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"

export default function Clients() {
  // Placeholder for client logos
  const clients = [
    { name: "Delhi University", logo: "/placeholder.svg?height=80&width=160" },
    { name: "IIT Mumbai", logo: "/placeholder.svg?height=80&width=160" },
    { name: "St. Xavier's College", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Amity University", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Symbiosis International", logo: "/placeholder.svg?height=80&width=160" },
    { name: "BITS Pilani", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by <GradientText variant="blue">Leading Institutions</GradientText>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
