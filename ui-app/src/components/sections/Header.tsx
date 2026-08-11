import { Link } from "react-router-dom"

// Navigation links for the header.
// "anchor" scrolls to a section on the Home page.
// "page" navigates to a separate route.
// "download" triggers a file download instead of navigation.
const NAV_LINKS = [
    { label: "About", href: "/#about", type: "anchor" },
    { label: "Skills", href: "/#skills", type: "anchor" },
    { label: "Education", href: "/#education", type: "anchor" },
    { label: "Experience", href: "/#experience", type: "anchor" },
    { label: "Projects", href: "/projects", type: "page" },
    { label: "Resume", href: "/resume.pdf", type: "download" },
]

export function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                {/* Mobile dropdown menu (visible below lg breakpoint) */}
                <div className="dropdown pl-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {NAV_LINKS.map((link) =>
                            link.type === "download" ? (
                                // Direct file download, not a route
                                <li key={link.href}>
                                    <a href={link.href} download>{link.label}</a>
                                </li>
                            ) : (
                                // Anchor or page navigation, both handled by React Router
                                <li key={link.href}>
                                    <Link to={link.href}>{link.label}</Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Site name / logo */}
                <a className="btn btn-ghost text-xl">RIDI OTOKO</a>
            </div>

            {/* Desktop nav (visible from lg breakpoint up) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NAV_LINKS.map((link) =>
                        link.type === "download" ? (
                            <li key={link.href}>
                                <a href={link.href} download>{link.label}</a>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div className="navbar-end gap-3 pr-5">
                {/* Dark/light mode toggle icon (not yet wired to a hook) */}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" />
                </svg>

                {/* Search icon (not yet wired to any behavior) */}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                </svg>
            </div>
        </div>
    )
}