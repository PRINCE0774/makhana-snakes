import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

const clients = ['D2C & RETAIL', 'SAAS TEAMS', 'LIFESTYLE', 'PROFESSIONAL SERVICES']

const values = [
  { number: '01', title: 'Design with a job to do', text: 'Every page has a purpose. We bring brand, story and conversion together so the next step feels obvious.' },
  { number: '02', title: 'Growth that compounds', text: 'A fast, flexible React site and campaigns built to learn. Your digital engine gets sharper over time.' },
  { number: '03', title: 'A team in your corner', text: 'Clear communication, thoughtful craft and decisions grounded in what moves your business forward.' },
]

function ProductPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1030px] animate-fade-in-up opacity-0 [animation-delay:0.55s] [animation-fill-mode:forwards] lg:mt-[84px]">
      <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-full border border-primary/10 bg-white/60 lg:block" />
      <div className="absolute -right-5 bottom-16 hidden h-20 w-20 rounded-3xl border border-accent/20 bg-sky-50/70 lg:block" />
      <div className="relative overflow-hidden rounded-t-[22px] border border-slate-200 bg-white shadow-[0_24px_90px_-36px_rgba(36,46,95,0.32)]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="mx-auto flex w-1/2 max-w-sm items-center justify-center rounded-md bg-slate-50 px-3 py-1.5 text-[10px] text-slate-400">northstar.studio</div>
        </div>
        <div className="grid min-h-[310px] md:grid-cols-[1fr_0.82fr] md:min-h-[390px]">
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#111B31] p-8 text-white sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-16 h-52 w-52 rounded-full border border-white/10" />
            <span className="relative mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-sky-300">A new kind of everyday</span>
            <p className="relative max-w-md font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">Make room for <span className="text-sky-300">better.</span></p>
            <p className="relative mt-4 max-w-xs text-xs leading-5 text-slate-300 sm:text-sm">Beautifully considered essentials for a more intentional home.</p>
            <span className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold text-secondary">Explore the collection <ArrowIcon className="h-3 w-3" /></span>
          </div>
          <div className="relative min-h-[230px] overflow-hidden bg-[#E9E2D8]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_36%,#f9f5ed_0%,#ded2c3_65%,#c8b9a5_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#97836f]/25 to-transparent" />
            <div className="absolute left-[13%] top-[14%] h-[61%] w-[50%] rounded-t-[45%] rounded-b-[9px] bg-[#bb9f7f] shadow-[16px_15px_35px_rgba(69,50,30,0.18)]" />
            <div className="absolute left-[20%] top-[21%] h-[50%] w-[36%] rounded-t-[45%] rounded-b-[6px] bg-gradient-to-br from-[#d4c2aa] via-[#c1a98d] to-[#9e8265]" />
            <div className="absolute bottom-[14%] left-[24%] h-3 w-[45%] rounded-full bg-[#88735d] shadow-[0_7px_12px_rgba(60,40,25,0.2)]" />
            <div className="absolute bottom-[17%] left-[30%] h-[38%] w-[3px] bg-[#77614b]" />
            <div className="absolute bottom-[17%] left-[62%] h-[38%] w-[3px] bg-[#77614b]" />
            <div className="absolute right-[13%] top-[27%] h-[25%] w-[16%] rounded-full bg-[#6c7560]" />
            <div className="absolute right-[16%] top-[45%] h-[27%] w-[2px] bg-[#7b674f]" />
            <div className="absolute bottom-[14%] right-[10%] h-[3px] w-[18%] bg-[#7b674f]" />
            <div className="absolute right-[7%] top-[8%] rounded-full bg-white/60 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#705c48]">Natural living</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:right-10 sm:px-5 sm:py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 16 5-5 4 3 7-8M15 6h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span><span className="block font-display text-lg font-extrabold text-secondary">+42%</span><span className="block text-[10px] text-slate-400">conversion lift</span></span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Helmet><title>WebPulse Media — Websites that move business forward</title><meta name="description" content="We design high-converting React websites and deploy targeted Meta Ads campaigns to turn your traffic into revenue." /></Helmet>
      <section className="relative isolate overflow-hidden bg-white pb-20 pt-16 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl" />
        <div className="section-shell text-center">
          <div className="animate-fade-in-up opacity-0 [animation-delay:0s] [animation-fill-mode:forwards]"><span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Digital made to move you</span></div>
          <h1 className="mx-auto mt-7 max-w-4xl animate-fade-in-up font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-secondary opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] sm:text-6xl lg:text-[72px]">
            Scale Your Brand with <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">WebPulse Media</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-base leading-7 text-slate-500 opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] sm:text-lg sm:leading-8">
            We design high-converting React websites and deploy targeted Meta Ads campaigns to turn your traffic into revenue.
          </p>
          <div className="mt-8 flex animate-fade-in-up flex-col justify-center gap-3 opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] sm:flex-row">
            <Link to="/pricing" className="button-primary">View Pricing <ArrowIcon /></Link>
            <Link to="/services" className="button-secondary">Explore Services <ArrowIcon /></Link>
          </div>
          <ProductPreview />
          <div className="mt-20 border-t border-slate-100 pt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Built for ambitious teams across industries</p>
            <div className="mt-7 grid grid-cols-2 items-center gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-8">
              {clients.map((client) => <span key={client} className="font-display text-sm font-extrabold tracking-[0.12em] text-slate-500 sm:text-base">{client}</span>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
          <div className="max-w-md">
            <span className="eyebrow">Built for better growth</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl">Not just more clicks. <span className="text-primary">More momentum.</span></h2>
            <p className="mt-5 text-base leading-7 text-slate-500">The best digital experiences make it easier for people to choose you. We build the strategy and the systems to make that happen.</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-indigo-700">A little about us <ArrowIcon /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => <article key={value.number} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><span className="font-display text-xs font-extrabold tracking-widest text-primary">{value.number}</span><h3 className="mt-7 font-display text-lg font-extrabold text-secondary">{value.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{value.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-shell pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-[30px] bg-secondary px-7 py-12 text-white sm:px-12 sm:py-14 lg:px-16">
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">Ready when you are</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Your next chapter deserves a better digital home.</h2></div>
            <Link to="/contact" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-secondary transition hover:bg-sky-50">Let’s build it <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
