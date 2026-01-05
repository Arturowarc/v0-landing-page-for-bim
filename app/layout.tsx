import type React from "react"
import type { Metadata } from "next"

import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Geist_Mono, Space_Grotesk as V0_Font_Space_Grotesk, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _spaceGrotesk = V0_Font_Space_Grotesk({ subsets: ['latin'], weight: ["300","400","500","600","700"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Formax Studio",
  description:
    "Professional BIM engineering services: 3D modeling, multidisciplinary coordination, technical documentation, and construction project consultancy.",
  keywords: "BIM, Building Information Modeling, 3D modeling, BIM coordination, Engineering, construction, AEC, Architect",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",    
    },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
