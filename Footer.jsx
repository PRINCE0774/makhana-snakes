import { Link } from 'react-router-dom'
import brandMark from '../assets/brand-mark.svg'
import ArrowIcon from './ArrowIcon.jsx'

const footerLinks = {
  Explore: [
    { label: 'About us', to: '/about' },
    { label: 'Our services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
  ],
  Services: [
    { label: 'React web development', to: '/services#web-development' },
    { label: 'Meta Ads campaigns', to: '/services#meta-ads' },
    { label: 'Get in touch', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:py-16">
        <div className="max-w-xs">
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label="WebPulse Media home">
            <img src={brandMark} alt="" className="h-10 w-10" />
            <span className="font-display text-lg font-extrabold tracking-tight text-secondary">webpulse<span className="text-primary">.</span></span>
          </Link>
          <p className="mt-5 text-sm leading-6 text-slate-500">Digital that moves your business forward. Thoughtful websites, smarter campaigns, measurable growth.</p>
          <a href="mailto:hello@webpulsemedia.in" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary">hello@webpulsemedia.in <ArrowIcon /></a>
        </div>
        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <h2 className="text-sm font-bold text-secondary">{title}</h2>
            <ul className="mt-5 space-y-3.5">
              {items.map((item) => <li key={item.label}><Link to={item.to} className="text-sm text-slate-500 transition hover:text-primary">{item.label}</Link></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-sm font-bold text-secondary">Let’s make it happen</h2>
          <p className="mt-5 text-sm leading-6 text-slate-500">Have a big idea or a growth goal? We’d love to hear about it.</p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-indigo-700">Start a conversation <ArrowIcon /></Link>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="section-shell flex flex-col justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} WebPulse Media. Made for the next big thing.</p>
          <p>Built for ambitious brands, wherever they’re growing.</p>
        </div>
      </div>
    </footer>
  )
}
