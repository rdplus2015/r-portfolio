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
  image?: string // logo of the institution or certification issuer
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
    image: "",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    issuedDate: "2025",
    inProgress: false,
    credentialUrl: "",
    image: "",
  },
  {
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    inProgress: true,
    image: "/public/0.webp",
  },
]

export function Education() {
  return (
    <div id={"education"} className="py-20 px-4 sm:px-6 bg-base-200 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <h2 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
          Education
        </h2>

        <div className="flex flex-wrap gap-6">
          {EDUCATION_DATA.map((item) => (
            <div key={item.title} className="card w-96 bg-base-300 shadow-sm shadow-secondary-content hover:shadow-md hover:shadow-primary overflow-hidden border border-transparent hover:border-primary transition-colors duration-300">
              {item.image && (
                <figure className="bg-base-100 h-80 flex items-center justify-center p-10">
                  <img
                    src={item.image}
                    alt={`${item.organization} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </figure>
              )}

              <div className="card-body">
                <h2 className="text-xl font-bold">{item.title}</h2>

                <div className="flex gap-2 flex-wrap">
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

      </div>
    </div>
  )
}