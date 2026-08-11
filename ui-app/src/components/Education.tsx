interface EducationItem {
  title: string // degree or certification name
  organization: string // institution or issuer
  location?: string
  description?: string
  startDate?: string
  endDate?: string
  issuedDate?: string
  inProgress: boolean
  credentialUrl?: string
}

const EDUCATION_DATA: EducationItem[] = [
  {
    title: "DEC Techniques de l'informatique",
    organization: "Collège de Rosemont",
    location: "Montreal, Canada",
    description:
      "Studying software development, databases, and system architecture, with a focus on full-stack and cloud technologies.",
    startDate: "August 2024",
    endDate: "June 2027",
    inProgress: true,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    issuedDate: "2025",
    inProgress: false,
    credentialUrl: "",
  },
  {
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    inProgress: true,
  },
]

export function Education() {
  return (
    <div id={"education"}>
      {EDUCATION_DATA.map((item) => (
        <div key={item.title} className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="text-xl font-bold">{item.title}</h2>

            <div className="flex gap-2">
              <span className="badge">{item.organization}</span>
              {item.location && <span className="badge">{item.location}</span>}
              {item.inProgress ? (
                <span className="badge badge-warning">In Progress</span>
              ) : (
                <span className="badge badge-success">{item.issuedDate}</span>
              )}
            </div>

            {(item.startDate || item.endDate) && (
              <p>
                {item.startDate} - {item.endDate}
              </p>
            )}

            {item.description && <p>{item.description}</p>}

            {item.credentialUrl && (
              <a href={item.credentialUrl} className="link" target="_blank" rel="noopener noreferrer">
                View credential
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}