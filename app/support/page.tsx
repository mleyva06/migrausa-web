import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | MigraUSA",
  description: "Support and contact information for MigraUSA Case Tracker.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 sm:px-10">
        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Support
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            If you need help, contact our support team and we will assist you as soon as possible.
          </p>
        </header>

        <section className="space-y-4">
          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Contact
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Email:{" "}
              <a
                href="mailto:help@americansolutionscenter.com"
                className="underline underline-offset-2"
              >
                help@americansolutionscenter.com
              </a>
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              What to include
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>App version</li>
              <li>Device model and operating system</li>
              <li>Short description of the issue</li>
            </ul>
          </article>
        </section>

        <footer className="mt-auto pt-12 text-sm text-zinc-600 dark:text-zinc-400">
          <p className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">
            Required links
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
    </div>
  );
}
