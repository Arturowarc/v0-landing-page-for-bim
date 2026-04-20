"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [smsConsent, setSmsConsent] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  
  if (!termsAccepted) {
    setMessage({ 
      type: "error", 
      text: "Please accept the Privacy Policy and Terms & Conditions to continue." 
    });
    return;
  }
  
  setIsSubmitting(true);
  setMessage(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  // Add SMS consent status to form data
  formData.append("sms_consent", smsConsent ? "Yes" : "No");

  // --- WEB3FORMS CONFIGURATION ---
  formData.append("access_key", "e976dec5-1723-494d-a49a-3c820b7a3c33");
  formData.append("subject", "New Inquiry from FORMAX Website");
  formData.append("from_name", "FORMAX Web");
  formData.append("botcheck", ""); 
  // ----------------------------------

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setMessage({ 
        type: "success", 
        text: "Message sent successfully! We will get back to you shortly." 
      });
      form.reset();
      setSmsConsent(false);
      setTermsAccepted(false);
    } else {
      setMessage({ 
        type: "error", 
        text: "Something went wrong. Please try again." 
      });
    }
  } catch (error) {
    console.error("Form error:", error);
    setMessage({ 
      type: "error", 
      text: "Network error. Please try again or check your internet connection." 
    });
  } finally {
    setIsSubmitting(false);
  }
}
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">Get a Free Quote</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
            Tell us about your project and we'll get back to you shortly with a detailed quote.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:contact@formaxstudio.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary break-all"
                    >
                      sales@formaxstd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <a href="tel:+1234567890" className="text-sm sm:text-base text-muted-foreground hover:text-primary">
                       +1 (301) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Location</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Maryland, US
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <p className="text-xs sm:text-sm text-muted-foreground">
                We'll get back to you within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 bg-card p-6 sm:p-8 rounded-lg border shadow-sm"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project needs, timeline, and any specific requirements..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* SMS Consent Checkbox - Optional */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="sms-consent"
                    checked={smsConsent}
                    onCheckedChange={(checked) => setSmsConsent(checked === true)}
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                  <label htmlFor="sms-consent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to receive SMS messages from FORMAX STUDIO LLC related to project updates, service communications, and transactional notifications.
                  </label>
                </div>
                
                {/* SMS Disclosures */}
                <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md space-y-1">
                  <p><strong>SMS Communication Disclosures:</strong></p>
                  <ul className="list-disc list-inside space-y-0.5 pl-1">
                    <li>Message types: Project updates, service communications, and transactional notifications</li>
                    <li>Message frequency may vary</li>
                    <li>Message and data rates may apply</li>
                    <li>Reply STOP to unsubscribe</li>
                    <li>Reply HELP for help</li>
                    <li>Consent is not a condition of purchase</li>
                  </ul>
                  <p className="pt-1">
                    View our{" "}
                    <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-and-conditions" className="text-primary underline hover:no-underline">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>

              {/* Privacy Policy & Terms Checkbox - Required */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms-consent"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  disabled={isSubmitting}
                  required
                  className="mt-1"
                />
                <label htmlFor="terms-consent" className="text-sm leading-relaxed cursor-pointer">
                  I accept the{" "}
                  <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="text-primary underline hover:no-underline">
                    Terms & Conditions
                  </Link>{" "}
                  *
                </label>
              </div>

              {message && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-sm ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !termsAccepted}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                We'll review your request and get back to you shortly with a detailed quote.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
