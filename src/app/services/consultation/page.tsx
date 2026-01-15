import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Design Consultation | Expert Guidance | Elevated Interiors',
  description: 'Get clarity and direction for your space transformation. Expert guidance, actionable solutions, honest advice about what is possible.',
}

export default function ConsultationPage() {
  const whatYouGet = [
    'Complete space assessment and analysis',
    'Problem diagnosis using The Loveable Spaces Framework(TM)',
    'Solution recommendations tailored to your goals',
    'Budget guidance and investment expectations',
    'Material and furniture suggestions',
    'Detailed action plan for next steps',
    'Priority recommendations',
    'Follow-up support',
  ]

  const perfectFor = [
    {
      scenario: 'DIY Planning',
      description: 'You want to transform your space yourself but need expert direction and a clear plan.',
    },
    {
      scenario: 'Budget Clarity',
      description: 'You need honest answers about what is achievable with your budget before committing.',
    },
    {
      scenario: 'Second Opinion',
      description: 'You have received quotes or plans from others and want expert validation or alternatives.',
    },
    {
      scenario: 'Decision Making',
      description: 'You are stuck between options and need professional guidance to move forward confidently.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Expert Guidance for Your Space
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              Design Consultation
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed mb-8">
              Get clarity, direction, and actionable solutions. Professional guidance without the commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Value */}
      <section className="bg-white section-padding border-y border-warm-taupe">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Why Pay for Consultation?
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey">
              <p className="text-xl leading-relaxed mb-6">
                Because bad decisions cost more than good advice.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                A $500 consultation that prevents a $5,000 mistake is worth 10x the investment. Professional guidance ensures you spend money solving the right problems.
              </p>
              <p className="text-xl leading-relaxed">
                You will leave with clarity, confidence, and a concrete plan. No guesswork, no Pinterest paralysis, no expensive trial-and-error.
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
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              The Consultation Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Initial Discussion (30 min)
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    We talk about your space, goals, frustrations, and vision. What is working, what is not, and what you hope to achieve.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Space Assessment (45 min)
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    We walk through your space, assess the situation, and diagnose the real issues. Measurements, photos, and detailed notes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Solutions & Recommendations (30 min)
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    We present solutions, discuss options, provide budget guidance, and create an action plan. You leave knowing exactly what to do next.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-serif text-xl">
                  4
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-black mb-2">
                    Follow-Up Support (15 min)
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    One follow-up call to answer questions, provide additional guidance, or discuss next steps after you have had time to process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-white text-center mb-12">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {perfectFor.map((item) => (
                <div key={item.scenario} className="bg-white p-8">
                  <h3 className="font-serif text-2xl text-black mb-4">
                    {item.scenario}
                  </h3>
                  <p className="text-soft-grey leading-relaxed">
                    {item.description}
                  </p>
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
              Investment & Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">$500</div>
                <div className="text-soft-grey">Fixed Investment</div>
                <p className="text-soft-grey/80 text-sm mt-2">
                  No hidden fees or surprises
                </p>
              </div>
              <div className="text-center">
                <div className="font-serif text-5xl text-black mb-2">2 Hours</div>
                <div className="text-soft-grey">Total Time</div>
                <p className="text-soft-grey/80 text-sm mt-2">
                  Plus 15-min follow-up call
                </p>
              </div>
            </div>
            <div className="bg-white p-8 border border-warm-taupe">
              <h3 className="font-serif text-2xl text-black mb-4 text-center">
                Consultation Credit
              </h3>
              <p className="text-lg text-soft-grey text-center leading-relaxed">
                If you proceed with any of our services within 30 days,
                <span className="block mt-2 font-medium text-charcoal">
                  your $500 consultation fee is credited toward your project.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You will Leave With */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              What You will Leave With
            </h2>
            <div className="space-y-6">
              <div className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Detailed Action Plan
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Step-by-step roadmap for transforming your space, prioritized by impact and budget.
                </p>
              </div>

              <div className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Budget Breakdown
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Honest investment expectations for each recommendation, so you can make informed decisions.
                </p>
              </div>

              <div className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Material & Product Recommendations
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  Specific paint colors, furniture suggestions, and material options tailored to your space.
                </p>
              </div>

              <div className="bg-cream p-8 border border-warm-taupe">
                <h3 className="font-sans font-semibold text-lg text-black mb-3">
                  Clarity & Confidence
                </h3>
                <p className="text-soft-grey leading-relaxed">
                  No more Pinterest paralysis or decision fatigue. You will know exactly what to do and why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready for Expert Guidance?"
        title="Book Your Design Consultation"
        description="Let us diagnose your space and create a clear plan for transformation. $500 investment, credited if you proceed with services."
        primaryButtonText="Book Consultation"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
