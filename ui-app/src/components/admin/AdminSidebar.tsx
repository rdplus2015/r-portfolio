const SIDEBAR_LINKS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Skills", href: "/admin/skills" },
  { label: "Experience", href: "/admin/experience" },
  { label: "Education", href: "/admin/education" },
  { label: "Profile", href: "/admin/profile" },
]

export function AdminSidebar() {
  function handleLogout() {
    // TODO: clear auth token/session, then redirect to /admin/login
  }

  return (
    <div className="drawer-side">
      <label htmlFor="admin-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

      <div className="min-h-full w-64 bg-base-200 flex flex-col">
        <ul className="menu w-full grow gap-1 p-4">
          {SIDEBAR_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Logout — pinned to the bottom of the sidebar */}
        <div className="p-4 border-t border-base-300">
          <button onClick={handleLogout} className="btn btn-outline btn-error w-full gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}