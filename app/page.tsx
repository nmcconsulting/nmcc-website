import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'NMC Consulting | Cloud & MSP Product Strategy',
  description:
    'NMC Consulting helps cloud, MSP, and technology founders turn their technical platform into a scalable, commercially structured product business.',
}

const phases = [
  {
    step: 'Phase 1',
    title: 'Discover',
    description:
      'We audit your platform, commercial model, and market position to find exactly where value is leaking and why growth has stalled.',
    output: 'Platform Audit Report',
  },
  {
    step: 'Phase 2',
    title: 'Design',
    description:
      'We build the product architecture, pricing model, and service tier structure that turns your platform into something clients buy — not just use.',
    output: 'Product Architecture Document',
  },
  {
    step: 'Phase 3',
    title: 'Deliver',
    description:
      'You leave with a sequenced roadmap, GTM motion, and technical architecture you can execute — no ongoing dependency on us to run it.',
    output: '90-Day Commercial Roadmap',
  },
]

const icpItems = [
  {
    title: 'MSP owners',
    description:
      'Trying to move beyond break/fix into scalable managed product tiers — without rebuilding from scratch.',
  },
  {
    title: 'ISV & SaaS founders',
    description:
      'With a working platform that needs proper packaging, pricing, and a GTM motion to drive repeatable revenue.',
  },
  {
    title: 'Cloud consultancies',
    description:
      'Turning delivery expertise into productised, repeatable service offerings with margin and scalability built in.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-900 text-white min-h-[88vh] flex items-center relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-light" />
              <span className="text-sm text-white/80 font-medium">Cloud &amp; MSP Product Strategy</span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight mb-6">
              You built the platform.{' '}
              <span className="text-accent-light">Now let&apos;s build the product.</span>
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-10 max-w-2xl">
              NMC Consulting helps cloud, MSP, and technology founders turn their technical platform
              into a scalable, commercially structured product business — with a clear pricing model,
              defined service tiers, and a roadmap they can actually execute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Book your Platform Unlock Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/how-we-work" className="btn-ghost-white text-base px-8 py-4">
                See how it works
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm text-white/35">
              No pitch. No proposal. A focused 60-minute diagnostic — then you decide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label mb-4">The gap we close</p>
            <h2 className="text-4xl font-semibold mb-6 text-navy-900">
              Your platform works.
              <br />
              Your business model doesn&apos;t — yet.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Most technical founders hit the same wall. You&apos;ve built something genuinely good — a managed
              platform, a service stack, or a cloud offering that delivers real value to clients. But growth
              is inconsistent. Pricing feels arbitrary. Every new client feels like starting from scratch.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The problem isn&apos;t your platform. It&apos;s that you&apos;ve never made the shift from{' '}
              <em>technical delivery</em> to <em>product thinking</em>. That&apos;s the gap that keeps founders
              stuck — and it&apos;s the gap we close.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Product Unlock Method ── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-4">How we work</p>
            <h2 className="text-4xl font-semibold text-navy-900 mb-4">
              The Product Unlock Method
            </h2>
            <p className="text-slate-500 text-lg max-w-xl">
              A structured, three-phase engagement designed to take you from platform to product —
              with a concrete deliverable at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {phases.map((phase, i) => (
              <div
                key={phase.step}
                className="bg-white border border-slate-200 rounded-xl p-7 relative overflow-hidden"
              >
                {/* Phase number background */}
                <span className="absolute top-5 right-6 text-7xl font-bold text-slate-50 select-none leading-none">
                  {i + 1}
                </span>

                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  {phase.step}
                </p>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{phase.description}</p>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-1">Deliverable</p>
                  <p className="text-sm font-medium text-navy-800">{phase.output}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-slate-500">
              Every engagement ends with three documents you own and can execute without us.
            </p>
            <Link href="/how-we-work" className="btn-outline">
              Full methodology detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-4">Who we work with</p>
            <h2 className="text-4xl font-semibold text-navy-900">
              Built for technical founders
              <br />
              who are done flying blind.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {icpItems.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6 py-1">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Nathan ── */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">About NMC</p>
              <h2 className="text-3xl font-semibold text-navy-900 mb-5">
                Operator knowledge. Strategic clarity.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I&apos;ve been where you are. I&apos;ve built and run an MSP, led product strategy inside
                cloud businesses, and helped technology founders make the shift from operator to
                product-led company.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                When you work with NMC, you work with me directly — no junior analysts, no handoffs.
                Just a practitioner who has done this, helping you do it too.
              </p>
              <Link href="/about" className="btn-outline">
                More about Nathan
              </Link>
            </div>

            {/* Credential cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Built & run', value: 'An MSP from the ground up' },
                { label: 'Led', value: 'Product strategy inside cloud businesses' },
                { label: 'Delivered', value: 'Product, pricing & GTM across the UK cloud market' },
                { label: 'Focused on', value: 'Founders under £2m ARR with complex platforms' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg px-5 py-4"
                >
                  <div className="w-1 h-full min-h-[2rem] bg-accent rounded-full flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-navy-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner />
    </>
  )
}
