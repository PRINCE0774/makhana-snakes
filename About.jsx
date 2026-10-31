import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

const principles = [
  { title: 'Curiosity before convention', text: 'We start by asking better questions. The right answer for your brand is the one that works in your world.' },
  { title: 'Craft with clarity', text: 'Thoughtful design and reliable technology should feel effortless to use—and easy to understand.' },
  { title: 'Partnership over handoff', text: 'We work alongside your team, share what we learn and leave you with tools you can keep building on.' },
]

export default function About() {
  return (
    <>
      <Helmet><title>About WebPulse Media — A small team for big ideas</title><meta name="description" content="Meet WebPulse Media: an independent digital studio combining thoughtful React development, creative strategy and measurable growth." /></Helmet>
      <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pt-24">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="section-shell relative">
          <span className="eyebrow">About WebPulse</span>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-secondary sm:text-6xl">Good work should make <span className="text-primary">good things happen.</span></h1>
            <p className="max-w-lg text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">We’re an independent digital team helping ambitious businesses show up with confidence and grow with intention.</p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl bg-secondary md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Our mission</p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Make the internet work harder for the people doing good work.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">WebPulse Media brings web development and paid social into one thoughtful growth partnership. Less noise, more meaningful progress.</p>
            </div>
            <div className="relative min-h-[270px] overflow-hidden bg-gradient-to-br from-indigo-500 via-primary to-sky-400 sm:min-h-[380px]">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="absolute left-[14%] top-[17%] h-48 w-48 rounded-full border border-white/25" />
              <div className="absolute left-[26%] top-[29%] h-36 w-36 rounded-full border border-white/35" />
              <div className="absolute left-[37%] top-[41%] h-24 w-24 rounded-full bg-white/15 backdrop-blur-sm" />
              <div className="absolute bottom-[15%] right-[11%] rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-white backdrop-blur-md"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">Creative + code</span><span className="mt-1 block font-display text-lg font-extrabold">Made to work together</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><span className="eyebrow">How we got here</span><h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl">Small by choice. <span className="text-primary">Big on follow-through.</span></h2></div>
          <div className="space-y-5 text-base leading-8 text-slate-500"><p>We started WebPulse around a simple belief: businesses deserve digital partners who care as much about the outcome as they do about the pixels.</p><p>Too often, a beautiful website and a growth campaign live in separate worlds. We bring them together—building a conversion-ready experience, then helping the right people find it.</p><p>Today, we work with founders and growing teams who want smart work, straight answers and progress they can see.</p></div>
        </div>
      </section>
      <section className="bg-white py-20 lg:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div><span className="eyebrow">The people behind the pulse</span><h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl">One close-knit team. <span className="text-primary">Every angle covered.</span></h2></div>
            <p className="max-w-xl text-base leading-7 text-slate-500">Our strategists, designers and developers work as one team from the first question to the final launch—so the experience and the growth plan never lose touch.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Strategy & growth', 'Finding the audience, story and goals that give good work direction.'],
              ['Design & experience', 'Making every interaction feel clear, considered and true to your brand.'],
              ['Development & delivery', 'Building fast, flexible React experiences that are ready to grow.'],
            ].map(([title, text], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-surface p-6"><span className="font-display text-xs font-extrabold tracking-widest text-primary">0{index + 1}</span><h3 className="mt-5 font-display text-lg font-extrabold text-secondary">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">What guides us</span><h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">A few things we believe.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{principles.map((principle, index) => <article key={principle.title} className="rounded-2xl border border-slate-200 p-7"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 font-display text-sm font-extrabold text-primary">0{index + 1}</span><h3 className="mt-6 font-display text-xl font-extrabold text-secondary">{principle.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{principle.text}</p></article>)}</div>
          <div className="mt-12 text-center"><Link to="/contact" className="button-primary">Meet your new growth partner <ArrowIcon /></Link></div>
        </div>
      </section>
    </>
  )
}
