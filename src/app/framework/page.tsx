import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'The Loveable Spaces Framework™ | Elevated Interiors',
  description: 'Our proven 3-step methodology for transforming tired rooms into designer-grade spaces in 1 week—without renovation chaos.',
}

export default function FrameworkPage() {
  const whyItWorks = [
    {
      title: 'Strategic, Not Reactive',
      description: 'We diagnose the real issues in your space before proposing solutions. No cookie-cutter approaches or unnecessary changes.',
    },
    {
      title: 'Designer-Grade Standards',
      description: 'Every transformation meets professional interior design standards. Premium materials, expert craftsmanship, flawless execution.',
    },
    {
      title: 'Speed Without Compromise',
      description: 'Our systematic approach allows us to deliver in 1 week without sacrificing quality. We know exactly what works.',
    },
    {
      title: 'No Renovation Required',
      description: 'Strategic design interventions that transform spaces without gutting walls, ripping up floors, or months of construction.',
    },
  ]

  const process = [
    {
      phase: 'Phase 1',
      title: 'Diagnose',
      duration: 'Day 1',
      steps: [
        {
          name: 'Space Assessment',
          description: 'We visit your space, take measurements, analyze lighting, traffic flow, and existing elements.',
        },
        {
          name: 'Lifestyle Discovery',
          description: 'Deep conversation about how you live, work, and use your space. What's working, what's not.',
        },
        {
          name: 'Problem Identification',
          description: 'We pinpoint exactly what's keeping your space from being loveable—and what it will take to fix it.',
        },
        {
          name: 'Budget Alignment',
          description: 'Transparent discussion about investment levels and what's achievable within your budget.',
        },
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Design',
      duration: 'Days 2-3',
      steps: [
        {
          name: 'Transformation Plan',
          description: 'Custom design solution that addresses every diagnosed issue. No guesswork, only proven strategies.',
        },
        {
          name: 'Material Selection',
          description: 'We source premium materials and furnishings that deliver designer-grade results within budget.',
        },
        {
          name: 'Timeline Mapping',
          description: 'Detailed schedule showing exactly what happens when. You'll know what to expect every day.',
        },
        {
          name: 'Final Approval',
          description: 'You review and approve everything before we begin execution. No surprises, no rushed decisions.',
        },
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Deliver',
      duration: 'Days 4-7',
      steps: [
        {
          name: 'Execution Begins',
          description: 'Our team arrives on schedule and begins transformation. Professional, respectful, efficient.',
        },
        {
          name: 'Quality Control',
          description: 'Every element is installed and finished to designer-grade standards. We inspect as we work.',
        },
        {
          name: 'Styling & Details',
          description: 'Final touches that make the difference between "nice" and "designer-grade." Nothing overlooked.',
        },
        {
          name: 'Reveal & Walkthrough',
          description: 'Your transformed space is complete. We walk you through everything and ensure you're delighted.',
        },
      ],
    },
  ]

  const comparison = {
    traditional: [
      '3-6 months of disruption',
      '$20K-$50K+ cost overruns',
      'Living in construction chaos',
      'Endless contractor delays',
      'Compromise on materials',
      'DIY finishing touches',
      'Uncertain timeline',
      'Hidden costs appear',
    ],
    framework: [
      '1 week transformation',
      'Fixed price, no surprises',
      'Minimal disruption',
      'Professional execution',
      'Designer-grade materials',
      'Complete installation',
      'Guaranteed timeline',
      'Transparent pricing',
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-soft-grey text-sm uppercase tracking-wider mb-6">
              Our Methodology
            </p>
            <h1 className="font-serif text-hero text-black mb-8 leading-tight">
              The Loveable Spaces Framework™
            </h1>
            <p className="text-xl text-soft-grey leading-relaxed">
              A proven 3-step system for transforming tired rooms into designer-grade spaces in 1 week—without the chaos, timeline, or cost of traditional renovation.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h1 text-black text-center mb-12">
              Diagnose. Design. Deliver.
            </h2>
            <div className="prose prose-lg max-w-none text-soft-grey">
              <p className="text-xl leading-relaxed mb-6">
                Most interior transformations fail because they skip diagnosis and jump straight to decoration. They treat symptoms instead of solving root problems.
              </p>
              <p className="text-xl leading-relaxed">
                The Loveable Spaces Framework™ ensures every transformation is strategic, systematic, and successful. We diagnose the real issues, design the right solution, then deliver flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            Why This Framework Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyItWorks.map((item) => (
              <div key={item.title} className="bg-white p-8 border border-warm-taupe">
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

      {/* Detailed Process */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            The Complete Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {process.map((phase, index) => (
              <div key={phase.phase} className="border-l-4 border-charcoal pl-8">
                <div className="mb-6">
                  <span className="text-sm text-soft-grey uppercase tracking-wider">
                    {phase.phase} • {phase.duration}
                  </span>
                  <h3 className="font-serif text-3xl text-black mt-2">
                    {phase.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {phase.steps.map((step) => (
                    <div key={step.name} className="bg-cream p-6">
                      <h4 className="font-sans font-semibold text-lg text-charcoal mb-2">
                        {step.name}
                      </h4>
                      <p className="text-soft-grey leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-white text-center mb-16">
            Traditional Renovation vs. The Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <div className="bg-warm-taupe/10 p-8">
              <h3 className="font-serif text-2xl text-warm-taupe mb-6 text-center">
                Traditional Renovation
              </h3>
              <ul className="space-y-4">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-warm-taupe">
                    <span className="text-white/50 mt-1">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Framework */}
            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-black mb-6 text-center">
                The Loveable Spaces Framework™
              </h3>
              <ul className="space-y-4">
                {comparison.framework.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span className="text-sage-green mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-h1 text-black text-center mb-16">
            See The Framework In Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-warm-taupe/20 border-2 border-dashed border-warm-taupe p-16 text-center">
              <p className="text-2xl font-serif text-charcoal mb-4">
                Before & After Gallery
              </p>
              <p className="text-soft-grey">
                Real transformations. Real results. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="primary"
        subtitle="Ready to Experience The Framework?"
        title="Book Your Free Consultation"
        description="See how The Loveable Spaces Framework™ can transform your space in 1 week. No obligation, no pressure—just honest answers about what's possible."
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/consultation"
      />
    </>
  )
}
