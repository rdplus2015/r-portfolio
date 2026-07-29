export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>© {currentYear} Ridi Otoko. All rights reserved.</p>
    </footer>
  )
}