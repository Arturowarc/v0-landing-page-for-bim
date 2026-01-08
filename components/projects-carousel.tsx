"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const projectImages = [
  {
    title: "BIM Architectural Model",
    description: "High-detail 3D architectural modeling with accurate building components",
    image: "/detailed-revit-architectural-bim-model.jpg",
  },
  {
    title: "MEP Coordination",
    description: "Multidisciplinary coordination in Navisworks showing clash detection",
    image: "/navisworks-mep-coordination-clash-detection.jpg",
  },
  {
    title: "Technical Documentation",
    description: "Construction drawings and detailed technical specifications",
    image: "/construction-technical-drawings-documentation.jpg",
  },
  {
    title: "Structural BIM Model",
    description: "Precise structural engineering models with steel and concrete detailing",
    image: "/structural-bim-model-steel-concrete.jpg",
  },
  {
    title: "MEP BIM Model",
    description: "Fully coordinated MEP models with high-fidelity detailing for mechanical electrical and plumbing systems",
    image: "/bim-coordination-meeting-screen.jpg",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <section id="projects" className="bg-muted/20 py-16 md:py-24 lg:py-32">
      <div className="container px-4 mb-12 md:mb-16 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Our Work
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
            Examples of our BIM modeling, coordination, and documentation capabilities
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
          <Image
            src={projectImages[currentIndex].image || "/placeholder.svg"}
            alt={projectImages[currentIndex].title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-16 text-white">
            <div className="mx-auto px-4 max-w-7xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-balance">
                {projectImages[currentIndex].title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl text-pretty">
                {projectImages[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-lg border-white/20 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-lg border-white/20 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
