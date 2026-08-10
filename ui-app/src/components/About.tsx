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
    <div>
      <h1>{ABOUT_DATA.title}</h1>
      <p>{ABOUT_DATA.description}</p>

      <div className="flex gap-2">
        {ABOUT_DATA.languages.map((lang) => (
          <Tag key={lang.name} label={`${lang.name} — ${lang.level}`} />
        ))}
      </div>
    </div>
  )
}