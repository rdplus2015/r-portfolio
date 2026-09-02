import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Home } from "./components/public/pages/Home.tsx"
import { Projects } from "./components/public/pages/Projects.tsx"
import { ProjectView } from "./components/public/pages/ProjectView.tsx"
import { LoginForm } from "./components/admin/LoginForm.tsx"
import { AdminLayout } from "./components/admin/layout/AdminLayout.tsx"
import { AdminRoutes } from "./components/admin/routes/AdminRoutes.tsx"

function ScrollToHash() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0)
            return
        }

        const timeoutId = setTimeout(() => {
            try {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            } catch (error) {
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
            <ScrollToHash />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectView />} />
                 

                {/* Admin login — outside AdminLayout, no sidebar on the login screen */}
                <Route path="/admin/login" element={<LoginForm />} />

                  <Route path="/admin/*" element={<AdminLayout><AdminRoutes /></AdminLayout>} />

            </Routes>
        </>
    )
}

export default App
