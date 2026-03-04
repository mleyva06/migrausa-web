import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | MigraUSA",
  description: "Política de Privacidad de MigraUSA Case Tracker.",
};

const sections = [
  {
    id: 1,
    title: "Introducción",
    content: (
      <>
        <p>
          Esta Política de Privacidad explica cómo AMERICAN SOLUTIONS CENTER
          LLC (en adelante, &quot;MigraUSA&quot;, &quot;la App&quot;,
          &quot;nosotros&quot; o &quot;nuestro&quot;) recopila, usa, almacena y
          protege tu información
          cuando usas la aplicación móvil MigraUSA Case Tracker y todas sus
          funcionalidades.
        </p>
        <p>
          Al usar la App, aceptas las prácticas descritas en esta Política de
          Privacidad y en nuestros Términos y Condiciones. Si no estás de acuerdo con
          esta política, por favor no uses la App.
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
          por AMERICAN SOLUTIONS CENTER LLC. La App está diseñada y dirigida principalmente a
          usuarios en los Estados Unidos. Si accedes a la App desde otro país,
          esta política también te aplica. Esto incluye, de manera enunciativa
          mas no limitativa, el procesamiento de datos a través de las siguientes
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
          Departamento de Justicia).
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
          13 años (o de un menor según la legislación aplicable en tu
          jurisdicción), tomaremos medidas razonables para eliminar dicha
          información de nuestros servidores de forma inmediata. Si eres padre o
          tutor y crees que tu hijo nos ha proporcionado información a través de
          la App, contáctanos en{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
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
          <li>
            Números de recibo USCIS que agregas para el seguimiento de casos.
          </li>
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
            Directamente desde lo que ingresas en la App (casos y reportes de
            problemas).
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
          <li>
            Guardar y sincronizar tus casos entre tu dispositivo y nuestro
            backend.
          </li>
          <li>Enviar alertas y notificaciones importantes.</li>
          <li>
            Generar estadísticas agrupadas y análisis de tendencias de casos
            para usuarios premium.
          </li>
          <li>Gestionar y validar el acceso a funciones premium.</li>
          <li>
            Medir el uso funcional básico del producto para mejorar la
            experiencia del servicio.
          </li>
          <li>
            Responder a solicitudes de soporte y reportes de problemas.
          </li>
          <li>Detectar y prevenir actividades fraudulentas.</li>
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
        <p>Tratamos tus datos personales con base en los siguientes fundamentos:</p>
        <ul>
          <li>
            <strong>Ejecución del contrato:</strong> El tratamiento es necesario
            para la prestación del servicio que nos solicitas al aceptar
            nuestros Términos y Condiciones. Esto incluye el almacenamiento y
            sincronización de tus casos, la generación de estadísticas y el
            funcionamiento de Tracker AI.
          </li>
          <li>
            <strong>Interés legítimo:</strong> Tenemos un interés legítimo en la
            seguridad de la App, la continuidad operativa, la prevención de
            fraude y la mejora del servicio. Estos intereses no prevalecen sobre
            tus derechos y libertades fundamentales.
          </li>
          <li>
            <strong>Cumplimiento de obligaciones legales:</strong> Ciertos
            tratamientos son necesarios para cumplir con obligaciones legales
            aplicables, como la conservación de registros requerida por ley o la
            respuesta a solicitudes legítimas de autoridades competentes.
          </li>
          <li>
            <strong>Consentimiento:</strong> En los casos en que se requiera,
            obtenemos tu consentimiento explícito antes de procesar tus datos,
            por ejemplo al enviar reportes de problemas con tu correo
            electrónico. Puedes retirar tu consentimiento en cualquier momento
            sin que esto afecte la licitud del tratamiento realizado
            previamente.
          </li>
        </ul>
        <p>
          Estas bases legales son aplicables bajo la legislación de los Estados
          Unidos, y también son compatibles con los requisitos del GDPR (UE/UK)
          y demás legislación internacional de protección de datos que pueda
          aplicar según tu lugar de residencia.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Señales de Opt-Out y Global Privacy Control (GPC)",
    content: (
      <>
        <p>
          MigraUSA respeta las señales de preferencia de exclusión (opt-out
          preference signals), incluyendo el Global Privacy Control (GPC). Si tu
          navegador o dispositivo envía una señal GPC, la trataremos como una
          solicitud válida de exclusión de la venta o el intercambio de
          información personal conforme a las leyes aplicables, incluyendo la
          CCPA/CPRA de California, la CPA de Colorado, la CTDPA de Connecticut,
          la TDPSA de Texas y demás leyes estatales que reconozcan dichas
          señales.
        </p>
        <p>
          Dado que MigraUSA no vende, comparte ni intercambia información
          personal con terceros para publicidad dirigida, el tratamiento de
          señales GPC se cumple de manera predeterminada.
        </p>
        <p>
          MigraUSA no responde a señales de &quot;Do Not Track&quot; (DNT), ya
          que no existe un estándar tecnológico uniforme para su implementación.
          Sin embargo, sí respetamos GPC conforme a las leyes que lo exigen.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Toma de Decisiones Automatizada",
    content: (
      <p>
        MigraUSA no toma decisiones basadas únicamente en el tratamiento
        automatizado que produzcan efectos jurídicos sobre ti o te afecten
        significativamente. Tracker AI genera respuestas informativas basadas en
        los datos que tú proporcionas voluntariamente en el chat. Estas
        respuestas son meramente orientativas y no constituyen decisiones
        automatizadas con efectos legales.
      </p>
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
      <>
        <p>
          Nuestros proveedores de servicios procesan información en los Estados
          Unidos. La App está diseñada y dirigida principalmente a usuarios en
          los Estados Unidos, y el uso de la App implica que tus datos son
          procesados y almacenados en territorio estadounidense, sujeto a las
          leyes federales y estatales aplicables.
        </p>
        <p>
          Si accedes a la App desde fuera de los Estados Unidos, al utilizar
          nuestros servicios reconoces y aceptas que tus datos personales serán
          transferidos, procesados y almacenados en los Estados Unidos, donde
          las leyes de protección de datos pueden diferir de las de tu país de
          residencia. En tales casos, aplicamos las salvaguardas contractuales
          apropiadas con nuestros proveedores para proteger tu información. Si
          necesitas información sobre los mecanismos de transferencia
          aplicables, puedes escribirnos a{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 13,
    title: "Seguridad",
    content: (
      <>
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger tu
          información. Estas medidas incluyen:
        </p>
        <ul>
          <li>
            Cifrado en tránsito mediante SSL/TLS para toda la información
            transmitida entre la App y nuestros servidores.
          </li>
          <li>
            Cifrado en reposo proporcionado por la infraestructura de nuestros proveedores de base de datos para los datos almacenados en nuestros servidores.
          </li>
          <li>
            Controles de acceso para limitar el acceso a los datos personales
            únicamente al personal autorizado.
          </li>
          <li>Revisiones periódicas de seguridad de nuestra infraestructura.</li>
        </ul>
        <p>
          Sin embargo, ningún sistema de transmisión o almacenamiento
          electrónico es 100% seguro, y no podemos garantizar la seguridad
          absoluta de tus datos.
        </p>
      </>
    ),
  },
  {
    id: 14,
    title: "Notificación de Brechas de Seguridad",
    content: (
      <p>
        En caso de una brecha de seguridad que afecte tus datos personales y que
        represente un riesgo para tus derechos y libertades, AMERICAN
        SOLUTIONS CENTER LLC notificará a los usuarios afectados y, cuando corresponda, a las
        autoridades competentes, de acuerdo con los plazos y procedimientos
        exigidos por la legislación aplicable en tu jurisdicción. La
        notificación incluirá, como mínimo, la naturaleza de la brecha, las
        categorías de datos afectados, las posibles consecuencias y las medidas
        adoptadas o propuestas para remediar la situación.
      </p>
    ),
  },
  {
    id: 15,
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
            <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
            Procesaremos tu solicitud de eliminación total de forma segura y
            definitiva en un plazo máximo de 30 días naturales a partir de la
            recepción de tu mensaje.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 16,
    title: "Tus Derechos de Privacidad",
    content: (
      <>
        <p>
          MigraUSA respeta los derechos de privacidad otorgados por las leyes
          aplicables según tu lugar de residencia.
        </p>
        <p>
          <strong>Usuarios en los Estados Unidos:</strong> Reconocemos los
          derechos otorgados por las leyes estatales de privacidad, incluyendo
          la CCPA/CPRA, la CPA de Colorado, la VCDPA de Virginia, la CTDPA de
          Connecticut, la TDPSA de Texas y demás leyes estatales aplicables.
          Dependiendo de tu estado de residencia, puedes tener derecho a:
          conocer y acceder a los datos que hemos recopilado sobre ti; solicitar
          la corrección de información inexacta; solicitar la eliminación de tus
          datos; optar por no participar en la venta o el intercambio de tu
          información personal; y no ser discriminado por
          ejercer tus derechos de privacidad. Responderemos a solicitudes
          verificables dentro de los plazos exigidos por la ley aplicable
          (generalmente 45 días bajo CCPA/CPRA).
        </p>
        <p>
          <strong>Usuarios fuera de los Estados Unidos:</strong> Si resides
          fuera de los Estados Unidos, puedes tener derechos adicionales bajo la
          legislación de tu país de residencia, como derechos de acceso,
          rectificación, supresión, portabilidad, oposición al tratamiento y
          retiro del consentimiento. AMERICAN SOLUTIONS CENTER LLC se
          compromete a respetar estos
          derechos en la medida aplicable conforme a la legislación vigente en
          tu jurisdicción. Si resides en la Unión Europea o el Reino Unido,
          también tienes derecho a presentar una reclamación ante la autoridad
          de supervisión de protección de datos de tu país.
        </p>
        <p>
          Para ejercer cualquiera de estos derechos, envía tu solicitud a{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a> indicando el
          derecho que deseas ejercer. Responderemos dentro de los plazos legales
          aplicables según tu jurisdicción.
        </p>
      </>
    ),
  },
  {
    id: 17,
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
    id: 18,
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
    id: 19,
    title: "Contacto",
    content: (
      <>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, sobre los
          datos que procesamos o deseas ejercer tus derechos de privacidad,
          contáctanos en:
        </p>
        <p>
          AMERICAN SOLUTIONS CENTER LLC
          <br />
          Correo electrónico:{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>
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
          <div className="mb-4 flex justify-end">
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Read in English
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Última actualización: 4 de marzo de 2026
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

        <footer className="mt-14 border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            Enlaces requeridos
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/politica-de-privacidad" className="underline underline-offset-2">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="underline underline-offset-2">
              Términos y Condiciones
            </Link>
            <Link href="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="underline underline-offset-2">
              Terms and Conditions
            </Link>
          </div>
        </footer>
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
