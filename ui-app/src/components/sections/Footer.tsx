export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-100 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-neutral-content">
          © {currentYear} Ridi Otoko. All rights reserved.
        </p>
      </div>
    </footer>
  )
}