
import { About } from "../components/layout/About"
import { Education } from "../components/layout/Education"
import { Experience } from "../components/layout/Experience"
import { Hero } from "../components/layout/Hero"
import { Skills } from "../components/layout/Skills"

export function Home() {

    return (
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
        </main>
    )
}