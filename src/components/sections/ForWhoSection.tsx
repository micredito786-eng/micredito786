'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card } from '@/components/ui';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const forYouList = [
  'Llegaste a USA buscando una vida mejor',
  'Trabajas duro (a veces 2-3 trabajos)',
  'Ahorras cada dólar que puedes',
  'Pagas tus cuentas a tiempo (o lo intentas)',
  'Tienes $5,000+ ahorrados para down payment',
  'Quieres comprar casa, carro o abrir negocio',
];

const butList = [
  'Te rechazan una y otra vez',
  'Tu crédito está bajo (450-600)',
  'No entiendes por qué si pagas todo',
  'Te da vergüenza que tu familia vea que no avanzas',
  'Ya probaste "credit repair" y no funcionó',
];

const notForYouList = [
  'Buscas magia o milagros',
  'Quieres "borrar todo" en 30 días',
  'No estás dispuesto a seguir recomendaciones',
  'Buscas el camino fácil e ilegal',
  'No tienes paciencia para 90-135 días de proceso',
];

export function ForWhoSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Para nuestra <span className="text-primary">gente latina</span>
          </h2>
          <p className="text-xl text-foreground-muted">
            Esto es para ti si...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Es para ti */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="gradient" padding="lg" className="h-full border-2 border-secondary/30">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-secondary" />
                ESTO ES PARA TI SI...
              </h3>
              <ul className="space-y-3 mb-6">
                {forYouList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-foreground mb-4">PERO...</p>
              <ul className="space-y-3">
                {butList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-lg font-bold text-secondary">
                Si dijiste SÍ a 3 o más... este programa es para ti.
              </p>
            </Card>
          </motion.div>

          {/* No es para ti */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="bordered" padding="lg" className="h-full border-2 border-red-200 bg-red-50/30">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-8 h-8 text-red-500" />
                ESTO NO ES PARA TI SI...
              </h3>
              <ul className="space-y-3 mb-6">
                {notForYouList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-foreground">
                Si eso es lo que buscas, este <strong>NO</strong> es tu lugar.
              </p>
              <p className="text-lg font-semibold text-primary mt-4">
                Aquí trabajamos LEGAL, SERIO y PROFESIONAL.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Por qué entendemos */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="elevated" padding="lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              ¿Por qué nosotros entendemos a la comunidad latina?
            </h3>
            <div className="text-center text-foreground-muted leading-relaxed mb-6">
              <p className="mb-4">
                Porque <strong>Alex y Sam (fundadores)</strong> pasaron por lo mismo.
              </p>
              <p className="mb-4">
                Llegaron a USA. Trabajaron duro. Tuvieron problemas de crédito.
                Score de 520. Bancarrota. Nadie les explicó cómo funciona el sistema aquí.
              </p>
              <p className="mb-4">
                Les tomó AÑOS descubrir cómo disputar bajo FCRA, cómo reconstruir estratégicamente,
                cómo funciona el scoring realmente.
              </p>
              <p className="text-xl font-bold text-primary">
                Hoy: Score 720+
              </p>
            </div>
            <p className="text-center text-lg text-foreground">
              Por eso <strong>Mi Crédito 786™</strong> existe. Para que TÚ no pierdas 5-7 años como ellos perdieron.
            </p>
          </Card>
        </motion.div>

        {/* Cobertura */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            🇺🇸 SERVIMOS A TODA LA COMUNIDAD LATINA EN USA
          </h3>
          <p className="text-lg text-foreground mb-2">
            <strong>Atendemos a la comunidad latina en todo Estados Unidos, 100% virtual y en español.</strong>
          </p>
          <p className="text-foreground-muted">
            Todo el proceso en ESPAÑOL. Entendemos tu situación. Respetamos tu cultura.
          </p>
          <p className="text-xl font-bold text-primary mt-4">
            Somos LATINOS ayudando a LATINOS. 🤝
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            href="https://api.leadconnectorhq.com/widget/form/xwCKMIZkUP3AdUAFpRsj"
            newTab
            variant="cta"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            SÍ, QUIERO TRABAJAR CON USTEDES
          </Button>
          <p className="text-foreground-muted text-sm mt-3">
            En español · Auditoría gratis · Sin compromiso
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
