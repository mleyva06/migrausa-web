import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualización | MigraUSA",
  description:
    "Actualización importante sobre las notificaciones de casos en MigraUSA.",
};

export default function ActualizacionPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 sm:px-10">
        <header className="mb-10">
          <div className="mb-4 flex justify-end">
            <Link
              href="/update"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Read in English
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Actualización importante sobre las notificaciones de casos
          </h1>
        </header>

        <section className="space-y-4">
          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-700 dark:text-zinc-300">
              Debido a limitaciones técnicas, la aplicación dejará de enviar
              notificaciones automáticas sobre actualizaciones de casos.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Este cambio aplica para todos los usuarios de la aplicación.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Nuestro objetivo es seguir mejorando la experiencia y ofrecer
              herramientas más útiles para el seguimiento de casos.
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Nuevas funciones Premium
            </h2>
            <p className="mb-3 text-zinc-700 dark:text-zinc-300">
              Para seguir aportando valor a los usuarios Premium, hemos añadido
              nuevas funciones en la aplicación:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>Análisis del caso</strong> – Información y análisis
                sobre el progreso de tu caso (disponible para casos I-765,
                I-485 e I-130).
              </li>
              <li>
                <strong>Estadísticas del caso</strong> – Datos y tendencias
                basadas en casos similares (disponible para casos I-765, I-485
                e I-130).
              </li>
              <li>
                <strong>Tracker AI</strong> – Un asistente con inteligencia
                artificial para ayudarte a entender el estado de tu caso y
                posibles cambios.
              </li>
            </ul>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Suscripciones Premium
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Si tienes una suscripción Premium activa, seguirás teniendo acceso
              a todas las funciones Premium disponibles en la aplicación.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Si no deseas continuar con tu suscripción, puedes cancelarla en
              cualquier momento desde la configuración de suscripciones de tu
              Apple ID.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Si consideras que este cambio afecta tu decisión de usar el
              servicio, también puedes solicitar un reembolso directamente a
              Apple a través de su sistema de soporte.
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Contacto
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Si tienes alguna pregunta sobre este cambio, puedes contactarnos
              en:{" "}
              <a
                href="mailto:ceo@americansolutionscenter.com"
                className="underline underline-offset-2"
              >
                ceo@americansolutionscenter.com
              </a>
            </p>
          </article>

          <article className="rounded-lg border border-amber-300 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-950">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Aviso importante
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              MigraUSA <strong>no es una aplicación oficial</strong> del
              gobierno de los Estados Unidos. No está afiliada, respaldada ni
              asociada con USCIS, el Departamento de Seguridad Nacional (DHS) ni
              ninguna otra agencia gubernamental.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              La información proporcionada en la aplicación es únicamente con
              fines informativos y no constituye asesoría legal ni
              migratoria.
            </p>
          </article>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Última actualización: marzo de 2026
          </p>
        </section>

        <footer className="mt-auto pt-12 text-sm text-zinc-600 dark:text-zinc-400">
          <p className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            Enlaces requeridos
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/politica-de-privacidad"
              className="underline underline-offset-2"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="underline underline-offset-2"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="underline underline-offset-2"
            >
              Terms and Conditions
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
