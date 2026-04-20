import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | FORMAX STUDIO LLC",
  description: "Terms and Conditions for FORMAX STUDIO LLC - Read our terms of service for BIM consulting and coordination services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the website and services of FORMAX STUDIO LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                you agree to be bound by these Terms & Conditions. If you do not agree with any part of these 
                terms, you may not access or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FORMAX STUDIO LLC provides Building Information Modeling (BIM) consulting and coordination 
                services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>BIM Modeling (Architectural, Structural, MEP)</li>
                <li>Clash Detection and Coordination</li>
                <li>4D Scheduling and Simulation</li>
                <li>As-Built Documentation</li>
                <li>Technical Support and Consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use the website to transmit any harmful or malicious code</li>
                <li>Interfere with or disrupt the website or servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Contact Form and Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit information through our contact form:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You agree to provide accurate and complete information</li>
                <li>You consent to us contacting you regarding your inquiry</li>
                <li>If you opt-in to SMS communications, you agree to receive text messages as described in our{" "}
                  <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">5. SMS Communications Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By opting in to receive SMS messages from FORMAX STUDIO LLC, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>You will receive SMS messages related to project updates, service communications, and transactional notifications</li>
                <li>Message frequency may vary based on your project needs</li>
                <li>Message and data rates may apply according to your mobile carrier plan</li>
                <li>You can opt-out at any time by replying STOP to any message</li>
                <li>You can get help by replying HELP or contacting us at sales@formaxstd.com</li>
                <li>Consent to receive SMS is not a condition of purchase or using our services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We will not share your mobile phone number or SMS consent with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of FORMAX STUDIO LLC or its content suppliers and is protected by intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works without 
                our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Service Agreements</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms govern your use of our website. Actual BIM services are subject to separate 
                service agreements, proposals, or contracts that will be provided and agreed upon before 
                the commencement of any project work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, FORMAX STUDIO LLC shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising out of or 
                related to your use of our website or services. Our total liability shall not exceed 
                the amount paid by you for the specific services giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties 
                of any kind, either express or implied. We do not warrant that the website will be 
                uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless FORMAX STUDIO LLC, its officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses arising from your 
                use of our website or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State 
                of Maryland, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting to the website. Your continued use of the website after 
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-muted-foreground space-y-1">
                <p><strong>FORMAX STUDIO LLC</strong></p>
                <p>Email: sales@formaxstd.com</p>
                <p>Phone: +1 (301) 567-890</p>
                <p>Location: Maryland, US</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
