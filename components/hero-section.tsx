"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background image with very low opacity */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/modern-construction-site-with-bim-technology-bluep.jpg')",
          }}
        />
        {/* White overlay to make image very transparent */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container px-4 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            High-Precision BIM Solutions for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Smarter Construction
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
            We help US-based architectural firms and construction companies reduce onsite errors by up to 60% and cut
            material waste through expert engineering-led digital twins.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>
    </section>
  )
}
