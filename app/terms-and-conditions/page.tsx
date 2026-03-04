import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | MigraUSA",
  description:
    "Terms and Conditions for MigraUSA Case Tracker. Last updated: March 4, 2026.",
};

const sections = [
  {
    id: 1,
    title: "Acceptance of Terms, Age Restrictions, and COPPA Compliance",
    content: (
      <>
        <p>
          By downloading, installing, or using the MigraUSA Case Tracker mobile
          application (hereinafter &quot;the App&quot;), operated by AMERICAN
          SOLUTIONS CENTER LLC (hereinafter &quot;MigraUSA,&quot;
          &quot;we,&quot; or &quot;our&quot;), you agree to be legally bound by
          these Terms and Conditions. If you do not agree with any of these
          terms, you must not use the App.
        </p>
        <p>
          To use the App, you represent and warrant that you are at least 18
          years old or have reached the legal age of majority in your
          jurisdiction. MigraUSA is not intended for individuals under 18 years
          of age. In compliance with the Children&apos;s Online Privacy
          Protection Act (COPPA), we do not knowingly collect information from
          children under 13. If we discover that we have inadvertently collected
          data from a minor, we will take reasonable steps to promptly delete
          that information. If you are a parent or guardian and believe your
          child has provided us with information, please contact us at{" "}
          <a href="mailto:help@americansolutionscenter.com">
            help@americansolutionscenter.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Privacy Policy and Data Collection",
    content: (
      <>
        <p>
          To use the App, you are not required to create a user account.
          MigraUSA does not require you to provide personally identifiable
          information such as your name or phone number to function, and will
          only collect your email address if you voluntarily provide it when
          using our technical support feature.
        </p>
        <p>
          For the App to function, we collect and store technical identifiers
          (such as push tokens). The receipt numbers and status data you add are
          processed on our servers to enable syncing, feed global statistics,
          and improve the service. MigraUSA does not query data directly from
          its servers; queries to public portals are made from your device. The
          processing of your information is governed by our Privacy Policy. By
          accepting these Terms, you confirm that you have read and agree to
          that Policy.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Nature of the Service and Official Disclaimer",
    content: (
      <>
        <p>
          MigraUSA is NOT a law firm, does NOT provide legal advice, and is NOT
          affiliated with, endorsed by, or associated in any way with the
          United States Citizenship and Immigration Services (USCIS), the
          Executive Office for Immigration Review (EOIR), the Department of
          Justice (DOJ), or any other U.S. government agency.
        </p>
        <p>
          The App is an independent productivity tool that retrieves public
          information from official portals to facilitate case tracking. We are
          not responsible for decisions you make based on the information
          displayed. You should always verify your official information directly
          on government websites or consult a certified immigration attorney.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'App Features and Limitations ("As Is")',
    content: (
      <>
        <p>
          MigraUSA provides its features &quot;AS IS&quot; and &quot;AS
          AVAILABLE,&quot; without warranties of any kind, express or implied.
          To the maximum extent permitted by applicable law, MigraUSA expressly
          disclaims all implied warranties.
        </p>
        <ul>
          <li>
            <strong>Free Features:</strong> Basic tracking of cases manually
            queried from the application.
          </li>
          <li>
            <strong>Premium Features:</strong> Available exclusively with an
            active subscription (e.g., Advanced Analytics, Tracker AI, Dark
            Mode). The content and availability of these features may change at
            MigraUSA&apos;s discretion.
          </li>
          <li>
            <strong>Data Accuracy:</strong> The information displayed depends on
            public sources that may experience delays or outages. We do not
            guarantee uninterrupted or error-free service.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Use of Artificial Intelligence (Tracker AI)",
    content: (
      <>
        <p>Tracker AI uses the OpenAI API to generate informational responses.</p>
        <ul>
          <li>
            <strong>Accuracy not guaranteed:</strong> AI may make errors or
            provide outdated information.
          </li>
          <li>
            <strong>Not legal advice:</strong> No response should be interpreted
            as legal advice or official guidance.
          </li>
          <li>
            <strong>Privacy:</strong> Entering sensitive personal information in
            the chat is strictly prohibited. MigraUSA does not store the content
            of these conversations. OpenAI processes this data through its API
            and retains it for a maximum of 30 days solely for security
            purposes, after which it is deleted. OpenAI does not train its
            public models with this data. The user assumes responsibility for
            the data they share in the chat.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Subscriptions and Payments",
    content: (
      <>
        <p>
          By selecting a premium subscription, you agree to pay the fees
          indicated through the corresponding app store (Apple App Store or
          Google Play Store).
        </p>
        <ul>
          <li>
            <strong>Automatic Renewal:</strong> Your subscription will
            automatically renew unless you cancel it at least 24 hours before
            the end of the current period.
          </li>
          <li>
            <strong>Processing and Refunds:</strong> All payments are processed
            directly by Apple or Google. MigraUSA does not collect your
            financial information and cannot issue direct refunds; these are
            subject to the policies of the corresponding store.
          </li>
          <li>
            <strong>Changes to Premium Features:</strong> MigraUSA reserves the
            right to modify or discontinue premium features. For substantial
            changes, we will notify subscribers 30 days in advance, providing
            the opportunity to cancel before renewal.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Data Analytics and Statistics",
    content: (
      <p>
        The Advanced Analytics feature processes case data (status changes,
        timeframes) in a strictly aggregated and anonymized manner. By using the
        App, you agree that MigraUSA may process this information to generate
        global estimates, which are purely informational and do not guarantee
        results in your specific case.
      </p>
    ),
  },
  {
    id: 8,
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, AMERICAN SOLUTIONS CENTER LLC
        shall not be liable for any direct, indirect, incidental, or
        consequential damages arising from: delays in USCIS/EOIR servers, missed
        legal deadlines, or reliance on Tracker AI or our statistics. The total
        cumulative liability of AMERICAN SOLUTIONS CENTER LLC to you shall not
        exceed the amount you have paid for the App during the twelve (12)
        months preceding the event, or ten dollars (USD $10.00), whichever is
        greater.
      </p>
    ),
  },
  {
    id: 9,
    title: "Indemnification",
    content: (
      <p>
        You agree to defend and indemnify AMERICAN SOLUTIONS CENTER LLC, its
        officers, employees, and agents, from any claims, damages, costs, or
        expenses (including attorney&apos;s fees) arising from your use of the
        App, your violation of these Terms, or your violation of third-party
        rights.
      </p>
    ),
  },
  {
    id: 10,
    title: "Service Availability and Modifications",
    content: (
      <p>
        We reserve the right to modify, suspend, or discontinue any feature of
        the App. Interruptions due to maintenance or failures in third-party
        services (such as USCIS) do not require prior notice.
      </p>
    ),
  },
  {
    id: 11,
    title: "Access Restriction",
    content: (
      <p>
        AMERICAN SOLUTIONS CENTER LLC reserves the right to block or suspend
        access to the App from your device without prior notice if we determine
        that you have violated these Terms (e.g., use of bots, scraping, reverse
        engineering, or API abuse).
      </p>
    ),
  },
  {
    id: 12,
    title: "Intellectual Property",
    content: (
      <p>
        All code, design, and functionality of the App are the exclusive
        property of AMERICAN SOLUTIONS CENTER LLC and are protected by
        intellectual property laws.
      </p>
    ),
  },
  {
    id: 13,
    title: "Privacy and Data Deletion",
    content: (
      <p>
        Your privacy rights, including those granted by state laws (such as
        California&apos;s CCPA), are detailed in our Privacy Policy. You can
        delete your local data by uninstalling the App. To request the permanent
        deletion of your data from our servers, contact us at{" "}
        <a href="mailto:help@americansolutionscenter.com">
          help@americansolutionscenter.com
        </a>
        .
      </p>
    ),
  },
  {
    id: 14,
    title: "Governing Law and Dispute Resolution (Arbitration)",
    content: (
      <>
        <p>These Terms are governed by the laws of the State of Florida, USA.</p>
        <p>
          <strong>Binding Arbitration and Class Action Waiver:</strong> Any
          dispute shall be resolved through binding arbitration administered by
          the AAA in Florida. You waive your right to file a lawsuit before a
          judge/jury or participate in class actions.
        </p>
        <p>
          <strong>Opt-Out:</strong> You may opt out of arbitration by sending an
          email to{" "}
          <a href="mailto:help@americansolutionscenter.com">
            help@americansolutionscenter.com
          </a>{" "}
          within 30 days of your acceptance of these Terms.
        </p>
      </>
    ),
  },
  {
    id: 15,
    title: "Force Majeure",
    content: (
      <p>
        AMERICAN SOLUTIONS CENTER LLC shall not be liable for failures caused by
        events beyond its control, such as government server outages, changes in
        third-party APIs (OpenAI), natural disasters, or cyberattacks.
      </p>
    ),
  },
  {
    id: 16,
    title: "No Waiver and Severability",
    content: (
      <p>
        The failure to enforce any right under these Terms does not constitute a
        waiver thereof. If any provision is declared invalid, the remainder
        shall continue in full force and effect.
      </p>
    ),
  },
  {
    id: 17,
    title: "Translation and Interpretation",
    content: (
      <p>
        These Terms may be translated into Spanish for your convenience.
        However, you agree that, in the event of a legal dispute, the original
        English text shall be the sole legally binding version.
      </p>
    ),
  },
  {
    id: 18,
    title: "Third-Party Service Terms",
    content: (
      <>
        <p>
          By using the App, you are subject to the policies of the third
          parties we use:
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
    title: "Modifications and Contact",
    content: (
      <>
        <p>
          We may update these Terms at any time. We will notify you of
          significant changes through the App.
        </p>
        <p>For questions about these Terms, contact us at:</p>
        <p>
          AMERICAN SOLUTIONS CENTER LLC
          <br />
          Email:{" "}
          <a href="mailto:help@americansolutionscenter.com">
            help@americansolutionscenter.com
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/terminos-y-condiciones"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Leer en español
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Last updated: March 4, 2026
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
