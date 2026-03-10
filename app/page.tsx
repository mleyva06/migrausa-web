import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16 sm:px-10">
        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Legal Links
          </h1>
        </header>

        <section className="space-y-4">
          <Link
            href="/politica-de-privacidad"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/terminos-y-condiciones"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/privacy-policy"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/actualizacion"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Actualización importante
          </Link>
          <Link
            href="/update"
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Important Update
          </Link>
        </section>

        <footer className="mt-auto pt-12 text-sm text-zinc-600 dark:text-zinc-400">
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
    </div>
  );
}
