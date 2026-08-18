import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ProjectView } from "./components/ProjectView.tsx"
import {AdminDashboard} from "./components/admin/Dashboard.tsx";

// React Router intercepts link clicks and uses history.pushState internally
// instead of a real page load. Because of that, the browser's native behavior
// of auto-scrolling to an anchor (#section) never fires when using <Link>.
// This component re-implements that scroll behavior manually.


function ScrollToHash() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // No hash: scroll to top (or to #hero if it exists, only on the home page)
        if (!hash) {
            window.scrollTo(0, 0)
            return
        }

        // Defer the scroll until after the DOM has painted.
        // This matters when navigating from a different route: the target
        // element (e.g. #skills) doesn't exist until Home has fully mounted.
        const timeoutId = setTimeout(() => {
            try {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            } catch (error) {
                // A malformed hash (rare) would throw on querySelector.
                // Log it instead of letting it crash the render.
                console.error("ScrollToHash failed:", error)
            }
        }, 100)

        return () => clearTimeout(timeoutId)
    }, [pathname, hash])

    return null
}

function App() {
    return (
        <>
            {/* Mounted once, outside of Routes, so it stays active across every page */}
            <ScrollToHash />

            {/* Route definitions: which page component renders for each URL */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectView />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </>
    )
}

export default App