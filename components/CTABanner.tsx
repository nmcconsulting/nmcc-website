import Link from 'next/link'

interface CTABannerProps {
  heading?: string
  body?: string
  ctaLabel?: string
}

export default function CTABanner({
  heading = "Ready to unlock your platform's commercial potential?",
  body = "The Platform Unlock Audit is a structured 60-minute diagnostic session. By the end, you'll know exactly where your commercialisation gap is and what to do first.",
  ctaLabel = "Book your free Platform Unlock Audit",
}: CTABannerProps) {
  return (
    <section className="bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-5 tracking-tight">
          {heading}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
          {body}
        </p>
        <p className="text-white/40 text-sm mb-10">No pitch. No proposal. Just clarity.</p>
        <Link href="/contact" className="btn-primary text-base px-8 py-4">
          {ctaLabel}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
