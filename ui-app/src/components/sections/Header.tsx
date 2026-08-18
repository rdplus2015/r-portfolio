import { Link } from "react-router-dom"

const NAV_LINKS = [
    { label: "About", href: "/#about", type: "anchor" },
    { label: "Skills", href: "/#skills", type: "anchor" },
    { label: "Education", href: "/#education", type: "anchor" },
    { label: "Experience", href: "/#experience", type: "anchor" },
    { label: "Projects", href: "/projects", type: "page" },
    { label: "Resume", href: "/resume.pdf", type: "download" },
]

function ThemeToggle() {
    return (
        <label className="btn btn-ghost btn-circle swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="synthwave" />
            <svg className="swap-off h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="swap-on h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </label>
    )
}


function LanguageDropdown() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.5 15h5" />
                </svg>
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-200 rounded-box z-1 w-32 p-2 shadow-sm mt-3">
                <li><a>English</a></li>
                <li><a>Français</a></li>
            </ul>
        </div>
    )
}

export function Header() {
    return (
        <>
            {/* ===== MOBILE HEADER — visible below lg ===== */}
            <div className="lg:hidden mt-10 pb-10 flex items-center justify-around bg-base-100 shadow-sm border-b border-base-200 px-5">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-base-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-md dropdown-content text-center font-bold bg-base-200 rounded-box z-1 mt-15 w-75 p-10 shadow-md shadow-primary"
                    >
                        {NAV_LINKS.map((link) =>
                            link.type === "download" ? (
                                <li key={link.href}>
                                    <a href={link.href} download className="text-lg hover:text-primary hover:bg-base-100 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]">{link.label}</a>
                                </li>
                            ) : (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-lg hover:text-primary hover:bg-base-100 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]">{link.label}</Link>
                                </li>
                            )
                        )}

                        <div className="divider my-2"></div>

                        <li>
                            <Link to={"#"} className="text-lg hover:text-primary hover:bg-base-100 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)]">
                                Langue (coming soon)
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link className="text-lg font-bold hover:text-primary hover:bg-base-200 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-transparent" to={"/"}>RIDI OTOKO</Link>

                <ThemeToggle />
            </div>

            {/* ===== DESKTOP HEADER — visible from lg up ===== */}
            <div className="hidden lg:flex pt-5 pb-5 items-center justify-around bg-base-200 shadow-sm border-b border-base-200 px-10">

                <Link className="text-lg font-bold hover:text-primary hover:bg-base-200 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-transparent" to={"/"}>RIDI OTOKO</Link>

                <ul className="menu menu-horizontal px-1">
                    {NAV_LINKS.map((link) =>
                        link.type === "download" ? (
                            <li key={link.href}>
                                <a href={link.href} download className="hover:text-primary hover:bg-base-200 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-b-2 border-transparent hover:border-primary hover:rounded-none rounded-none">{link.label}</a>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <Link to={link.href} className="hover:text-primary hover:bg-base-200 border-primary-1 transition-all duration-300 hover:[text-shadow:0_0_2px_var(--color-primary)] border-b-2 border-transparent hover:border-primary hover:rounded-none rounded-none">{link.label}</Link>
                            </li>
                        )
                    )}
                </ul>

               <div className="flex items-center gap-2">
                   <LanguageDropdown />
                   <ThemeToggle />
               </div>
            </div>
        </>
    )
}