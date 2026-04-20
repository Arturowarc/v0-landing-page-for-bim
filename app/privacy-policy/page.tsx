import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | FORMAX STUDIO LLC",
  description: "Privacy Policy for FORMAX STUDIO LLC - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                FORMAX STUDIO LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or use our services, including our BIM consulting and coordination services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Fill out our contact form</li>
                <li>Request a quote for our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email, phone, or SMS</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This information may include your name, email address, phone number, company name, 
                and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you quotes and project-related communications</li>
                <li>Send SMS messages (with your explicit consent) for project updates, service communications, and transactional notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8 bg-muted/30 p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">4. SMS/Text Messaging Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you opt-in to receive SMS messages from FORMAX STUDIO LLC:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Message Types:</strong> Project updates, service communications, and transactional notifications</li>
                <li><strong>Message Frequency:</strong> Message frequency may vary based on your project needs and interactions with us</li>
                <li><strong>Costs:</strong> Message and data rates may apply depending on your mobile carrier</li>
                <li><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe from SMS communications</li>
                <li><strong>Help:</strong> Reply HELP for assistance or contact us at sales@formaxstd.com</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <p className="text-foreground font-medium">
                  Important: We do not share your mobile phone numbers or SMS/text messaging consent 
                  information with third parties or affiliates for their own marketing or promotional 
                  purposes. Your phone number and related consent are used solely for the purposes 
                  outlined in this policy.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business (e.g., email service providers), subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for SMS communications by replying STOP</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
