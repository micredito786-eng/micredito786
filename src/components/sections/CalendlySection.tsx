'use client';

import Script from 'next/script';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { Calendar, Clock, CheckCircle, Shield } from 'lucide-react';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/QCel3cAmpWQEksSyc2zY';

export function CalendlySection() {
  return (
    <section id="agendar" className="py-20 bg-linear-to-b from-white to-gray-50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Agenda tu Auditoría Gratuita
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tu Primer Paso Hacia un{' '}
            <span className="text-primary">Crédito Limpio</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Selecciona el día y hora que mejor te convenga. 
            La consulta es 100% gratuita y sin compromiso.
          </p>
        </motion.div>

        {/* Beneficios de la auditoría */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
            <span className="text-foreground-muted">100% en español</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Clock className="w-5 h-5 text-secondary shrink-0" />
            <span className="text-foreground-muted">Solo 30 minutos</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <Shield className="w-5 h-5 text-secondary shrink-0" />
            <span className="text-foreground-muted">Sin compromiso</span>
          </div>
        </motion.div>

        {/* Calendario de citas (LeadConnector) */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src={BOOKING_URL}
            id="QCel3cAmpWQEksSyc2zY_booking"
            title="Agenda tu auditoría gratuita"
            scrolling="no"
            style={{ width: '100%', minWidth: '320px', minHeight: '700px', border: 'none', overflow: 'hidden' }}
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </motion.div>

        {/* Nota de confianza */}
        <motion.p
          className="text-center text-base text-foreground-muted mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          🔒 <strong className="text-primary font-bold">Tu información está segura.</strong> No vendemos tus datos. Ver{' '}
          <Link href="/politica-de-privacidad" className="text-primary underline underline-offset-2 hover:text-secondary">
            Política de Privacidad
          </Link>
          .
        </motion.p>
      </Container>
    </section>
  );
}
