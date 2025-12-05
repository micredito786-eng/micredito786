'use client';

import { motion } from 'framer-motion';
import { Container, Button, Badge, ProgressBar } from '@/components/ui';
import { ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';

export function HeroSection() {
  const cuposVendidos = 53;
  const cuposTotal = 100;
  const cuposDisponibles = cuposTotal - cuposVendidos;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video de fondo placeholder - se puede reemplazar por un video real */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/90 to-accent-blue/95" />
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
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
              🔥 Solo quedan {cuposDisponibles} cupos este mes
            </Badge>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Cuántas veces más vas a escuchar{' '}
            <span className="text-secondary">&ldquo;NO&rdquo;</span>?
          </motion.h1>

          {/* Subheadline con dolor */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Ya pagaste tus deudas. Ya esperaste años. Ya hiciste &ldquo;todo bien&rdquo;.</p>
          </motion.div>

          <motion.div
            className="text-base sm:text-lg text-white/80 mb-8 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Y cuando aplicaste para esa casa... <span className="text-secondary font-bold">RECHAZADO.</span></p>
            <p>Cuando quisiste ese carro... <span className="text-secondary font-bold">RECHAZADO.</span></p>
            <p>Cuando pediste ese préstamo... <span className="text-secondary font-bold">RECHAZADO.</span></p>
          </motion.div>

          <motion.div
            className="text-lg sm:text-xl font-semibold text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2">NO porque no tengas dinero. NO porque no trabajes duro.</p>
            <p className="text-secondary text-xl sm:text-2xl">
              PORQUE NADIE TE ENSEÑÓ A ARREGLAR LO QUE REALMENTE IMPORTA.
            </p>
          </motion.div>

          {/* Barra de progreso de cupos */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <ProgressBar
              value={cuposVendidos}
              max={cuposTotal}
              variant="secondary"
              size="lg"
              darkBackground
            />
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="#agendar">
              <Button
                variant="cta"
                size="xl"
                className="text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6"
                rightIcon={<ArrowRight className="w-6 h-6" />}
              >
                QUIERO MI CUPO AHORA
              </Button>
            </a>
            <p className="text-white/70 mt-4 text-sm">
              Auditoría gratuita - Solo 30 minutos
            </p>
          </motion.div>

          {/* Indicadores de confianza */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 mb-16 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Última actualización: hace 3 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              <span>23 personas viendo ahora</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>8 auditorías agendadas hoy</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Onda decorativa inferior */}
      <div className="absolute -bottom-px left-0 right-0 z-10 pt-16">
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
