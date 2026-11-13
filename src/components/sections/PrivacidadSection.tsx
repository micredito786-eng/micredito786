import Link from 'next/link';
import { Clause, LegalContact, LegalLayout, List, Strong, legalLinkClass as linkClass } from './LegalLayout';

export const PRIVACIDAD_ULTIMA_ACTUALIZACION = '12 de noviembre de 2026';

export function PrivacidadSection({ path }: { path: string }) {
  return (
    <LegalLayout
      title="Política de Privacidad — Mi Crédito 786™"
      breadcrumb="Política de Privacidad"
      path={path}
      updated={PRIVACIDAD_ULTIMA_ACTUALIZACION}
    >
      <Clause n={1} title="Quiénes somos">
        <p>
          Mi Crédito 786™ es una marca de KONFIA Corp, empresa de Florida. Esta política explica qué
          información recopilamos cuando usas micredito786.com, agendas una cita o contratas nuestros
          servicios, cómo la usamos y qué opciones tienes. Al usar el sitio aceptas esta política, junto con
          nuestros{' '}
          <Link href="/terminos-y-condiciones" className={linkClass}>
            Términos y Condiciones
          </Link>
          .
        </p>
      </Clause>

      <Clause n={2} title="Información que recopilamos">
        <List>
          <li>
            <Strong>Datos de contacto:</Strong> nombre, teléfono, correo electrónico, dirección y estado donde
            vives, cuando llenas un formulario, agendas una cita o nos escribes.
          </li>
          <li>
            <Strong>Datos para prestar el servicio:</Strong> si contratas, podemos pedirte fecha de
            nacimiento, número de Seguro Social o ITIN, copia de tu identificación, comprobante de domicilio y
            tus reportes de crédito. Solo los pedimos cuando son necesarios para revisar tus reportes o
            preparar disputas.
          </li>
          <li>
            <Strong>Comunicaciones:</Strong> los mensajes, correos, llamadas y chats que tengas con nosotros.
          </li>
          <li>
            <Strong>Datos técnicos:</Strong> dirección IP, tipo de navegador y dispositivo, páginas que
            visitas y cómo llegaste al sitio, recogidos mediante cookies y herramientas similares.
          </li>
        </List>
      </Clause>

      <Clause n={3} title="Cómo usamos tu información">
        <List>
          <li>Responder a tus solicitudes y agendar, confirmar y recordarte tus citas.</li>
          <li>Hacer tu auditoría, preparar y enviar las disputas que tú apruebes y darte seguimiento.</li>
          <li>Cumplir con la CROA, la FCRA, la ley de Florida y otras leyes aplicables.</li>
          <li>Enviarte mensajes informativos y, solo si lo autorizas, mensajes promocionales.</li>
          <li>Mejorar el sitio y medir el resultado de nuestros anuncios.</li>
          <li>Prevenir fraude y proteger la seguridad de nuestros clientes y sistemas.</li>
        </List>
      </Clause>

      <Clause n={4} title="Con quién compartimos tu información">
        <p>
          <Strong>No vendemos tu información personal.</Strong> Solo la compartimos en estos casos:
        </p>
        <List>
          <li>
            <Strong>Burós de crédito y acreedores:</Strong> cuando enviamos una disputa que tú autorizaste,
            les damos los datos necesarios para identificarte e investigar.
          </li>
          <li>
            <Strong>Proveedores que trabajan para nosotros:</Strong> por ejemplo, nuestra plataforma de
            formularios, citas y mensajes (LeadConnector), alojamiento web, correo y herramientas de
            análisis. Solo pueden usar tu información para prestarnos ese servicio.
          </li>
          <li>
            <Strong>Por obligación legal:</Strong> cuando lo exija la ley, una orden judicial o una autoridad
            competente, o para defender nuestros derechos.
          </li>
          <li>
            <Strong>Cambio de empresa:</Strong> si KONFIA Corp se fusiona o vende el negocio, la información
            pasaría a la nueva empresa bajo esta misma política.
          </li>
        </List>
      </Clause>

      <Clause n={5} title="Mensajes de texto (SMS) y tu número de teléfono">
        <p>
          Solo te enviamos mensajes de texto si los autorizas marcando la casilla de consentimiento en
          nuestros formularios. Los mensajes promocionales requieren que marques esa casilla por separado. La
          frecuencia varía y pueden aplicar tarifas de mensajes y datos. Responde{' '}
          <Strong>STOP</Strong> para dejar de recibirlos o <Strong>HELP</Strong> para ayuda.
        </p>
        <p>
          <Strong>
            No compartimos ni vendemos tu número de teléfono móvil ni tu consentimiento para recibir mensajes
            de texto con terceros ni afiliados para fines de marketing o promocionales.
          </Strong>{' '}
          Esto no incluye a los proveedores que nos ayudan a enviar los mensajes, que solo pueden usarlos
          para ese fin.
        </p>
      </Clause>

      <Clause n={6} title="Cookies y herramientas de terceros">
        <p>
          El sitio usa cookies y herramientas de terceros para funcionar y medir su uso: Google Analytics y
          Google Tag Manager (estadísticas y anuncios), el calendario y formularios de LeadConnector, el chat
          de WhatsApp y videos de YouTube. Estos servicios pueden guardar sus propias cookies según sus
          políticas. Puedes bloquear o borrar las cookies desde la configuración de tu navegador; algunas
          partes del sitio podrían dejar de funcionar bien.
        </p>
      </Clause>

      <Clause n={7} title="Cómo protegemos tu información">
        <p>
          Usamos medidas razonables de seguridad administrativas, técnicas y físicas, como conexiones
          cifradas y acceso limitado solo al personal que lo necesita. Ningún sistema es 100% seguro, pero
          trabajamos para proteger tu información, en especial tu número de Seguro Social o ITIN y tus
          reportes de crédito.
        </p>
      </Clause>

      <Clause n={8} title="Cuánto tiempo guardamos tu información">
        <p>
          Guardamos tu información mientras seas cliente y durante el tiempo que exijan la ley o nuestras
          obligaciones contractuales y fiscales. Después la eliminamos o la dejamos anónima de forma segura.
        </p>
      </Clause>

      <Clause n={9} title="Tus derechos y opciones">
        <List>
          <li>Pedirnos una copia de la información que tenemos sobre ti.</li>
          <li>Corregir información incorrecta o incompleta.</li>
          <li>Pedir que eliminemos tu información, salvo la que la ley nos obligue a conservar.</li>
          <li>Dejar de recibir SMS (responde STOP) o correos (usa el enlace para darte de baja).</li>
        </List>
        <p>
          Para cualquiera de estas solicitudes escríbenos a{' '}
          <a href="mailto:micredito786@konfia.io" className={linkClass}>
            micredito786@konfia.io
          </a>
          . Es posible que te pidamos confirmar tu identidad antes de responder. Según el estado donde vivas,
          puedes tener derechos adicionales.
        </p>
      </Clause>

      <Clause n={10} title="Menores de edad">
        <p>
          Nuestros servicios son para mayores de 18 años. No recopilamos a sabiendas información de menores.
          Si crees que un menor nos dio sus datos, escríbenos y los eliminaremos.
        </p>
      </Clause>

      <Clause n={11} title="Cambios a esta política">
        <p>
          Podemos actualizar esta política. Publicaremos la versión nueva en esta página con su fecha de
          actualización. Si el cambio es importante, te avisaremos por correo o en el sitio.
        </p>
      </Clause>

      <Clause n={12} title="Contacto">
        <LegalContact />
      </Clause>
    </LegalLayout>
  );
}
