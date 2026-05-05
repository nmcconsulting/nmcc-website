import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'The Product Unlock Method — a structured three-phase engagement that takes cloud, MSP, and technology founders from platform to product.',
}

const phases = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Find the commercialisation gap.',
    duration: '2–3 weeks',
    description: [
      "Before anything else, we need to understand what you have, how it's positioned, and where the revenue leakage is. Most founders are too close to their platform to see it clearly — that's what this phase corrects.",
      "We conduct a structured platform audit across four dimensions: technical architecture, commercial model, market positioning, and operational delivery. The output is a clear picture of what's working, what's holding you back, and what a credible path forward looks like.",
    ],
    activities: [
      'Platform architecture review',
      'Current pricing and packaging analysis',
      'Competitive and market positioning audit',
      'Stakeholder and delivery model review',
      'Revenue model and margin analysis',
    ],
    deliverable: 'Platform Audit Report',
    deliverableDesc:
      'A structured document covering findings, root-cause analysis, and prioritised commercial opportunities. Your starting point for everything that follows.',
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Build the product architecture.',
    duration: '3–4 weeks',
    description: [
      "With a clear diagnosis in place, we design the commercial and product structure that closes the gap. This is where we define what your product actually is — not just what your platform can do, but how it's packaged, priced, and positioned to sell at scale.",
      "We work through service tier design, pricing model development, and the GTM motion that brings it to market. The goal is a product structure that your team can sell, deliver, and expand without reinventing the wheel for every client.",
    ],
    activities: [
      'Service tier and packaging design',
      'Value-based pricing model development',
      'GTM strategy and channel motion design',
      'Technical architecture alignment',
      'ICP definition and messaging framework',
    ],
    deliverable: 'Product Architecture Document',
    deliverableDesc:
      'A complete blueprint of your product structure, pricing model, and GTM approach. Built to be handed straight to your sales, marketing, and delivery teams.',
  },
  {
    step: '03',
    title: 'Deliver',
    tagline: 'Give you a roadmap you can execute.',
    duration: '1–2 weeks',
    description: [
      "The final phase turns the design work into an actionable, sequenced plan. Most consultants hand over a strategy deck and leave. We hand over a 90-day commercial roadmap with sequenced priorities, ownership, and the technical dependencies mapped out.",
      "You finish this engagement with everything you need to execute independently. No retainer required, no dependency on us to run the programme. If you want ongoing support, we can discuss that separately — but it's never the assumption.",
    ],
    activities: [
      '90-day execution roadmap with sequenced priorities',
      'Quick-win identification and implementation plan',
      'Team enablement and handover session',
      'Risk and dependency mapping',
      'Success metrics and review cadence',
    ],
    deliverable: '90-Day Commercial Roadmap',
    deliverableDesc:
      'A sequenced, actionable plan with clear owners, dependencies, and milestones. Built to be run by your team from day one.',
  },
]

const principles = [
  {
    title: 'You get the principal, not a team',
    body: 'Every engagement is led by Nathan directly. No project managers, no junior analysts, no handoffs. When you brief us, the person listening is the person doing the work.',
  },
  {
    title: 'Deliverables, not decks',
    body: "Everything we produce is built to be used, not presented. The audit report, the architecture document, and the roadmap are working documents — not slide shows.",
  },
  {
    title: 'Exit is built in',
    body: "The goal of every engagement is to make ourselves unnecessary. You should be able to execute everything we produce without us. That's what good consulting looks like.",
  },
  {
    title: 'No scope creep by design',
    body: "Each phase has a defined input, output, and timeframe. We don't pad engagements or manufacture follow-on work. If more is needed, we scope it separately and honestly.",
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-amber-light mb-4">Our methodology</p>
          <h1 className="font-display text-5xl font-bold mb-5 max-w-2xl">
            The Product Unlock Method
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            A structured, three-phase engagement that takes you from technical platform
            to commercially structured product business — with a concrete deliverable at every stage.
          </p>
        </div>
      </section>

      {/* Phases */}
      {phases.map((phase, i) => (
        <section
          key={phase.step}
          className={i % 2 === 0 ? 'bg-white py-20' : 'bg-cream-100 py-20'}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: content */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-5xl font-bold text-cream-200 leading-none select-none">
                    {phase.step}
                  </span>
                  <div>
                    <p className="section-label">{`Phase ${i + 1}`}</p>
                    <h2 className="font-display text-3xl font-bold text-forest-900">{phase.title}</h2>
                  </div>
                </div>

                <p className="text-amber font-medium text-sm mb-5 italic font-display">{phase.tagline}</p>

                {phase.description.map((para, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}

                <div className="mt-4 text-sm text-slate-400">
                  <span className="font-medium text-slate-500">Typical duration:</span> {phase.duration}
                </div>
              </div>

              {/* Right: activities + deliverable */}
              <div className="space-y-5">
                <div className="bg-white border border-cream-200 rounded-xl p-6 shadow-sm">
                  <p className="text-xs font-medium text-slate-400 mb-4">
                    What we do
                  </p>
                  <ul className="space-y-3">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-amber flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-slate-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber/5 border border-amber/20 rounded-xl p-6">
                  <p className="text-xs font-medium text-amber mb-2">
                    Deliverable
                  </p>
                  <p className="font-display font-bold text-forest-900 mb-2">{phase.deliverable}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{phase.deliverableDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Principles */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label text-amber-light mb-4">How we operate</p>
            <h2 className="font-display text-3xl font-bold">Our principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
