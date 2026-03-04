import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | MigraUSA",
  description:
    "Términos y Condiciones de Uso de MigraUSA. Última actualización: 4 de marzo de 2026.",
};

const sections = [
  {
    id: 1,
    title:
      "Aceptación de los Términos, Restricciones de Edad y Cumplimiento con COPPA",
    content: (
      <>
        <p>
          Al descargar, instalar o usar la aplicación móvil MigraUSA Case Tracker (en
          adelante, &quot;la App&quot;), operada por AMERICAN SOLUTIONS CENTER
          LLC (en adelante, &quot;MigraUSA&quot;, &quot;nosotros&quot; o
          &quot;nuestro&quot;), aceptas estar legalmente vinculado por estos
          Términos y Condiciones. Si no estás de acuerdo con alguno de estos
          términos, no debes utilizar la App.
        </p>
        <p>
          Para utilizar la App, declaras y garantizas que tienes al menos 18
          años o has alcanzado la mayoría de edad legal en tu jurisdicción.
          MigraUSA no está dirigida a menores de 18 años. De conformidad con la
          Ley de Protección de la Privacidad Infantil en Internet (COPPA), no
          recopilamos de forma intencional información de niños menores de 13
          años. Si descubrimos que hemos recopilado inadvertidamente datos de un
          menor, tomaremos medidas razonables para eliminar dicha información de
          forma inmediata. Si eres padre o tutor y crees que tu hijo nos ha
          proporcionado información, contáctanos en{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Política de Privacidad y Recopilación de Datos",
    content: (
      <>
        <p>
          Para utilizar la App, no es necesario crear una cuenta de usuario.
          MigraUSA no requiere que proporciones datos personales identificables
          como tu nombre o número de teléfono para funcionar, y solo recopilará
          tu dirección de correo electrónico si decides proporcionarla
          voluntariamente al usar nuestra función de soporte técnico.
        </p>
        <p>
          Para el funcionamiento de la App, recopilamos y almacenamos
          identificadores técnicos (como push tokens). Los números de recibo y
          los datos de estado que agregues se procesan en nuestros servidores
          para habilitar la sincronización, alimentar estadísticas globales y
          mejorar el servicio. MigraUSA no consulta los datos directamente desde
          sus servidores; la consulta a los portales públicos se realiza desde
          tu dispositivo. El tratamiento de tu información está regido por
          nuestra Política de Privacidad. Al aceptar estos Términos, confirmas
          que has leído y estás de acuerdo con dicha Política.
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
          que tomes basándote en la información mostrada. Siempre debes
          verificar tu información oficial directamente en los sitios web del
          gobierno o consultar a un abogado de inmigración certificado.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Funciones de la App y Limitaciones ("As Is")',
    content: (
      <>
        <p>
          MigraUSA proporciona sus funciones{" "}
          <strong>
            &quot;TAL CUAL&quot; (&quot;AS IS&quot;)
          </strong>{" "}
          y{" "}
          <strong>
            &quot;SEGÚN DISPONIBILIDAD&quot; (&quot;AS AVAILABLE&quot;)
          </strong>
          , sin garantías de ningún tipo, expresas o implícitas. En la medida
          máxima permitida por la ley aplicable, MigraUSA renuncia expresamente
          a todas las garantías implícitas.
        </p>
        <ul>
          <li>
            <strong>Funciones Gratuitas:</strong> Seguimiento básico de casos
            consultados manualmente desde la aplicación.
          </li>
          <li>
            <strong>Funciones Premium:</strong> Disponibles exclusivamente con
            una suscripción activa (ej. Análisis Avanzado, Tracker AI, Modo
            Oscuro). El contenido y la disponibilidad de estas funciones pueden
            cambiar a discreción de MigraUSA.
          </li>
          <li>
            <strong>Exactitud de los Datos:</strong> La información mostrada
            depende de fuentes públicas que pueden experimentar retrasos o
            caídas. No garantizamos un servicio ininterrumpido o libre de
            errores.
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
          Tracker AI utiliza la API de OpenAI para generar respuestas
          informativas.
        </p>
        <ul>
          <li>
            <strong>Precisión no garantizada:</strong> La IA puede cometer
            errores o proporcionar información desactualizada.
          </li>
          <li>
            <strong>No es consejo legal:</strong> Ninguna respuesta debe
            interpretarse como consejo legal o directriz oficial.
          </li>
          <li>
            <strong>Privacidad:</strong> Está estrictamente prohibido ingresar
            información personal sensible en el chat. MigraUSA no almacena el
            contenido de estas conversaciones. OpenAI procesa estos datos a
            través de su API y los retiene por un máximo de 30 días únicamente
            por seguridad, tras lo cual son eliminados. OpenAI no entrena sus
            modelos públicos con estos datos. El usuario asume la
            responsabilidad por los datos que comparta en el chat.
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
          Al seleccionar una suscripción premium, aceptas pagar las tarifas
          indicadas a través de la tienda de aplicaciones correspondiente (Apple
          App Store o Google Play Store).
        </p>
        <ul>
          <li>
            <strong>Renovación Automática:</strong> Tu suscripción se renovará
            automáticamente a menos que la canceles al menos 24 horas antes de
            que finalice el período actual.
          </li>
          <li>
            <strong>Procesamiento y Reembolsos:</strong> Todos los pagos son
            procesados directamente por Apple o Google. MigraUSA no recopila tu
            información financiera y no puede emitir reembolsos directos; estos
            están sujetos a las políticas de la tienda correspondiente.
          </li>
          <li>
            <strong>Cambios en Funciones Premium:</strong> MigraUSA se reserva
            el derecho de modificar o descontinuar funciones premium. Para
            cambios sustanciales, notificaremos a los suscriptores con 30 días
            de anticipación, otorgando la oportunidad de cancelar antes de la
            renovación.
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
        La función de Análisis Avanzado procesa los datos de los casos (cambios
        de estado, tiempos) de forma estrictamente agregada y anonimizada. Al
        usar la App, aceptas que MigraUSA procese esta información para generar
        estimaciones globales, las cuales tienen fines puramente informativos y
        no garantizan resultados en tu caso específico.
      </p>
    ),
  },
  {
    id: 8,
    title: "Limitación de Responsabilidad",
    content: (
      <p>
        En la medida máxima permitida por la ley, AMERICAN SOLUTIONS CENTER
        LLC no será responsable de ningún daño directo, indirecto, incidental o
        consecuente derivado de: retrasos en los servidores de USCIS/EOIR,
        pérdidas de plazos legales o la confianza depositada en Tracker AI o
        nuestras estadísticas. La responsabilidad total acumulada de AMERICAN
        SOLUTIONS CENTER LLC frente a ti
        no excederá la cantidad que hayas pagado por la App durante los doce
        (12) meses anteriores al evento, o diez dólares (USD $10.00), lo que
        sea mayor.
      </p>
    ),
  },
  {
    id: 9,
    title: "Indemnización",
    content: (
      <p>
        Aceptas defender e indemnizar a AMERICAN SOLUTIONS CENTER LLC, sus
        directivos, empleados y agentes, de cualquier reclamo, daño, costo o
        gasto (incluyendo honorarios de abogados) que surjan de tu uso de la
        App, tu violación de estos Términos o tu violación de derechos de
        terceros.
      </p>
    ),
  },
  {
    id: 10,
    title: "Disponibilidad y Modificaciones del Servicio",
    content: (
      <p>
        Nos reservamos el derecho de modificar, suspender o descontinuar
        cualquier función de la App. Las interrupciones por mantenimiento o
        fallos en servicios de terceros (como USCIS) no requieren notificación
        previa.
      </p>
    ),
  },
  {
    id: 11,
    title: "Restricción de Acceso",
    content: (
      <p>
        AMERICAN SOLUTIONS CENTER LLC se reserva el derecho de bloquear o
        suspender el acceso a la
        App desde tu dispositivo sin previo aviso si determinamos que has
        violado estos Términos (ej. uso de bots, scraping, ingeniería inversa o
        abuso de la API).
      </p>
    ),
  },
  {
    id: 12,
    title: "Propiedad Intelectual",
    content: (
      <p>
        Todo el código, diseño y funcionalidades de la App son propiedad
        exclusiva de AMERICAN SOLUTIONS CENTER LLC y están protegidos por leyes
        de propiedad
        intelectual.
      </p>
    ),
  },
  {
    id: 13,
    title: "Privacidad y Eliminación de Datos",
    content: (
      <p>
        Tus derechos de privacidad, incluyendo aquellos otorgados por leyes
        estatales (como la CCPA de California), están detallados en nuestra
        Política de Privacidad. Puedes eliminar tus datos locales desinstalando
        la App. Para solicitar la eliminación definitiva de tus datos en
        nuestros servidores, contáctanos en{" "}
        <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
      </p>
    ),
  },
  {
    id: 14,
    title: "Ley Aplicable y Resolución de Disputas (Arbitraje)",
    content: (
      <>
        <p>
          Estos Términos se rigen por las leyes del Estado de Florida, EE. UU.
        </p>
        <p>
          <strong>
            Arbitraje Vinculante y Renuncia a Demandas Colectivas:
          </strong>{" "}
          Cualquier disputa se resolverá mediante arbitraje vinculante
          administrado por la AAA en Florida. Renuncias a tu derecho de
          presentar una demanda ante un juez/jurado o participar en demandas
          colectivas (class actions).
        </p>
        <p>
          <strong>Opt-Out:</strong> Puedes excluirte del arbitraje enviando un
          correo a{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a> dentro de
          los 30 días siguientes a tu aceptación de estos Términos.
        </p>
      </>
    ),
  },
  {
    id: 15,
    title: "Fuerza Mayor",
    content: (
      <p>
        AMERICAN SOLUTIONS CENTER LLC no será responsable por incumplimientos
        causados por eventos
        fuera de su control, como caídas de servidores gubernamentales, cambios
        en APIs de terceros (OpenAI), desastres naturales o ciberataques.
      </p>
    ),
  },
  {
    id: 16,
    title: "No Renuncia y Separabilidad",
    content: (
      <p>
        La falta de aplicación de cualquier derecho de estos Términos no
        constituye una renuncia al mismo. Si alguna disposición es declarada
        inválida, el resto continuará en pleno vigor.
      </p>
    ),
  },
  {
    id: 17,
    title: "Traducción e Interpretación",
    content: (
      <p>
        Estos Términos pueden estar traducidos al español para tu conveniencia.
        Sin embargo, aceptas que, en caso de disputa legal, el texto original en
        inglés será el único legalmente vinculante.
      </p>
    ),
  },
  {
    id: 18,
    title: "Términos de Servicios de Terceros",
    content: (
      <>
        <p>
          Al usar la App, te sujetas a las políticas de los terceros que
          utilizamos:
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
              OpenAI Terms of Use
            </a>
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat Terms
            </a>
          </li>
          <li>
            <a
              href="https://supabase.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase Terms
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
    id: 19,
    title: "Modificaciones y Contacto",
    content: (
      <>
        <p>
          Podemos actualizar estos Términos en cualquier momento. Te
          notificaremos sobre cambios significativos a través de la App.
        </p>
        <p>
          Para preguntas sobre estos Términos, contáctanos en:
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

export default function Terminos() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/terms-and-conditions"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Read in English
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Términos y Condiciones
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
