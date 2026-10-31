import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">This page wandered off.</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-slate-500">The address may be outdated, or the page may have moved.</p>
      <Link to="/" className="button-primary mt-8">Back to home</Link>
    </section>
  )
}
