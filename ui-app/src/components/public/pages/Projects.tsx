import { Header } from "../layout/Header.tsx"
import { Footer } from "../layout/Footer.tsx"
import { ProjectsList } from "../ProjectCard.tsx"

export function Projects() {
    return (
        <main>
            <Header />

            <div className="py-20 px-8 sm:px-6 bg-base-100 min-h-screen">
                <div className="max-w-6xl mx-auto flex flex-col mb-15 pb-8  border-b-2 border-primary">

                    <h1 className="text-[clamp(2.25rem,5vw,5.5rem)] font-bold leading-tight">
                        Projects
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col">
                    <ProjectsList />
                </div>
            </div>

            <Footer />
        </main>
    )
}