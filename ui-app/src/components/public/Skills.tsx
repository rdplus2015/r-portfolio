import { useState, useMemo, useEffect } from "react";
import { Tag } from "./Tag.tsx";
import { getSkills, type Skill } from "../../services/skills.ts";

const title = "Skills";

// Color palette sourced from DaisyUI theme variables instead of hardcoded
// hex values, so colors stay in sync if the theme palette changes.
const COLOR_PALETTE = [
  "var(--color-primary)",
  "var(--color-accent)",
  "var(--color-secondary)",
  "var(--color-info)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-error)",
];

// Deterministic color assignment based on skill name (same input always
// produces the same color), avoiding flicker between renders.
export function getColorForSkill(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLOR_PALETTE.length;
  return COLOR_PALETTE[index];
}

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch skills once on mount
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData);
      } catch (err) {
        setError("Impossible de charger les compétences");
      }
    };

    fetchSkills();
  }, []);

  // Categories derived from fetched skills data
  const categories = useMemo(() => {
    const unique = [...new Set(skills.map((skill) => skill.category))];
    return ["All", ...unique];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory, skills]);

  if (error) return <p>{error}</p>;

  return (
    <div id={"skills"} className="py-35 px-===  7 sm:px-6 bg-base-100 border-b border-base-200">
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
            <Tag key={skill.id} label={skill.name} color={getColorForSkill(skill.name)} />
          ))}
        </div>

      </div>
    </div>
  );
}