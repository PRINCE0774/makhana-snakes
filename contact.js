export function createContactConfirmation(name) {
  const firstName = name.trim().split(/\s+/)[0] || 'there'
  return `Thanks, ${firstName}! Your message is ready. Our team will be in touch soon.`
}
