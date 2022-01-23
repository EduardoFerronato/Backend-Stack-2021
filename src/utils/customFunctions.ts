export function isValidEmail(email_text: string | null | undefined) {
  if (!email_text) return false
  const p1 = email_text.search('@')
  if (p1 <= 1) return false

  // ['lucas','gmail.com']
  const [, part2] = email_text.split('@')
  const p2 = part2.search(/\./)
  if (p2 <= 1) return false

  return true
}
