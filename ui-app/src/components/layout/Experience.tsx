interface ExperienceItem {
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  duration: string
  description: string
  technologies?: string[]
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Shopify",
    location: "Montreal, Canada",
    type: "Internship",
    startDate: "May 2025",
    endDate: "August 2025",
    duration: "4 months",
    description:
      "Secured an internship for Summer 2025, with the Streaming platform team (Data Streaming Infrastructure).",
  },
  {
    title: "Software Developer",
    company: "Concordia Security Centre",
    location: "Montreal, Canada",
    type: "Contract",
    startDate: "October 2023",
    endDate: "September 2024",
    duration: "11 months and 6 days",
    description:
      "Built an Endpoint Detection & Response GUI using React, TypeScript, Axios, and Bootstrap, providing continuous endpoint monitoring and analytics for 300,000+ endpoints.",
    technologies: ["TypeScript", "React", "Bootstrap"],
  },
]

export function Experience() {
  return (
    <div>
      {EXPERIENCE_DATA.map((exp) => (
        <div key={exp.title + exp.company} className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="text-xl font-bold">{exp.title}</h2>

            <div className="flex gap-2">
              <span className="badge">{exp.company}</span>
              <span className="badge">{exp.location}</span>
              <span className="badge">{exp.type}</span>
            </div>

            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.duration}</p>

            <p>{exp.description}</p>

            {exp.technologies && (
              <div className="flex gap-2 mt-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}