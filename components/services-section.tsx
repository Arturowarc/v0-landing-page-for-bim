import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cable as Cube, Network, FileText, Scan } from "lucide-react"

const services = [
  {
    icon: Cube,
    title: "BIM Modeling",
    description:
      "High-LOD architectural and structural models built by engineers who understand the physics and logistics of your project. Precision-focused 3D modeling for accurate execution.",
  },
  {
    icon: Network,
    title: "Multidisciplinary Coordination",
    description:
      "Advanced MEP coordination using Navisworks to eliminate system conflicts before installation. Zero clashes detected before they reach the field, saving time and reducing costly reworks.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Automated technical sheets and precise Bill of Materials (BoM) generation. Accurate quantity take-offs reduce material waste by 15-20%, ensuring cost-effective project delivery.",
  },
  {
    icon: Scan,
    title: "Scan To BIM",
    description:
      "Convert laser scan point cloud data into accurate as-built BIM models. Capture existing conditions with precision and create intelligent models for renovation and retrofit projects.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Comprehensive BIM solutions for every phase of your construction project
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors w-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
