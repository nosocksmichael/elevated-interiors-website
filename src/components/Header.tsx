'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'The Framework', href: '/framework' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Book Consultation', href: '/consultation', primary: true },
  ]

  return (
    <header className="bg-cream border-b border-warm-taupe sticky top-0 z-50">
      <nav className="container-custom py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl text-black tracking-tight">
              Elevated Interiors
            </span>
            <span className="text-xs md:text-sm text-soft-grey uppercase tracking-wider mt-1">
              Space Upscale Experts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              item.primary ? (
                <Link key={item.name} href={item.href} className="btn-primary text-sm px-6 py-3">
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-black transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-warm-taupe pt-6">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                item.primary ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="btn-primary text-center text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-charcoal hover:text-black transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
