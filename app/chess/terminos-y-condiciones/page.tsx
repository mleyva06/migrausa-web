import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso | Chess Mobile",
  description: "Términos de Uso de Chess Mobile.",
};

const sections = [
  {
    id: 1,
    title: "Descripción del servicio",
    content: (
      <>
        <p>
          Chess Mobile es una app de ajedrez que, según la versión actual,
          permite entre otras funciones:
        </p>
        <ul>
          <li>jugar como invitado o con cuenta iniciada mediante Apple o Google;</li>
          <li>jugar contra bots usando un servidor de motor de ajedrez;</li>
          <li>jugar partidas locales en el mismo dispositivo;</li>
          <li>resolver problemas de ajedrez obtenidos de servicios externos;</li>
          <li>guardar progreso, estadísticas y preferencias de personalización.</li>
        </ul>
        <p>
          Algunas funciones pueden requerir conexión a internet y servicios de
          terceros.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Elegibilidad y uso de cuentas",
    content: (
      <>
        <p>
          Puedes usar la App como invitado o iniciar sesión con un proveedor
          externo disponible. Si usas una cuenta:
        </p>
        <ul>
          <li>
            eres responsable de la información y del acceso a tu cuenta de
            Apple, Google u otro proveedor compatible;
          </li>
          <li>debes usar la App de forma lícita y conforme a estos términos;</li>
          <li>
            aceptas que ciertas funciones dependan de servicios externos ajenos
            a nosotros.
          </li>
        </ul>
        <p>
          Si eres menor de edad, debes usar la App con la autorización de tu
          padre, madre o tutor cuando la ley aplicable así lo exija.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Uso permitido",
    content: (
      <>
        <p>
          Aceptas usar la App solo para fines personales, educativos o
          recreativos y te comprometes a no:
        </p>
        <ul>
          <li>interferir con el funcionamiento normal de la App o de sus servidores;</li>
          <li>
            intentar obtener acceso no autorizado a sistemas, cuentas, claves o
            tráfico de red;
          </li>
          <li>
            usar bots, scripts, scraping u otros medios automatizados para
            abusar de las funciones en línea;
          </li>
          <li>
            introducir código malicioso, virus o contenido destinado a dañar el
            servicio;
          </li>
          <li>
            infringir derechos de propiedad intelectual, privacidad u otros
            derechos de terceros;
          </li>
          <li>
            utilizar la App para fines ilegales, fraudulentos, engañosos o
            dañinos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Servicios y contenido de terceros",
    content: (
      <>
        <p>
          La App puede integrar o depender de servicios, contenido o
          infraestructura de terceros, incluyendo autenticación, problemas de
          ajedrez, motor de juego y mecanismos de tienda o del sistema
          operativo.
        </p>
        <p>En particular:</p>
        <ul>
          <li>el inicio de sesión puede depender de Apple, Google y Supabase;</li>
          <li>los problemas pueden provenir de Lichess;</li>
          <li>
            las partidas contra bots pueden depender de un servidor basado en
            Stockfish;
          </li>
          <li>
            ciertas funciones del sistema, como compartir contenido o dejar
            reseñas, dependen de tu dispositivo y de la plataforma
            correspondiente.
          </li>
        </ul>
        <p>
          El uso de esos servicios puede estar sujeto además a los términos y
          políticas del tercero correspondiente.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Propiedad intelectual",
    content: (
      <>
        <p>
          Salvo que se indique lo contrario, la App, su diseño, interfaz, marca,
          textos originales, código y elementos propios están protegidos por
          derechos de propiedad intelectual y pertenecen a American Solutions
          Center o a sus licenciantes.
        </p>
        <p>
          Los nombres, marcas, motores, proveedores de autenticación, contenidos
          y recursos de terceros siguen perteneciendo a sus respectivos
          titulares.
        </p>
        <p>
          No recibes ningún derecho de propiedad sobre la App más allá de una
          licencia limitada, revocable, no exclusiva y no transferible para
          usarla conforme a estos términos.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Disponibilidad, cambios y actualizaciones",
    content: (
      <>
        <p>
          Podemos modificar, actualizar, limitar o suspender funciones de la App
          en cualquier momento, con o sin aviso, por razones técnicas,
          operativas, legales o de seguridad.
        </p>
        <p>
          No garantizamos que todas las funciones estén siempre disponibles,
          especialmente aquellas que dependen de conexión a internet o de
          terceros.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Privacidad",
    content: (
      <p>
        El uso de datos personales y técnicos en relación con la App se describe
        en la Política de Privacidad de Chess Mobile. Al usar la App, reconoces
        haberla leído.
      </p>
    ),
  },
  {
    id: 8,
    title: "Exenciones de garantía",
    content: (
      <>
        <p>
          La App se ofrece &quot;tal cual&quot; y &quot;según
          disponibilidad&quot;, en la máxima medida permitida por la ley
          aplicable.
        </p>
        <p>No garantizamos que:</p>
        <ul>
          <li>la App estará libre de errores o interrupciones;</li>
          <li>los servicios en línea estarán siempre disponibles;</li>
          <li>
            los resultados de entrenamiento, problemas o sugerencias del motor
            sean exactos, completos o adecuados para un propósito específico;
          </li>
          <li>
            el servicio cumplirá expectativas competitivas, oficiales o
            profesionales.
          </li>
        </ul>
        <p>
          Chess Mobile es una herramienta de entretenimiento y práctica. No
          constituye arbitraje oficial, clasificación oficial ni asesoría
          profesional de ningún tipo.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Limitación de responsabilidad",
    content: (
      <p>
        En la máxima medida permitida por la ley, no seremos responsables por
        daños indirectos, incidentales, especiales, emergentes o punitivos, ni
        por pérdida de datos, interrupciones del servicio, pérdida de
        oportunidades o daños derivados del uso o imposibilidad de uso de la
        App. Nada de lo anterior limita responsabilidades que no puedan
        excluirse por ley.
      </p>
    ),
  },
  {
    id: 10,
    title: "Suspensión o terminación",
    content: (
      <>
        <p>
          Podemos restringir o suspender el acceso a funciones en línea si
          detectamos uso abusivo, inseguro, fraudulento o contrario a estos
          términos, o si necesitamos hacerlo por mantenimiento, cumplimiento
          legal o protección del servicio.
        </p>
        <p>Tú puedes dejar de usar la App en cualquier momento.</p>
      </>
    ),
  },
  {
    id: 11,
    title: "Cambios a estos términos",
    content: (
      <>
        <p>
          Podemos actualizar estos Términos de Uso para reflejar cambios en la
          App, en la operación del servicio o en requisitos legales. La versión
          actualizada entrará en vigor desde la fecha publicada en el
          encabezado.
        </p>
        <p>
          El uso continuado de la App después de una actualización implica la
          aceptación de los términos modificados.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Contacto",
    content: (
      <>
        <p>
          Si tienes preguntas sobre estos Términos de Uso, puedes escribir a:
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

export default function ChessTerminos() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/chess/terms"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Read in English
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Chess Mobile
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Términos de Uso
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Fecha de entrada en vigor: 21 de marzo de 2026
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Estos Términos de Uso regulan el acceso y uso de Chess Mobile (la
            &quot;App&quot;), operada por American Solutions Center
            (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la App&quot;). Al
            descargar, instalar o usar la App, aceptas estos términos. Si no
            estás de acuerdo, debes dejar de usarla.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Contacto:{" "}
            <a
              href="mailto:chess@americansolutionscenter.com"
              className="underline underline-offset-2"
            >
              chess@americansolutionscenter.com
            </a>
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
