import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MigraUSA",
  description: "Privacy Policy for MigraUSA Case Tracker.",
};

const sections = [
  {
    id: 1,
    title: "Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how AMERICAN SOLUTIONS CENTER LLC
          (hereinafter &quot;MigraUSA,&quot; &quot;the App,&quot;
          &quot;we,&quot; or &quot;our&quot;) collects, uses, stores, and
          protects your information when you use the MigraUSA Case Tracker
          mobile application and all of its features.
        </p>
        <p>
          By using the App, you agree to the practices described in this Privacy
          Policy and in our Terms and Conditions. If you do not agree with this
          policy, please do not use the App.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Scope",
    content: (
      <>
        <p>
          This Privacy Policy applies to the use of the MigraUSA Case Tracker
          mobile application and all related services provided by AMERICAN
          SOLUTIONS CENTER LLC. The App is designed and primarily directed at
          users in the United States. If you access the App from another
          country, this policy also applies to you. This includes, but is not
          limited to, data processing through the following main features:
        </p>
        <ul>
          <li>
            Querying, syncing, and tracking immigration cases (USCIS and EOIR).
          </li>
          <li>Generating advanced analytics and statistical charts.</li>
          <li>
            Using AI-powered automated assistance (Tracker AI).
          </li>
          <li>
            Interactions through support channels and issue reporting features
            built into the App.
          </li>
        </ul>
        <p>
          This policy does not apply to third-party websites, applications, or
          government portals (such as the official USCIS or Department of
          Justice websites).
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Minors and COPPA Compliance",
    content: (
      <>
        <p>
          MigraUSA is not intended for individuals under 18 years of age. To
          use the App, you must be at least 18 years old or have reached the
          legal age of majority in your jurisdiction.
        </p>
        <p>
          In compliance with the Children&apos;s Online Privacy Protection Act
          (COPPA), MigraUSA does not knowingly collect information from children
          under 13. If we discover that we have inadvertently collected data
          from a child under 13 (or from a minor under the applicable law in
          your jurisdiction), we will take reasonable steps to promptly delete
          that information from our servers. If you are a parent or guardian and
          believe your child has provided us with information through the App,
          please contact us at{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Data We Collect",
    content: (
      <>
        <h3>4.1 Data you provide directly</h3>
        <ul>
          <li>USCIS receipt numbers you add for case tracking.</li>
          <li>
            EOIR / A-Numbers you add for court case tracking.
          </li>
          <li>Nationality (when you add EOIR cases).</li>
          <li>Custom name you assign to a case within the App.</li>
          <li>
            Email address and message you voluntarily provide when using the
            &quot;Report a Problem&quot; feature.
          </li>
        </ul>

        <h3>4.2 Data generated during use of the service</h3>
        <ul>
          <li>
            Case status, timeline, description, and save/update dates.
          </li>
          <li>
            Case profile data used for time calculations and advanced
            statistics (form type, category, processing center).
          </li>
          <li>
            Local premium subscription status (managed through RevenueCat).
          </li>
          <li>App interface preferences (such as visual theme).</li>
        </ul>

        <h3>4.3 Technical identifiers</h3>
        <ul>
          <li>
            Unique device identifier, used to link your cases to your device
            and enable App features.
          </li>
          <li>
            Operational technical metadata that infrastructure may
            automatically log (such as provider network logs and session
            counts).
          </li>
        </ul>

        <h3>4.4 Subscription data</h3>
        <p>
          To validate access to premium features, we use RevenueCat and process
          the following information:
        </p>
        <ul>
          <li>Active entitlements (access rights).</li>
          <li>Subscription plan or product identifier.</li>
          <li>Subscription status and expiration date.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "How We Collect Information",
    content: (
      <>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            Directly from what you enter in the App (cases and problem
            reports).
          </li>
          <li>
            From our infrastructure providers necessary to operate service
            features (subscriptions, database, and backend).
          </li>
          <li>
            Automatically through technical device identifiers when you install
            and use the App.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Purposes of Use",
    content: (
      <>
        <p>We use the information collected to:</p>
        <ul>
          <li>
            Save and sync your cases between your device and our backend.
          </li>
          <li>Send important alerts and notifications.</li>
          <li>
            Generate aggregated statistics and case trend analytics for premium
            users.
          </li>
          <li>Manage and validate access to premium features.</li>
          <li>
            Measure basic functional product usage to improve the service
            experience.
          </li>
          <li>Respond to support requests and problem reports.</li>
          <li>Detect and prevent fraudulent activity.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Legal Basis for Processing",
    content: (
      <>
        <p>
          We process your personal data based on the following grounds:
        </p>
        <ul>
          <li>
            <strong>Contract performance:</strong> Processing is necessary to
            provide the service you request by accepting our Terms and
            Conditions. This includes storing and syncing your cases, generating
            statistics, and operating Tracker AI.
          </li>
          <li>
            <strong>Legitimate interest:</strong> We have a legitimate interest
            in App security, operational continuity, fraud prevention, and
            service improvement. These interests do not override your
            fundamental rights and freedoms.
          </li>
          <li>
            <strong>Compliance with legal obligations:</strong> Certain
            processing activities are necessary to comply with applicable legal
            obligations, such as legally required record-keeping or responding
            to legitimate requests from competent authorities.
          </li>
          <li>
            <strong>Consent:</strong> Where required, we obtain your explicit
            consent before processing your data—for example, when submitting
            problem reports with your email address. You may withdraw your
            consent at any time without affecting the lawfulness of processing
            carried out prior to withdrawal.
          </li>
        </ul>
        <p>
          These legal bases are applicable under United States law and are also
          compatible with GDPR (EU/UK) requirements and other international
          data protection legislation that may apply based on your place of
          residence.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Opt-Out Signals and Global Privacy Control (GPC)",
    content: (
      <>
        <p>
          MigraUSA respects opt-out preference signals, including Global Privacy
          Control (GPC). If your browser or device sends a GPC signal, we will
          treat it as a valid request to opt out of the sale or sharing of
          personal information under applicable laws, including
          California&apos;s CCPA/CPRA, Colorado&apos;s CPA, Connecticut&apos;s
          CTDPA, Texas&apos;s TDPSA, and other state laws that recognize such
          signals.
        </p>
        <p>
          Since MigraUSA does not sell, share, or exchange personal information
          with third parties for targeted advertising, compliance with GPC
          signals is met by default.
        </p>
        <p>
          MigraUSA does not respond to &quot;Do Not Track&quot; (DNT) signals,
          as there is no uniform technological standard for their
          implementation. However, we do honor GPC in accordance with the laws
          that require it.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Automated Decision-Making",
    content: (
      <p>
        MigraUSA does not make decisions based solely on automated processing
        that produce legal effects concerning you or significantly affect you.
        Tracker AI generates informational responses based on data you
        voluntarily provide in the chat. These responses are purely
        informational and do not constitute automated decisions with legal
        effects.
      </p>
    ),
  },
  {
    id: 10,
    title: "Artificial Intelligence and Conversation Processing (Tracker AI)",
    content: (
      <>
        <p>
          Our App offers automated assistance through Tracker AI. Messages you
          send are processed through an Edge Function and transmitted in real
          time to our AI infrastructure provider (OpenAI) via their API to
          generate a response.
        </p>
        <ul>
          <li>
            <strong>Zero Storage by MigraUSA:</strong> MigraUSA does not store,
            save, or retain the content of your conversations in its databases
            or servers (Supabase). Messages are processed solely in real time to
            provide you with a response.
          </li>
          <li>
            <strong>Use and Retention of Data by OpenAI:</strong> In accordance
            with OpenAI&apos;s current API policy, this provider does not use
            data submitted through its API to train its public AI models.
            However, due to infrastructure requirements, OpenAI temporarily
            retains transmitted data for a maximum of 30 days strictly for abuse
            monitoring and security purposes, after which it is permanently
            deleted from their systems.
          </li>
          <li>
            <strong>Data you should not share:</strong> We strongly urge you NOT
            to enter sensitive personal information in the Tracker AI chat,
            including your full name, full Alien/A-Number, address, passwords,
            financial data, or complete receipt numbers. Since data is
            transmitted to a third-party infrastructure, you assume full
            responsibility for any data you voluntarily enter in the chat.
          </li>
          <li>
            <strong>Not legal advice:</strong> No response generated by Tracker
            AI should be interpreted as legal advice, professional counsel, or
            official guidance from any government agency.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 11,
    title: "Use of Service Providers (Third Parties)",
    content: (
      <>
        <p>
          MigraUSA does not &quot;share&quot; or &quot;sell&quot; your personal
          information. To operate and maintain the App&apos;s features, we use
          external infrastructure services. These third parties act strictly as
          our &quot;Service Providers,&quot; process information solely on our
          behalf, and are contractually prohibited from using, retaining, or
          disclosing your data for any purpose other than providing services to
          MigraUSA.
        </p>
        <p>Our authorized infrastructure providers are:</p>
        <ul>
          <li>
            <strong>Supabase:</strong> Cloud backend and database provider.
            Provides the technical infrastructure where your saved cases are
            securely stored to enable syncing on your device.
          </li>
          <li>
            <strong>RevenueCat:</strong> Infrastructure platform for managing
            and technically validating premium subscription status.
          </li>
          <li>
            <strong>Apple (App Store):</strong> Distribution platform and
            payment processing provider. When making in-app purchases, you
            interact directly with Apple&apos;s systems. We may exchange
            technical data about your subscription status with Apple solely to
            help them process purchases or evaluate refund requests under their
            own policies.
          </li>
          <li>
            <strong>OpenAI (Tracker AI Infrastructure):</strong> To power our
            automated assistance, messages you type in the chat are transmitted
            via API to OpenAI&apos;s infrastructure to generate a real-time
            response. MigraUSA does not store the content of these
            conversations. OpenAI temporarily retains this data on its servers
            for a maximum of 30 days strictly for technical security and abuse
            prevention purposes, after which it is deleted. OpenAI does not use
            this data to train its public models. (We remind you that entering
            sensitive personal information in this chat is prohibited.)
          </li>
        </ul>
        <h3>Zero Targeted Advertising</h3>
        <p>
          MigraUSA does not sell, rent, or make your personal information
          available to third parties for targeted advertising or cross-context
          behavioral advertising purposes. Our App does not display third-party
          ads.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Data Transfers",
    content: (
      <>
        <p>
          Our service providers process information in the United States. The
          App is designed and primarily directed at users in the United States,
          and use of the App means your data is processed and stored in U.S.
          territory, subject to applicable federal and state laws.
        </p>
        <p>
          If you access the App from outside the United States, by using our
          services you acknowledge and agree that your personal data will be
          transferred to, processed, and stored in the United States, where data
          protection laws may differ from those of your country of residence. In
          such cases, we apply appropriate contractual safeguards with our
          providers to protect your information. If you need information about
          applicable transfer mechanisms, you may write to us at{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 13,
    title: "Security",
    content: (
      <>
        <p>
          We apply reasonable technical and organizational measures to protect
          your information. These measures include:
        </p>
        <ul>
          <li>
            Encryption in transit via SSL/TLS for all information transmitted
            between the App and our servers.
          </li>
          <li>
            Encryption at rest provided by our database providers&apos;
            infrastructure for data stored on our servers.
          </li>
          <li>
            Access controls to limit access to personal data to authorized
            personnel only.
          </li>
          <li>Periodic security reviews of our infrastructure.</li>
        </ul>
        <p>
          However, no electronic transmission or storage system is 100% secure,
          and we cannot guarantee the absolute security of your data.
        </p>
      </>
    ),
  },
  {
    id: 14,
    title: "Security Breach Notification",
    content: (
      <p>
        In the event of a security breach affecting your personal data that
        poses a risk to your rights and freedoms, AMERICAN SOLUTIONS CENTER LLC
        will notify affected users and, where applicable, competent authorities,
        in accordance with the timelines and procedures required by applicable
        law in your jurisdiction. The notification will include, at a minimum,
        the nature of the breach, the categories of data affected, the
        potential consequences, and the measures taken or proposed to remedy the
        situation.
      </p>
    ),
  },
  {
    id: 15,
    title: "Data Retention and Deletion",
    content: (
      <>
        <p>
          At MigraUSA, we retain your information only for as long as strictly
          necessary to provide the App&apos;s features, comply with our legal
          obligations, and resolve potential disputes. Retention periods and
          criteria are as follows:
        </p>
        <ul>
          <li>
            <strong>Data on our servers (Backend):</strong> Cases you add, their
            status history, and your technical device identifier are stored in
            our database to enable service syncing. We retain this data as long
            as you are an active user. If your device does not interact with our
            servers for a continuous period of 12 months (inactivity), we will
            automatically and permanently delete your records, cases, and
            technical identifiers, in strict compliance with storage limitation
            regulations.
          </li>
          <li>
            <strong>Local data (on your device):</strong> Information and
            preferences saved locally remain on your phone until you manually
            delete cases or uninstall the App. Uninstalling the App immediately
            erases local data from your phone, but records on our servers will
            wait for the 12-month inactivity cycle mentioned above to be
            completed, unless you request early deletion.
          </li>
          <li>
            <strong>Technical support data:</strong> Emails and messages
            associated with problem reports submitted by users are retained for
            a maximum of 12 months after the resolution of the request, solely
            for internal record-keeping and auditing purposes, after which they
            are securely deleted.
          </li>
        </ul>
        <h3>Your right to complete early deletion</h3>
        <p>
          You have full control over your information at all times. You can
          manage the deletion of your data before the automatic timelines
          through the following methods:
        </p>
        <ul>
          <li>
            <strong>Individual deletion from the App:</strong> You can delete
            specific cases at any time directly from the App&apos;s interface.
            This action will erase the case from both your local device and our
            servers immediately.
          </li>
          <li>
            <strong>Complete and permanent deletion:</strong> If you wish for us
            to immediately delete all records, cases, and technical identifiers
            associated with your device from our database, send us a request
            at{" "}
            <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>.
            We will process your total deletion request securely and permanently
            within a maximum of 30 calendar days from receipt of your message.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 16,
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          MigraUSA respects the privacy rights granted by applicable laws based
          on your place of residence.
        </p>
        <p>
          <strong>Users in the United States:</strong> We recognize the rights
          granted by state privacy laws, including the CCPA/CPRA,
          Colorado&apos;s CPA, Virginia&apos;s VCDPA, Connecticut&apos;s CTDPA,
          Texas&apos;s TDPSA, and other applicable state laws. Depending on
          your state of residence, you may have the right to: know and access
          the data we have collected about you; request correction of inaccurate
          information; request deletion of your data; opt out of the sale or
          sharing of your personal information; and not be discriminated against
          for exercising your privacy rights. We will respond to verifiable
          requests within the timelines required by applicable law (generally 45
          days under CCPA/CPRA).
        </p>
        <p>
          <strong>Users outside the United States:</strong> If you reside
          outside the United States, you may have additional rights under the
          laws of your country of residence, such as the right to access,
          rectification, erasure, portability, objection to processing, and
          withdrawal of consent. AMERICAN SOLUTIONS CENTER LLC is committed to
          respecting these rights to the extent applicable under the laws in
          force in your jurisdiction. If you reside in the European Union or the
          United Kingdom, you also have the right to file a complaint with the
          data protection supervisory authority in your country.
        </p>
        <p>
          To exercise any of these rights, send your request to{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>{" "}
          indicating the right you wish to exercise. We will respond within the
          legally applicable timelines for your jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: 17,
    title: "Third-Party Links and Policies",
    content: (
      <>
        <p>
          When querying case information through the App, your device connects
          directly to official public portals, which have their own privacy
          policies:
        </p>
        <ul>
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
        <p>
          Additionally, the following service providers have their own
          policies:
        </p>
        <ul>
          <li>
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Privacy Policy
            </a>
          </li>
        </ul>
        <p>
          We recommend that you review these third parties&apos; privacy
          policies to understand how they handle your data.
        </p>
      </>
    ),
  },
  {
    id: 18,
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy at any time. If we make material
        changes (such as modifications to the data we collect, the purposes of
        use, or the third parties with whom we share data), we will notify you
        within the App before the changes take effect. Continued use of the App
        after the publication of changes constitutes your acceptance of the
        updated Privacy Policy.
      </p>
    ),
  },
  {
    id: 19,
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy, about the data we
          process, or wish to exercise your privacy rights, contact us at:
        </p>
        <p>
          AMERICAN SOLUTIONS CENTER LLC
          <br />
          Email:{" "}
          <a href="mailto:help@americansolutionscenter.com">help@americansolutionscenter.com</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex justify-end">
            <Link
              href="/politica-de-privacidad"
              className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              Leer en español
            </Link>
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            MigraUSA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Privacy Policy
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
