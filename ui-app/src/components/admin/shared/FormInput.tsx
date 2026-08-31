// FormInput.tsx
// Reusable labeled input field, used across all admin forms.

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
}

export function FormInput({ id, label, type = "text", placeholder }: FormInputProps) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <input id={id} type={type} className="input w-full" placeholder={placeholder} />
    </div>
  )
}