import { useState, useMemo } from "react"
import { Tag } from "./Tag.tsx"

const title = "Skills"

// Dummy data — will be replaced by an API call to /api/skills/
// (color is NOT part of the backend model — assigned client-side below)
const SKILLS = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Django REST Framework", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
]

// Uses your own DaisyUI theme variables (dim theme), not hardcoded hex —
// colors stay in sync automatically if the theme palette ever changes.
const COLOR_PALETTE = [
  "var(--color-primary)",
  "var(--color-accent)",
  "var(--color-secondary)",
  "var(--color-info)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-error)",
]

// Skills are assigned a color deterministically (same skill = same color
// every render), not truly at random, so tags don't flicker between colors.
function getColorForSkill(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % COLOR_PALETTE.length
  return COLOR_PALETTE[index]
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Categories are derived from the skills data itself, not hardcoded —
  // once skills come from DRF, this list updates automatically with them
  const categories = useMemo(() => {
    const unique = [...new Set(SKILLS.map((skill) => skill.category))]
    return ["All", ...unique]
  }, [])

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return SKILLS
    return SKILLS.filter((skill) => skill.category === activeCategory)
  }, [activeCategory])

  return (
    <div id={"skills"} className="py-35 px-7 sm:px-6 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h2>

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn ${activeCategory === category ? "btn-primary" : "btn-outline btn-primary"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <Tag key={skill.name} label={skill.name} color={getColorForSkill(skill.name)} />
          ))}
        </div>

      </div>
    </div>
  )
}