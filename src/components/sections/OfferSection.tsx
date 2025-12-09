'use client';

import { motion } from 'framer-motion';
import { Container, Button, Card, Badge, ProgressBar } from '@/components/ui';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  RefreshCw, 
  Target,
  Shield,
  Scale,
  AlertTriangle,
  MessageCircle,
  Users,
  FileText,
  Phone
} from 'lucide-react';

const cycles = [
  {
    number: 1,
    days: '1-45',
    title: 'TU DIAGNÓSTICO REAL',
    description: 'Te mostramos EXACTAMENTE qué te está hundiendo.',
    icon: Search,
    items: [
      'Las 8-15 cuentas ESPECÍFICAS que te cuestan aprobaciones',
      'Los errores EXACTOS en cada una (dates, amounts, status)',
      'Cuánto impacto tiene cada error en tu score',
      'Disputas PERSONALIZADAS escritas para TU caso',
      'Todo explicado como si fuera para tu mamá',
    ],
    result: 'Claridad total + primeras correcciones en proceso',
  },
  {
    number: 2,
    days: '46-90',
    title: 'TU TRANSFORMACIÓN',
    description: 'Analizamos respuestas y ajustamos la estrategia.',
    icon: RefreshCw,
    items: [
      'Segunda ronda de disputas si es necesario',
      'Optimización de utilización de crédito',
      'Estrategia de secured cards (recomendaciones)',
      'Credit builder loans (si tu caso lo necesita)',
      'Te explicamos TODO: por qué y cómo te beneficia',
    ],
    result: 'Score subiendo + perfil mejorando + tú entendiendo',
  },
  {
    number: 3,
    days: '91-135',
    title: 'PREPARACIÓN PARA TU META',
    description: 'Te dejamos 100% LISTO para aplicar.',
    icon: Target,
    items: [
      'Últimas optimizaciones',
      'Estrategia específica: Casa, Carro o Negocio',
      'Timing perfecto para tus aplicaciones',
      'Qué decir, qué documentos llevar',
      'Cómo presentarte para pre-calificaciones',
    ],
    result: 'Perfil listo para PRE-CALIFICACIONES con confianza',
  },
];

const included = [
  { icon: FileText, text: 'Auditoría FCRA completa de tus 3 reportes' },
  { icon: CheckCircle, text: 'Todas las disputas que TU caso necesite (sin límite)' },
  { icon: Target, text: 'Plan personalizado de reconstrucción' },
  { icon: RefreshCw, text: 'Seguimiento completo durante 135 días' },
  { icon: MessageCircle, text: 'Soporte por WhatsApp en ESPAÑOL (<24h)' },
  { icon: FileText, text: 'Documentación completa de cada acción' },
  { icon: Users, text: 'Acceso a grupo privado de clientes latinos' },
  { icon: Phone, text: 'Llamadas de seguimiento cada 45 días' },
];

export function OfferSection() {
  const cuposVendidos = 53;
  const cuposTotal = 100;

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" size="lg" className="mb-6">
            PLAN 786™
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            El sistema que te abre las puertas
            <br />
            <span className="text-primary">que te han cerrado en USA</span>
          </h2>
          <p className="text-xl text-foreground-muted">
            Todo en español. Todo explicado. Todo claro.
          </p>
        </motion.div>

        {/* Ciclos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cycles.map((cycle, index) => (
            <motion.div
              key={cycle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="bordered" padding="lg" hover className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <cycle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold">
                      CICLO {cycle.number}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      Días {cycle.days}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cycle.title}
                </h3>
                <p className="text-foreground-muted mb-4">{cycle.description}</p>

                <ul className="space-y-2 mb-6">
                  {cycle.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-secondary">
                    ✓ {cycle.result}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Todo incluido */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="gradient" padding="lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              TODO ESTO INCLUYE:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sección Legal */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          {/* CROA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="bordered" padding="md">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    ⚖️ TUS DERECHOS COMO CONSUMIDOR (CROA)
                  </h4>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li>✓ Derecho a recibir tu CONTRATO COMPLETO antes de pagar</li>
                    <li>✓ Derecho a CANCELAR sin penalidad dentro de 3 días</li>
                    <li>✓ Derecho a que NO te prometan resultados específicos</li>
                    <li>✓ Derecho a DISPUTAR por ti mismo sin contratar a nadie</li>
                  </ul>
                  <p className="text-sm font-semibold text-primary mt-2">
                    NOSOTROS CUMPLIMOS 100% CON ESTAS LEYES.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="bordered" padding="md" className="border-amber-200 bg-amber-50/50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    ❗ DISCLAIMER LEGAL IMPORTANTE
                  </h4>
                  <p className="text-sm text-foreground-muted mb-3">
                    Mi Crédito 786™ NO puede prometer ni garantizar:
                  </p>
                  <ul className="text-sm text-foreground-muted space-y-1 mb-3">
                    <li>❌ Aumento específico de puntaje</li>
                    <li>❌ Eliminación garantizada de cuentas específicas</li>
                    <li>❌ Resultados en tiempo específico</li>
                    <li>❌ Aprobación garantizada para préstamos</li>
                  </ul>
                  <p className="text-sm text-foreground">
                    <strong>LO QUE SÍ GARANTIZAMOS:</strong> Auditoría completa, disputas personalizadas, 
                    proceso legal bajo FCRA/CROA, y transparencia total.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Precio */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card variant="elevated" padding="lg" className="border-2 border-primary">
            <p className="text-foreground-muted mb-2">Otras agencias cobran:</p>
            <p className="text-lg text-foreground line-through mb-4">
              $99-150/mes × 8 meses = $792 - $1,200
            </p>

            <div className="bg-primary text-white rounded-2xl p-8 mb-6">
              <p className="text-lg mb-2">NOSOTROS:</p>
              <p className="text-5xl font-bold mb-2">$499</p>
              <p className="text-xl">UNA SOLA VEZ</p>
            </div>

            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Sin mensualidades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Sin cargos ocultos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Sin renovaciones automáticas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Todo el proceso incluido</span>
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-700 font-semibold mb-3">
                ⚠️ Este precio es SOLO para los primeros 100 clientes
              </p>
              <ProgressBar value={cuposVendidos} max={cuposTotal} variant="gradient" />
              <p className="text-xs text-foreground-muted mt-2">
                Después del cupo #100: Precio regular = $1,500
              </p>
            </div>

            {/* Garantía */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-secondary" />
                <p className="font-bold text-foreground">GARANTÍA DE TRANSPARENCIA TOTAL</p>
              </div>
              <p className="text-sm text-foreground-muted">
                Si después de tu AUDITORÍA GRATUITA decides que no es para ti: 
                <strong> NO PAGAS NI UN DÓLAR.</strong> Cero presión. Cero trucos.
              </p>
            </div>

            <a href="https://pulse.disputeprocess.com/jsp/custom_form.jsp?tab_id=UEVFb0dPMlNnaVlLOGgvLzB4c0RaZz09&add_affiliate=0&cust_type=1&company_id=RlROSXBsY3FIL2tGcWkrL2Y3NFlTQT09&isLinkFromIframe=1" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button
                variant="cta"
                size="xl"
                className="w-full text-xl"
                rightIcon={<ArrowRight className="w-6 h-6" />}
              >
                SÍ, QUIERO MI AUDITORÍA GRATUITA
              </Button>
            </a>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-foreground-muted">
              <span>✅ 100% en español</span>
              <span>🇺🇸 Servimos todo USA + PR 🇵🇷</span>
              <span>✅ Sin compromiso</span>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
