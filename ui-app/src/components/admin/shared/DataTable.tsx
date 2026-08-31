/**
 * DataTable.tsx
 *
 * Generic, reusable table component for admin list views
 * (EducationList, ExperienceList, SkillList, ProjectList, etc.).
 *
 * Each entity defines its own columns and row actions via props,
 * so this component has no knowledge of any specific data shape —
 * it only knows how to render whatever it's given. This avoids
 * duplicating <table>/<thead>/<tr>/<td> markup across every list view.
 */

// Describes a single column: a header label, and a function that knows
// how to render that column's value for a given row (item).
// Using a render function (instead of a fixed field name) lets a column
// display anything — plain text, a badge, a formatted date, etc.
interface Column<T> {
  header: string
  render: (item: T) => React.ReactNode
}

// <T> is a generic type placeholder: it means "whatever type of data
// this table is given" (EducationItem, ExperienceItem, Skill...).
// The table itself doesn't need to know what T actually is — it just
// works with whatever shape is passed in, while TypeScript still checks
// that columns/data/callbacks all agree on the same type.
interface DataTableProps<T> {
  columns: Column<T>[]         // how to render each column
  data: T[]                     // the rows to display
  getRowKey: (item: T) => string | number  // unique key per row, for React's key prop
  onEdit?: (item: T) => void    // optional: called when "Edit" is clicked on a row
  onDelete?: (item: T) => void  // optional: called when "Delete" is clicked on a row
}

export function DataTable<T>({ columns, data, getRowKey, onEdit, onDelete }: DataTableProps<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* One <th> per configured column */}
          {columns.map((col) => (
            <th key={col.header}>{col.header}</th>
          ))}

          {/* Only show an "Actions" header if at least one action was provided */}
          {(onEdit || onDelete) && <th>Actions</th>}
        </tr>
      </thead>

      <tbody>
        {/* One <tr> per item in the data array */}
        {data.map((item) => (
          <tr key={getRowKey(item)}>
            {/* For each row, run every column's render function against this item */}
            {columns.map((col) => (
              <td key={col.header}>{col.render(item)}</td>
            ))}

            {/* Action buttons, only rendered if the parent component passed them in */}
            {(onEdit || onDelete) && (
              <td className="flex gap-2">
                {onEdit && (
                  <button className="btn btn-sm" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button className="btn btn-sm btn-error" onClick={() => onDelete(item)}>
                    Delete
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}