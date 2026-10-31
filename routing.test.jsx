import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HelmetProvider } from 'react-helmet-async'
import App from '../src/App.jsx'

function renderApp(path = '/') {
  window.history.replaceState({}, '', path)
  return render(<HelmetProvider><App /></HelmetProvider>)
}

afterEach(() => {
  window.history.replaceState({}, '', '/')
})

describe('site routing and links', () => {
  it('navigates between all five pages and scrolls to the top on route changes', async () => {
    const user = userEvent.setup()
    renderApp()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const initialScrollCount = window.scrollTo.mock.calls.length
    await user.click(within(nav).getByRole('link', { name: 'Services' }))
    expect(await screen.findByRole('heading', { name: /the right experience/i })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/services')
    expect(window.scrollTo).toHaveBeenCalledTimes(initialScrollCount + 1)
    expect(window.scrollTo).toHaveBeenLastCalledWith(0, 0)

    await user.click(within(nav).getByRole('link', { name: 'About us' }))
    expect(await screen.findByRole('heading', { name: /good work should make/i })).toBeInTheDocument()
    await user.click(within(nav).getByRole('link', { name: 'Pricing' }))
    expect(await screen.findByRole('heading', { name: /priced clearly/i })).toBeInTheDocument()
    await user.click(within(nav).getByRole('link', { name: 'Let’s talk' }))
    expect(await screen.findByRole('heading', { name: /tell us what/i })).toBeInTheDocument()
    await user.click(within(nav).getByRole('link', { name: 'WebPulse Media home' }))
    expect(await screen.findByRole('heading', { name: /scale your brand/i })).toBeInTheDocument()
  })

  it('renders a not-found page and provides a working home link', async () => {
    const user = userEvent.setup()
    renderApp('/missing-page')
    expect(screen.getByRole('heading', { name: /page wandered off/i })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /back to home/i }))
    expect(await screen.findByRole('heading', { name: /scale your brand/i })).toBeInTheDocument()
  })

  it('has no dead hash links and all internal links target supported routes', async () => {
    const user = userEvent.setup()
    renderApp('/')
    const routes = new Set(['/', '/about', '/services', '/pricing', '/contact'])
    const checkLinks = () => {
      const links = [...document.querySelectorAll('a[href]')]
      expect(links.some((link) => link.getAttribute('href') === '#')).toBe(false)
      const internalLinks = links.filter((link) => link.getAttribute('href').startsWith('/'))
      expect(internalLinks.length).toBeGreaterThan(0)
      for (const link of internalLinks) {
        const [path, hash] = link.getAttribute('href').split('#')
        expect(routes.has(path)).toBe(true)
        if (hash && path === window.location.pathname) {
          expect(document.getElementById(hash)).toBeInTheDocument()
        }
      }
      return links
    }

    checkLinks()
    await user.click(screen.getByRole('link', { name: 'Explore Services' }))
    const serviceLinks = checkLinks()
    expect(serviceLinks.some((link) => link.getAttribute('href') === '/services#web-development')).toBe(true)
    expect(serviceLinks.some((link) => link.getAttribute('href') === '/services#meta-ads')).toBe(true)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    await user.click(within(nav).getByRole('link', { name: 'About us' }))
    checkLinks()
    await user.click(within(nav).getByRole('link', { name: 'Pricing' }))
    checkLinks()
    await user.click(within(nav).getByRole('link', { name: 'Let’s talk' }))
    checkLinks()
  })
})
