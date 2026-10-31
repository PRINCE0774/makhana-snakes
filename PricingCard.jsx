import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon.jsx'

export default function PricingCard({ planName, price, features, isPopular = false, checkoutLink }) {
  return (
    <article className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${isPopular ? 'z-10 border-primary shadow-2xl shadow-primary/10 lg:scale-[1.04]' : 'border-slate-200 shadow-sm hover:shadow-lg'}`}>
      {isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-primary/25">Most Popular</div>}
      <div className="mb-7">
        <p className="text-sm font-bold text-primary">{planName}</p>
        <p className="mt-5 flex items-end gap-1.5">
          <span className="font-display text-4xl font-extrabold tracking-tight text-secondary">₹{price}</span>
          <span className="mb-1 text-sm text-slate-400">/project</span>
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-500">A focused setup built around your next stage of growth.</p>
      </div>
      <div className="mb-7 h-px bg-slate-100" />
      <ul className="flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-5 text-slate-600">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none"><path d="m3.25 8.25 3.1 3.1 6.4-6.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a href={checkoutLink} target="_blank" rel="noreferrer" className={isPopular ? 'button-primary mt-9 w-full' : 'button-secondary mt-9 w-full'}>
        Get Started <ArrowIcon />
      </a>
    </article>
  )
}
