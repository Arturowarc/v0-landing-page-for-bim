import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, CheckCircle2 } from "lucide-react"

export function EfficiencyGapSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Stop guessing. Start building with certainty.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            2D drawings are no longer enough for the competitive US market. Inefficiency in the field leads to costly
            reworks and delayed timelines. At FORMAX Studio, we bridge the gap between design and construction.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Zero Clashes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detect interferences before they reach the field, eliminating costly on-site surprises.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <TrendingDown className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Accurate Quantity Take-offs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reduce material waste by 15-20% with precise automated calculations from BIM models.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <AlertTriangle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Engineering-Led</h3>
              <p className="text-muted-foreground leading-relaxed">
                Models built by engineers, not just drafters. We understand the physics and logistics of your project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
