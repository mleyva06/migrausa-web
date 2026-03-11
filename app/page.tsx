import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="American Solutions Center LLC"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-zinc-900 dark:text-white">
              American Solutions Center
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">
              Features
            </a>
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
              Contact
            </a>
            <Link
              href="/support"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <Image
          src="/icon.png"
          alt="USCIS & EOIR Case Tracker"
          width={80}
          height={80}
          className="mx-auto mb-8 rounded-2xl shadow-lg"
        />
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
          By American Solutions Center LLC
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          USCIS & EOIR Case Tracker
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Track your immigration cases in real time. Get instant status updates
          for USCIS and EOIR cases, analyze statistics, and get AI-powered
          assistance — all in one place.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://apps.apple.com/us/app/case-tracker-for-uscis-eoir/id6747954923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-black px-5 py-2.5 text-white transition hover:bg-zinc-800"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[9px] leading-none">Download on the</p>
              <p className="text-base font-semibold leading-tight">App Store</p>
            </div>
          </a>
          <a
            href="#features"
            className="flex items-center justify-center rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 sm:self-stretch"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-zinc-500">
            App Features
          </h2>
          <p className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Everything You Need to Track Your Case
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "USCIS Case Tracking",
                description:
                  "Monitor your USCIS case status in real time. Enter your receipt number and get instant updates on your petition, application, or request.",
              },
              {
                title: "EOIR Court Case Tracking",
                description:
                  "Track your immigration court cases through the Executive Office for Immigration Review (EOIR) system with up-to-date hearing information.",
              },
              {
                title: "Statistics & Analytics",
                description:
                  "Explore detailed statistics and processing time trends for different case types, so you can better understand where your case stands.",
              },
              {
                title: "Multiple Cases",
                description:
                  "Track multiple USCIS and EOIR cases simultaneously. Ideal for families or anyone with several pending applications.",
              },
              {
                title: "AI Assistant",
                description:
                  "Get instant answers to your immigration questions with our built-in AI assistant, designed to help you understand your case and the process.",
              },
              {
                title: "Secure & Private",
                description:
                  "Your case data is stored securely on your device. We prioritize your privacy and protect your sensitive immigration information.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
              About Us
            </h2>
            <p className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
              American Solutions Center LLC
            </p>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              American Solutions Center LLC is a technology company focused on
              building tools that simplify the U.S. immigration process. Our
              flagship app, USCIS & EOIR Case Tracker, empowers users to stay
              informed about the status of their immigration cases without the
              need for complex government website navigation.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              We believe that access to immigration case information should be
              simple, fast, and reliable. Our mission is to reduce the stress and
              uncertainty of the immigration journey by putting real-time case
              updates directly in your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Get In Touch
            </h2>
            <p className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">
              Contact Us
            </p>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                <span className="font-medium text-zinc-900 dark:text-white">
                  Email:{" "}
                </span>
                <a
                  href="mailto:ceo@americansolutionscenter.com"
                  className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white"
                >
                  ceo@americansolutionscenter.com
                </a>
              </p>
              <p>
                <span className="font-medium text-zinc-900 dark:text-white">
                  Support:{" "}
                </span>
                <Link
                  href="/support"
                  className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white"
                >
                  Visit our Support Page
                </Link>
              </p>
              <p className="pt-4 text-sm">
                American Solutions Center LLC
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="American Solutions Center LLC"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                American Solutions Center LLC
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/support"
                className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-white"
              >
                Support
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} American Solutions Center LLC. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
