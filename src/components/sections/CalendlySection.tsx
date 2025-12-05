'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { Calendar, Clock, CheckCircle, Shield } from 'lucide-react';

export function CalendlySection() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

        {/* Widget de Calendly */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/micredito786-konfia/auditoria-crediticia-gratuita-786?hide_gdpr_banner=1&primary_color=1e3a5f"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Nota de confianza */}
        <motion.p
          className="text-center text-sm text-foreground-muted mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          🔒 Tu información está segura. No compartimos tus datos con terceros.
        </motion.p>
      </Container>
    </section>
  );
}
