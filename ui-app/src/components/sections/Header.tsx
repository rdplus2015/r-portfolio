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
        <div className=" mt-10 pb-10  flex items-center justify-around bg-base-100 shadow-sm border-b border-base-200  px-5">
            <div className="flex items-center gap-2">
                
                {/* Mobile dropdown menu (visible below lg breakpoint) */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-md dropdown-content text-center font-bold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow p-10"
                    >
                        {NAV_LINKS.map((link) =>
                            link.type === "download" ? (
                                <li key={link.href}>
                                    <a href={link.href} download className="hover:text-primary hover:bg-base-100 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] ">{link.label}</a>
                                </li>
                            ) : (
                                <li key={link.href}>
                                    <Link to={link.href} className="hover:text-primary hover:bg-base-100 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] ">{link.label}</Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Site name / logo */}
                <Link className=" text-xl font-bold hover:text-primary hover:bg-base-100 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]  border-transparent" to={"/"}>RIDI OTOKO</Link>
            </div>

            {/* Desktop nav (visible from lg breakpoint up) */}
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NAV_LINKS.map((link) =>
                        link.type === "download" ? (
                            <li key={link.href}>
                                <a href={link.href} download className="hover:text-primary hover:bg-base-100 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-b-2 border-transparent hover:border-primary hover:rounded-none rounded-none">{link.label}</a>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <Link to={link.href} className="hover:text-primary hover:bg-base-100 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-b-2 border-transparent hover:border-primary hover:rounded-none rounded-none">{link.label}</Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <div className="dropdown dropdown-hover dropdown-left">
                    {/* Dark/light mode toggle icon (not yet wired to a hook) */}
                    <svg role="button" className="focus:outline-none"   tabIndex="0"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" />
                    </svg>
                    <ul tabIndex="-1" class="dropdown-content menu bg-base-200 rounded-box z-1 w-30 p-2 shadow-sm">
                        <li>
                            <Link to={"#"} className="hover:text-primary hover:bg-base-200 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]">coming soon</Link>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover dropdown-right">
                    {/* Search icon (not yet wired to any behavior) */}
                    <svg role="button" className="focus:outline-none"   tabIndex="0"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                    </svg>
                    <ul tabIndex="-1" class="dropdown-content menu bg-base-200 rounded-box z-1 w-30 p-2 shadow-sm">
                        <li>
                            <Link to={"#"} className="hover:text-primary hover:bg-base-200 border-primary-1  transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]">coming soon</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}