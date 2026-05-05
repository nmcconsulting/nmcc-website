'use client'

import { useState, FormEvent } from 'react'

const faqs = [
  {
    q: 'How long does the audit take?',
    a: '60 minutes. It\'s a structured diagnostic session, not a sales call. We work through a set of questions designed to surface your commercialisation gap — and by the end you\'ll have clarity on what\'s causing it, regardless of whether we work together.',
  },
  {
    q: 'Is there any cost for the audit?',
    a: 'The Platform Unlock Audit is free. The goal is to give you something useful regardless of outcome. If there\'s a fit for a full engagement, we\'ll discuss that separately after the session.',
  },
  {
    q: 'Who should attend?',
    a: 'The founder or CEO — whoever has end-to-end visibility of the business model, the platform, and the commercial strategy. The session works best one-to-one.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You\'ll receive a short written summary of the key findings from the session within 48 hours. If there\'s a strong fit for a full Product Unlock engagement, I\'ll outline what that would look like. If not, you still leave with clarity.',
  },
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      // Sign up free at https://formspree.io
      const res = await fetch('https://formspree.io/f/xwvyowen', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-accent-light mb-4">Get in touch</p>
          <h1 className="text-5xl font-semibold mb-5">
            Book your Platform Unlock Audit
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            A structured 60-minute diagnostic session. By the end, you&apos;ll know exactly where your
            commercialisation gap is and what to do about it. No pitch. No proposal. Just clarity.
          </p>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-2">Request your audit</h2>
              <p className="text-slate-500 text-sm mb-8">
                Fill in a few details and I&apos;ll be in touch within one business day to schedule.
              </p>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Request received</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll be in touch within one business day to confirm a time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
                        Full name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
                      Company name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Your company"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="type">
                      Business type <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="type"
                      name="business_type"
                      required
                      defaultValue=""
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white"
                    >
                      <option value="" disabled>Select one…</option>
                      <option value="MSP">MSP / Managed services</option>
                      <option value="ISV">ISV / SaaS</option>
                      <option value="Cloud consultancy">Cloud consultancy</option>
                      <option value="Technology business">Technology business (other)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="arr">
                      Approximate annual revenue
                    </label>
                    <select
                      id="arr"
                      name="annual_revenue"
                      defaultValue=""
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white"
                    >
                      <option value="" disabled>Select a range…</option>
                      <option value="Under £500k">Under £500k</option>
                      <option value="£500k – £1m">£500k – £1m</option>
                      <option value="£1m – £2m">£1m – £2m</option>
                      <option value="£2m+">£2m+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="challenge">
                      Briefly describe your current challenge <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      required
                      rows={4}
                      placeholder="What's the commercialisation problem you're trying to solve? What have you tried so far?"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or email hello@nmcconsulting.co.uk directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Request the Platform Unlock Audit'}
                    {status !== 'submitting' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Your details are used only to schedule your audit session.
                  </p>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-2">Common questions</h2>
              <p className="text-slate-500 text-sm mb-8">Everything you need to know before booking.</p>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-slate-100 pb-6">
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-stone-50 border border-slate-200 rounded-xl p-6">
                <p className="text-sm font-medium text-navy-900 mb-1">Prefer email?</p>
                <a
                  href="mailto:hello@nmcconsulting.co.uk"
                  className="text-accent text-sm hover:text-accent-dark transition-colors"
                >
                  hello@nmcconsulting.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
