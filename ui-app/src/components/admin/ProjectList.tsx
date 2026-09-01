/**
 * ProjectList.tsx
 *
 * Admin view listing all portfolio projects.
 * Column rendering is delegated to the generic DataTable component;
 * this file only defines the data shape and how each column is displayed.
 */

import { DataTable } from "./shared/DataTable"

// Simplified shape used for the list view — just enough to identify
// and scan a project at a glance. The full set of fields (descriptions,
// images, links, tags, skills) lives in ProjectForm.
interface ProjectItem {
  id: number
  title: string
  featured: boolean
  tags: string[]
}

const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    featured: true,
    tags: ["Personal Project"],
  },
]

export function ProjectList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="btn btn-primary">Add New</button>
      </div>

      <DataTable
        data={PROJECT_DATA}
        getRowKey={(item) => item.id}
        columns={[
          { header: "Title", render: (item) => item.title },
          {
            header: "Tags",
            render: (item) => (
              <div className="flex gap-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline">{tag}</span>
                ))}
              </div>
            ),
          },
          {
            header: "Featured",
            render: (item) =>
              item.featured ? (
                <span className="badge badge-primary">Yes</span>
              ) : (
                <span className="badge">No</span>
              ),
          },
        ]}
        onEdit={(item) => console.log("Edit", item)}
        onDelete={(item) => console.log("Delete", item)}
      />
    </div>
  )
}