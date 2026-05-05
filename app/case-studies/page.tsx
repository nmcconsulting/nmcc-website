import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'How NMC Consulting has helped cloud, MSP, and technology founders commercialise their platforms and build scalable product businesses.',
}

const caseStudy = {
  tag: 'MSP · UK',
  title: 'From reactive delivery to a tiered product business',
  challenge:
    "A founder-led MSP with strong technical delivery and a loyal client base had plateaued at £1.4m ARR. Pricing was inconsistent — quotes were built from cost-up each time, margins varied wildly, and the team was constantly in reactive mode. The founder knew the platform was good but couldn't articulate why a prospect should pay more than a cheaper competitor.",
  approach: [
    'Platform Audit revealed that pricing had been set to win deals, not to reflect value — resulting in an average margin of 22% against an addressable 38%.',
    'Service tier design produced three clearly differentiated managed service packages with defined SLAs, scopes, and pricing anchors. Each tier had a named deliverable set and a defined upgrade path.',
    'GTM motion was restructured around business outcomes (uptime, compliance readiness, strategic advisory) rather than technical specifications.',
    'A 90-day commercial roadmap prioritised repricing existing clients on renewal rather than forcing an immediate renegotiation.',
  ],
  outcomes: [
    { metric: '£340k', label: 'incremental ARR identified through margin recovery' },
    { metric: '3', label: 'distinct product tiers with defined scopes and pricing' },
    { metric: '6 weeks', label: 'from audit to commercial roadmap in market' },
    { metric: '100%', label: 'of the engagement deliverables executed by the client team' },
  ],
  quote:
    "For the first time, I could explain to a prospect exactly what they were buying, why it was priced the way it was, and what they'd get as they grew. That conversation used to take an hour. Now it takes ten minutes.",
  attribution: 'Founder, UK managed services business',
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-amber-light mb-4">Proof of work</p>
          <h1 className="font-display text-5xl font-bold mb-5">Case studies</h1>
          <p className="text-xl text-white/60 max-w-xl leading-relaxed">
            Real outcomes for technology founders who made the shift from platform to product.
          </p>
        </div>
      </section>

      {/* Case study */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Tag + title */}
          <div className="max-w-3xl mb-10">
            <span className="inline-block bg-amber/10 text-amber text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              {caseStudy.tag}
            </span>
            <h2 className="font-display text-3xl font-bold text-forest-900">{caseStudy.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Challenge */}
              <div>
                <p className="section-label mb-3">The challenge</p>
                <p className="text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              {/* Approach */}
              <div>
                <p className="section-label mb-4">Our approach</p>
                <ul className="space-y-4">
                  {caseStudy.approach.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-amber/10 text-amber text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-amber pl-6 py-2">
                <p className="font-display italic text-slate-700 leading-relaxed mb-3 text-lg">&ldquo;{caseStudy.quote}&rdquo;</p>
                <p className="text-slate-400 text-sm font-medium">— {caseStudy.attribution}</p>
              </blockquote>
            </div>

            {/* Outcomes sidebar */}
            <div>
              <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 sticky top-24">
                <p className="text-xs font-medium text-slate-400 mb-5">
                  Outcomes
                </p>
                <div className="space-y-6">
                  {caseStudy.outcomes.map((o) => (
                    <div key={o.label}>
                      <p className="font-display text-2xl font-bold text-forest-900">{o.metric}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-dashed border-cream-200 rounded-xl p-10 text-center max-w-xl mx-auto">
            <p className="text-slate-400 text-sm mb-2">More case studies coming soon</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Each engagement is different. If you&apos;d like to discuss a situation similar to yours,
              the audit is the best place to start.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Recognise your business in this story?"
        body="The Platform Unlock Audit is the fastest way to get clarity on what's holding your commercial model back — and what to do about it."
      />
    </>
  )
}
