import { Tag } from "../Tag.tsx"

export function Hero() {

    const HERO_DATA = {
        title: "RIDI OTOKO",
        description: "Building elegant, intuitive, and purpose-driven software powered by robust backend systems and resilient cloud architectures.",
        buttonTextOne: "View Projects",
        buttonTextTwo: "Get In Touch"
    }

    return (
        <div id={"Hero"} className="hero border-b border-base-200 bg-base-100 min-h-screen">
            <div className="hero-content flex gap-12 max-w-6xl">

                 {/* Text block: tags, title, description, CTA buttons */}
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
               
                                   {/* Role/skill tags */}
                    <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                                       <Tag label="Computer science student" />
                                       <Tag label="Full-stack developer" />
                                       <Tag label="AWS certified" />
                                       <Tag label="DevOps" />
                                   </div>
               
                                   {/* Main title, fluid size via clamp() instead of fixed breakpoints */}
                                   <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold">
                                       {HERO_DATA.title}
                                   </h1>
               
                                   {/* Short intro/description, also fluid but within a tighter range */}
                                   <p className="text-[clamp(0.95rem,1.2vw,1.25rem)] text-neutral-content">
                                       {HERO_DATA.description}
                                   </p>
               
                                   {/* Call to action buttons */}
                                   <div className="flex gap-4">
                                       <button className="btn btn-primary">{HERO_DATA.buttonTextOne}</button>
                                       <button className="btn btn-outline btn-primary">{HERO_DATA.buttonTextTwo}</button>
                                   </div>
                               </div>
               

                <div className="flex-1 hidden lg:flex items-center justify-center">
                    
                        <div className="flex-1 relative flex items-center justify-center min-h-[400px]">
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
        </div>
        
    )
}