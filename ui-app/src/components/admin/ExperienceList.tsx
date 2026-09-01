/**
 * ExperienceList.tsx
 *
 * Admin view listing all professional experience entries.
 * Follows the same pattern as EducationList: rendering is delegated to
 * the generic DataTable component, this file only defines the data shape
 * and how each column should be displayed.
 */

import { DataTable } from "./shared/DataTable"

// Shape of a single experience entry, matching the Experience model.
interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  isCurrent: boolean
}

// Temporary mock data, standing in for what will later come from the API.
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Concordia Security Centre",
    location: "Montreal, Canada",
    isCurrent: false,
  },
  {
    id: 2,
    title: "PHP Developer & WordPress Integrator",
    company: "AMM Solutions Numériques",
    location: "Montreal, Canada",
    isCurrent: false,
  },
]

export function ExperienceList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Experience</h1>
        <button className="btn btn-primary">Add New</button>
      </div>

      <DataTable
        data={EXPERIENCE_DATA}
        getRowKey={(item) => item.id}
        columns={[
          { header: "Title", render: (item) => item.title },
          { header: "Company", render: (item) => item.company },
          { header: "Location", render: (item) => item.location },
          {
            header: "Status",
            render: (item) =>
              item.isCurrent ? (
                <span className="badge badge-primary">Current</span>
              ) : (
                <span className="badge">Past</span>
              ),
          },
        ]}
        onEdit={(item) => console.log("Edit", item)}
        onDelete={(item) => console.log("Delete", item)}
      />
    </div>
  )
}