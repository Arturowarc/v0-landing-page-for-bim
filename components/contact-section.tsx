"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
// import { sendContactEmail } from "@/app/actions/contact"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage(null);

  const formData = new FormData(e.currentTarget);

  // --- WEB3FORMS CONFIGURATION ---
  // Replace 'YOUR_ACCESS_KEY_HERE' with the code sent to your Zoho email
  formData.append("access_key", "e976dec5-1723-494d-a49a-3c820b7a3c33"); 
  formData.append("subject", "New Inquiry from FORMAX Website");
  formData.append("from_name", "FORMAX Web System");
  formData.append("botcheck", ""); 
  // -------------------------------

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setMessage({ 
        type: "success", 
        text: "Message sent successfully! We will get back to you shortly." 
      });
      e.currentTarget.reset(); 
    } else {
      setMessage({ 
        type: "error", 
        text: "Something went wrong. Please try again or contact us directly." 
      });
    }
  } catch (error) {
    setMessage({ 
      type: "error", 
      text: "Network error. Please check your connection and try again." 
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
                      +1 (234) 567-890
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
                      Serving US Market
                      <br />
                      Nearshore Operations
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

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
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
