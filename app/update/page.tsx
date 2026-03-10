import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Update | MigraUSA",
  description:
    "Important update about case notifications in MigraUSA.",
};

export default function UpdatePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 sm:px-10">
        <header className="mb-10">
          <div className="mb-4 flex justify-end">
            <Link
              href="/actualizacion"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Leer en español
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Important update about case notifications
          </h1>
        </header>

        <section className="space-y-4">
          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-700 dark:text-zinc-300">
              Due to technical limitations, the app will stop sending automatic
              notifications about case updates.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              This change applies to all app users.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Our goal is to continue improving the experience and offer more
              useful tools for case tracking.
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              New Premium features
            </h2>
            <p className="mb-3 text-zinc-700 dark:text-zinc-300">
              To continue providing value to Premium users, we have added new
              features in the app:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>Case Analysis</strong> – Information and analysis on
                your case progress.
              </li>
              <li>
                <strong>Case Statistics</strong> – Data and trends based on
                similar cases.
              </li>
              <li>
                <strong>Tracker AI</strong> – An AI-powered assistant to help
                you understand your case status and possible changes.
              </li>
            </ul>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Premium Subscriptions
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              If you have an active Premium subscription, you will continue to
              have access to all Premium features available in the app.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              If you do not wish to continue with your subscription, you can
              cancel it at any time from your Apple ID subscription settings.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              If you feel this change affects your decision to use the service,
              you can also request a refund directly from Apple through their
              support system.
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Contact
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              If you have any questions about this change, you can contact us
              at:{" "}
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
              Important notice
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              MigraUSA is <strong>not an official application</strong> of the
              United States government. It is not affiliated with, endorsed by,
              or associated with USCIS, the Department of Homeland Security
              (DHS), or any other government agency.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              The information provided in the app is for informational purposes
              only and does not constitute legal or immigration advice.
            </p>
          </article>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Last updated: March 2026
          </p>
        </section>

        <footer className="mt-auto pt-12 text-sm text-zinc-600 dark:text-zinc-400">
          <p className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            Required links
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
