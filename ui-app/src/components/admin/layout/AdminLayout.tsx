import { AdminSidebar } from "./AdminSidebar.tsx"
import type { ReactNode } from "react"

interface AdminLayoutProps {
  children: ReactNode
}

// Hardcoded for now — will come from your auth context/API once login is wired up
const CURRENT_USER = { name: "Ridi Otoko" }

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <nav className="navbar bg-base-200 pr-20 flex items-center justify-between">
          <div className="flex items-center">
            <label htmlFor="admin-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <span className="text-lg font-bold px-2">Admin</span>
          </div>

          {/* Connected user indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
            <span className="text-sm text-neutral-content">{CURRENT_USER.name}</span>
          </div>
        </nav>

        <main className="p-4">{children}</main>
      </div>

      <AdminSidebar />
    </div>
  )
}