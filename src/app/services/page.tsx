import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Services | Elevated Interiors',
  description: 'Space upscale solutions for GTA homes. Room transformations, expert painting, accent walls, and design consultations—all without traditional renovation.',
}

export default function ServicesPage() {
  const services = [
    {
      name: 'Room Upscale',
      slug: 'room-upscale',
      tagline: 'Complete Room Transformation',
      description: 'Transform tired spaces into designer-grade rooms without renovation chaos. Our signature service delivers complete room makeovers in 1 week using The Loveable Spaces Framework™.',
      features: [
        'Complete design consultation',
        'Custom transformation plan',
        'Designer-grade materials',
        'Professional installation',
        'Styling & finishing',
        '1-week completion',
      ],
      investment: '$8K-$15K',
      timeline: '1 Week',
    },
    {
      name: 'Expert Painting',
      slug: 'painting',
      tagline: 'Professional Painting Excellence',
      description: 'Premium painting service that elevates your space. We use designer-selected colors, professional-grade materials, and expert craftsmanship to deliver flawless results.',
      features: [
        'Color consultation',
        'Premium paint selection',
        'Professional preparation',
        'Expert application',
        'Clean, precise finish',
        'Quick turnaround',
      ],
      investment: '$2K-$5K',
      timeline: '2-3 Days',
    },
    {
      name: 'Accent Walls',
      slug: 'accent-walls',
      tagline: 'Statement Walls That Define Spaces',
      description: 'Strategic accent walls that create instant visual impact. From bold paint to textured treatments, we design and execute statement walls that transform rooms.',
      features: [
        'Design consultation',
        'Material recommendations',
        'Color & texture selection',
        'Expert installation',
        'Coordinated styling',
        'Fast completion',
      ],
      investment: '$1K-$3K',
      timeline: '1-2 Days',
    },
    {
      name: 'Design Consultation',
      slug: 'consultation',
      tagline: 'Expert Guidance for Your Space',
      description: 'Get clarity and direction for your space transformation. Our consultations provide expert guidance, actionable solutions, and honest advice about what's possible.',
      features: [
        'Space assessment',
        'Problem diagnosis',
        'Solution recommendations',
        'Budget guidance',
        'Material suggestions',
        'Action plan',
      ],
      investment: '$500',
      timeline: '2 Hours',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Our Services
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Space Upscale Solutions
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed">
              Specialized services designed to transform your GTA home without the chaos, timeline, or cost of traditional renovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-soft-grey text-sm uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>
                  <h2 className="font-serif text-h1 text-black mb-6">
                    {service.name}
                  </h2>
                  <p className="text-lg text-soft-grey leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-sans font-semibold text-charcoal mb-4">
                      What's Included:
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-soft-grey">
                          <span className="text-sage-green mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div>
                      <div className="text-sm text-soft-grey uppercase tracking-wider mb-1">
                        Investment
                      </div>
                      <div className="font-serif text-2xl text-black">
                        {service.investment}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-soft-grey uppercase tracking-wider mb-1">
                        Timeline
                      </div>
                      <div className="font-serif text-2xl text-black">
                        {service.timeline}
                      </div>
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className="btn-primary">
                    Learn More
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-warm-taupe/20 border-2 border-dashed border-warm-taupe flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-xl font-serif text-charcoal mb-2">
                        {service.name}
                      </p>
                      <p className="text-soft-grey">Before & After</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-h1 text-black mb-6">
              Every Service Uses The Framework
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed">
              Whether it's a complete room transformation or an accent wall, every project follows The Loveable Spaces Framework™: Diagnose. Design. Deliver.
            </p>
          </div>
          <div className="text-center">
            <Link href="/framework" className="btn-secondary">
              Learn About The Framework
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Not Sure Which Service You Need?"
        title="Start With a Free Consultation"
        description="We'll assess your space, diagnose what's needed, and recommend the right service for your goals and budget. No pressure, just honest guidance."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
