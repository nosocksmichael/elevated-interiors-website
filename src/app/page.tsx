import Link from 'next/link'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  const services = [
    {
      name: 'Room Upscale',
      description: 'Transform tired spaces into designer-grade rooms without renovation. Complete room makeover in 1 week.',
      href: '/services/room-upscale',
    },
    {
      name: 'Expert Painting',
      description: 'Professional painting that elevates your space. Precision craftsmanship, premium materials, flawless finish.',
      href: '/services/painting',
    },
    {
      name: 'Accent Walls',
      description: 'Statement walls that define your space. Strategic design elements that create instant visual impact.',
      href: '/services/accent-walls',
    },
    {
      name: 'Design Consultation',
      description: 'Expert guidance on transforming your space. Get clarity, direction, and actionable design solutions.',
      href: '/services/consultation',
    },
  ]

  const frameworkSteps = [
    {
      number: '01',
      title: 'Diagnose',
      description: 'We assess your space, understand your lifestyle, and identify what\'s keeping it from being loveable.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'We create a custom transformation plan that delivers designer-grade results without renovation chaos.',
    },
    {
      number: '03',
      title: 'Deliver',
      description: 'We execute flawlessly in 1 week. No mess, no months of disruption, no $50K renovation bills.',
    },
  ]

  const proofPoints = [
    {
      stat: '1 Week',
      label: 'Average Transformation',
    },
    {
      stat: '$8K-$15K',
      label: 'Typical Investment',
    },
    {
      stat: '100%',
      label: 'Client Satisfaction',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Space Upscale Experts • Greater Toronto Area
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Designer-Grade Rooms in 1 Week.
              <br />
              <span className="text-charcoal">No Renovation Required.</span>
            </h1>
            <p className="text-xl text-soft-grey mb-12 leading-relaxed max-w-2xl mx-auto">
              Stop dreaming about the home you deserve. Using The Loveable Spaces Framework(TM), we transform GTA homes to designer grade-without the chaos, timeline, or cost of traditional renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/framework" className="btn-secondary">
                Explore The Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Enemy Section */}
      <section className="bg-white section-padding border-y border-warm-taupe">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              The Renovation Industrial Complex Has Failed You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-sans font-semibold text-lg text-charcoal">
                  They Promise:
                </h3>
                <ul className="space-y-3 text-soft-grey">
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">×</span>
                    <span>"Just 8-12 weeks"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">×</span>
                    <span>"Around $20-30K budget"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">×</span>
                    <span>"Minimal disruption"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">×</span>
                    <span>"Your dream space"</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-sans font-semibold text-lg text-charcoal">
                  You Get:
                </h3>
                <ul className="space-y-3 text-soft-grey">
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">✓</span>
                    <span>6 months of chaos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">✓</span>
                    <span>$50K+ overruns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">✓</span>
                    <span>Living in construction dust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-charcoal">✓</span>
                    <span>Compromise after compromise</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 p-8 bg-cream rounded-sm">
              <p className="text-lg text-charcoal text-center font-medium">
                <span className="font-serif text-xl">There is a better way.</span>
                <br />
                <span className="text-soft-grey mt-2 block">
                  Designer-grade transformation. 1 week. No gutting required.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-4">
              Our Methodology
            </p>
            <h2 className="font-serif text-h1 text-black mb-6">
              The Loveable Spaces Framework(TM)
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed">
              A proven system for transforming tired rooms into designer-grade spaces-without the renovation nightmare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {frameworkSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-block mb-6">
                  <span className="font-serif text-6xl text-charcoal/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/framework" className="btn-secondary">
              Learn More About The Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-h1 text-black mb-6">
              Space Upscale Solutions
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed">
              Specialized services designed to transform your space without traditional renovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group p-8 bg-cream hover:bg-warm-taupe/20 transition-colors border border-warm-taupe"
              >
                <h3 className="font-serif text-2xl text-black mb-4 group-hover:text-charcoal transition-colors">
                  {service.name}
                </h3>
                <p className="text-soft-grey leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-charcoal font-medium text-sm uppercase tracking-wider group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {proofPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="font-serif text-5xl md:text-6xl text-white mb-4">
                  {point.stat}
                </div>
                <div className="text-warm-taupe uppercase tracking-wider text-sm">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-warm-taupe text-lg italic">
              "We needed our living room transformed before hosting family. Elevated Interiors delivered in 6 days. No renovation, no chaos, just beautiful results."
            </p>
            <p className="text-cream font-medium mt-4">
              - Sarah M., Toronto
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="primary"
        subtitle="Ready to Transform Your Space?"
        title="Make Your Spaces Loveable Again"
        description="Book a free consultation and discover how The Loveable Spaces Framework can transform your home in 1 week-without the renovation nightmare."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/consultation"
        secondaryButtonText="See Our Work"
        secondaryButtonHref="/framework"
      />
    </>
  )
}
