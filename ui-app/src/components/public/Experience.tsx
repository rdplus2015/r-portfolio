interface Technology {
  id: number
  name: string
}

interface ExperienceItem {
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  description: string
  companyLogo?: string
  technologies?: Technology[]
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Shopify",
    location: "Montreal, Canada",
    type: "Internship",
    startDate: "2025-05-01",
    endDate: "2025-08-31",
    description:
      "Secured an internship for Summer 2025, with the Streaming platform team (Data Streaming Infrastructure).",
  },
  {
    title: "Software Developer",
    company: "Concordia Security Centre",
    location: "Montreal, Canada",
    type: "Contract",
    startDate: "2023-10-01",
    endDate: "2024-09-07",
    description:
      "Built an Endpoint Detection & Response GUI using React, TypeScript, Axios, and Bootstrap, providing continuous endpoint monitoring and analytics for 300,000+ endpoints.",
    technologies: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "React" },
      { id: 3, name: "Bootstrap" },
    ],
  },
]

function formatDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const days = end.getDate() - start.getDate()

  if (days < 0) months -= 1

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`)
  if (remainingMonths > 0) parts.push(`${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`)

  return parts.length > 0 ? parts.join(" and ") : "Less than a month"
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <div className="bg-base-200 p-6 rounded-box w-full">
      <p className="text-sm text-neutral-content">
        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
      </p>

      <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>

      <div className="flex gap-2 flex-wrap mt-2 items-center">
        {exp.companyLogo && (
          <img src={exp.companyLogo} alt={exp.company} className="w-6 h-6 rounded-full object-contain" />
        )}
        <span className="badge badge-lg">{exp.company}</span>
        <span className="badge badge-lg">{exp.location}</span>
        <span className="badge badge-lg">{exp.type}</span>
      </div>

      <p className="text-base text-neutral-content mt-2">
        {formatDuration(exp.startDate, exp.endDate)}
      </p>

      <p className="text-base mt-3">{exp.description}</p>

      {exp.technologies && (
        <div className="flex gap-2 flex-wrap mt-3">
          {exp.technologies.map((tech) => (
            <span key={tech.id} className="badge badge-outline badge-lg">
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function Experience() {
  return (
    <div id={"experience"} className="py-30 px-7 sm:px-6 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Experience
        </h2>

        <div className="relative flex flex-col gap-10">
          {/* Vertical line down the center on desktop, hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" />

          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="w-full lg:w-1/2">
                <ExperienceCard exp={exp} />
              </div>

              {/* Center dot — desktop only */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10" />

              {/* Spacer to balance the other side */}
              <div className="hidden lg:block w-1/2" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}