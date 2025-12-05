'use client';

import { Container, Button, Accordion } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    id: '1',
    question: '¿Funciona si no tengo Social Security hace muchos años?',
    answer: (
      <>
        <p className="mb-3">
          <strong>SÍ.</strong> No importa si tienes 2 años o 15 años con tu Social.
        </p>
        <p>
          Lo que importa es CÓMO está reportada tu información. He trabajado con clientes de 3 años 
          en USA que llegaron a 680+. Y con clientes de 12 años que tenían 520 porque nadie les 
          enseñó a manejar su crédito aquí.
        </p>
      </>
    ),
  },
  {
    id: '2',
    question: '¿Hablan español?',
    answer: (
      <>
        <p className="mb-3">
          <strong>SÍ. TODO el proceso es en español.</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>La auditoría: en español</li>
          <li>Las llamadas: en español</li>
          <li>Los documentos: en español</li>
          <li>El soporte por WhatsApp: en español</li>
        </ul>
        <p className="mt-3">No tienes que hablar inglés perfecto para trabajar con nosotros.</p>
      </>
    ),
  },
  {
    id: '3',
    question: 'Ya pagué mis deudas, ¿por qué mi score sigue bajo?',
    answer: (
      <>
        <p className="mb-3">
          Porque <strong>PAGAR no es lo mismo que CORREGIR REPORTE.</strong>
        </p>
        <p className="mb-3">
          Cuando pagas una deuda, la cuenta sigue ahí reportada como: &quot;Paid collection&quot; (todavía negativa), 
          &quot;Settled for less&quot; (todavía te hunde), &quot;Charge-off paid&quot; (todavía daña).
        </p>
        <p>
          Pagar ayuda... pero NO es suficiente. Necesitas DISPUTAR errores + RECONSTRUIR estratégicamente.
        </p>
      </>
    ),
  },
  {
    id: '4',
    question: '¿Pueden borrar TODO mi historial negativo?',
    answer: (
      <>
        <p className="mb-3">
          <strong>NO. Y NADIE puede legalmente.</strong>
        </p>
        <p className="mb-3">Si alguien te promete &quot;borrar todo&quot; está MINTIENDO.</p>
        <p className="mb-3">Lo que SÍ podemos hacer:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Disputar información INCORRECTA bajo ley FCRA</li>
          <li>Si los bureaus NO pueden verificar, ELLOS deben eliminar</li>
          <li>Reconstruir tu perfil con cuentas positivas nuevas</li>
        </ul>
        <p className="mt-3">Algunos items se eliminan. Otros no. Depende de qué esté mal reportado en TU caso específico.</p>
      </>
    ),
  },
  {
    id: '5',
    question: '¿Garantizan que mi score va a subir a 700?',
    answer: (
      <>
        <p className="mb-3">
          <strong>NO. Nadie puede garantizar puntaje específico LEGALMENTE.</strong>
        </p>
        <p className="mb-3">Es ILEGAL prometer eso bajo ley CROA. Si una compañía te lo promete = RED FLAG.</p>
        <p className="mb-3">Lo que SÍ garantizamos:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auditoría completa de tu reporte</li>
          <li>Disputas personalizadas bajo FCRA</li>
          <li>Plan de reconstrucción estratégica</li>
          <li>Seguimiento profesional documentado</li>
        </ul>
      </>
    ),
  },
  {
    id: '6',
    question: 'Ya probé otra compañía de credit repair y perdí $900. ¿Por qué ustedes son diferentes?',
    answer: (
      <>
        <p className="mb-3">Porque el 90% de &quot;credit repair&quot; son BASURA:</p>
        <p className="mb-3"><strong>ELLOS:</strong> Cartas genéricas, promesas falsas, $99-150/mes indefinido, sin explicaciones.</p>
        <p className="mb-3"><strong>NOSOTROS:</strong> Disputas PERSONALIZADAS, promesas LEGALES y realistas, $499 UNA VEZ, te explicamos TODO paso a paso.</p>
        <p>Además: auditoría GRATUITA primero. Si no tiene sentido = NO PAGAS.</p>
      </>
    ),
  },
  {
    id: '7',
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: (
      <>
        <p className="mb-3">Depende de tu caso. <strong>REALISTA:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Primeros cambios: 45-60 días</li>
          <li>Cambios significativos: 90-120 días</li>
          <li>Proceso completo: 135 días</li>
        </ul>
        <p className="mt-3">ALGUNOS clientes ven cambios más rápido. OTROS necesitan el ciclo completo. No hacemos promesas de tiempo porque cada caso es diferente.</p>
      </>
    ),
  },
  {
    id: '8',
    question: '¿Puedo hacer esto yo mismo sin pagar?',
    answer: (
      <>
        <p className="mb-3">
          <strong>SÍ. Tienes ese DERECHO bajo ley FCRA.</strong> Puedes disputar directamente con los bureaus tú solo.
        </p>
        <p className="mb-3">La pregunta es: ¿DEBERÍAS?</p>
        <p className="mb-3">Si tienes tiempo de leer tu reporte completo, investigar qué es disputable, redactar cartas personalizadas, hacer seguimiento cada 30 días... Entonces hazlo tú.</p>
        <p>Si NO tienes ese tiempo/conocimiento, para eso estamos. Es como hacer tus taxes: PUEDES hacerlos tú... pero muchos contratan contador.</p>
      </>
    ),
  },
  {
    id: '9',
    question: '¿Van a pedir mis contraseñas de banco o cuentas?',
    answer: (
      <>
        <p className="mb-3">
          <strong>NUNCA.</strong> Si alguien te pide contraseñas = FRAUDE.
        </p>
        <p className="mb-3">Nosotros SOLO necesitamos:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tu reporte de crédito (tú lo bajas y nos lo mandas)</li>
          <li>Información básica (nombre, dirección, SSN/ITIN para disputas)</li>
        </ul>
        <p className="mt-3">NUNCA accedemos a tus cuentas. NUNCA pedimos contraseñas. NUNCA tocamos tu dinero.</p>
      </>
    ),
  },
  {
    id: '10',
    question: '¿Trabajan en mi estado / ciudad?',
    answer: (
      <>
        <p className="mb-3">
          <strong>SÍ. Trabajamos en TODO Estados Unidos + Puerto Rico.</strong>
        </p>
        <p className="mb-3">El proceso es 100% remoto:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auditoría: por Zoom/llamada</li>
          <li>Documentos: por email/WhatsApp</li>
          <li>Soporte: por WhatsApp</li>
          <li>Seguimiento: por llamada</li>
        </ul>
        <p className="mt-3">No importa si estás en Miami, Los Angeles, Houston, New York, Chicago, o cualquier ciudad.</p>
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-neutral">
      <Container size="md">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-xl text-foreground-muted">
            Lo que nos preguntan todo el tiempo
          </p>
        </motion.div>

        <Accordion items={faqItems} />

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground mb-4">
            ¿Tienes más preguntas? Te las respondemos en tu auditoría gratuita.
          </p>
          <a href="#agendar">
            <Button
              variant="cta"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              TENGO MÁS PREGUNTAS - QUIERO MI AUDITORÍA
            </Button>
          </a>
          <p className="text-foreground-muted text-sm mt-3">
            47 cupos · Español · Sin compromiso
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
