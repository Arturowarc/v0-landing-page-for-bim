import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-10 md:py-12 lg:py-16 mx-auto">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <svg 
                  className="h-12 w-12 text-black" // Tamaño aumentado (48px) y color negro
                  viewBox="0 0 64 64" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect 
                    x="12" 
                    y="12" 
                    width="40" 
                    height="40" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                  <line x1="12" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="3" />
                  <line x1="12" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground">FORMAX Studio</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              High-precision BIM solutions for smarter construction in the US market.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  BIM Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MEP Coordination
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Technical Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Scan to BIM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">info@formaxstudio.com</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Miami, FL - USA
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} FORMAX Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
