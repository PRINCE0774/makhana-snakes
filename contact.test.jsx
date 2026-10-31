import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HelmetProvider } from 'react-helmet-async'
import Contact from '../src/pages/Contact.jsx'
import { createContactConfirmation } from '../src/utils/contact.js'

function renderContact() {
  return render(<HelmetProvider><Contact /></HelmetProvider>)
}

describe('contact lead form', () => {
  it('creates a friendly confirmation using the first name', () => {
    expect(createContactConfirmation('  Jamie Taylor ')).toBe('Thanks, Jamie! Your message is ready. Our team will be in touch soon.')
    expect(createContactConfirmation('   ')).toContain('Thanks, there!')
  })

  it('submits the form locally and clears submitted fields', async () => {
    const user = userEvent.setup()
    renderContact()
    await user.type(screen.getByLabelText('Your name'), 'Jamie Taylor')
    await user.type(screen.getByLabelText('Email address'), 'jamie@example.com')
    await user.selectOptions(screen.getByLabelText('What can we help with?'), 'Meta Ads')
    await user.type(screen.getByLabelText('A little about your project'), 'We are launching a new campaign.')
    await user.click(screen.getByRole('button', { name: /send your note/i }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks, Jamie!')
    expect(screen.getByLabelText('Your name')).toHaveValue('')
  })

  it('uses HTML required validation before handling empty submissions', () => {
    renderContact()
    const form = screen.getByRole('button', { name: /send your note/i }).closest('form')
    expect(form.checkValidity()).toBe(false)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
