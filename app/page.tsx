import Image from 'next/image'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-handle/intro';
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@b2bctrl.com';

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="text-2xl font-semibold">{kpi}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
      <div className="font-medium">{title}</div>
      <div className="mt-2 text-neutral-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function ProofCard({
  metric,
  label,
  note,
}: {
  metric: string;
  label: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
      <div className="text-4xl font-semibold">{metric}</div>
      <div className="mt-1 text-neutral-800 font-medium text-lg">{label}</div>
      <div className="mt-1 text-neutral-600 text-base">{note}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-neutral-900" />
            <span className="font-semibold tracking-tight">B2BCTRL</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#what" className="hover:opacity-70">What we do</a>
            <a href="#proof" className="hover:opacity-70">Proof</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a href={CALENDLY_URL} className="inline-flex items-center rounded-full border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition" target="_blank" rel="noreferrer">Book a call</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <Image src="/images/orange_dataflow.jpeg" alt="" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Automate B2B growth without burning domains or budgets.
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              We install a lean outbound engine—clean data, smart personalization, and safe deliverability—that reliably books meetings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90">Book a 20‑min intro</a>
              <a href={`mailto:${EMAIL}`} className="inline-flex justify-center rounded-xl border border-neutral-900 px-5 py-3 hover:bg-neutral-50">Email us</a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-neutral-600">
              <Stat kpi={'3–5%+'} label="Positive reply baseline" />
              <Stat kpi={'<0.3%'} label="Bounce guard" />
              <Stat kpi={'2–4 wks'} label="Time‑to‑first wins" />
              <Stat kpi={'100%'} label="Transparent reporting" />
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative border-t border-neutral-100 bg-white">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">Business‑card simple. Everything you need to start conversations with the right buyers—nothing you don't.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Clean prospect data">De‑duped, validated contacts with light firmographics and buying signals.</Card>
            <Card title="Personalized outreach">Short, plain‑text sequences that sound human and reference real context.</Card>
            <Card title="Safe deliverability">Subdomain strategy, warm‑up, throttling, DMARC/DKIM/SPF, list‑hygiene.</Card>
            <Card title="Experiment cadence">Weekly tests on angles, offers, and prompts; keep what works, drop the rest.</Card>
            <Card title="Instrumented funnel">Track reply rate → booked → show‑ups → pipeline so ROI is obvious.</Card>
            <Card title="Hands‑off ops">We run the system and send you booked meetings or qualified replies.</Card>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Selected results</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProofCard metric="+142%" label="Reply lift" note="8-week test, IT services" />
            <ProofCard metric="41" label="Meetings in 60 days" note="Agency cohort" />
            <ProofCard metric="<0.25%" label="Bounce rate" note="Across 6 sending pools" />
          </div>
          <p className="mt-6 text-base text-neutral-600">References available on request.</p>
        </div>
      </section>

      <section className="relative h-[380px] overflow-hidden border-t border-neutral-100">
        <Image src="/images/tree.jpeg" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </section>

      <section id="contact" className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Let’s talk</h2>
              <p className="mt-3 text-neutral-600 max-w-prose">
                Two ways to start: book a short intro call, or send a sentence about your target and current motion. We’ll respond with a quick POV and suggested next step.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90">Book a call</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex justify-center rounded-xl border border-neutral-900 px-5 py-3 hover:bg-neutral-50">Email us</a>
              </div>
              <ul className="mt-6 text-sm text-neutral-600 space-y-2 list-disc list-inside">
                <li>No commitments—quick fit check.</li>
                <li>We’ll suggest the smallest path to first results.</li>
              </ul>
            </div>
            <div className="w-full rounded-2xl border border-neutral-200 overflow-hidden">
              <iframe title="Calendly" src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`} className="w-full h-[520px]" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-neutral-900" />
            <span>© {new Date().getFullYear()} B2BCTRL</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-70" href="/privacy">Privacy</a>
            <a className="hover:opacity-70" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
