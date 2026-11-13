'use client';

import { motion } from 'framer-motion';
import { Container, Button, Badge } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video de fondo placeholder - se puede reemplazar por un video real */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/90 to-accent-blue/95" />
        {/* Patrón decorativo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        </div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de urgencia */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="warning" size="lg" pulse className="mb-8">
              Auditoría de crédito GRATIS · 100% en español
            </Badge>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Te Negaron Ese Préstamo Que Necesitabas Por Tu{' '}
            <span className="text-secondary">Mal Crédito</span>?
          </motion.h1>

          {/* Video de YouTube */}
          <motion.div
            className="max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KWWveoowCO0"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Subheadline con dolor */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Dame 5 Minutos Y Te Mostraré Cómo Empezar A Reparar Tu Crédito.</p>
            <p>Para Que No Te Sigan Cerrando Las Puertas.</p>
          </motion.div>

          <motion.div
            className="text-lg sm:text-xl font-semibold text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-secondary text-xl sm:text-2xl">
              PORQUE NADIE TE ENSEÑÓ A ARREGLAR LO QUE REALMENTE IMPORTA.
            </p>
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              href="https://api.leadconnectorhq.com/widget/form/xwCKMIZkUP3AdUAFpRsj"
              newTab
              variant="cta"
              size="xl"
              className="text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6"
              rightIcon={<ArrowRight className="w-6 h-6" />}
            >
              QUIERO MI AUDITORÍA GRATIS
            </Button>
            <p className="text-white/70 mt-4 text-sm">
              En español · Auditoría gratis · Sin compromiso
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Onda decorativa inferior */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-px left-0 right-0 z-10 pt-16">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block h-32 sm:h-40"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200L60 180C120 160 240 120 360 100C480 80 600 80 720 90C840 100 960 120 1080 130C1200 140 1320 140 1380 140L1440 140V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
