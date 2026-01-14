import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Accent Walls | Statement Walls | Elevated Interiors',
  description: 'Strategic accent walls that create instant visual impact. Bold paint, textured treatments, and designer-grade execution.',
}

export default function AccentWallsPage() {
  const options = [
    {
      name: 'Bold Color',
      description: 'Designer-selected paint colors that create drama without overwhelming. The right shade makes all the difference.',
    },
    {
      name: 'Textured Treatments',
      description: 'Dimensional finishes that add depth and sophistication. From subtle texture to bold relief.',
    },
    {
      name: 'Wallpaper',
      description: 'Curated wallpaper selections professionally installed. Modern patterns that elevate any space.',
    },
    {
      name: 'Wood Accents',
      description: 'Natural wood elements that bring warmth and organic texture. Shiplap, boards, or custom treatments.',
    },
  ]

  const benefits = [
    'Instant visual impact',
    'Defines space purpose',
    'Creates focal points',
    'Adds perceived value',
    'Photography-ready',
    'Fast transformation',
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Statement Walls That Define Spaces
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Accent Walls
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed mb-8">
              Strategic design elements that create instant visual impact and transform room dynamics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Accent Walls */}
      <section className="bg-white section-padding border-y border-warm-taupe">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              The Strategic Impact of an Accent Wall
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey">
              <p className="text-xl leading-relaxed mb-6">
                A well-designed accent wall isn't decoration—it's strategic design that transforms how a space feels and functions.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                It creates a focal point. Defines the room's purpose. Adds depth and dimension. Makes a space feel intentional instead of accidental.
              </p>
              <p className="text-xl leading-relaxed">
                Done right, it's the single most impactful change you can make to a room. Done wrong, it's just a painted wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-h1 text-black mb-6">
              Accent Wall Options
            </h2>
            <p className="text-lg text-soft-grey leading-relaxed">
              We design and execute accent walls using various techniques—always chosen strategically for your specific space.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {options.map((option) => (
              <div key={option.name} className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-serif text-2xl text-black mb-4">
                  {option.name}
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Why Accent Walls Work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-cream p-6 text-center">
                  <span className="text-sage-green text-3xl mb-3 block">✓</span>
                  <span className="text-charcoal font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-white text-center mb-12">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  1. Strategic Selection
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  We determine which wall should be the accent based on architecture, lighting, furniture placement, and room flow. Not every wall works as an accent.
                </p>
              </div>

              <div className="bg-white p-8">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  2. Design & Material Choice
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  We recommend treatments that align with your style, budget, and the room's purpose. Color, texture, pattern—all chosen strategically.
                </p>
              </div>

              <div className="bg-white p-8">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  3. Professional Execution
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Expert installation with precision and care. Clean lines, perfect alignment, flawless finish. Typically completed in 1-2 days.
                </p>
              </div>

              <div className="bg-white p-8">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  4. Coordinated Styling
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  We ensure your accent wall integrates with the rest of your space. It should enhance, not fight with, your existing elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Investment & Timeline
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">$1K-$3K</div>
                <div className="text-soft-grey">Typical Investment</div>
                <p className="text-soft-grey/80 text-sm mt-2">
                  Varies by material and complexity
                </p>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">1-2 Days</div>
                <div className="text-soft-grey">Average Timeline</div>
                <p className="text-soft-grey/80 text-sm mt-2">
                  From start to completion
                </p>
              </div>
            </div>
            <div className="bg-white p-8 border border-warm-taupe">
              <p className="text-lg text-charcoal text-center leading-relaxed">
                An accent wall delivers maximum impact for minimal investment.
                <span className="block mt-4 font-medium">
                  It's often the first thing people notice and remember about a space.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            Accent Wall Transformations
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-warm-taupe/20 border-2 border-dashed border-warm-taupe p-16 text-center">
              <p className="text-2xl font-serif text-charcoal mb-4">
                Before & After Gallery
              </p>
              <p className="text-soft-grey">
                Real accent wall transformations. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready for a Statement Wall?"
        title="Let's Discuss Your Space"
        description="We'll assess your room and recommend the perfect accent wall treatment for maximum impact."
        primaryButtonText="Get Started"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
