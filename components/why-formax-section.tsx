import { Users, Award, Briefcase } from "lucide-react"

export function WhyFormaxSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Engineering Excellence Behind Every Model
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            FORMAX Studio was founded by a multidisciplinary team of Civil, Mechanical, and Industrial engineers with
            hands-on experience in the US construction industry. We don't just "draw" in 3D; we understand the physics
            and the logistics of your project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Expertise in US Standards</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience in major markets like Miami and across the US, ensuring compliance with local standards.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/10 mx-auto">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">BIM Specialists</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced Revit & Navisworks workflows executed by certified professionals.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mx-auto">
              <Briefcase className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Business Minded</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We focus on your ROI and project deadlines, not just deliverables.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
