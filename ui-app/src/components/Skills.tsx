import { Tag } from "./Tag.tsx"

const CATEGORIES = ["All", "Frontend", "Backend", "DevOps"]
const title = "Skills"
const SKILLS = [
  { name: "React", category: "Frontend", color: "#58A6FF" },
  { name: "Next.js", category: "Frontend", color: "#f0f6fc" },
  { name: "Django REST Framework", category: "Backend", color: "#3975F4" },
  { name: "PostgreSQL", category: "Backend", color: "#4A90D9" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "AWS", category: "DevOps", color: "#FF9900" },
]

export function Skills() {
  return (
    <div id={"skills"} className="py-20 px-4 sm:px-6 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <h2 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
          {title}
        </h2>

        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((category) => (
            <button key={category} className="btn btn-outline btn-primary">
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <Tag key={skill.name} label={skill.name} color={skill.color} />
          ))}
        </div>

      </div>
    </div>
  )
}