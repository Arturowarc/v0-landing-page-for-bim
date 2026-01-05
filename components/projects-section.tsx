import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Torre Corporativa Downtown",
    category: "Comercial",
    image: "/modern-office-tower-building-bim-architecture.jpg",
    stats: { floors: "42", area: "85,000 m²", year: "2024" },
  },
  {
    title: "Hospital Regional Norte",
    category: "Salud",
    image: "/modern-hospital-building-healthcare-architecture.jpg",
    stats: { floors: "8", area: "45,000 m²", year: "2023" },
  },
  {
    title: "Centro Comercial Plaza Vista",
    category: "Retail",
    image: "/modern-shopping-mall-retail-architecture.jpg",
    stats: { floors: "5", area: "120,000 m²", year: "2024" },
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/20 py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Más de 200 proyectos exitosos entregados con metodología BIM
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{project.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{project.stats.floors}</p>
                    <p className="text-xs text-muted-foreground">Pisos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">{project.stats.area}</p>
                    <p className="text-xs text-muted-foreground">Área</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">{project.stats.year}</p>
                    <p className="text-xs text-muted-foreground">Año</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
