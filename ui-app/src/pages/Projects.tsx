import { Header } from "../components/layout/Header.tsx"
import { Footer } from "../components/layout/Footer.tsx"
import { ProjectsList } from "../components/ProjectCard.tsx"

export function Projects() {
    return (
        <main>
            <Header />

            <div className="py-20 px-4 sm:px-6 bg-base-100 min-h-screen">
                <div className="max-w-6xl mx-auto flex flex-col gap-6">

                    <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
                        Projects
                    </h1>

                    <ProjectsList />

                </div>
            </div>

            <Footer />
        </main>
    )
}