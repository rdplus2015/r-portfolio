// FormTextarea.tsx
// Reusable labeled textarea field, used across all admin forms.

interface FormTextareaProps {
  id: string
  label: string
  placeholder?: string
}

export function FormTextarea({ id, label, placeholder }: FormTextareaProps) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <textarea id={id} className="textarea w-full" placeholder={placeholder} />
    </div>
  )
}