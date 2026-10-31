import { Helmet } from 'react-helmet-async'
import PricingCard from '../components/PricingCard.jsx'
import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

const CHECKOUT_LINKS = {
  basic: 'https://rzp.io/l/REPLACE_ME',
  complete: 'https://rzp.io/l/REPLACE_ME',
  growth: 'https://rzp.io/l/REPLACE_ME',
}

const plans = [
  {
    planName: 'Basic Web Dev',
    price: '49,999',
    checkoutLink: CHECKOUT_LINKS.basic,
    features: ['Custom responsive React website', 'Up to 5 carefully crafted pages', 'Conversion-focused design', 'SEO and analytics foundations', 'Launch support and handover'],
  },
  {
    planName: 'Web + Meta Ads',
    price: '79,999',
    checkoutLink: CHECKOUT_LINKS.complete,
    isPopular: true,
    features: ['Everything in Basic Web Dev', 'Meta Ads account and campaign setup', 'Audience and offer strategy', '3 campaign creative directions', '30 days of campaign optimization'],
  },
  {
    planName: 'Growth Pro',
    price: '1,29,999',
    checkoutLink: CHECKOUT_LINKS.growth,
    features: ['Custom conversion-led React website', 'Complete Meta Ads launch and testing', 'Landing page and funnel strategy', 'Up to 6 campaign creative directions', '60 days of growth partnership'],
  },
]

export default function Pricing() {
  return (
    <>
      <Helmet><title>Pricing & Packages — WebPulse Media</title><meta name="description" content="Explore transparent WebPulse Media project packages for React web development and Meta Ads campaign growth. Find the right fit for your next stage." /></Helmet>
      <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/10 to-accent/20 blur-3xl" />
        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Simple, transparent pricing</span><h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-secondary sm:text-6xl">A smart next step, <span className="text-primary">priced clearly.</span></h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">Pick the partnership that matches your ambition. Every project starts with a conversation about the outcomes that matter to you.</p></div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 md:items-stretch md:gap-5 lg:grid-cols-3">{plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}</div>
          <p className="mt-10 text-center text-xs leading-5 text-slate-400">Project pricing shown in INR. Ad spend, applicable taxes and any third-party costs are billed separately.</p>
        </div>
      </section>
      <section className="section-shell pb-20"><div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-7 text-center sm:flex-row sm:text-left sm:p-9"><div><h2 className="font-display text-xl font-extrabold text-secondary">Have a different scope in mind?</h2><p className="mt-2 text-sm leading-6 text-slate-500">We can shape a package around your goals and timeline.</p></div><Link to="/contact" className="button-secondary shrink-0">Let’s talk <ArrowIcon /></Link></div></section>
    </>
  )
}
