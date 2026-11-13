import Link from 'next/link';
import { Clause, LegalContact, LegalLayout, List, legalLinkClass as linkClass } from './LegalLayout';

export const TERMINOS_ULTIMA_ACTUALIZACION = '11 de noviembre de 2026';

export function TerminosSection({ path }: { path: string }) {
  return (
    <LegalLayout
      title="Términos y Condiciones — Mi Crédito 786™"
      breadcrumb="Términos y Condiciones"
      path={path}
      updated={TERMINOS_ULTIMA_ACTUALIZACION}
    >
      <Clause n={1} title="Quién presta el servicio">
        <p>
          Mi Crédito 786™ es una marca de KONFIA Corp (Florida), empresa de consultoría y educación
          financiera. Los servicios de corrección de errores en reportes de crédito de Mi Crédito 786 se
          prestan conforme a la ley de Credit Service Organizations de Florida, con fianza (surety bond)
          vigente de $10,000 que exige la ley. Al usar micredito786.com o contratar nuestros servicios
          aceptas estos términos.
        </p>
      </Clause>

      <Clause n={2} title="Qué hacemos">
        <List>
          <li>
            <strong className="text-foreground">Educación financiera:</strong> te explicamos cómo funciona
            tu reporte, tus derechos y cómo construir un perfil de crédito sano.
          </li>
          <li>
            <strong className="text-foreground">Auditoría de tus reportes:</strong> revisamos tus reportes
            de Equifax, Experian y TransUnion para identificar información inexacta, incompleta o que no se
            puede verificar.
          </li>
          <li>
            <strong className="text-foreground">Disputas conforme a la FCRA:</strong> preparamos y enviamos
            disputas a los burós y acreedores sobre la información que tú confirmes que es inexacta. No
            disputamos información correcta y verificable.
          </li>
        </List>
        <p>
          No somos abogados ni asesores financieros con licencia. No ofrecemos asesoría legal, fiscal ni de
          inversión, ni representación legal.
        </p>
      </Clause>

      <Clause n={3} title="Cumplimiento de la CROA y la ley de Florida">
        <p>
          Prestamos nuestros servicios conforme a la Credit Repair Organizations Act (15 U.S.C. § 1679 y
          siguientes) y a la ley de Credit Service Organizations de Florida (Fla. Stat. § 817.7001 y
          siguientes). En consecuencia:
        </p>
        <List>
          <li>
            Antes de firmar te entregamos por escrito, en un documento separado, la divulgación &ldquo;Tus
            derechos sobre tu archivo de crédito según la ley estatal y federal&rdquo;.
          </li>
          <li>
            Todo servicio se presta con un contrato escrito que describe los servicios, el costo total, el
            tiempo estimado y tu derecho a cancelar.
          </li>
          <li>
            Puedes cancelar sin costo ni penalidad dentro de los 3 días hábiles siguientes a la firma, o en
            el plazo mayor que te dé la ley de tu estado.
          </li>
          <li>
            No cobramos por un servicio antes de haberlo realizado completamente, tal como lo exige la ley.
          </li>
          <li>
            No te pedimos que cambies tu identidad, que uses otro número de identificación ni que des
            información falsa a un buró o acreedor.
          </li>
        </List>
      </Clause>

      <Clause n={4} title="Disponibilidad por estado">
        <p>
          KONFIA Corp mantiene la fianza que exige la ley de Florida. Ofrecemos educación y consultoría de
          crédito en todo Estados Unidos. El servicio de disputas solo se presta a residentes de estados
          donde cumplimos los requisitos de registro, licencia o fianza de ese estado. No ofrecemos
          servicios de reparación de crédito a residentes de Georgia. Antes de contratar te confirmamos por
          escrito qué servicios están disponibles donde vives; consulta también el Aviso por Estado en
          micredito786.com.
        </p>
      </Clause>

      <Clause n={5} title="Sin garantías de resultado">
        <p>
          No podemos prometer ni garantizamos un aumento de puntaje, la eliminación de cuentas específicas,
          resultados en un plazo determinado ni la aprobación de préstamos. La información correcta y
          verificable puede permanecer en tu reporte hasta 7 años (10 en algunos casos de bancarrota). Los
          resultados dependen de cada caso y de las respuestas de los burós y acreedores.
        </p>
      </Clause>

      <Clause n={6} title="Auditoría gratuita">
        <p>
          La auditoría inicial de 30 minutos es gratuita y sin compromiso. No te obliga a contratar ningún
          servicio.
        </p>
      </Clause>

      <Clause n={7} title="Tus responsabilidades">
        <p>
          Darnos información verdadera y completa, revisar y aprobar cada disputa antes de enviarla, y
          avisarnos de las respuestas que recibas de los burós o acreedores.
        </p>
      </Clause>

      <Clause n={8} title="Pagos y cancelación">
        <p>
          Los precios y la forma de pago se detallan en tu contrato. Puedes cancelar el servicio en
          cualquier momento por escrito a{' '}
          <a href="mailto:micredito786@konfia.io" className={linkClass}>
            micredito786@konfia.io
          </a>
          ; solo pagas por los servicios ya realizados por completo, según tu contrato.
        </p>
      </Clause>

      <Clause n={9} title="Limitación de responsabilidad">
        <p>
          En la medida que lo permita la ley, la responsabilidad de KONFIA Corp se limita al monto que hayas
          pagado por los servicios. Nada en estos términos limita los derechos que te dan la CROA o la ley
          de Florida.
        </p>
      </Clause>

      <Clause n={10} title="Ley aplicable">
        <p>
          Estos términos se rigen por las leyes de Florida y las leyes federales de Estados Unidos.
          Cualquier disputa se resolverá en los tribunales del condado de Miami-Dade, Florida.
        </p>
      </Clause>

      <Clause n={11} title="Mensajes de texto (SMS)">
        <p>
          Mi Crédito 786 / KONFIA Corp envía mensajes de texto solo a quienes lo autorizan marcando la
          casilla de consentimiento en nuestros formularios. Los mensajes son informativos: confirmación y
          recordatorios de citas, seguimiento de tu solicitud y avisos de servicio; los mensajes
          promocionales solo se envían si marcas esa casilla por separado. La frecuencia varía. Pueden
          aplicar tarifas de mensajes y datos. Responde <strong className="text-foreground">STOP</strong>{' '}
          para cancelar en cualquier momento y <strong className="text-foreground">HELP</strong> para
          ayuda, o escribe a{' '}
          <a href="mailto:micredito786@konfia.io" className={linkClass}>
            micredito786@konfia.io
          </a>
          . El consentimiento no es condición de compra. Los operadores móviles no son responsables por
          mensajes retrasados o no entregados. No compartimos tu número ni tu consentimiento con terceros
          para fines de marketing; consulta nuestra{' '}
          <Link href="/politica-de-privacidad" className={linkClass}>
            Política de Privacidad
          </Link>
          .
        </p>
      </Clause>

      <Clause n={12} title="Contacto">
        <LegalContact />
      </Clause>
    </LegalLayout>
  );
}
