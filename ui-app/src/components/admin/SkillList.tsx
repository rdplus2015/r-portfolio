/**
 * SkillList.tsx
 *
 * Admin view listing all skills. Follows the same DataTable pattern as
 * EducationList and ExperienceList.
 *
 */

import { DataTable } from "./shared/DataTable"

// Shape of a single skill entry, matching the simplified Skill model
// (name + category, as decided for the public-facing Skills section).
interface SkillItem {
  id: number
  name: string
  category: string
}

// Temporary mock data, standing in for what will later come from the API.
const SKILL_DATA: SkillItem[] = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "Django REST Framework", category: "Backend" },
  { id: 3, name: "Docker", category: "DevOps" },
  { id: 4, name: "AWS", category: "DevOps" },
]

export function SkillList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Skills</h1>
        <button className="btn btn-primary">Add New</button>
      </div>

      <DataTable
        data={SKILL_DATA}
        getRowKey={(item) => item.id}
        columns={[
          { header: "Name", render: (item) => item.name },
          {
            header: "Category",
            render: (item) => <span className="badge badge-outline">{item.category}</span>,
          },
        ]}
        onEdit={(item) => console.log("Edit", item)}
        onDelete={(item) => console.log("Delete", item)}
      />
    </div>
  )
}