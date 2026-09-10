import { Link } from "react-router-dom"
import { Tag } from "../Tag.tsx"
import { useHeroAnimation } from "../../utils/useHeroAnimation.ts"

export function Hero() {

const { heroRef, textRef, gridRef, circleWrapperRef, circleRef, tag1Ref, tag2Ref, tag3Ref, tag4Ref } = useHeroAnimation()

const HERO_DATA = {
        title: "RIDI OTOKO",
        description: "Je conçois des logiciels élégants, intuitifs et pensés pour répondre à des besoins concrets, soutenus par des systèmes backend robustes et des architectures cloud résilientes.",
        buttonTextOne: "Voir les projets",
        buttonTextTwo: "Me contacter"
    }

    return (
        <div ref={heroRef} id={"Hero"} className="border-b border-base-200 bg-base-100 py-25 lg:py-30 relative overflow-hidden">            
            {/* Grid background, sits behind everything */}
            <div
                ref={gridRef}
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                backgroundImage: `
                    linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                color: "var(--color-primary)",
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-50  max-w-6xl mx-auto px-4 sm:px-0 items-center">

                {/* Left column: intro text and call-to-action buttons */}
                <div ref={textRef}  className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

                    <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                        <Tag label="Étudiant en informatique" />
                        <Tag label="Développeur Full-Stack" />
                        <Tag label="Certifié AWS" />
                        <Tag label="DevOps" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        {HERO_DATA.title}
                    </h1>

                    <p className=" text-lg sm:text-xl text-neutral-content max-w-md lg:max-w-none">
                        {HERO_DATA.description}
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                        <Link to="/projects" className="btn btn-primary">{HERO_DATA.buttonTextOne}</Link>
                        <Link to="/#contact" className="btn btn-outline btn-primary">{HERO_DATA.buttonTextTwo}</Link>
                    </div>
                </div>

                {/* Right column: decorative badge cluster, hidden on smaller screens */}
                <div ref={circleWrapperRef} className="hidden lg:flex relative items-center justify-center min-h-100">
                    <div ref={circleRef}  className="w-64 h-64 rounded-full bg-base-200 border-2 border-primary shadow-[0_0_60px_-10px] shadow-primary flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">{"</>"}</span>
                    </div>

                    <div ref={tag1Ref} className="card bg-base-200 shadow-md px-8 py-2 absolute top-8 right-0 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Programmer</h4>
                    </div>

                    <div ref={tag2Ref} className="card bg-base-200 shadow-md px-8 py-2 absolute bottom-3 left-0 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Maintenir</h4>
                    </div>

                    <div ref={tag3Ref} className="card bg-base-200 shadow-md px-8 py-2 absolute top-9 left-0 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Concevoir</h4>
                    </div>

                    <div ref={tag4Ref} className="card bg-base-200 shadow-md px-8 py-2 absolute bottom-4 right-4 border border-primary-content hover:border-primary transition-colors duration-500">
                        <h4 className="font-bold text-sm">Déployer</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}