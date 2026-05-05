import Link from 'next/link'

const footerLinks = [
  { href: '/how-we-work', label: 'How we work' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-white text-xl tracking-tight">
                NMC<span className="text-amber">.</span>
              </span>
              <span className="text-white/40 text-sm">Consulting</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Helping cloud, MSP, and technology founders turn their technical platform into a scalable product business.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium text-white/30 mb-4">Pages</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium text-white/30 mb-4">Get in touch</p>
            <a
              href="mailto:hello@nmcconsulting.co.uk"
              className="text-sm text-white/60 hover:text-amber-light transition-colors block mb-3"
            >
              hello@nmcconsulting.co.uk
            </a>
            <Link href="/contact" className="btn-ghost-white text-xs mt-2">
              Book the Platform Unlock Audit
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} NMC Consulting Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
