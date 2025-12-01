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

            <Button
              variant="cta"
              size="xl"
              className="text-xl px-12 py-6 mb-6"
              rightIcon={<ArrowRight className="w-6 h-6" />}
            >
              ELIJO TOMAR CONTROL - AGENDA MI AUDITORÍA
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <a href="tel:+1XXXXXXXXXX" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(XXX) XXX-XXXX</span>
              </a>
              <a href="https://wa.me/1XXXXXXXXXX" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="max-w-sm mx-auto mb-6">
              <ProgressBar
                value={cuposVendidos}
                max={cuposTotal}
                variant="secondary"
                size="md"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>⏰ Cupos disponibles: {cuposDisponibles}/{cuposTotal}</span>
              <span>🔥 Precio actual: $499</span>
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
              <p className="text-secondary font-semibold">
                De latinos, para latinos. 🤝
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(XXX) XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp disponible</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Miami, Florida</span>
                </li>
              </ul>
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
              © {new Date().getFullYear()} Mi Crédito 786™ | Miami, Florida | Todos los derechos reservados
            </p>
            <p className="text-xs text-white/50 mt-2">
              Servimos: USA & Puerto Rico 🇺🇸🇵🇷
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
