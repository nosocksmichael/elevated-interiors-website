import Link from 'next/link'

interface CTASectionProps {
  variant?: 'primary' | 'secondary'
  title: string
  subtitle?: string
  description: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export default function CTASection({
  variant = 'primary',
  title,
  subtitle,
  description,
  primaryButtonText = 'Book Consultation',
  primaryButtonHref = '/consultation',
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  const bgColor = variant === 'primary' ? 'bg-charcoal' : 'bg-cream'
  const textColor = variant === 'primary' ? 'text-cream' : 'text-charcoal'
  const subtitleColor = variant === 'primary' ? 'text-warm-taupe' : 'text-soft-grey'

  return (
    <section className={`${bgColor} section-padding`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {subtitle && (
            <p className={`${subtitleColor} text-sm uppercase tracking-wider mb-4`}>
              {subtitle}
            </p>
          )}
          <h2 className={`font-serif text-h2 md:text-h1 ${textColor} mb-6`}>
            {title}
          </h2>
          <p className={`text-lg ${variant === 'primary' ? 'text-warm-taupe' : 'text-soft-grey'} mb-8 leading-relaxed`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonHref} className="btn-primary">
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref} className="btn-secondary">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
