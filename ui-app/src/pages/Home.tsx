
import { About } from "../components/layout/About"
import { Education } from "../components/layout/Education"
import { Experience } from "../components/layout/Experience"
import { Hero } from "../components/layout/Hero"
import { ProjectCard, Projects } from "../components/layout/ProjectCard"
import { Skills } from "../components/layout/Skills"
import { Contact } from "../components/layout/Contact"
import { LoginForm } from "../components/backOffice/LoginForm"
export function Home() {

    return (
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
            <LoginForm/>
        </main>
    )
}