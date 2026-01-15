import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Us | Our Story | Elevated Interiors',
  description: 'Space Upscale Experts fighting the Renovation Industrial Complex. Learn why we built The Loveable Spaces Framework(TM) and how we are transforming GTA homes.',
}

export default function AboutPage() {
  const values = [
    {
      title: 'Strategic, Not Decorative',
      description: 'We diagnose problems before proposing solutions. Every recommendation serves a purpose.',
    },
    {
      title: 'Transparent, Not Opaque',
      description: 'Fixed pricing, clear timelines, honest budgets. No surprises, no hidden costs, no games.',
    },
    {
      title: 'Fast, Not Rushed',
      description: 'We deliver in 1 week because we know what works. Speed comes from expertise, not cutting corners.',
    },
    {
      title: 'Designer-Grade, Not Discount',
      description: 'Premium materials, professional craftsmanship, exceptional results. We do not compromise on quality.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              About Elevated Interiors
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Fighting the Renovation Industrial Complex
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed">
              We are Space Upscale Experts on a mission to transform GTA homes without the chaos, timeline, or cost of traditional renovation.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Saw */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black mb-8">
              The Problem We Saw
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey space-y-6">
              <p className="text-xl leading-relaxed">
                Homeowners with perfectly good spaces being told they need to gut everything and start over.
              </p>
              <p className="text-xl leading-relaxed">
                3-month timelines turning into 6 months. $20K budgets becoming $50K nightmares. Families living in construction chaos, making endless compromises, drowning in decisions they are not equipped to make.
              </p>
              <p className="text-xl leading-relaxed">
                The Renovation Industrial Complex thrives on complexity, delays, and cost overruns. Their business model depends on homeowners not understanding what is actually required to transform a space.
              </p>
              <p className="text-xl leading-relaxed font-medium text-black">
                We knew there had to be a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black mb-8">
              Our Solution: The Loveable Spaces Framework(TM)
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey space-y-6">
              <p className="text-xl leading-relaxed">
                We developed a systematic approach to space transformation that delivers designer-grade results in 1 week-without gutting, without months of disruption, without the traditional renovation price tag.
              </p>
              <p className="text-xl leading-relaxed">
                <span className="font-semibold text-black">Diagnose.</span> We assess your space and identify the real issues-not just symptoms.
              </p>
              <p className="text-xl leading-relaxed">
                <span className="font-semibold text-black">Design.</span> We create strategic solutions that address root problems, not cosmetic band-aids.
              </p>
              <p className="text-xl leading-relaxed">
                <span className="font-semibold text-black">Deliver.</span> We execute flawlessly in 1 week with designer-grade materials and professional craftsmanship.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/framework" className="btn-secondary">
                Learn About The Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-serif text-2xl text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Positioning */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-white text-center mb-12">
              We are Not Interior Designers
            </h2>
            <div className="prose prose-lg max-w-none text-warm-taupe space-y-6">
              <p className="text-xl leading-relaxed">
                We are <span className="text-white font-semibold">Space Upscale Experts</span>.
              </p>
              <p className="text-xl leading-relaxed">
                Interior designers create beautiful visions. We execute practical transformations.
              </p>
              <p className="text-xl leading-relaxed">
                Interior designers hand you plans and mood boards. We hand you a completed, designer-grade room in 1 week.
              </p>
              <p className="text-xl leading-relaxed">
                Interior designers work in the world of aspiration. We work in the world of reality-where you have a budget, a timeline, and a life to live while your space transforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Who We Serve
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  Homeowners Who Know Better Is Possible
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  You look at your space and see potential. You know it could be amazing-you just need expert guidance and execution to get there.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  Families Tired of Living in "Fine"
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Your rooms work, technically. But they do not feel loveable. They do not reflect who you are or how you want to live.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  People Preparing for Life Changes
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Selling your home, hosting family, starting a new chapter-you need your space to be at its best, fast.
                </p>
              </div>

              <div className="bg-white p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-xl text-black mb-3">
                  Anyone Who Refuses to Accept Renovation Chaos
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  You want transformation without 6 months of disruption, $50K+ budgets, and endless contractor delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-h1 text-black mb-8">
              Our Commitment to You
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey">
              <p className="text-xl leading-relaxed mb-6">
                We will diagnose your space honestly, design solutions strategically, and deliver results that make you proud.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                We will be transparent about pricing, realistic about timelines, and honest about what is achievable.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                We will treat your home with respect, your budget with care, and your trust with integrity.
              </p>
              <p className="text-2xl font-serif text-black leading-relaxed">
                We will make your spaces loveable again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready to Work With Us?"
        title="Let us Transform Your Space"
        description="Book a free consultation and experience the difference of working with Space Upscale Experts who actually deliver."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
