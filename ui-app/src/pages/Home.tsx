
import { About } from "../components/layout/About"
import { Hero } from "../components/layout/Hero"
import { Skills } from "../components/layout/Skills"

export function Home() {

    return (
        <main>
            <Hero/>
            <About/>
            <Skills/>
        </main>
    )
}