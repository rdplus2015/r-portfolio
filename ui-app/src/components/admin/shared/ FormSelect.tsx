/**
 * FormSelect.tsx
 *
 * Reusable labeled dropdown field, used across admin forms whenever a
 * value must be chosen from a fixed set of options (e.g. skill category).
 */

interface FormSelectProps {
  id: string
  label: string
  options: string[]
}

export function FormSelect({ id, label, options }: FormSelectProps) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <select id={id} className="select w-full">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}