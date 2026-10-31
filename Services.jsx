import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

const webServices = [
  ['Conversion-first design', 'Clear journeys, considered layouts and a visual system that makes your brand unmistakable.'],
  ['React development', 'Fast, responsive websites built for a smooth experience on every screen and room to grow.'],
  ['Launch-ready essentials', 'SEO foundations, analytics setup and the details that make your launch feel complete.'],
]

const adsServices = [
  ['Campaign strategy', 'Audience, offer and funnel planning based on what your business needs to move.'],
  ['Creative that connects', 'Ad concepts and copy designed to earn attention and make the next step feel natural.'],
  ['Ongoing optimization', 'Thoughtful testing and performance reviews to improve what is working and learn from what is not.'],
]

function ServiceList({ items }) {
  return <div className="mt-8 space-y-3">{items.map(([title, text], index) => <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/5 font-display text-xs font-extrabold text-primary">0{index + 1}</span><div><h3 className="font-display text-base font-extrabold text-secondary">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div></article>)}</div>
}

export default function Services() {
  return (
    <>
      <Helmet><title>Services — Web Development & Meta Ads | WebPulse Media</title><meta name="description" content="Build a faster, better-converting React website and grow with strategic Meta Ads. Explore WebPulse Media's digital growth services." /></Helmet>
      <section className="bg-white pb-16 pt-16 sm:pt-24">
        <div className="section-shell text-center">
          <span className="eyebrow">What we do</span>
          <h1 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-secondary sm:text-6xl">The right experience. <span className="text-primary">In front of the right people.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">Two connected capabilities, one clear goal: help good businesses turn attention into action.</p>
        </div>
      </section>
      <section className="section-shell pb-20 lg:pb-28">
        <article id="web-development" className="scroll-mt-24 grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
          <div><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-primary"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h4M8 16h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></span><p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-primary">01 / Web development</p><h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary">A website that works as hard as you do.</h2><p className="mt-4 text-sm leading-7 text-slate-500">Build a polished, high-performing digital home designed around the people you want to reach—and the actions you want them to take.</p><Link to="/pricing" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">See web packages <ArrowIcon /></Link></div>
          <ServiceList items={webServices} />
        </article>
        <article id="meta-ads" className="mt-6 scroll-mt-24 grid gap-10 rounded-3xl bg-secondary p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
          <div><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17.5V6.5m0 0 7.1 11 4.1-8 4.8 8m-16-11h3.2l3.9 6 3.5-6h3l4.4 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span><p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">02 / Meta Ads</p><h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight">Turn attention into real intent.</h2><p className="mt-4 text-sm leading-7 text-slate-300">Reach the right people across Facebook and Instagram with campaigns made to learn, improve and drive meaningful action.</p><Link to="/pricing" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-300 hover:text-white">Explore growth packages <ArrowIcon /></Link></div>
          <div className="mt-0 space-y-3">{adsServices.map(([title, text], index) => <article key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 font-display text-xs font-extrabold text-sky-300">0{index + 1}</span><div><h3 className="font-display text-base font-extrabold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div></article>)}</div>
        </article>
      </section>
      <section className="bg-white py-16"><div className="section-shell flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><h2 className="font-display text-2xl font-extrabold text-secondary">Not sure what your business needs?</h2><p className="mt-2 text-sm text-slate-500">Let’s find the right first step together.</p></div><Link to="/contact" className="button-primary w-fit">Talk to our team <ArrowIcon /></Link></div></section>
    </>
  )
}
