import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Room Upscale | Complete Room Transformation | Elevated Interiors',
  description: 'Designer-grade room transformation in 1 week. No renovation required. Our signature service delivers complete makeovers without the chaos or cost.',
}

export default function RoomUpscalePage() {
  const whatYouGet = [
    'Complete design consultation and space assessment',
    'Custom transformation plan using The Loveable Spaces Framework(TM)',
    'Designer-grade material and furniture selection',
    'Professional painting and finishing',
    'Furniture arrangement and placement',
    'Styling, accessories, and finishing touches',
    'White-glove installation and setup',
    'Post-reveal support and adjustments',
  ]

  const idealFor = [
    'Living rooms that feel tired and dated',
    'Bedrooms lacking comfort and style',
    'Dining rooms that need sophistication',
    'Home offices requiring functionality',
    'Spaces preparing for sale or hosting',
    'Rooms with good bones but poor execution',
  ]

  const process = [
    {
      day: 'Day 1',
      title: 'Diagnose',
      activities: ['Initial consultation', 'Space assessment', 'Lifestyle discussion', 'Budget alignment'],
    },
    {
      day: 'Days 2-3',
      title: 'Design',
      activities: ['Custom design plan', 'Material sourcing', 'Timeline creation', 'Final approval'],
    },
    {
      day: 'Days 4-7',
      title: 'Deliver',
      activities: ['Space preparation', 'Installation begins', 'Styling & finishing', 'Final reveal'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Our Signature Service
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Room Upscale
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed mb-8">
              Complete room transformation in 1 week. Designer-grade results without renovation chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/framework" className="btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white section-padding border-y border-warm-taupe">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Your Room Deserves Better
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey">
              <p className="text-xl leading-relaxed mb-6">
                You know your room could be amazing. Good bones. Good light. Good potential.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                But somehow it is just... tired. The furniture does not work. The colors feel off. The whole space lacks the sophistication you see in designer homes.
              </p>
              <p className="text-xl leading-relaxed">
                Traditional renovation would take months and cost $20K-$50K+. Room Upscale delivers designer-grade transformation in 1 week for a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              What is Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whatYouGet.map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white p-6 border border-warm-taupe">
                  <span className="text-sage-green text-xl flex-shrink-0 mt-1">✓</span>
                  <span className="text-charcoal leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            The 1-Week Timeline
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {process.map((phase) => (
              <div key={phase.day} className="text-center">
                <div className="bg-charcoal text-white py-3 px-6 mb-6">
                  <div className="text-sm uppercase tracking-wider">{phase.day}</div>
                  <div className="font-serif text-2xl mt-1">{phase.title}</div>
                </div>
                <ul className="space-y-3 text-left">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-soft-grey">
                      <span className="text-charcoal">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-white text-center mb-12">
              Ideal For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {idealFor.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-sage-green text-xl flex-shrink-0 mt-1">✓</span>
                  <span className="text-warm-taupe leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Investment & Value
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">$8K-$15K</div>
                <div className="text-soft-grey">Typical Investment</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">1 Week</div>
                <div className="text-soft-grey">Complete Timeline</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">100%</div>
                <div className="text-soft-grey">Satisfaction Rate</div>
              </div>
            </div>
            <div className="bg-white p-8 border border-warm-taupe">
              <h3 className="font-serif text-2xl text-black mb-4 text-center">
                Compare to Traditional Renovation:
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-soft-grey font-semibold mb-3">Traditional Renovation</p>
                  <ul className="space-y-2 text-soft-grey">
                    <li>• 3-6 months timeline</li>
                    <li>• $20K-$50K+ cost</li>
                    <li>• Construction chaos</li>
                    <li>• Uncertain outcome</li>
                  </ul>
                </div>
                <div>
                  <p className="text-black font-semibold mb-3">Room Upscale</p>
                  <ul className="space-y-2 text-charcoal">
                    <li>• 1 week timeline</li>
                    <li>• $8K-$15K investment</li>
                    <li>• Minimal disruption</li>
                    <li>• Guaranteed results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            Room Upscale Transformations
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-warm-taupe/20 border-2 border-dashed border-warm-taupe p-16 text-center">
              <p className="text-2xl font-serif text-charcoal mb-4">
                Before & After Gallery
              </p>
              <p className="text-soft-grey">
                Real Room Upscale transformations. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready to Transform Your Room?"
        title="Book Your Free Consultation"
        description="Let us discuss your space and see if Room Upscale is right for you. No obligation, just honest conversation about what is possible."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
