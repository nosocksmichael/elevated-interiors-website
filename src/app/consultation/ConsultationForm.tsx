'use client'

import { useState } from 'react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceInterest: '',
    projectDetails: '',
    timeline: '',
    budget: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add form submission logic (email service, CRM, etc.)
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <section className="bg-cream section-padding min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 border border-warm-taupe">
              <div className="w-16 h-16 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-serif text-h1 text-black mb-6">
                Thank You!
              </h1>
              <p className="text-lg text-soft-grey leading-relaxed mb-8">
                We have received your consultation request and will be in touch within 24 hours to schedule your free consultation.
              </p>
              <p className="text-soft-grey mb-8">
                Check your email (including spam folder) for confirmation.
              </p>
              <a href="/" className="btn-primary inline-block">
                Return Home
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Book Your Free Consultation
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Let us Transform Your Space
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed">
              Tell us about your space and we will schedule a free consultation to discuss how The Loveable Spaces Framework(TM) can transform it.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* What to Expect */}
            <div className="bg-cream p-8 mb-12 border border-warm-taupe">
              <h2 className="font-serif text-2xl text-black mb-4">
                What to Expect
              </h2>
              <ul className="space-y-3 text-soft-grey">
                <li className="flex items-start gap-3">
                  <span className="text-sage-green mt-1">✓</span>
                  <span>We will review your submission and contact you within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-green mt-1">✓</span>
                  <span>Schedule a free, no-obligation consultation at your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-green mt-1">✓</span>
                  <span>Receive honest assessment and recommendations for your space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-green mt-1">✓</span>
                  <span>Get transparent pricing and timeline information</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="(416) 555-0123"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="123 Main St, Toronto, ON"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-charcoal mb-2">
                  Service Interest *
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  required
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="room-upscale">Room Upscale (Complete Transformation)</option>
                  <option value="painting">Expert Painting</option>
                  <option value="accent-walls">Accent Walls</option>
                  <option value="consultation">Design Consultation Only</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">
                  Desired Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP (Within 2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="flexible">Flexible / Just exploring</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                  Approximate Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5-10k">$5,000 - $10,000</option>
                  <option value="10-15k">$10,000 - $15,000</option>
                  <option value="15k-plus">$15,000+</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-charcoal mb-2">
                  Tell Us About Your Space *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-warm-taupe bg-white text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                  placeholder="What room(s) are you looking to transform? What is currently not working about the space? What is your vision for how it should look and feel?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full text-center">
                  Request Free Consultation
                </button>
                <p className="text-sm text-soft-grey text-center mt-4">
                  By submitting, you agree to receive communication from Elevated Interiors.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Why Book a Consultation?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Get Expert Assessment
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  We will diagnose what is keeping your space from being loveable and provide honest recommendations.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Get clear, upfront pricing with no hidden fees or surprise costs down the road.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  No Obligation
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Free consultation, no pressure to commit. Just honest conversation about your space.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Clear Next Steps
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Leave knowing exactly what is possible, what it costs, and how long it takes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
