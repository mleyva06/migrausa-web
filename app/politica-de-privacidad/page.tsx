import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | MigraUSA",
  description: "Política de Privacidad de MigraUSA Case Tracker.",
};

const sections = [
  {
    id: 1,
    title: "Introducción y Responsable del Tratamiento",
    content: (
      <>
        <p>
          Esta Política de Privacidad explica cómo MigraUSA LLC (en adelante,
          &quot;MigraUSA&quot;, &quot;la App&quot;, &quot;nosotros&quot; o &quot;nuestro&quot;) recopila, usa,
          almacena y protege tu información cuando usas la aplicación móvil
          MigraUSA Case Tracker y todas sus funcionalidades.
        </p>
        <p>
          Al usar la App, aceptas las prácticas descritas en esta Política de
          Privacidad y en nuestros Términos y Condiciones.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Alcance",
    content: (
      <>
        <p>
          Esta Política de Privacidad aplica al uso de la aplicación móvil
          MigraUSA Case Tracker y a todos los servicios asociados proporcionados
          por MigraUSA LLC. Esto incluye, de manera enunciativa mas no
          limitativa, el procesamiento de datos a través de las siguientes
          funciones principales:
        </p>
        <ul>
          <li>
            La consulta, sincronización y seguimiento de casos de inmigración
            (USCIS y EOIR).
          </li>
          <li>
            La generación de análisis avanzados y gráficos estadísticos.
          </li>
          <li>
            El uso de la asistencia automatizada mediante inteligencia artificial
            (Tracker AI).
          </li>
          <li>
            Las interacciones a través de los canales de soporte y reporte de
            problemas integrados en la App.
          </li>
        </ul>
        <p>
          Esta política no se aplica a sitios web, aplicaciones o portales
          gubernamentales de terceros (como los sitios oficiales de USCIS o el
          Departamento de Justicia) a los que tu dispositivo pueda conectarse
          para obtener la información pública de los casos.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Menores de Edad y Cumplimiento con COPPA",
    content: (
      <>
        <p>
          MigraUSA no está dirigida a menores de 18 años. Para utilizar la App,
          debes tener al menos 18 años o haber alcanzado la mayoría de edad
          legal en tu jurisdicción.
        </p>
        <p>
          De conformidad con la Ley de Protección de la Privacidad Infantil en
          Internet (COPPA, por sus siglas en inglés), MigraUSA no recopila de
          forma intencional información de niños menores de 13 años. Si
          descubrimos que hemos recopilado inadvertidamente datos de un menor de
          13 años, tomaremos medidas razonables para eliminar dicha información
          de nuestros servidores de forma inmediata. Si eres padre o tutor y
          crees que tu hijo nos ha proporcionado información a través de la App,
          contáctanos en{" "}
          <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Datos que Recopilamos",
    content: (
      <>
        <h3>4.1 Datos proporcionados directamente por ti</h3>
        <ul>
          <li>Números de recibo USCIS que agregas para el seguimiento de casos.</li>
          <li>
            Números EOIR / A-Number que agregas para el seguimiento de casos de
            corte.
          </li>
          <li>Nacionalidad (cuando agregas casos EOIR).</li>
          <li>Nombre personalizado que asignas a un caso dentro de la App.</li>
          <li>
            Correo electrónico y mensaje que proporcionas voluntariamente al
            usar la función &quot;Reportar un problema&quot;.
          </li>
        </ul>

        <h3>4.2 Datos generados durante el uso del servicio</h3>
        <ul>
          <li>
            Estado del caso, timeline, descripción y fechas de guardado y
            actualización.
          </li>
          <li>
            Datos de perfil de caso utilizados para cálculos de tiempos y
            estadísticas avanzadas (formulario, categoría, centro de
            procesamiento).
          </li>
          <li>
            Estado local de suscripción premium (gestionado a través de
            RevenueCat).
          </li>
          <li>Preferencias de interfaz de la App (como el tema visual).</li>
        </ul>

        <h3>4.3 Identificadores técnicos</h3>
        <ul>
          <li>
            Identificador único del dispositivo, utilizado para vincular tus
            casos a tu dispositivo y habilitar funciones de la App.
          </li>
          <li>
            Metadatos técnicos operativos que pueda registrar la infraestructura
            de forma automática (como logs de red del proveedor y recuento de
            sesiones).
          </li>
        </ul>

        <h3>4.4 Datos de suscripción</h3>
        <p>
          Para validar el acceso a las funciones premium, utilizamos RevenueCat
          y procesamos la siguiente información:
        </p>
        <ul>
          <li>Entitlements (derechos de acceso) activos.</li>
          <li>Identificador del plan o producto de suscripción.</li>
          <li>Estado de la suscripción y fecha de expiración.</li>
        </ul>

        <h3>4.5 Datos que NO recopilamos</h3>
        <p>
          MigraUSA no recopila tu nombre real, número de teléfono, dirección
          postal ni dirección de correo electrónico como requisito para usar la
          App. No es necesario crear una cuenta de usuario para utilizar la App.
          El correo electrónico solo se recopila si tú decides proporcionarlo
          voluntariamente al reportar un problema.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Cómo Recopilamos la Información",
    content: (
      <>
        <p>Recopilamos información de las siguientes maneras:</p>
        <ul>
          <li>
            Directamente desde lo que ingresas en la App (casos y reportes de problemas).
          </li>
          <li>
            Desde consultas que tu dispositivo realiza directamente a los
            portales públicos oficiales de USCIS y EOIR. MigraUSA no consulta
            estos portales desde sus servidores; la consulta se ejecuta desde tu
            dispositivo.
          </li>
          <li>
            Desde nuestros proveedores de infraestructura necesarios para operar
            las funciones del servicio (suscripciones, base de datos y backend).
          </li>
          <li>
            De forma automática mediante identificadores técnicos de dispositivo
            cuando instalas y usas la App.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Finalidades de Uso",
    content: (
      <>
        <p>Usamos la información recopilada para:</p>
        <ul>
          <li>Guardar y sincronizar tus casos entre tu dispositivo y nuestro
            backend.</li>
          <li>
         Enviar alertas y notificaciones importantes
          </li>
          <li>
            Generar estadísticas agrupadas y análisis de tendencias de casos
            para usuarios premium, utilizando datos anonimizados y agregados de
            nuestra base de datos.
          </li>
          <li>Gestionar y validar el acceso a funciones premium.</li>
          <li>
          Medir el uso funcional básico del producto para mejorar la
            experiencia del servicio.
          </li>
          <li>
            Responder a solicitudes de soporte y reportes de problemas.
          </li>
          <li>Detectar y prevenir actividades fraudulentas</li>
          <li>Cumplir con obligaciones legales aplicables.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Base Legal del Tratamiento",
    content: (
      <>
        <p>Tratamos tus datos con base en:</p>
        <ul>
          <li>
            La ejecución del servicio que nos solicitas al aceptar nuestros
            Términos y Condiciones.
          </li>
          <li>
            Nuestro interés legítimo en la seguridad, continuidad operativa y
            mejora del servicio.
          </li>
          <li>El cumplimiento de obligaciones legales aplicables.</li>
          <li>
            Tu consentimiento explícito proporcionado.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 10,
    title: "Inteligencia Artificial y Procesamiento de Conversaciones (Tracker AI)",
    content: (
      <>
        <p>
          Nuestra App ofrece asistencia automatizada a través de Tracker AI. Los
          mensajes que envías se procesan a través de una Edge Function y se
          transmiten en tiempo real a nuestro proveedor de infraestructura de
          inteligencia artificial (OpenAI) mediante su API para generar la
          respuesta.
        </p>
        <ul>
          <li>
            <strong>Cero Almacenamiento por MigraUSA:</strong> MigraUSA no
            almacena, guarda ni conserva el contenido de tus conversaciones en
            sus bases de datos o servidores (Supabase). Los mensajes se procesan
            únicamente en tiempo real para brindarte la respuesta.
          </li>
          <li>
            <strong>Uso y Retención de datos por OpenAI:</strong> De acuerdo con
            la política de la API de OpenAI vigente, este proveedor no utiliza
            los datos enviados a través de su API para entrenar sus modelos
            públicos de inteligencia artificial. Sin embargo, por requerimientos
            de su infraestructura, OpenAI retiene temporalmente los datos
            transmitidos por un máximo de 30 días para fines estrictos de
            monitoreo de abuso y seguridad, tras lo cual son eliminados
            definitivamente de sus sistemas.
          </li>
          <li>
            <strong>Datos que no debes compartir:</strong> Te instamos
            encarecidamente a NO ingresar información personal sensible en el
            chat de Tracker AI, incluyendo tu nombre completo, número de
            Alien/A-Number completo, dirección, contraseñas, datos financieros o
            números de recibo completos. Al ser una transmisión a la
            infraestructura de un tercero, el usuario asume toda la
            responsabilidad por los datos que decida ingresar voluntariamente en
            el chat.
          </li>
          <li>
            <strong>No es consejo legal:</strong> Ninguna respuesta generada por
            Tracker AI debe interpretarse como consejo legal, asesoría
            profesional o directriz oficial de ninguna agencia gubernamental.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 11,
    title: "Uso de Proveedores de Servicios (Terceros)",
    content: (
      <>
        <p>
          MigraUSA no &quot;comparte&quot; ni &quot;vende&quot; tu información
          personal. Para poder operar y mantener las funcionalidades de la App,
          utilizamos servicios de infraestructura externos. Estos terceros actúan
          estrictamente como nuestros &quot;Proveedores de Servicios&quot;
          (Service Providers), procesan la información únicamente en nuestro
          nombre y tienen prohibido por contrato usar, retener o divulgar tus
          datos para cualquier propósito distinto a la prestación de servicios a
          MigraUSA.
        </p>
        <p>Nuestros proveedores de infraestructura autorizados son:</p>
        <ul>
          <li>
            <strong>Supabase:</strong> Proveedor de backend y base de datos en
            la nube. Proporciona la infraestructura técnica donde se almacenan
            tus casos guardados de forma segura para permitir la sincronización
            en tu dispositivo.
          </li>
          <li>
            <strong>RevenueCat:</strong> Plataforma de infraestructura para la
            gestión y validación técnica del estado de las suscripciones
            premium.
          </li>
          <li>
            <strong>Apple (App Store):</strong> Proveedor de la plataforma de
            distribución y procesamiento de pagos. Al realizar compras dentro de
            la aplicación, interactúas directamente con los sistemas de Apple.
            Podemos intercambiar datos técnicos sobre el estado de tu
            suscripción con Apple exclusivamente para ayudarles a procesar
            compras o evaluar solicitudes de reembolso bajo sus propias
            políticas.
          </li>
          <li>
            <strong>OpenAI (Infraestructura de Tracker AI):</strong> Para hacer
            funcionar nuestra asistencia automatizada, los mensajes que escribes
            en el chat se transmiten mediante API a la infraestructura de OpenAI
            para generar una respuesta en tiempo real. MigraUSA no almacena el
            contenido de estas conversaciones. OpenAI retiene temporalmente
            estos datos en sus servidores por un máximo de 30 días con fines
            estrictos de seguridad técnica y prevención de abusos, tras lo cual
            son eliminados. OpenAI no utiliza estos datos para entrenar sus
            modelos públicos. (Te recordamos que está prohibido ingresar
            información personal sensible en este chat).
          </li>
        </ul>
        <h3>Cero Publicidad Dirigida</h3>
        <p>
          MigraUSA no vende, alquila ni pone a disposición de terceros tu
          información personal para fines de publicidad dirigida ni publicidad
          conductual cruzada (cross-context behavioral advertising). Nuestra App
          no muestra anuncios de terceros.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Transferencias de Datos",
    content: (
      <p>
        Nuestros proveedores de servicios procesan información en los Estados
        Unidos. Dado que MigraUSA está dirigida exclusivamente a usuarios en los
        Estados Unidos, el uso de la App implica que tus datos son procesados y
        almacenados en territorio estadounidense, sujeto a las leyes federales y
        estatales aplicables.
      </p>
    ),
  },
  {
    id: 13,
    title: "Seguridad",
    content: (
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tu
        información. Toda la información transmitida entre la App y nuestros
        servidores está cifrada en tránsito mediante SSL/TLS, y los datos
        almacenados en nuestras bases de datos están cifrados en reposo. Sin
        embargo, ningún sistema de transmisión o almacenamiento electrónico es
        100% seguro, y no podemos garantizar la seguridad absoluta de tus datos.
      </p>
    ),
  },
  {
    id: 14,
    title: "Retención y Eliminación de Datos",
    content: (
      <>
        <p>
          En MigraUSA conservamos tu información únicamente durante el tiempo
          estrictamente necesario para proporcionarte las funcionalidades de la
          App, cumplir con nuestras obligaciones legales y resolver posibles
          disputas. Los plazos y criterios de retención son los siguientes:
        </p>
        <ul>
          <li>
            <strong>Datos en nuestros servidores (Backend):</strong> Los casos
            que agregas, su historial de estados y el identificador técnico de
            tu dispositivo se almacenan en nuestra base de datos para permitir
            la sincronización del servicio. Conservamos estos datos mientras
            seas un usuario activo. Si tu dispositivo no interactúa con nuestros
            servidores durante un período continuo de 12 meses (inactividad),
            procederemos a eliminar automáticamente tus registros, casos e
            identificadores técnicos de forma definitiva, en estricto
            cumplimiento con las normativas de limitación de almacenamiento.
          </li>
          <li>
            <strong>Datos locales (en tu dispositivo):</strong> La información y
            preferencias guardadas localmente permanecen en tu teléfono hasta
            que elimines los casos manualmente o desinstales la App. Desinstalar
            la App borra los datos locales de tu teléfono de inmediato, pero los
            registros en nuestros servidores esperarán a que se cumpla el ciclo
            de inactividad de 12 meses mencionado anteriormente, a menos que
            solicites su eliminación anticipada.
          </li>
          <li>
            <strong>Datos de soporte técnico:</strong> Los correos electrónicos
            y mensajes asociados a reportes de problemas enviados por los
            usuarios se conservan por un período máximo de 12 meses tras la
            resolución de la solicitud, únicamente para fines de registro
            interno y auditoría, tras lo cual son eliminados de forma segura.
          </li>
        </ul>
        <h3>Tu derecho a la eliminación completa y anticipada</h3>
        <p>
          Tienes el control total sobre tu información en todo momento. Puedes
          gestionar la eliminación de tus datos antes de que se cumplan los
          plazos automáticos de las siguientes maneras:
        </p>
        <ul>
          <li>
            <strong>Eliminación individual desde la App:</strong> Puedes
            eliminar casos específicos en cualquier momento directamente desde
            la interfaz de la App. Esta acción borrará el caso tanto de tu
            dispositivo local como de nuestros servidores de forma inmediata.
          </li>
          <li>
            <strong>Eliminación total y permanente:</strong> Si deseas que
            eliminemos de inmediato todos los registros, casos e identificadores
            técnicos asociados a tu dispositivo en nuestra base de datos,
            envíanos una solicitud a{" "}
            <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
            Procesaremos tu solicitud de eliminación total de forma segura y
            definitiva en un plazo máximo de 30 días naturales a partir de la
            recepción de tu mensaje.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 15,
    title: "Tus Derechos de Privacidad (Leyes Estatales de EE. UU.)",
    content: (
      <>
        <p>
          MigraUSA respeta los derechos de privacidad otorgados por las leyes
          estatales de los Estados Unidos, incluyendo, entre otras, la Ley de
          Privacidad del Consumidor de California (CCPA/CPRA), la Ley de
          Privacidad de Colorado (CPA), la Ley de Protección de Datos del
          Consumidor de Virginia (VCDPA), la Ley de Privacidad de Connecticut
          (CTDPA) y la Ley de Privacidad y Seguridad de Datos de Texas (TDPSA).
        </p>
        <p>
          Reconocemos que, bajo la definición amplia de &quot;información personal&quot;
          de ciertas leyes estatales, algunos de los identificadores técnicos y
          datos que recopilamos (como push tokens y números de recibo vinculados a
          un dispositivo) podrían considerarse
          información personal en la medida en que sean vinculables a un
          dispositivo o consumidor específico.
        </p>
        <p>Dependiendo de tu estado de residencia, puedes tener derecho a:</p>
        <ul>
          <li>Conocer y acceder a los datos que hemos recopilado sobre ti.</li>
          <li>Solicitar la corrección de información inexacta.</li>
          <li>Solicitar la eliminación (supresión) de tus datos.</li>
          <li>
            Optar por no participar en la venta o el intercambio de tu
            información personal (derecho que ya cumplimos, dado que MigraUSA no
            vende ni comparte información personal con terceros para publicidad).
          </li>
          <li>
            No ser discriminado por ejercer tus derechos de privacidad.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, puedes contactarnos en{" "}
          <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
          Responderemos a solicitudes verificables dentro de los plazos exigidos
          por la ley aplicable (generalmente 45 días bajo CCPA/CPRA).
        </p>
        <p>
          MigraUSA no recopila categorías sensibles de información personal
          según la definición de estas leyes.
        </p>
      </>
    ),
  },
  {
    id: 16,
    title: "Enlaces y Políticas de Terceros",
    content: (
      <>
        <p>
          Al consultar información de casos a través de la App, tu dispositivo
          se conecta directamente a portales públicos oficiales, los cuales
          tienen sus propias políticas de privacidad:
        </p>
        <ul>
          <li>
            <a
              href="https://www.uscis.gov/website-policies/privacy-and-legal-disclaimers"
              target="_blank"
              rel="noopener noreferrer"
            >
              USCIS Privacy &amp; Legal Disclaimers
            </a>
          </li>
          <li>
            <a
              href="https://www.justice.gov/doj/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Justice (EOIR) Privacy Policy
            </a>
          </li>
        </ul>
        <p>
          Adicionalmente, los siguientes proveedores de servicios tienen sus
          propias políticas:
        </p>
        <ul>
          <li>
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Privacy Policy
            </a>
          </li>
        </ul>
        <p>
          Te recomendamos revisar las políticas de privacidad de estos terceros
          para entender cómo manejan tus datos.
        </p>
      </>
    ),
  },
  {
    id: 17,
    title: "Cambios a esta Política de Privacidad",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad en cualquier momento. Si
        realizamos cambios materiales (como modificaciones en los datos que
        recopilamos, las finalidades de uso o los terceros con quienes
        compartimos datos), te lo notificaremos dentro de la App antes de que
        los cambios entren en vigor. El uso continuado de la App después de la
        publicación de cambios constituye tu aceptación de la Política de
        Privacidad actualizada.
      </p>
    ),
  },
  {
    id: 18,
    title: "Contacto",
    content: (
      <>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, sobre los
          datos que procesamos o deseas ejercer tus derechos de privacidad,
          contáctanos en:
        </p>
        <p>
          MigraUSA LLC
          <br />
          Correo electrónico:{" "}
          <a href="mailto:help@migrausa.com">help@migrausa.com</a>
        </p>
      </>
    ),
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Última actualización: 1 de marzo de 2026
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id}>
              <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {section.id}. {section.title}
              </h2>
              <div className="prose-policy">{section.content}</div>
            </section>
          ))}
        </div>
      </main>

      <style>{`
        .prose-policy p {
          color: rgb(82 82 91);
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .prose-policy ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: rgb(82 82 91);
          line-height: 1.75;
        }
        .prose-policy li {
          margin-bottom: 0.25rem;
        }
        .prose-policy h3 {
          font-weight: 600;
          font-size: 0.9375rem;
          color: rgb(39 39 42);
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .prose-policy code {
          font-size: 0.8125rem;
          background-color: rgb(244 244 245);
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          color: rgb(39 39 42);
        }
        .prose-policy a {
          color: rgb(24 24 27);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-policy a:hover {
          color: rgb(82 82 91);
        }
        .prose-policy .note {
          font-size: 0.875rem;
          color: rgb(113 113 122);
          font-style: italic;
        }
        @media (prefers-color-scheme: dark) {
          .prose-policy p,
          .prose-policy ul {
            color: rgb(161 161 170);
          }
          .prose-policy h3 {
            color: rgb(212 212 216);
          }
          .prose-policy code {
            background-color: rgb(39 39 42);
            color: rgb(212 212 216);
          }
          .prose-policy a {
            color: rgb(212 212 216);
          }
          .prose-policy a:hover {
            color: rgb(161 161 170);
          }
          .prose-policy .note {
            color: rgb(113 113 122);
          }
        }
      `}</style>
    </div>
  );
}
