
import {Header} from "../layout/Header.tsx";
import {Footer} from "../layout/Footer.tsx";
import { About } from "../About.tsx";
import { Contact } from "../Contact.tsx";
import { Education } from "../Education.tsx";
import { Experience } from "../Experience.tsx";
import { Hero } from "../layout/Hero.tsx";
import { Skills } from "../Skills.tsx";
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