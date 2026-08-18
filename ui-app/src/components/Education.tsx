interface EducationItem {
  title: string
  organization: string
  location?: string
  description?: string
  startDate?: string
  endDate?: string
  issuedDate?: string
  inProgress: boolean
  credentialUrl?: string
  badgeImage?: string
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
    badgeImage: "/0.webp",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    issuedDate: "2025",
    inProgress: false,
    credentialUrl: "",
    badgeImage: "/0.webp",
  },
  {
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    inProgress: true,
    badgeImage: "/0.webp",
  },
]

export function Education() {
  return (
    <div id={"education"} className="py-30 px-7 sm:px-6 bg-base-200 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Education & Certifications
          </h2>
          <p className="text-neutral-content/60 text-base sm:text-lg">
            An overview of my academic background, certifications, and key credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {EDUCATION_DATA.map((item) => (
            <div key={item.title} className="card bg-base-300 shadow-sm shadow-secondary-content hover:shadow-md hover:shadow-primary overflow-hidden border border-transparent hover:border-primary transition-colors duration-300">
              {item.badgeImage && (
                <figure className="bg-base-100 h-65 flex items-center justify-center p-5">
                  <img
                    src={item.badgeImage}
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

                {item.description && <p className="text-lg">{item.description}</p>}

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