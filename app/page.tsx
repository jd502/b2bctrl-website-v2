import Image from 'next/image'
import Logo from '@/components/logo'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-handle/intro';
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@b2bctrl.com';

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl font-semibold text-neutral-900">{kpi}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="font-semibold text-neutral-900">{title}</div>
      <div className="mt-3 text-neutral-600 text-base leading-relaxed">{children}</div>
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
    <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl font-bold text-[#3399FF]">{metric}</div>
      <div className="mt-2 text-neutral-900 font-semibold text-lg">{label}</div>
      <div className="mt-2 text-neutral-600 text-sm">{note}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <Logo />
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 -translate-x-1/2">
              <a href="#what" className="hover:text-[#3399FF] transition-colors">What we do</a>
              <a href="#proof" className="hover:text-[#3399FF] transition-colors">Proof</a>
              <a href="#contact" className="hover:text-[#3399FF] transition-colors">Contact</a>
            </nav>
            <a href={CALENDLY_URL} className="hidden md:inline-flex items-center rounded-xl bg-[#3399FF] text-white px-4 py-1.5 hover:bg-[#2b85e6] transition-colors" target="_blank" rel="noreferrer">Book a call</a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <Image src="/images/orange_dataflow.jpeg" alt="" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-white/70 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#FF6B35] mb-4">
              B2B Lead Generation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Automate{" "}
              <span className="text-[#3399FF]">B2B</span>{" "}
              growth without burning domains or budgets.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              We install a lean outbound engine—clean data, smart personalization, and safe deliverability—that reliably books meetings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-xl bg-[#3399FF] px-6 py-3 text-white font-medium hover:bg-[#2b85e6] transition-colors shadow-sm">Book a 20‑min intro</a>
              <a href={`mailto:${EMAIL}`} className="inline-flex justify-center rounded-xl border-2 border-neutral-300 px-6 py-3 font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-colors">Email us</a>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Stat kpi={'3–5%+'} label="Positive reply baseline" />
              <Stat kpi={'<0.3%'} label="Bounce guard" />
              <Stat kpi={'2–4 wks'} label="Time‑to‑first wins" />
              <Stat kpi={'100%'} label="Transparent reporting" />
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative border-t border-neutral-100 bg-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">Business‑card simple. Everything you need to start conversations with the right buyers—nothing you don't.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected results</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProofCard metric="+142%" label="Reply lift" note="8-week test, IT services" />
            <ProofCard metric="41" label="Meetings in 60 days" note="Agency cohort" />
            <ProofCard metric="<0.25%" label="Bounce rate" note="Across 6 sending pools" />
          </div>
          <p className="mt-8 text-base text-neutral-500 text-center">References available on request.</p>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's talk</h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Two ways to start: book a short intro call, or send a sentence about your target and current motion. We'll respond with a quick POV and suggested next step.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-xl bg-[#3399FF] px-6 py-3 text-white font-medium hover:bg-[#2b85e6] transition-colors shadow-sm">Book a call</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex justify-center rounded-xl border-2 border-neutral-300 px-6 py-3 font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-colors">Email us</a>
              </div>
              <ul className="mt-8 text-base text-neutral-600 space-y-3 text-center list-none">
                <li>No commitments—quick fit check.</li>
                <li>We'll suggest the smallest path to first results.</li>
              </ul>
            </div>
            <div className="w-full rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <iframe title="Calendly" src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`} className="w-full h-[520px]" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Image
              src="/b2bctrl_logo_wht_blue.svg"
              alt="B2BCTRL Logo"
              width={100}
              height={30}
              className="rounded-lg border-2 border-neutral-300 shadow-md"
            />
            <span>© {new Date().getFullYear()} B2BCTRL</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#3399FF] transition-colors" href="/privacy">Privacy</a>
            <a className="hover:text-[#3399FF] transition-colors" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
