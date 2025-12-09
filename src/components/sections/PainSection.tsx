'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card } from '@/components/ui';
import { ArrowRight, XCircle, DollarSign, HeartCrack, ThumbsDown, Eye } from 'lucide-react';

export function PainSection() {
  const painPoints = [
    { icon: DollarSign, text: '$1,800-2,500 de renta tirados a la basura' },
    { icon: ThumbsDown, text: 'Intereses altísimos en todo' },
    { icon: HeartCrack, text: 'Rechazos que duelen en el alma' },
    { icon: Eye, text: 'Ver a otros progresar mientras tú no' },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Testimonio principal */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="gradient" padding="lg" className="relative">
            {/* Comillas decorativas */}
            <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif">&ldquo;</div>
            
            <div className="relative z-10">
              {/* Testimonio escrito */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  &ldquo;Llegué de Colombia hace 8 años. Trabajé limpiando casas. Luego oficinas. 
                  Luego conseguí mejor trabajo. Ahorré <strong>$28,000</strong> para mi casa. 
                  $28,000... limpiando. Ahorrando cada dólar.
                </p>
                <p className="mb-4">
                  Cuando fui al banco me miraron como si fuera nadie. 
                  <span className="text-primary font-bold">&apos;Su crédito es 545. No califica.&apos;</span>
                </p>
                <p className="mb-4">
                  Me querían cobrar 12% de interés cuando a otros les dan 6%. 
                  <strong>EL DOBLE.</strong> Por ser latina. Por tener mal crédito.
                </p>
                <p className="mb-4">
                  Hasta que conocí a Alex de Mi Crédito 786™. Me explicó que mi reporte tenía 
                  <span className="text-secondary font-bold"> 11 errores</span>. ONCE ERRORES que nadie me había dicho.
                </p>
                <p className="text-xl font-bold text-primary">
                  90 días después: 660 de score. HOY TENGO LAS LLAVES DE MI CASA.&rdquo;
                </p>
              </blockquote>

              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  🇨🇴
                </div>
                <div>
                  <cite className="not-italic font-bold text-foreground">Diana M.</cite>
                  <p className="text-foreground-muted text-sm">Orlando, FL</p>
                </div>
              </footer>
            </div>
          </Card>
        </motion.div>

        {/* Texto de conexión */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl text-foreground mb-4">
            Esta <strong>NO</strong> es una historia inventada para venderte.
          </p>
          <p className="text-lg text-foreground-muted mb-6">
            Es la realidad de miles de latinos en USA. Llegaron buscando el sueño americano. 
            Trabajan el doble que otros. Ahorran más que otros. Cumplen sus compromisos.
          </p>
          <p className="text-2xl font-bold text-primary mb-8">
            PERO SU CRÉDITO LOS TIENE ATRAPADOS.
          </p>
          <p className="text-lg text-foreground-muted">
            No porque sean malos pagadores. No porque no tengan dinero.
            <br />
            <span className="text-foreground font-semibold">
              PORQUE NADIE LES ENSEÑÓ CÓMO FUNCIONA EL SISTEMA DE CRÉDITO AQUÍ.
            </span>
          </p>
        </motion.div>

        {/* Lista de dolores */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-lg text-foreground-muted mb-6">
            Y cada mes que pasa:
          </p>
          <div className="grid gap-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-red-50 border border-red-100 rounded-xl p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-foreground">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-3xl font-bold text-primary mb-6">¿HASTA CUÁNDO?</p>
          <a href="#agendar">
            <Button
              variant="cta"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              QUIERO SALIR DE ESTO YA
            </Button>
          </a>
          <p className="text-foreground-muted text-sm mt-3">47 cupos restantes</p>
        </motion.div>
      </Container>
    </section>
  );
}
