import { Tag } from "./Tag.tsx"

export function About() {
  const ABOUT_DATA = {
    title: "About Me",
    location: "Montréal, Québec, Canada",
    available: true,
    description:
      "Full-Stack and Cloud Native developer, currently pursuing a DEC in Computer Science Techniques at Collège de Rosemont, with graduation expected in June 2027. Passionate about software development since the age of 16, I enjoy building robust applications, automating processes, and exploring modern technologies. Curious and constantly learning, I like taking on new challenges — whether in programming, software architecture, or DevOps.",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
    interests: ["Piano", "Batterie", "Échecs", "Animes japonais", "Architecture logicielle"],
  }

  return (
      <div id="about" className="py-20 px-12 sm:px-6 bg-base-200 border-b border-base-200">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">

              {/* Location — SVG pin + text */}
              <div className="flex items-center gap-2 text-neutral-content">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{ABOUT_DATA.location}</span>
              </div>

              {/* Availability badge — brighter ping */}
              <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-150 ${ABOUT_DATA.available ? "bg-success" : "bg-error"}`}></span>
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${ABOUT_DATA.available ? "bg-success" : "bg-error"}`}></span>
                  </span>
                  <span className="text-sm font-medium">
                      {ABOUT_DATA.available ? "Available" : "Not available"}
                  </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{ABOUT_DATA.title.toUpperCase()}</h1>

              <p className="text-base sm:text-lg text-neutral-content leading-relaxed">{ABOUT_DATA.description}</p>

              {/* Languages */}
              <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-wide text-neutral-content/50">Languages</span>
                  <div className="flex gap-2 flex-wrap">
                      {ABOUT_DATA.languages.map((lang) => (
                          <Tag key={lang.name} label={`${lang.name} — ${lang.level}`} color="var(--color-primary)" />
                      ))}
                  </div>
              </div>

              {/* Clear separation between languages and interests */}
              <div className="divider my-0"></div>

              {/* Interests */}
              <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-wide text-neutral-content/50">Interests</span>
                  <div className="flex gap-2 flex-wrap">
                      {ABOUT_DATA.interests.map((interest) => (
                          <Tag key={interest} label={interest} color="var(--color-accent)" />
                      ))}
                  </div>
              </div>

          </div>
      </div>
  )
}