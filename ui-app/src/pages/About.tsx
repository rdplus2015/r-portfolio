
import { Education } from "../components/Education.tsx"
import { Experience } from "../components/Experience.tsx"
import { Hero } from "../components/sections/Hero.tsx"
import { Skills } from "../components/Skills.tsx"
import { Contact } from "../components/Contact.tsx"
export function About() {

    return (
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Contact/>
        </main>
    )
}