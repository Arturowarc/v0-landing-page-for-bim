"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2"> 
          {/* gap-2 da la separación ideal para un logo de este estilo */}
          <div className="flex items-center justify-center">
            <svg 
              className="h-10 w-10 text-black" // Tamaño corregido a 40px para que no sea gigante
              viewBox="10 10 44 44" // El "punto dulce" para que no se corte ni se encime
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                x="12" 
                y="12" 
                width="40" 
                height="40" 
                stroke="currentColor" 
                strokeWidth="4" // Aumenté un poco el grosor para que tenga más peso visual
                fill="none" 
              />
              <line x1="12" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="4" />
              <line x1="12" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-black">
            FORMAX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto max-w-7xl px-4 py-4 space-y-3">
            <Link
              href="#services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
