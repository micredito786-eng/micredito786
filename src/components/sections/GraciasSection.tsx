'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { Check, Mail, Download, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const REPORTE_URL = 'https://app.myfreescorenow.com/enroll?s=MXxmYWxzZQ%3D%3D';

const pasos = [
  {
    numero: 1,
    titulo: 'Revisa tu correo',
    descripcion: 'Te enviamos la información con fecha y hora de tu cita.',
  },
  {
    numero: 2,
    titulo: 'Descarga el reporte de tu crédito',
    descripcion: 'Es el paso más importante. Sin tu reporte no podemos hacer tu evaluación.',
  },
  {
    numero: 3,
    titulo: 'Ten tu reporte listo el día de la llamada',
    descripcion: 'Así aprovechamos cada minuto de tu cita en encontrar soluciones.',
  },
];

export function GraciasSection() {
  return (
    <>
      {/* Header con confirmación */}
      <section className="relative bg-linear-to-br from-primary via-primary to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 pt-8 pb-24 sm:pt-8 sm:pb-28">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/" className="flex justify-center mb-8">
              <Image
                src="/logo.webp"
                alt="Mi Crédito 786"
                width={320}
                height={108}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/15 text-secondary border border-secondary/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
            >
              <Check className="w-4 h-4" />
              Cita agendada correctamente
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold mb-4"
            >
              Ya casi terminas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/85"
            >
              Mira este video de <strong className="text-white">2 minutos</strong> para aprovechar tu cita.
            </motion.p>
          </div>
        </Container>

        {/* Onda decorativa inferior */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block h-16 sm:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L80 108C160 96 320 72 480 66C640 60 800 72 960 78C1120 84 1280 84 1360 84L1440 84V120H0Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="bg-background-alt pt-4 pb-16 sm:pb-24">
        <Container size="md">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="-mt-16 sm:-mt-20 relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto"
          >
            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Hniz2KkyfzQ"
                title="Video de bienvenida"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-center text-foreground-muted text-sm py-4 px-4">
              Mira el video completo antes de tu cita. Te tomará 1 minuto.
            </p>
          </motion.div>

          {/* Qué sigue ahora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto mt-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-6">
              Qué sigue ahora
            </h2>

            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              {pasos.map((paso, index) => (
                <div key={paso.numero}>
                  <div className="flex items-start gap-4 py-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {paso.numero}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{paso.titulo}</h3>
                      <p className="text-foreground-muted text-sm">{paso.descripcion}</p>
                    </div>
                  </div>
                  {index < pasos.length - 1 && <div className="border-t border-gray-100" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA sacar reporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6"
          >
            <div className="bg-linear-to-br from-primary to-accent-blue rounded-2xl p-8 sm:p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-56 h-56 bg-secondary rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <Download className="w-10 h-10 mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Saca tu reporte de crédito ahora
                </h3>
                <p className="text-white/85 mb-6">
                  Haz clic abajo y sácalo en menos de 5 minutos.
                </p>
                <a href={REPORTE_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="xl"
                    className="px-8 sm:px-10"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Sacar mi reporte de crédito
                  </Button>
                </a>
                <p className="text-white/60 text-xs mt-3">
                  Sácalo, toma menos de 5 minutos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Alerta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6"
          >
            <div className="flex items-start gap-3 bg-warning/10 border border-warning/30 rounded-xl p-4">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <p className="text-sm text-foreground-muted">
                Si no llegas a tu cita con el reporte de crédito listo, es posible que pierdas tu cita.
                Sácalo ahí mismo para no perder el espacio.
              </p>
            </div>
          </motion.div>

          {/* Footer simple */}
          <div className="text-center mt-12 space-y-2">
            <p className="flex items-center justify-center gap-2 text-foreground-muted text-sm">
              <Mail className="w-4 h-4" />
              micredito786@konfia.io
            </p>
            <p className="flex items-center justify-center gap-2 text-foreground-muted text-xs">
              <Clock className="w-4 h-4" />
              Mi Crédito 786 — Servimos a la comunidad latina en todo USA
            </p>
            <p className="text-foreground-muted/60 text-xs pt-2">
              Diseñado por{' '}
              <a
                href="https://wa.link/a23z53"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                MegaBusiness
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
