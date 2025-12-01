'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card } from '@/components/ui';
import { ArrowRight, XCircle, CheckCircle } from 'lucide-react';

const myths = [
  {
    lie: 'En USA, si pagas tus deudas tu crédito sube automáticamente',
    truth: `En tu país quizás funcionaba así. Aquí NO. El 70% de reportes de crédito tienen ERRORES (dato oficial de la FTC). Puedes pagar TODAS tus deudas y seguir con cuentas duplicadas, balances incorrectos, fechas equivocadas. Pagaste... pero el sistema no se actualizó.`,
  },
  {
    lie: 'Solo espera 7 años y tu crédito se limpia solo',
    truth: `Eso es lo que te dicen para que NO HAGAS NADA. Muchos errores NO se van en 7 años. Algunos reportes incorrectos quedan 10, 15, 20 años. Los burós de crédito NO revisan tu reporte. HASTA QUE TÚ LO DISPUTES bajo las leyes FCRA.`,
  },
  {
    lie: 'Necesitas un Social Security de muchos años para tener buen crédito',
    truth: `FALSO. He trabajado con clientes que tienen 2-3 años en USA y lograron scores de 680-720. NO es cuánto tiempo llevas. Es CÓMO está reportada tu información. La diferencia: uno tiene errores que nadie corrigió, el otro construyó su crédito ESTRATÉGICAMENTE.`,
  },
  {
    lie: 'Los servicios de credit repair son todos iguales',
    truth: `El 90% de "credit repair" son BASURA. Cartas genéricas de Google traducidas al español. Te cobran $99-150/mes por MESES sin resultados. Resultado: $800-1,200 PERDIDOS. Tu crédito: IGUAL. ¿Ya te pasó?`,
  },
];

export function TruthSection() {
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
            Por qué sigues <span className="text-primary">atrapado</span> en USA
          </h2>
          <p className="text-xl text-foreground-muted">
            (Y cómo el sistema te tiene mal informado)
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {myths.map((myth, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" hover>
                {/* Mentira */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-1">
                      Mentira #{index + 1}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      &ldquo;{myth.lie}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Verdad */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1">
                      Verdad Real
                    </p>
                    <p className="text-foreground-muted leading-relaxed">
                      {myth.truth}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lo que sí funciona */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Entonces... ¿QUÉ SÍ FUNCIONA EN USA?
          </h3>
          <Card variant="gradient" padding="lg">
            <p className="text-lg text-foreground mb-6">
              Un sistema <strong>PROFESIONAL</strong> que:
            </p>
            <ul className="text-left space-y-3 mb-8">
              {[
                'IDENTIFICA exactamente qué errores tienes',
                'DISPUTA correctamente bajo ley FCRA',
                'RECONSTRUYE tu historial como lo hacen los americanos',
                'Te PREPARA para que finalmente te APRUEBEN',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-primary mb-6">
              NO en 7 años. EN 45-135 DÍAS.
            </p>
            <a href="https://calendly.com/micredito786-konfia/auditoria-crediticia-gratuita-786" target="_blank" rel="noopener noreferrer">
              <Button
                variant="cta"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                MUÉSTRAME CÓMO FUNCIONA
              </Button>
            </a>
            <p className="text-sm text-foreground-muted mt-3">
              47 cupos · Atención en español 🇪🇸
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
