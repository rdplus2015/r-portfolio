import { Tag } from "./Tag.tsx"

export function About() {
  const ABOUT_DATA = {
    title: "About Me",
    description:
      "Full-Stack and Cloud Native developer, currently pursuing a DEC in Computer Science Techniques at Collège de Rosemont, with graduation expected in June 2027. Passionate about software development since the age of 16, I enjoy building robust applications, automating processes, and exploring modern technologies. Curious and constantly learning, I like taking on new challenges — whether in programming, software architecture, or DevOps.",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  }

  return (
      <div id="about" className="py-20 px-12 sm:px-6 bg-base-100 border-b border-base-200">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
              <h1 className="text-[clamp(2.25rem,6vw,5.5rem)]  font-bold"> {ABOUT_DATA.title.toUpperCase()} </h1>
              <p className="text-base sm:text-lg text-neutral-content leading-relaxed">{ABOUT_DATA.description}</p>
              <div className="flex gap-2 flex-wrap">
                  {ABOUT_DATA.languages.map((lang) => (
                      <Tag key={lang.name} label={`${lang.name} — ${lang.level}`} />
                  ))}
              </div>
          </div>
      </div>
  )
}