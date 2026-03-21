import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Chess Mobile",
  description: "Terms of Use for Chess Mobile.",
};

const sections = [
  {
    id: 1,
    title: "Service description",
    content: (
      <>
        <p>
          Chess Mobile is a chess app that, based on the current version,
          allows users to, among other things:
        </p>
        <ul>
          <li>play as a guest or sign in with Apple or Google;</li>
          <li>play against bots using a chess engine server;</li>
          <li>play local games on the same device;</li>
          <li>solve chess puzzles obtained from external services;</li>
          <li>save progress, statistics, and customization preferences.</li>
        </ul>
        <p>
          Some features may require an internet connection and third-party
          services.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Eligibility and account use",
    content: (
      <>
        <p>
          You may use the App as a guest or sign in with an available external
          provider. If you use an account:
        </p>
        <ul>
          <li>
            you are responsible for the information and access associated with
            your Apple, Google, or other supported provider account;
          </li>
          <li>you must use the App lawfully and in accordance with these terms;</li>
          <li>
            you acknowledge that certain features may depend on external
            services outside our control.
          </li>
        </ul>
        <p>
          If you are under the age of majority, you must use the App with the
          authorization of a parent or legal guardian where required by
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Permitted use",
    content: (
      <>
        <p>
          You agree to use the App only for personal, educational, or
          recreational purposes and you agree not to:
        </p>
        <ul>
          <li>
            interfere with the normal operation of the App or its servers;
          </li>
          <li>
            attempt to gain unauthorized access to systems, accounts,
            credentials, or network traffic;
          </li>
          <li>
            use bots, scripts, scraping, or other automated means to abuse
            online features;
          </li>
          <li>
            introduce malicious code, viruses, or content intended to damage
            the service;
          </li>
          <li>
            infringe intellectual property, privacy, or other rights of third
            parties;
          </li>
          <li>
            use the App for unlawful, fraudulent, deceptive, or harmful
            purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Third-party services and content",
    content: (
      <>
        <p>
          The App may integrate with or depend on third-party services,
          content, or infrastructure, including authentication, chess puzzles,
          gameplay engine services, and app store or operating system
          mechanisms.
        </p>
        <p>In particular:</p>
        <ul>
          <li>sign-in may depend on Apple, Google, and Supabase;</li>
          <li>puzzles may come from Lichess;</li>
          <li>
            games against bots may depend on a server based on Stockfish;
          </li>
          <li>
            certain system features, such as content sharing or leaving
            reviews, depend on your device and the relevant platform.
          </li>
        </ul>
        <p>
          Your use of those services may also be subject to the applicable
          third party&apos;s own terms and policies.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Intellectual property",
    content: (
      <>
        <p>
          Unless otherwise indicated, the App, its design, interface, brand,
          original text, code, and proprietary elements are protected by
          intellectual property laws and belong to American Solutions Center or
          its licensors.
        </p>
        <p>
          Third-party names, trademarks, engines, authentication providers,
          content, and resources remain the property of their respective
          owners.
        </p>
        <p>
          You do not receive any ownership rights in the App beyond a limited,
          revocable, non-exclusive, and non-transferable license to use it in
          accordance with these terms.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Availability, changes, and updates",
    content: (
      <>
        <p>
          We may modify, update, limit, or suspend App features at any time,
          with or without notice, for technical, operational, legal, or
          security reasons.
        </p>
        <p>
          We do not guarantee that all features will always be available,
          especially those that depend on internet connectivity or third-party
          services.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Privacy",
    content: (
      <p>
        The use of personal and technical data in connection with the App is
        described in the Chess Mobile Privacy Policy. By using the App, you
        acknowledge that you have read it.
      </p>
    ),
  },
  {
    id: 8,
    title: "Warranty disclaimers",
    content: (
      <>
        <p>
          The App is provided &quot;as is&quot; and &quot;as available&quot; to
          the fullest extent permitted by applicable law.
        </p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>the App will be error-free or uninterrupted;</li>
          <li>online services will always be available;</li>
          <li>
            training results, puzzles, or engine suggestions will be accurate,
            complete, or suitable for a specific purpose;
          </li>
          <li>
            the service will satisfy competitive, official, or professional
            expectations.
          </li>
        </ul>
        <p>
          Chess Mobile is an entertainment and practice tool. It does not
          constitute official arbitration, official ranking, or professional
          advice of any kind.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Limitation of liability",
    content: (
      <p>
        To the fullest extent permitted by law, we will not be liable for
        indirect, incidental, special, consequential, or punitive damages, or
        for data loss, service interruptions, lost opportunities, or damages
        arising from the use of or inability to use the App. Nothing in the
        foregoing limits liability that cannot be excluded by law.
      </p>
    ),
  },
  {
    id: 10,
    title: "Suspension or termination",
    content: (
      <>
        <p>
          We may restrict or suspend access to online features if we detect
          abusive, unsafe, fraudulent, or non-compliant use, or if we need to
          do so for maintenance, legal compliance, or service protection.
        </p>
        <p>You may stop using the App at any time.</p>
      </>
    ),
  },
  {
    id: 11,
    title: "Changes to these terms",
    content: (
      <>
        <p>
          We may update these Terms of Use to reflect changes in the App, in
          how the service operates, or in legal requirements. The updated
          version will take effect as of the effective date posted in the
          header.
        </p>
        <p>
          Continued use of the App after an update means acceptance of the
          modified terms.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Contact",
    content: (
      <>
        <p>If you have questions about these Terms of Use, you may write to:</p>
        <p>
          <a href="mailto:chess@americansolutionscenter.com">
            chess@americansolutionscenter.com
          </a>
        </p>
      </>
    ),
  },
];

export default function ChessTerms() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/chess/terminos-y-condiciones"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Leer en español
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Chess Mobile
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Effective date: March 21, 2026
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            These Terms of Use govern access to and use of Chess Mobile (the
            &quot;App&quot;), operated by American Solutions Center
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            downloading, installing, or using the App, you agree to these
            terms. If you do not agree, you must stop using the App.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Contact:{" "}
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
            Required links
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
