import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const processSteps = [
  {
    number: "01",
    title: "Análisis y Planificación",
    description: "Revisamos documentación, definimos alcance y establecemos estándares BIM del proyecto",
  },
  {
    number: "02",
    title: "Modelado y Desarrollo",
    description: "Creamos modelos 3D detallados con información precisa de todos los elementos constructivos",
  },
  {
    number: "03",
    title: "Coordinación y Revisión",
    description: "Detectamos conflictos, coordinamos disciplinas y optimizamos el diseño antes de construcción",
  },
  {
    number: "04",
    title: "Entrega y Soporte",
    description: "Generamos documentación, entregamos modelos federados y brindamos soporte continuo",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Nuestro Proceso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Metodología probada que garantiza precisión y eficiencia en cada fase
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-muted-foreground/20">{step.number}</span>
                </div>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
