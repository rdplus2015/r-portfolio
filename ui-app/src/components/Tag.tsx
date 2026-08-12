interface TagProps {
  label: string
  color?: string
}

// Normal version (without destructuring):
// export function Tag(props: TagProps) {
//   return <div className="badge badge-primary">{props.label}</div>
// }

// Destructured version (the one I'm keeping):
export function Tag({ label, color }: TagProps) {
  return (
    <div
      className="badge badge-sm lg:badge-lg badge-secondary gap-2 border border-transparent transition-colors duration-300"
      style={{ borderColor: "transparent" }}
      onMouseEnter={(e) => color && (e.currentTarget.style.borderColor = color)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
    >
      {color && (
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </div>
  )
}