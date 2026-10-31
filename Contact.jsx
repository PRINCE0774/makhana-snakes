import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { createContactConfirmation } from '../utils/contact.js'
import ArrowIcon from '../components/ArrowIcon.jsx'

const inputClass = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10'

export default function Contact() {
  const [confirmation, setConfirmation] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setConfirmation(createContactConfirmation(String(formData.get('name') ?? 'there')))
    event.currentTarget.reset()
  }

  return (
    <>
      <Helmet><title>Contact WebPulse Media — Let’s build what’s next</title><meta name="description" content="Tell WebPulse Media what you're building. Get in touch about React website development, Meta Ads and your next stage of growth." /></Helmet>
      <section className="bg-white pb-20 pt-16 sm:pt-24">
        <div className="section-shell">
          <div className="max-w-2xl"><span className="eyebrow">Start a conversation</span><h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-secondary sm:text-6xl">Tell us what <span className="text-primary">you’re building.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">A little about your goals is all we need to get the conversation started. No pressure, just good ideas.</p></div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:gap-12">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-secondary">Your name<input className={inputClass} name="name" placeholder="Jamie Taylor" autoComplete="name" required /></label>
                <label className="text-sm font-bold text-secondary">Email address<input className={inputClass} type="email" name="email" placeholder="jamie@company.com" autoComplete="email" required /></label>
                <label className="text-sm font-bold text-secondary">Phone number <span className="font-normal text-slate-400">(optional)</span><input className={inputClass} type="tel" name="phone" placeholder="+91 98765 43210" autoComplete="tel" /></label>
                <label className="text-sm font-bold text-secondary">What can we help with?<select className={inputClass} name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Web development</option><option>Meta Ads</option><option>Website + Meta Ads</option><option>Something else</option></select></label>
              </div>
              <label className="mt-5 block text-sm font-bold text-secondary">A little about your project<textarea className={`${inputClass} min-h-32 resize-y`} name="message" placeholder="What are you hoping to make happen?" required /></label>
              <button type="submit" className="button-primary mt-6">Send your note <ArrowIcon /></button>
              {confirmation && <p role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">{confirmation}</p>}
              <p className="mt-4 text-xs leading-5 text-slate-400">This demo form runs in your browser only—no information is sent to a server.</p>
            </form>
            <aside className="flex flex-col gap-5">
              <div className="rounded-3xl bg-secondary p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">A real person. A thoughtful reply.</p><h2 className="mt-5 font-display text-2xl font-extrabold leading-tight">Good things start with a hello.</h2><p className="mt-4 text-sm leading-6 text-slate-300">Tell us where you want to go. We’ll help you figure out a clear way to get there.</p><a href="mailto:hello@webpulsemedia.in" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-sky-300">hello@webpulsemedia.in <ArrowIcon /></a></div>
              <div className="rounded-3xl border border-slate-200 bg-surface p-7 sm:p-9"><h2 className="font-display text-lg font-extrabold text-secondary">What happens next?</h2><ol className="mt-5 space-y-4"><li className="flex gap-3 text-sm leading-6 text-slate-500"><span className="font-display font-extrabold text-primary">01</span>We learn a bit about your business and goals.</li><li className="flex gap-3 text-sm leading-6 text-slate-500"><span className="font-display font-extrabold text-primary">02</span>We share honest ideas on the best next step.</li><li className="flex gap-3 text-sm leading-6 text-slate-500"><span className="font-display font-extrabold text-primary">03</span>If it feels right, we make a plan together.</li></ol></div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
