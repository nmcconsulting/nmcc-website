import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Nathan Carroll',
  description:
    'Nathan Carroll is a cloud and MSP product strategy consultant who has built and run an MSP, led product inside cloud businesses, and helped technology founders commercialise their platforms.',
}

const credentials = [
  {
    category: 'Operator experience',
    items: [
      'Built and ran an MSP from inception through growth',
      'Managed delivery, pricing, and commercialisation in the field',
      'Navigated the MSP margin squeeze firsthand',
      'Understands both the technical and commercial realities of the sector',
    ],
  },
  {
    category: 'Product & strategy',
    items: [
      'Led product strategy inside cloud and technology businesses',
      'Defined pricing models, service tiers, and packaging for growth-stage companies',
      'Built GTM motions from scratch for platform-based offerings',
      'Worked across MSP, ISV, and cloud vendor contexts',
    ],
  },
  {
    category: 'How I engage',
    items: [
      'Founder-led: every client works with Nathan directly',
      'No junior staff, no account managers, no handoffs',
      'Focused exclusively on founders under £2m ARR in the cloud/MSP/tech space',
      'Fixed-phase methodology: defined scope, defined deliverables, defined exit',
    ],
  },
]

const values = [
  {
    title: 'Operator first',
    body: 'I\'ve sat in your seat. I\'ve made payroll, managed churn, tried to price a service fairly, and felt the frustration of having something good that isn\'t growing the way it should. That context changes how advice lands.',
  },
  {
    title: 'Clarity over comfort',
    body: 'The most useful thing I can do is tell you the truth about where your commercial model is broken — not validate the story you\'ve been telling yourself. I do this with care, but I do it.',
  },
  {
    title: 'Execution over strategy',
    body: 'Strategy that can\'t be executed is just expensive wallpaper. Everything I produce is built for your team to run without me. If I can\'t make it actionable, it\'s not finished.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-accent-light mb-4">About</p>
              <h1 className="text-5xl font-semibold mb-5">
                Nathan Carroll
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Founder, NMC Consulting. Cloud and MSP product strategy specialist.
                I help technical founders turn their platforms into product businesses.
              </p>
            </div>

            {/* Avatar placeholder — replace with a real photo */}
            <div className="flex justify-start lg:justify-end">
              <div className="w-48 h-48 rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white/20 mb-1">NC</div>
                  <p className="text-white/30 text-xs">Add your photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="section-label mb-4">My background</p>
              <h2 className="text-3xl font-semibold text-navy-900 mb-6">
                I built a business like yours. That&apos;s why this works.
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  I started my career in the trenches of managed services — building, running, and growing an MSP
                  from the ground up. I know what it feels like to price a service contract and wonder if you&apos;re
                  leaving money on the table. I know what it feels like to lose a deal on price to a competitor who
                  is almost certainly less capable. I know what it feels like to deliver brilliant technical work that
                  never quite translates into the commercial result it deserves.
                </p>
                <p>
                  From there, I moved into product strategy roles inside cloud and technology businesses — helping
                  companies at different stages of maturity figure out how to structure, package, and sell what
                  they&apos;d built. The pattern I kept encountering was the same one I&apos;d lived: technically strong
                  founders with good platforms who had never made the shift to product thinking.
                </p>
                <p>
                  NMC Consulting exists to close that gap. I work exclusively with founders in the cloud, MSP, and
                  technology space who have built something real and want to build a proper commercial model around it.
                  Not a rebrand. Not a strategy deck. A product architecture, a pricing model, and a roadmap they can
                  actually execute.
                </p>
                <p>
                  When you work with NMC, you work with me. Not a team I manage, not a delivery partner. Me. That&apos;s
                  deliberate — the value here comes from operator-level judgment applied directly to your situation,
                  not from a methodology administered by a junior analyst.
                </p>
              </div>
            </div>

            {/* Sidebar quick facts */}
            <div>
              <div className="bg-stone-50 border border-slate-200 rounded-xl p-6 sticky top-24">
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
                  Quick facts
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: 'United Kingdom' },
                    { label: 'Focus', value: 'Cloud, MSP & technology founders' },
                    { label: 'Typical client', value: 'Under £2m ARR, founder-led' },
                    { label: 'Engagement model', value: 'Fixed-phase, defined deliverables' },
                    { label: 'Team size', value: 'Principal only — no juniors' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-0.5">
                      <p className="text-xs text-slate-400 font-medium">{fact.label}</p>
                      <p className="text-sm text-navy-900 font-medium">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="section-label mb-4">Track record</p>
            <h2 className="text-3xl font-semibold text-navy-900">Experience that matters here</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((group) => (
              <div key={group.category} className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  {group.category}
                </p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="section-label mb-4">How I work</p>
            <h2 className="text-3xl font-semibold text-navy-900">What you can expect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-accent pl-6 py-1">
                <h3 className="font-semibold text-navy-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to work together?"
        body="The best place to start is the Platform Unlock Audit — a structured 60-minute diagnostic that gives you clarity on your commercialisation gap and what to do about it."
      />
    </>
  )
}
