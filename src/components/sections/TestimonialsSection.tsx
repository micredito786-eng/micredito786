'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card } from '@/components/ui';
import { ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jorge H.',
    location: 'Houston, TX',
    flag: '🇲🇽',
    country: 'México',
    scoreBefore: 535,
    scoreAfter: 645,
    days: 90,
    story: `Llegué de México hace 5 años. Trabajando en construcción logré ahorrar $18,000. 
    Pero mi crédito era 535. Me rechazaron en 4 dealers para un carro. 
    Me querían cobrar 26% de interés. ¡26%! Eso son como $600 al mes por un carro de $20,000.`,
    result: 'Financié mi carro al 9.5%. Pago $340/mes (ahorro $260/mes = $3,120/año). Los $699 se pagaron solos en 3 meses.',
    highlight: 'carro nuevo',
  },
  {
    name: 'Carmen S.',
    location: 'Orlando, FL',
    flag: '🇵🇷',
    country: 'Puerto Rico',
    scoreBefore: 550,
    scoreAfter: 680,
    days: 135,
    story: `Vine de Puerto Rico después del huracán María. Empecé de cero aquí en Florida.
    Con mi esposo trabajamos duro, ahorramos $32,000. Pero cuando fuimos al banco para la casa:
    'Su crédito es muy bajo. 550. No califican.' Me dolió en el alma.`,
    result: 'PRE-CALIFICADA para FHA. ¡Cerramos nuestra casa el mes pasado! Mis nenas tienen su cuarto. Por fin.',
    highlight: 'casa propia',
  },
  {
    name: 'Luis A.',
    location: 'Miami, FL',
    flag: '🇻🇪',
    country: 'Venezuela',
    scoreBefore: 520,
    scoreAfter: 655,
    days: 120,
    story: `Soy de Venezuela. Llegué hace 3 años. Trabajé en Uber, luego en restaurante, ahora en warehouse.
    Quería abrir mi propio negocio de catering. Tenía el plan, los clientes, todo.
    Solo me faltaba: $15,000 de préstamo. Banco: NO. Credit union: NO. Online lenders: 34% interés.`,
    result: 'Préstamo SBA aprobado: $25,000 al 8%. MI NEGOCIO ABRIÓ HACE 2 MESES. Hoy tengo 3 empleados.',
    highlight: 'negocio propio',
  },
  {
    name: 'Andrea M.',
    location: 'Charlotte, NC',
    flag: '🇨🇴',
    country: 'Colombia',
    scoreBefore: 560,
    scoreAfter: 670,
    days: 75,
    story: `De Colombia. 7 años aquí. Siempre pagué todo a tiempo pero mi score no subía.
    ¿Por qué? Porque tenía 6 cuentas DUPLICADAS. 6 cuentas que aparecían 2 veces en mi reporte.
    NADIE me lo había dicho.`,
    result: 'Eliminaron 5 de las 6 duplicadas. Ahora estoy aplicando para casa. ¿Cuántos años perdí por no saber esto?',
    highlight: 'errores corregidos',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-neutral">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dice nuestra <span className="text-primary">comunidad latina</span>
          </h2>
          <p className="text-xl text-foreground-muted">
            Historias reales de familias que lograron sus metas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" hover className="h-full">
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Score comparison */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-linear-to-r from-red-50 to-green-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-xs text-foreground-muted mb-1">ANTES</p>
                    <p className="text-2xl font-bold text-red-500">{testimonial.scoreBefore}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground-muted mb-1">DESPUÉS</p>
                    <p className="text-2xl font-bold text-secondary">{testimonial.scoreAfter}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground-muted mb-1">DÍAS</p>
                    <p className="text-2xl font-bold text-primary">{testimonial.days}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground-muted leading-relaxed pl-6">
                    {testimonial.story}
                  </p>
                </div>

                {/* Result */}
                <div className="bg-secondary/10 rounded-xl p-4 mb-4">
                  <p className="text-secondary font-semibold">
                    ✓ {testimonial.result}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.flag}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground-muted">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#agendar">
            <Button
              variant="cta"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              QUIERO RESULTADOS COMO ESTOS
            </Button>
          </a>
          <p className="text-foreground-muted text-sm mt-3">
            47 cupos · Todo en español 🇪🇸
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
