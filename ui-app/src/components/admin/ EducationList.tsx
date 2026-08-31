// EducationList.tsx
// Admin view listing all education and certification entries.
// Each row can be edited (opens EducationForm pre-filled) or deleted (with confirmation).
// Currently static: buttons don't perform any action yet (no hooks/routing wired in).

interface EducationItem {
  id: number
  title: string
  organization: string
  inProgress: boolean
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    title: "DEC Techniques de l'informatique",
    organization: "Collège de Rosemont",
    inProgress: true,
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    inProgress: false,
  },
  {
    id: 3,
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    inProgress: true,
  },
]

export function EducationList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Education & Certifications</h1>
        <button className="btn btn-primary">Add New</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Organization</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {EDUCATION_DATA.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.organization}</td>
              <td>
                {item.inProgress ? (
                  <span className="badge badge-warning">In Progress</span>
                ) : (
                  <span className="badge badge-success">Completed</span>
                )}
              </td>
              <td className="flex gap-2">
                <button className="btn btn-sm">Edit</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}