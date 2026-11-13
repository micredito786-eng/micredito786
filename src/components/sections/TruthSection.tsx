'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card } from '@/components/ui';
import { ArrowRight, XCircle, CheckCircle, FileSearch } from 'lucide-react';

const myths = [
  {
    lie: 'Mi reporte está bien, no tengo que revisarlo.',
    truth: `La FTC (gobierno de EE.UU.) encontró que 1 de cada 5 personas tiene un error en su reporte de crédito. Y el reporte de crédito es lo que más quejas recibe el gobierno: más de 5.8 millones en 2025.`,
  },
  {
    lie: 'Mejor espero 7 años y se borra solo.',
    truth: `Lo negativo puede quedarse hasta 7 años (una bancarrota hasta 10). Pero si tu reporte tiene un error, no tienes que esperar: la ley te da derecho a disputarlo y el buró tiene que investigarlo, normalmente en 30 días.`,
  },
  {
    lie: 'Necesitas un Social Security de muchos años para tener buen crédito',
    truth: `FALSO. He trabajado con clientes que tienen 2-3 años en USA y lograron scores de 680-720. NO es cuánto tiempo llevas. Es CÓMO está reportada tu información. La diferencia: uno tiene errores que nadie corrigió, el otro construyó su crédito ESTRATÉGICAMENTE.`,
  },
  {
    lie: 'Todas las compañías de crédito son iguales.',
    truth: `Muchas mandan cartas genéricas y cobran por meses sin explicarte nada. Nosotros hacemos cada disputa a tu medida y te explicamos cada paso.`,
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
                      Mito #{index + 1}
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
                      La Verdad
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

        {/* Dato: reportes gratis */}
        <motion.div
          className="max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-4 bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>
                ¿Sabías que puedes ver tus 3 reportes de crédito GRATIS cada semana en AnnualCreditReport.com?
              </strong>{' '}
              Te enseñamos a leerlos. Y si quieres que lo hagamos contigo, agenda tu auditoría gratis.
            </p>
          </div>
        </motion.div>

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
            <p className="text-lg font-semibold text-primary mb-6 max-w-xl mx-auto">
              Trabajamos en ciclos de 45 días. Muchos clientes ven cambios en 45 a 135 días. Cada caso es diferente y no garantizamos resultados.
            </p>
            <Button
              href="https://api.leadconnectorhq.com/widget/form/xwCKMIZkUP3AdUAFpRsj"
              newTab
              variant="cta"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              MUÉSTRAME CÓMO FUNCIONA
            </Button>
            <p className="text-sm text-foreground-muted mt-3">
              En español · Auditoría gratis · Sin compromiso
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
