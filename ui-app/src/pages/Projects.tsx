import {Header} from "../components/sections/Header.tsx";
import {Footer} from "../components/sections/Footer.tsx";
import {ProjectsList} from "../components/ProjectCard.tsx";


export function Projects() {
    return <main>
        <Header />
        <ProjectsList />
        <Footer />
    </main>
}