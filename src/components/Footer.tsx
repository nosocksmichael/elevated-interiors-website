import Link from 'next/link'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Room Upscale', href: '/services/room-upscale' },
      { name: 'Expert Painting', href: '/services/painting' },
      { name: 'Accent Walls', href: '/services/accent-walls' },
      { name: 'Design Consultation', href: '/services/consultation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'The Framework', href: '/framework' },
      { name: 'Book Consultation', href: '/consultation' },
    ],
    social: [
      { name: 'Instagram', href: 'https://instagram.com/elevatedinteriors', icon: FaInstagram },
      { name: 'Facebook', href: '#', icon: FaFacebook },
      { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    ],
  }

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl text-white tracking-tight">
                Elevated Interiors
              </span>
              <span className="text-xs text-warm-taupe uppercase tracking-wider mt-1">
                Space Upscale Experts
              </span>
            </div>
            <p className="text-sm text-warm-taupe leading-relaxed mb-6">
              Designer-grade rooms in 1 week. No renovation required. Using The Loveable Spaces Framework™.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-warm-taupe hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-taupe hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-taupe hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="h-5 w-5 text-warm-taupe flex-shrink-0 mt-0.5" />
                <span className="text-sm text-warm-taupe">
                  Greater Toronto Area, ON
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="h-5 w-5 text-warm-taupe flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-warm-taupe hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="h-5 w-5 text-warm-taupe flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@elevatedinteriors.ca"
                  className="text-sm text-warm-taupe hover:text-white transition-colors"
                >
                  hello@elevatedinteriors.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-taupe/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-warm-taupe">
              © {currentYear} Elevated Interiors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-warm-taupe hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-warm-taupe hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
