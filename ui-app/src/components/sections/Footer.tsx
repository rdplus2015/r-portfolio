export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-200 shadow-sm">
      <p>© {currentYear} Ridi Otoko. All rights reserved.</p>
    </footer>
  )
}