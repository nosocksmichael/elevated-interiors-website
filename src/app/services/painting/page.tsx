import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Expert Painting | Professional Painting Service | Elevated Interiors',
  description: 'Premium painting service with designer-selected colors and expert craftsmanship. Transform your space with professional-grade results.',
}

export default function PaintingPage() {
  const whatYouGet = [
    'Color consultation and selection guidance',
    'Premium paint and materials',
    'Professional surface preparation',
    'Expert application techniques',
    'Clean, precise edges and finish',
    'Furniture protection and cleanup',
    'Quality guarantee',
  ]

  const whyDifferent = [
    {
      title: 'Designer-Grade Color Selection',
      description: 'We do not just paint walls - we help you choose colors that work with your lighting, furniture, and lifestyle.',
    },
    {
      title: 'Premium Materials',
      description: 'Professional-grade paints, primers, and tools. We use the same products designers spec for high-end homes.',
    },
    {
      title: 'Expert Preparation',
      description: 'Proper prep is what separates average from exceptional. We do not skip steps, rush, or compromise.',
    },
    {
      title: 'Flawless Execution',
      description: 'Clean lines. Smooth finish. No drips, no streaks, no touch-ups needed. This is what professional looks like.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Professional Painting Service
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Expert Painting
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed mb-8">
              Premium painting that elevates your space. Designer colors, professional materials, flawless finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-h1 text-black mb-6">
              Not Your Average Paint Job
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed">
              Anyone can slap paint on walls. We deliver designer-grade results that transform spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyDifferent.map((item) => (
              <div key={item.title} className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-serif text-2xl text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Included */}
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
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Our Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Consultation & Color Selection
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    We assess your space, discuss your vision, and help you choose colors that work with your lighting and lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Preparation & Protection
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    Professional surface prep, furniture protection, taping, and primer application. This is where quality begins.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Expert Application
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    Multiple coats applied with precision. Clean edges, smooth finish, consistent coverage throughout.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  4
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Inspection & Cleanup
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    Final inspection, touch-ups if needed, complete cleanup. Your space is ready to enjoy immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-white text-center mb-12">
              Investment & Timeline
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="font-serif text-5xl text-white mb-2">$2K-$5K</div>
                <div className="text-warm-taupe">Typical Investment</div>
                <p className="text-warm-taupe/80 text-sm mt-2">
                  Based on room size and scope
                </p>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl text-white mb-2">2-3 Days</div>
                <div className="text-warm-taupe">Average Timeline</div>
                <p className="text-warm-taupe/80 text-sm mt-2">
                  Including prep and finishing
                </p>
              </div>
            </div>
            <div className="bg-white p-8">
              <p className="text-lg text-charcoal text-center leading-relaxed">
                Premium painting is often the highest-impact, lowest-cost transformation you can make.
                <span className="block mt-4 font-medium">
                  The right color, professionally applied, changes everything.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready to Transform Your Space?"
        title="Get Your Free Quote"
        description="Let us discuss your painting project and provide a transparent, detailed quote. No surprises, no pressure."
        primaryButtonText="Request Quote"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
