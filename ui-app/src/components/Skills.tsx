import { Tag } from "./Tag.tsx"

const CATEGORIES = ["All", "Frontend", "Backend", "DevOps"]

const SKILLS = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Django REST Framework", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
]

export function Skills() {
  return (
    <div  id={"skills"}>
      <div className="flex gap-2">
        {CATEGORIES.map((category) => (
          <button key={category} className="btn btn-outline">
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {SKILLS.map((skill) => (
          <Tag key={skill.name} label={skill.name} />
        ))}
      </div>
    </div>
  )
}