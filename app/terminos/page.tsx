import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | MigraUSA",
  description:
    "Términos y Condiciones de Uso de MigraUSA. Última actualización: 1 de marzo de 2026.",
};

const sections = [
  {
    id: 1,
    title: "Aceptación de los Términos, Restricciones de Edad y Cumplimiento con COPPA",
    content: (
      <>
        <p>
          Al descargar, instalar o usar la aplicación móvil MigraUSA (en
          adelante, &quot;la App&quot;), aceptas estar legalmente vinculado por estos
          Términos y Condiciones. Si no estás de acuerdo con alguno de estos
          términos, no debes utilizar la App. Para utilizar la App, declaras y
          garantizas que tienes al menos 18 años o has alcanzado la mayoría de
          edad legal en tu jurisdicción.
        </p>
        <p>
          MigraUSA no está dirigida a menores de 13 años y no recopila de forma
          intencional información de niños menores de 13 años, de conformidad
          con la Ley de Protección de la Privacidad Infantil en Internet
          (COPPA). Si descubrimos que hemos recopilado inadvertidamente datos de
          un menor de 13 años, tomaremos medidas razonables para eliminar dicha
          información de nuestros servidores de forma inmediata. Si eres padre o
          tutor y crees que tu hijo nos ha proporcionado información, contáctanos
          en{" "}
          <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Política de Privacidad y Recopilación de Datos Técnicos",
    content: (
      <>
        <p>
          Para utilizar la App, no es necesario crear una cuenta de usuario ni
          proporcionar información de contacto directa. MigraUSA no recopila
          datos personales identificables como tu nombre, número de teléfono o
          dirección de correo electrónico.
        </p>
        <p>
          Sin embargo, para el funcionamiento básico de la App (como el envío de
          alertas y la vinculación de tus casos a tu teléfono), recopilamos y
          almacenamos identificadores anónimos de dispositivo, tales como tokens
          de notificaciones (push tokens). Los números de caso (recibos) y los
          datos de estado que agregues se almacenan de forma anónima en nuestros
          servidores con el fin de alimentar nuestras estadísticas globales,
          habilitar las funciones de Análisis Avanzado y mejorar el servicio en
          general. MigraUSA no consulta ni verifica los datos de tus casos
          directamente con fuentes oficiales desde sus servidores; la consulta
          del estado de tus casos se realiza directamente desde tu dispositivo a
          los portales públicos correspondientes. El uso de la App está regido
          por nuestra Política de Privacidad, la cual describe a detalle este
          proceso. Al aceptar estos Términos, confirmas que has leído y estás de
          acuerdo con dicha Política.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Naturaleza del Servicio y Descargo de Responsabilidad Oficial",
    content: (
      <>
        <p>
          MigraUSA <strong>NO</strong> es un bufete de abogados,{" "}
          <strong>NO</strong> proporciona asesoramiento legal y{" "}
          <strong>NO</strong> está afiliada, respaldada ni asociada de ninguna
          manera con el Servicio de Ciudadanía e Inmigración de los Estados
          Unidos (USCIS), la Oficina Ejecutiva para la Revisión de Casos de
          Inmigración (EOIR), el Departamento de Justicia (DOJ), ni con ninguna
          otra agencia gubernamental de los EE. UU.
        </p>
        <p>
          La App es una herramienta de productividad independiente que obtiene
          información pública de los portales oficiales para facilitar el
          seguimiento de casos. No nos hacemos responsables de las decisiones
          que tomes basándote en la información mostrada en la App. Siempre
          debes verificar tu información oficial directamente en los sitios web
          del gobierno o consultar a un abogado de inmigración certificado.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Funciones de la App y Limitaciones (\"As Is\")",
    content: (
      <>
        <p>
          MigraUSA proporciona sus funciones <strong>&quot;TAL CUAL&quot; (&quot;AS IS&quot;)</strong>{" "}
          y <strong>&quot;SEGÚN DISPONIBILIDAD&quot; (&quot;AS AVAILABLE&quot;)</strong>, sin
          garantías de ningún tipo, expresas o implícitas. En la medida máxima
          permitida por la ley aplicable, MigraUSA renuncia expresamente a todas
          las garantías implícitas, incluyendo, entre otras, las garantías de
          comerciabilidad (merchantability), idoneidad para un propósito
          particular (fitness for a particular purpose) y no infracción
          (non-infringement).
        </p>
        <ul>
          <li>
            <strong>Funciones Gratuitas:</strong> La App ofrece de forma
            gratuita el seguimiento básico de casos, permitiendo al usuario
            consultar manualmente el estado de sus trámites migratorios al abrir
            la aplicación.
          </li>
          <li>
            <strong>Funciones Premium:</strong> Las siguientes funciones están
            disponibles exclusivamente para usuarios con una suscripción activa:
            (a) Análisis Avanzado y Gráficos Estadísticos; (b) Tracker AI
            (asistente de inteligencia artificial); y (c) Modo Oscuro. El
            contenido, la disponibilidad y la composición de las funciones
            premium pueden cambiar en cualquier momento a discreción de
            MigraUSA, de acuerdo con las Secciones 6 y 10 de estos Términos.
            MigraUSA no garantiza que ninguna función específica permanecerá
            disponible de forma indefinida.
          </li>
          <li>
            <strong>Exactitud de los Datos:</strong> No garantizamos que el
            servicio sea ininterrumpido, oportuno o libre de errores. La
            información mostrada depende de fuentes públicas que pueden
            experimentar retrasos o caídas.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Uso de la Inteligencia Artificial (Tracker AI)",
    content: (
      <>
        <p>
          Nuestra función Tracker AI utiliza la API de modelos avanzados de
          inteligencia artificial (proporcionados por OpenAI) para generar
          respuestas y asistencia sobre la interpretación de estados.
        </p>
        <ul>
          <li>
            <strong>Precisión no garantizada:</strong> La IA puede cometer
            errores, omitir contexto o proporcionar información desactualizada
            (fenómeno conocido como &quot;alucinaciones&quot;).
          </li>
          <li>
            <strong>No es consejo legal:</strong> Ninguna respuesta generada por
            Tracker AI debe interpretarse como consejo legal o directriz
            oficial.
          </li>
          <li>
            <strong>Privacidad y manejo de datos en el Chat:</strong> Te
            instamos encarecidamente a NO ingresar información personal sensible
            (como tu nombre completo, número de Alien/A-Number, dirección o
            números de recibo completos) en el chat de Tracker AI. Los mensajes
            que escribes se procesan a través de la API de OpenAI. MigraUSA no
            almacena, registra ni retiene en sus propios servidores el contenido
            de las conversaciones que mantienes con Tracker AI. Por su parte, de
            acuerdo con la política de retención de datos de la API de OpenAI
            vigente a la fecha de estos Términos, OpenAI puede retener
            temporalmente los datos transmitidos a través de su API por un
            máximo de 30 días para fines estrictos de monitoreo de abuso y
            seguridad, tras lo cual son eliminados. OpenAI no utiliza los datos
            enviados a través de su API para entrenar sus modelos de
            inteligencia artificial. El usuario asume toda la responsabilidad
            por los datos que decida compartir voluntariamente en el chat.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Suscripciones y Pagos",
    content: (
      <>
        <p>
          MigraUSA ofrece funciones premium sujetas a un pago recurrente
          (&quot;Servicio de Pago&quot;). Al seleccionar una suscripción, aceptas pagar
          las tarifas indicadas a través de la tienda de aplicaciones
          correspondiente (Apple App Store).
        </p>
        <ul>
          <li>
            <strong>Funciones Premium Incluidas:</strong> La suscripción activa
            otorga acceso a las funciones premium vigentes al momento de cada
            renovación. Las funciones premium actuales incluyen: Análisis
            Avanzado y Gráficos Estadísticos, Tracker AI y Modo Oscuro. El
            usuario reconoce y acepta que las funciones específicas incluidas en
            la suscripción pueden variar con el tiempo, y que MigraUSA puede
            agregar, modificar, reemplazar o descontinuar funciones premium
            individuales sin que ello constituya un incumplimiento de estos
            Términos, siempre que la suscripción continúe ofreciendo
            funcionalidad premium en su conjunto.
          </li>
          <li>
            <strong>Planes de Suscripción:</strong> Ofrecemos planes de
            suscripción de facturación mensual y anual.
          </li>
          <li>
            <strong>Renovación Automática:</strong> Tu suscripción se renovará
            automáticamente al final de cada período de facturación a menos que
            la canceles al menos 24 horas antes de que finalice el período
            actual.
          </li>
          <li>
            <strong>Procesamiento de Pagos:</strong> Todos los pagos, datos de
            tarjetas de crédito y transacciones son procesados directamente por
            Apple. MigraUSA no recopila ni almacena tu información financiera.
          </li>
          <li>
            <strong>Cancelaciones y Reembolsos:</strong> Puedes cancelar tu
            suscripción en cualquier momento desde la configuración de tu cuenta
            de Apple. La cancelación entrará en vigor al final del ciclo de
            facturación actual. Dado que las transacciones son manejadas por
            Apple, las solicitudes de reembolso están sujetas única y
            exclusivamente a las políticas de devolución de Apple App Store.
            MigraUSA no procesa pagos directamente y, por lo tanto, no puede
            emitir reembolsos por su cuenta.
          </li>
          <li>
            <strong>Cambios en las Funciones Premium:</strong> MigraUSA se
            reserva el derecho de modificar, agregar, reemplazar o descontinuar
            funciones incluidas en la suscripción premium en cualquier momento.
            En caso de cambios sustanciales en la composición de las funciones
            premium, MigraUSA notificará a los suscriptores activos con al menos
            treinta (30) días de anticipación a través de un aviso en la App y,
            cuando sea posible, mediante notificación push, otorgándoles la
            oportunidad de cancelar su suscripción antes de la siguiente
            renovación. Si el suscriptor no cancela dentro de dicho período, se
            entenderá que acepta los cambios realizados.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Análisis de Datos y Estadísticas",
    content: (
      <p>
        La función de Análisis Avanzado y Estadísticas utiliza los datos de los
        casos seguidos en la App (como los cambios de estado y tiempos de
        procesamiento). Estos datos se almacenan y procesan en nuestros
        servidores de forma estrictamente anónima y agregada, sin estar
        vinculados a tu identidad. Al usar la App, aceptas que MigraUSA procese
        esta información desidentificada para generar estimaciones y estadísticas
        globales, las cuales tienen fines puramente informativos y no garantizan
        el resultado ni el tiempo real de tu caso específico.
      </p>
    ),
  },
  {
    id: 8,
    title: "Limitación de Responsabilidad",
    content: (
      <>
        <p>
          En la medida máxima permitida por la ley, MigraUSA LLC, sus
          desarrolladores, directores y empleados no serán responsables de
          ningún daño directo, indirecto, incidental, especial, consecuente o
          punitivo derivado de:
        </p>
        <ul>
          <li>
            Retrasos, errores o inexactitudes en la información obtenida de los
            servidores de USCIS o EOIR.
          </li>
          <li>
            Pérdidas de plazos legales, citas en la corte, o beneficios
            migratorios.
          </li>
          <li>
            Cualquier daño derivado del uso, la imposibilidad de usar la App o
            la confianza depositada en Tracker AI o en nuestras estadísticas.
          </li>
        </ul>
        <p>
          En ningún caso la responsabilidad total acumulada de MigraUSA LLC
          frente a ti por todas las reclamaciones relacionadas con la App
          excederá la cantidad total que hayas pagado a MigraUSA (a través de
          Apple App Store) durante los doce (12) meses inmediatamente anteriores
          al evento que dio origen a la reclamación, o diez dólares
          estadounidenses (USD $10.00), lo que sea mayor.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Indemnización",
    content: (
      <p>
        Aceptas defender, indemnizar y eximir de responsabilidad a MigraUSA LLC,
        sus desarrolladores, afiliados y proveedores de servicios, de y contra
        cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o
        deuda y gasto (incluyendo, pero no limitado a, honorarios de abogados)
        que surjan de: (a) tu uso y acceso a la App; (b) tu violación de
        cualquier término de estos Términos y Condiciones; o (c) tu violación de
        cualquier derecho de terceros, incluyendo derechos de privacidad o
        propiedad intelectual.
      </p>
    ),
  },
  {
    id: 10,
    title: "Disponibilidad y Modificaciones del Servicio",
    content: (
      <>
        <p>
          Nos esforzamos por mantener la App operativa, pero nos reservamos el
          derecho de modificar, suspender, descontinuar o eliminar temporal o
          permanentemente cualquier función de la App (incluyendo
          notificaciones, alertas, herramientas de IA, estadísticas o funciones
          premium) en cualquier momento.
        </p>
        <ul>
          <li>
            <strong>Cambios Sustanciales en Funciones Premium:</strong> Para
            cambios que afecten sustancialmente la composición de las funciones
            incluidas en la suscripción premium, MigraUSA notificará a los
            suscriptores activos con al menos treinta (30) días de anticipación
            a través de un aviso en la App, de acuerdo con la Sección 6,
            otorgándoles la oportunidad de cancelar antes de su siguiente
            renovación.
          </li>
          <li>
            <strong>Cambios en Funciones Gratuitas:</strong> Para
            modificaciones o eliminación de funciones gratuitas que MigraUSA
            considere sustanciales, haremos esfuerzos razonables por notificar
            a los usuarios con al menos catorce (14) días de anticipación a
            través de un aviso en la App. No obstante, MigraUSA se reserva el
            derecho de realizar cambios inmediatos sin previo aviso cuando sea
            necesario por razones técnicas, de seguridad, legales, o por cambios
            en las fuentes de datos de terceros (como USCIS o EOIR) que estén
            fuera de nuestro control.
          </li>
          <li>
            <strong>Mantenimiento y Emergencias:</strong> Interrupciones
            temporales por mantenimiento programado, actualizaciones técnicas o
            fallos en servicios de terceros no se consideran cambios sustanciales
            y no requieren notificación previa.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 11,
    title: "Restricción de Acceso",
    content: (
      <p>
        MigraUSA se reserva el derecho de bloquear, restringir o suspender el
        acceso a la App o a nuestros servidores desde tu dispositivo (por
        ejemplo, bloqueando tu token de dispositivo o IP), sin previo aviso ni
        responsabilidad alguna, si determinamos que has violado estos Términos.
        Esto incluye el uso de bots, extracción automatizada de datos
        (scraping), ingeniería inversa, o cualquier uso abusivo que comprometa
        la seguridad de la App.
      </p>
    ),
  },
  {
    id: 12,
    title: "Propiedad Intelectual",
    content: (
      <p>
        Todo el código, diseño, textos, gráficos, interfaces y funcionalidades
        de la App son propiedad exclusiva de MigraUSA LLC (o sus licenciantes) y
        están protegidos por las leyes de derechos de autor y propiedad
        intelectual aplicables.
      </p>
    ),
  },
  {
    id: 13,
    title: "Derechos de Privacidad Estatales",
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
        <ul>
          <li>
            <strong>Datos que Recopilamos:</strong> Como se describe en la
            Sección 2, MigraUSA recopila identificadores técnicos de dispositivo
            (como push tokens) y datos de casos anonimizados. Reconocemos que,
            bajo la definición amplia de &quot;información personal&quot; de ciertas leyes
            estatales, algunos de estos identificadores técnicos podrían
            considerarse información personal en la medida en que sean
            vinculables a un dispositivo o consumidor específico.
          </li>
          <li>
            <strong>Lo que NO Hacemos:</strong> MigraUSA no vende, comparte ni
            pone a disposición de terceros tu información personal para fines de
            publicidad dirigida o entre empresas (cross-context behavioral
            advertising) en el sentido que dichas leyes estatales definen estos
            términos. No recopilamos categorías sensibles de información
            personal.
          </li>
          <li>
            <strong>Tus Derechos:</strong> Dependiendo de tu estado de
            residencia, puedes tener derecho a: (a) saber qué datos hemos
            recopilado sobre ti; (b) solicitar la eliminación de tus datos; (c)
            optar por no participar en la venta o el intercambio de tu
            información personal (derecho que ya cumplimos al no realizar dichas
            prácticas); y (d) no ser discriminado por ejercer tus derechos de
            privacidad. Para ejercer cualquiera de estos derechos, puedes
            contactarnos en{" "}
            <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
            Responderemos a solicitudes verificables dentro de los plazos
            exigidos por la ley aplicable.
          </li>
          <li>
            <strong>Eliminación de Datos:</strong> Puedes eliminar todos los
            datos locales desinstalando la App de tu dispositivo. Al hacerlo,
            los identificadores en nuestros servidores quedarán inactivos. Los
            datos de caso previamente sincronizados permanecerán estrictamente
            anonimizados y desvinculados de tu dispositivo. Si deseas solicitar
            la eliminación completa de cualquier dato que pueda estar asociado a
            tu dispositivo en nuestros servidores, puedes contactarnos en{" "}
            <a href="mailto:help@migrausa.com">help@migrausa.com</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 14,
    title: "Ley Aplicable y Resolución de Disputas (Arbitraje)",
    content: (
      <>
        <p>
          Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
          las leyes del Estado de Florida, Estados Unidos, sin dar efecto a
          ningún principio de conflictos de leyes.
        </p>
        <p>
          <strong>Arbitraje Vinculante y Renuncia a Demandas Colectivas:</strong>{" "}
          En caso de cualquier controversia, reclamo o disputa derivada del uso
          de la App, aceptas intentar resolverla primero de manera informal
          contactándonos a través de nuestro correo de soporte. Si no podemos
          llegar a un acuerdo en un plazo de 30 días, aceptas que la disputa se
          resolverá de manera exclusiva y definitiva mediante arbitraje vinculante
          administrado por la Asociación Americana de Arbitraje (AAA) bajo sus
          Reglas de Arbitraje Comercial y Procedimientos Suplementarios para
          Disputas Relacionadas con el Consumidor. El arbitraje se llevará a cabo
          en el Estado de Florida. Al aceptar estos términos, renuncias
          expresamente a tu derecho de presentar una demanda en un tribunal ante
          un juez o jurado, y renuncias a tu derecho a participar en cualquier
          demanda colectiva (class action) o procedimiento representativo.
        </p>
        <p>
          <strong>
            Excepción para Tribunales de Reclamaciones Menores (Small Claims
            Court):
          </strong>{" "}
          Sin perjuicio de lo anterior, cualquiera de las partes podrá presentar
          una acción individual (no colectiva) en un tribunal de reclamaciones
          menores (small claims court) de jurisdicción competente para disputas
          que se encuentren dentro de los límites monetarios de dicho tribunal,
          sin necesidad de recurrir primero al arbitraje.
        </p>
        <p>
          <strong>
            Derecho a Optar por No Participar en el Arbitraje (Opt-Out):
          </strong>{" "}
          Tienes el derecho de optar por no participar en esta disposición de
          arbitraje vinculante. Para hacerlo, debes enviarnos una notificación
          por escrito a{" "}
          <a href="mailto:help@migrausa.com">help@migrausa.com</a> dentro de los
          treinta (30) días siguientes a tu primera aceptación de estos Términos,
          indicando tu deseo de excluirte del arbitraje. Si optas por no
          participar, ambas partes conservarán el derecho de litigar cualquier
          disputa en los tribunales.
        </p>
      </>
    ),
  },
  {
    id: 15,
    title: "Fuerza Mayor",
    content: (
      <p>
        MigraUSA no será responsable de ningún incumplimiento o retraso en el
        cumplimiento de sus obligaciones bajo estos Términos cuando dicho
        incumplimiento o retraso sea causado por circunstancias fuera de su
        control razonable (&quot;Evento de Fuerza Mayor&quot;). Los Eventos de Fuerza
        Mayor incluyen, entre otros: desastres naturales, pandemias, actos de
        guerra o terrorismo, sanciones gubernamentales, embargos, acciones
        legislativas o regulatorias, fallos o interrupciones en los servidores o
        portales de USCIS, EOIR u otras agencias gubernamentales, cambios o
        discontinuación de APIs o servicios de terceros (incluyendo OpenAI),
        fallos en la infraestructura de internet, ataques cibernéticos, y
        cualquier otro evento similar fuera del control razonable de MigraUSA.
        Durante la duración de un Evento de Fuerza Mayor, las obligaciones
        afectadas de MigraUSA quedarán suspendidas sin que ello constituya un
        incumplimiento de estos Términos.
      </p>
    ),
  },
  {
    id: 16,
    title: "No Renuncia (No Waiver)",
    content: (
      <p>
        El hecho de que MigraUSA no ejerza o no haga cumplir cualquier derecho o
        disposición de estos Términos y Condiciones en un momento dado no
        constituirá una renuncia a dicho derecho o disposición. Cualquier
        renuncia a un derecho o disposición por parte de MigraUSA solo será
        efectiva si se realiza por escrito y es firmada por un representante
        autorizado de MigraUSA LLC. La renuncia a cualquier derecho o disposición
        en una ocasión no se interpretará como una renuncia continua o futura a
        dicho derecho o disposición, ni como una renuncia a cualquier otro
        derecho o disposición bajo estos Términos.
      </p>
    ),
  },
  {
    id: 17,
    title: "Separabilidad",
    content: (
      <p>
        Si cualquier disposición de estos Términos y Condiciones es declarada
        inválida, ilegal o inaplicable por un tribunal u organismo competente,
        dicha disposición se modificará e interpretará en la medida mínima
        necesaria para cumplir con la ley aplicable, y las disposiciones
        restantes continuarán en pleno vigor y efecto.
      </p>
    ),
  },
  {
    id: 18,
    title: "Traducción e Interpretación",
    content: (
      <p>
        Estos Términos y Condiciones pueden haber sido traducidos si los hemos
        puesto a tu disposición a través de nuestra App en distintos idiomas
        (como el español, para tu conveniencia). Sin embargo, aceptas que, en
        caso de cualquier disputa, reclamación o conflicto legal, el texto
        original en inglés será el único legalmente vinculante y prevalecerá
        sobre cualquier traducción proporcionada.
      </p>
    ),
  },
  {
    id: 19,
    title: "Términos de Servicios de Terceros",
    content: (
      <>
        <p>
          Al usar la App, también te sujetas a los términos y condiciones y
          políticas de privacidad de los servicios de terceros que utilizamos,
          así como de los portales oficiales de los que se obtiene información:
        </p>
        <ul>
          <li>
            <a
              href="https://www.apple.com/legal/internet-services/itunes/us/terms.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple App Store Terms of Service
            </a>
          </li>
          <li>
            <a
              href="https://openai.com/policies/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI Terms of Use &amp; Privacy Policy
            </a>
          </li>
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
      </>
    ),
  },
  {
    id: 20,
    title: "Modificaciones a los Términos",
    content: (
      <p>
        Podemos actualizar estos Términos y Condiciones en cualquier momento. Te
        notificaremos sobre cambios significativos a través de un aviso en la
        App. El uso continuado de la App después de dichos cambios constituye tu
        aceptación de los nuevos términos.
      </p>
    ),
  },
  {
    id: 21,
    title: "Contacto",
    content: (
      <p>
        Si tienes alguna pregunta sobre estos Términos o necesitas soporte legal
        o técnico relacionado con los mismos, contáctanos en:{" "}
        <a href="mailto:help@migrausa.com">help@migrausa.com</a>
      </p>
    ),
  },
];

export default function Terminos() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Términos y Condiciones
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
