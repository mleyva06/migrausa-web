import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Chess Mobile",
  description: "Política de Privacidad de Chess Mobile.",
};

const sections = [
  {
    id: 1,
    title: "Alcance",
    content: (
      <p>
        Esta política aplica al uso de Chess Mobile en iOS, Android y cualquier
        otra plataforma en la que la App pueda estar disponible. Cubre tanto el
        uso como invitado como el uso con cuenta iniciada mediante proveedores
        externos.
      </p>
    ),
  },
  {
    id: 2,
    title: "Qué datos tratamos",
    content: (
      <>
        <h3>2.1 Datos de cuenta e identidad</h3>
        <p>
          Si decides iniciar sesión con Apple o Google a través de Supabase,
          podemos tratar:
        </p>
        <ul>
          <li>nombre o nombre visible facilitado por el proveedor;</li>
          <li>dirección de correo electrónico, cuando el proveedor la comparte;</li>
          <li>identificador único de usuario del servicio de autenticación;</li>
          <li>
            metadatos básicos de la cuenta y datos técnicos necesarios para
            mantener la sesión iniciada.
          </li>
        </ul>
        <p>
          Si usas la App como invitado, no necesitamos crear una cuenta para que
          puedas jugar localmente.
        </p>

        <h3>2.2 Datos de juego, progreso y preferencias almacenados en tu dispositivo</h3>
        <p>
          La App guarda de forma local en tu dispositivo datos necesarios para
          ofrecer la experiencia de juego, incluyendo:
        </p>
        <ul>
          <li>historial de partidas;</li>
          <li>progreso de problemas y bots desbloqueados;</li>
          <li>racha diaria;</li>
          <li>idioma seleccionado;</li>
          <li>tema visual, tablero, piezas y sonidos elegidos;</li>
          <li>preferencias de sonido, vibración y otros ajustes;</li>
          <li>
            indicador para no mostrar repetidamente la solicitud de valoración;
          </li>
          <li>
            tokens de sesión y persistencia de autenticación cuando inicias
            sesión.
          </li>
        </ul>

        <h3>2.3 Datos enviados cuando usas funciones en línea</h3>
        <p>
          Algunas funciones requieren intercambio de datos con servicios
          externos:
        </p>
        <ul>
          <li>
            cuando juegas contra bots, la App envía al servidor de motor de
            ajedrez la posición de la partida en formato FEN y el nivel o Elo
            seleccionado para obtener la siguiente jugada;
          </li>
          <li>
            cuando abres problemas, la App solicita contenido de problemas de
            ajedrez desde la API de Lichess;
          </li>
          <li>
            cuando inicias sesión, la App redirige y comunica datos con Apple,
            Google y Supabase para autenticar tu cuenta.
          </li>
        </ul>

        <h3>2.4 Datos técnicos generados por el uso de servicios externos</h3>
        <p>
          Como ocurre normalmente en servicios en línea, los proveedores que
          intervienen en el funcionamiento de la App pueden recibir datos
          técnicos como dirección IP, fecha y hora de la solicitud, tipo de
          dispositivo, sistema operativo, información del navegador o sesión, y
          registros operativos necesarios para seguridad, diagnóstico o entrega
          del servicio.
        </p>

        <h3>2.5 Datos que actualmente no solicitamos</h3>
        <p>
          Según la implementación actual de la App, no solicitamos acceso a:
        </p>
        <ul>
          <li>cámara;</li>
          <li>micrófono;</li>
          <li>fotos o galería;</li>
          <li>contactos;</li>
          <li>ubicación precisa;</li>
          <li>identificadores publicitarios para seguimiento entre apps.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Cómo usamos los datos",
    content: (
      <>
        <p>Usamos la información anterior para:</p>
        <ul>
          <li>permitir el inicio y mantenimiento de sesión;</li>
          <li>guardar tu progreso, configuración e historial;</li>
          <li>ofrecer partidas contra bots, problemas y demás funciones principales;</li>
          <li>mostrar tu perfil y estadísticas dentro de la App;</li>
          <li>mejorar estabilidad, seguridad, diagnóstico y soporte;</li>
          <li>
            cumplir obligaciones legales y responder a solicitudes válidas de
            autoridades cuando corresponda;
          </li>
          <li>prevenir abuso, uso indebido o interferencia con el servicio.</li>
        </ul>
        <p>
          No vendemos tus datos personales y no usamos la App para publicidad
          comportamental basada en seguimiento entre apps.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Con quién compartimos información",
    content: (
      <>
        <p>
          Podemos compartir información solo en la medida necesaria para operar
          la App:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong>, para autenticación, gestión de sesión y
            servicios asociados de cuenta;
          </li>
          <li>
            <strong>Apple y Google</strong>, cuando eliges iniciar sesión con
            esos proveedores;
          </li>
          <li>
            <strong>Lichess</strong>, para obtener problemas de ajedrez desde su
            API;
          </li>
          <li>
            <strong>infraestructura del servidor de Stockfish</strong> usada
            para calcular jugadas de bots;
          </li>
          <li>
            <strong>tiendas de aplicaciones y servicios del sistema</strong>, por
            ejemplo cuando solicitas dejar una reseña o usas mecanismos del
            sistema para compartir contenido.
          </li>
        </ul>
        <p>
          Si eliges compartir una partida o recomendar la App mediante la hoja
          de compartir del sistema, la información que decidas enviar pasará a
          la app o servicio de terceros que tú selecciones y quedará sujeta a
          sus propias políticas.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Bases legales cuando resulten aplicables",
    content: (
      <>
        <p>
          Cuando una ley de privacidad exija una base legal específica, tratamos
          datos sobre las siguientes bases:
        </p>
        <ul>
          <li>
            ejecución del servicio solicitado por ti, por ejemplo para iniciar
            sesión, guardar progreso o jugar contra bots;
          </li>
          <li>
            tu consentimiento, cuando decides usar funciones opcionales como
            iniciar sesión con un proveedor externo;
          </li>
          <li>
            interés legítimo en mantener seguridad, prevenir fraude, depurar
            errores y operar la App;
          </li>
          <li>cumplimiento de obligaciones legales.</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Conservación de datos",
    content: (
      <>
        <p>
          Conservamos los datos por el tiempo necesario para los fines descritos
          en esta política:
        </p>
        <ul>
          <li>
            los datos guardados localmente permanecen en tu dispositivo hasta que
            borres la App, limpies sus datos o los sobrescriba la propia App;
          </li>
          <li>
            los datos de cuenta gestionados mediante Supabase se conservan
            mientras la cuenta siga activa o hasta que solicites su eliminación,
            salvo que debamos mantener cierta información por motivos legales o
            de seguridad;
          </li>
          <li>
            las solicitudes técnicas al servidor de bots y a otros servicios
            externos pueden quedar registradas temporalmente en logs operativos
            para diagnóstico, seguridad y continuidad del servicio;
          </li>
          <li>
            los terceros que intervienen en el servicio conservan datos de
            acuerdo con sus propias políticas.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Seguridad",
    content: (
      <>
        <p>
          Aplicamos medidas razonables para proteger la información tratada por
          la App. Sin embargo, ningún sistema es completamente infalible y no
          podemos garantizar seguridad absoluta.
        </p>
        <p>
          Te recomendamos mantener tu dispositivo protegido, usar métodos
          seguros de acceso y cerrar sesión si compartes el dispositivo con
          otras personas.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Tus opciones y derechos",
    content: (
      <>
        <p>
          Según tu jurisdicción, puedes tener derecho a solicitar acceso,
          corrección, eliminación, oposición, limitación del tratamiento o
          portabilidad de tus datos.
        </p>
        <p>También puedes:</p>
        <ul>
          <li>usar la App como invitado en lugar de iniciar sesión;</li>
          <li>cerrar sesión en cualquier momento;</li>
          <li>
            borrar datos locales desinstalando la App o eliminando sus datos
            desde el sistema operativo;
          </li>
          <li>
            escribirnos para solicitar eliminación de datos de cuenta o ejercer
            derechos de privacidad.
          </li>
        </ul>
        <p>
          Para solicitudes de privacidad, contáctanos en{" "}
          <a href="mailto:chess@americansolutionscenter.com">
            chess@americansolutionscenter.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Menores de edad",
    content: (
      <p>
        La App está orientada a público general y no está dirigida
        intencionalmente a menores para recopilar datos personales de forma
        independiente sin la intervención de un adulto cuando la ley lo
        requiera. Si consideras que un menor nos ha proporcionado datos
        personales de forma indebida, escríbenos para revisarlo y tomar las
        medidas razonables correspondientes.
      </p>
    ),
  },
  {
    id: 10,
    title: "Transferencias internacionales",
    content: (
      <p>
        Los servicios de terceros utilizados por la App pueden operar en
        distintos países. Como resultado, tu información puede ser tratada fuera
        de tu lugar de residencia, sujeta a las salvaguardas y prácticas del
        proveedor correspondiente.
      </p>
    ),
  },
  {
    id: 11,
    title: "Servicios de terceros",
    content: (
      <>
        <p>
          Algunas funciones dependen de terceros. Te recomendamos revisar
          también sus políticas, en la medida en que sean aplicables a tu uso:
        </p>
        <ul>
          <li>
            Supabase:{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              supabase.com
            </a>
          </li>
          <li>
            Apple:{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              apple.com/legal/privacy
            </a>
          </li>
          <li>
            Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            Lichess:{" "}
            <a
              href="https://lichess.org/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              lichess.org/privacy
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 12,
    title: "Cambios a esta política",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad para reflejar cambios en
        la App, en proveedores utilizados o en requisitos legales. Cuando
        publiquemos una versión actualizada, cambiaremos la fecha de entrada en
        vigor.
      </p>
    ),
  },
  {
    id: 13,
    title: "Contacto",
    content: (
      <>
        <p>
          Si tienes preguntas sobre esta Política de Privacidad o sobre el
          tratamiento de datos en Chess Mobile, puedes escribir a:
        </p>
        <p>
          <a href="mailto:chess@americansolutionscenter.com">
            chess@americansolutionscenter.com
          </a>
        </p>
      </>
    ),
  },
];

export default function ChessPoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/chess/privacy-policy"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Read in English
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Chess Mobile
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Fecha de entrada en vigor: 21 de marzo de 2026
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Esta Política de Privacidad describe cómo Chess Mobile (la
            &quot;App&quot;), operada por American Solutions Center
            (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la App&quot;),
            recopila, usa, comparte y protege información cuando usas la
            aplicación.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Contacto de privacidad:{" "}
            <a
              href="mailto:chess@americansolutionscenter.com"
              className="underline underline-offset-2"
            >
              chess@americansolutionscenter.com
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500 italic">
            Este texto fue preparado tomando en cuenta el comportamiento actual
            de la versión 1.0.0 de la App.
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
            <Link
              href="/chess/politica-de-privacidad"
              className="underline underline-offset-2"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/chess/terminos-y-condiciones"
              className="underline underline-offset-2"
            >
              Términos de Uso
            </Link>
            <Link
              href="/chess/privacy-policy"
              className="underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link href="/chess/terms" className="underline underline-offset-2">
              Terms of Use
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
        }
      `}</style>
    </div>
  );
}
