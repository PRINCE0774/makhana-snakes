import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../src/components/Navbar.jsx'

describe('responsive navigation', () => {
  it('opens and closes the mobile menu with its toggle button', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Close navigation menu' }))
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu and closes it after choosing a page', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const mobileNavigation = document.querySelector('#mobile-navigation')
    await user.click(within(mobileNavigation).getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
  })
})
