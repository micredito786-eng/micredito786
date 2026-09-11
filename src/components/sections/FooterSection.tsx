'use client';

import { motion } from 'framer-motion';
import { Container, Button, ProgressBar } from '@/components/ui';
import { ArrowRight, Phone, MessageCircle, Clock, Shield, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FooterSection() {
  const cuposVendidos = 53;
  const cuposTotal = 100;
  const cuposDisponibles = cuposTotal - cuposVendidos;

  return (
    <footer className="bg-primary text-white">
      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        {/* Decoración */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ÚLTIMA OPORTUNIDAD
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Si llegaste hasta aquí leyendo todo... es porque <strong>SABES</strong> que necesitas hacer algo diferente.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Viniste a Estados Unidos a PROGRESAR. No a quedarte estancado.
              No a ver cómo otros avanzan mientras tú no.
              <br />
              <span className="text-secondary font-bold">
                Y tu crédito no puede ser lo que te detenga.
              </span>
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8">
              <p className="text-lg mb-4">HOY decides:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="bg-red-500/20 rounded-xl p-4">
                  <p className="font-bold mb-2">Opción A:</p>
                  <p className="text-white/80 text-sm">
                    Seguir igual. Seguir esperando. Seguir siendo rechazado.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4">
                  <p className="font-bold mb-2">Opción B:</p>
                  <p className="text-white/80 text-sm">
                    Dar el primer paso HOY. Agendar 30 minutos. Tomar control de tu futuro.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-2xl font-bold text-secondary mb-6">¿Cuál eliges?</p>

            <a href="https://pulse.disputeprocess.com/jsp/custom_form.jsp?tab_id=UEVFb0dPMlNnaVlLOGgvLzB4c0RaZz09&add_affiliate=0&cust_type=1&company_id=RlROSXBsY3FIL2tGcWkrL2Y3NFlTQT09&isLinkFromIframe=1" target="_blank" rel="noopener noreferrer">
              <Button
                variant="cta"
                size="xl"
                className="text-xl px-12 py-6 mb-6"
                rightIcon={<ArrowRight className="w-6 h-6" />}
              >
                ELIJO TOMAR CONTROL - AGENDA MI AUDITORÍA
              </Button>
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <a href="tel:+17862510362" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(786) 251-0362</span>
              </a>
              <a href="https://wa.me/17862510360" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (786) 251-0360</span>
              </a>
            </div>

            <div className="max-w-sm mx-auto mb-6">
              <ProgressBar
                value={cuposVendidos}
                max={cuposTotal}
                variant="secondary"
                size="md"
                darkBackground
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>⏰ Cupos disponibles: {cuposDisponibles}/{cuposTotal}</span>
              <span>🔥 Precio actual: $699</span>
              <span>✅ Sin compromiso</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Footer info */}
      <div className="border-t border-white/10 py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo y descripción */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.webp"
                  alt="Mi Crédito 786"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/70 text-sm mb-4">
                La llave que abre las puertas que te han cerrado en USA.
              </p>
              <p className="text-secondary font-semibold mb-4">
                De latinos, para latinos. 🤝
              </p>
              {/* Redes sociales */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/soysamtellez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/micredito786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@creditoconsam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@soysamtellez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+17862510362" className="hover:text-white transition-colors">(786) 251-0362</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="https://wa.me/17862510360" className="hover:text-white transition-colors">WhatsApp: (786) 251-0360</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>420 SW 7th ST Suite 907, Miami FL 33130</span>
                </li>
              </ul>
              <p className="text-white/70 text-sm mt-3">
                <strong>Horario:</strong> Lun-Vie 9am-7pm | Sáb 10am-5pm (EST)
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-2xl">🇵🇷</span>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="flex items-start gap-2 text-white/70 text-sm mb-4">
                <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  Operamos en cumplimiento con CROA (Credit Repair Organizations Act) y 
                  FCRA (Fair Credit Reporting Act).
                </p>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer legal */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/50 max-w-4xl mx-auto mb-4">
              <strong>DISCLAIMER:</strong> Mi Crédito 786™ NO puede prometer ni garantizar aumento específico de puntaje, 
              eliminación garantizada de cuentas específicas, resultados en tiempo específico, ni aprobación garantizada 
              para préstamos, casas o carros. Los resultados individuales varían según el caso. Todo consumidor tiene 
              derecho legal a disputar información en su reporte de crédito directamente con los bureaus sin contratar 
              ningún servicio.
            </p>
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Konfia Corp. (Mi Crédito 786™) | Miami, Florida | Todos los derechos reservados
            </p>
            <p className="text-xs text-white/50 mt-2">
              📧 micredito786@konfia.io | Servimos: USA & Puerto Rico 🇺🇸🇵🇷
            </p>
            <p className="text-xs text-white/40 mt-2">
              Diseñado por{' '}
              <a
                href="https://wa.link/a23z53"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                MegaBusiness
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
