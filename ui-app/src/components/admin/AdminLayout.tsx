// AdminLayout.tsx
import { AdminSidebar } from "./AdminSidebar"
import type {ReactNode} from "react";

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle inline" />
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost drawer-button">
            {/* icon toggle */}
          </label>
          <div className="px-4">Admin</div>
        </nav>

        <div className="p-4">{children}</div>
           <div className="p-4">{children}</div>
      </div>

      <AdminSidebar />
    </div>
  )
}