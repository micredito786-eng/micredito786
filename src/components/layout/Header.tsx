'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#dolor', label: 'El Problema' },
  { href: '#verdad', label: 'La Verdad' },
  { href: '#oferta', label: 'El Plan' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.webp"
              alt="Mi Crédito 786"
              width={200}
              height={60}
              className={`h-14 w-auto transition-all duration-300 ${
                isScrolled ? 'h-12' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA y teléfono */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17862510360"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(786) 251-0360</span>
            </a>
            <a href="#agendar">
              <Button variant="cta" size="sm">
                AGENDA GRATIS
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <Container>
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-foreground hover:text-primary font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="my-4" />
                <a
                  href="tel:+17862510360"
                  className="flex items-center gap-2 text-foreground py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(786) 251-0360</span>
                </a>
                <a href="#agendar" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="cta" size="lg" className="w-full">
                    AGENDA TU AUDITORÍA GRATIS
                  </Button>
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
