import { Link } from "react-router-dom"
import { Tag } from "../Tag.tsx"

export function Hero() {

    const HERO_DATA = {
        title: "RIDI OTOKO",
        description: "Building elegant, intuitive, and purpose-driven software powered by robust backend systems and resilient cloud architectures.",
        buttonTextOne: "View Projects",
        buttonTextTwo: "Get In Touch"
    }

    return (
        <div id={"Hero"} className="border-b border-base-200 bg-base-100 py-25 lg:py-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 sm:px-6 items-center">

                <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

                    <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                        <Tag label="Computer science student" />
                        <Tag label="Full-stack developer" />
                        <Tag label="AWS certified" />
                        <Tag label="DevOps" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        {HERO_DATA.title}
                    </h1>

                    <p className="text-base sm:text-lg text-neutral-content max-w-md lg:max-w-none">
                        {HERO_DATA.description}
                    </p>

                    {/* Call to action buttons — now real navigation links */}
                    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                        <Link to="/projects" className="btn btn-primary">{HERO_DATA.buttonTextOne}</Link>
                        <Link to="/#contact" className="btn btn-outline btn-primary">{HERO_DATA.buttonTextTwo}</Link>
                    </div>
                </div>

                <div className="hidden lg:flex relative items-center justify-center min-h-[400px]">
                    <div className="w-64 h-64 rounded-full bg-base-200 border-2 border-primary shadow-[0_0_60px_-10px] shadow-primary flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">{"</>"}</span>
                    </div>

                    <div className="card bg-base-200 shadow-md px-8 py-2 absolute top-8 right-0 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Design</h4>
                    </div>

                    <div className="card bg-base-200 shadow-md px-8 py-2 absolute bottom-20 left-0 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Code</h4>
                    </div>

                    <div className="card bg-base-200 shadow-md px-8 py-2 absolute bottom-4 right-4 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Maintain</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}