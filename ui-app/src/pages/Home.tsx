
import { Education } from "../components/Education.tsx"
import { Experience } from "../components/Experience.tsx"
import { Hero } from "../components/layout/Hero.tsx"
import { Skills } from "../components/Skills.tsx"
import { Contact } from "../components/Contact.tsx"
import {About} from "../components/About.tsx";
import {Header} from "../components/layout/Header.tsx";
import {Footer} from "../components/layout/Footer.tsx";
export function Home() {

    return (
        <main>
            <Header />
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}