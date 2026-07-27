import { Tag } from "./Tag"

export function Hero() {

    const HERO_DATA = {
        title: "RIDI OTOKO",
        description: "Building elegant, intuitive, and purpose-driven software powered by robust backend systems and resilient cloud architectures.",
        buttonTextOne: "View Projects",
        buttonTextTwo: "Get In Touch"
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md"> 

                <div className="flex gap-2 justify-center mb-4">
                    <Tag label="Computer science student" />
                    <Tag label="Full-stack developer" />
                    <Tag label="AWS certified" />
                    <Tag label="DevOps" />
                </div>
                
                <h1 className="text-5xl font-bold">{HERO_DATA.title}</h1>
                <p className="py-6">
                    {HERO_DATA.description}
                </p>
                <button className="btn btn-primary">{HERO_DATA.buttonTextOne}</button>
                <button className="btn btn-primary">{HERO_DATA.buttonTextTwo}</button>
                </div>
            </div>
        </div>
    )}