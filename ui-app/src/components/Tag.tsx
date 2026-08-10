interface TagProps {
  label: string
}

// Normal version (without destructuring):
// export function Tag(props: TagProps) {
//   return <div className="badge badge-primary">{props.label}</div>
// }

// Destructured version (the one I'm keeping):
export function Tag({ label }: TagProps) {
  return <div className="badge badge-primary">{label}</div>
}


