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
    <div id={"experience"} className="py-20 px-4 sm:px-6 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <h2 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
          Experience
        </h2>

        <ul className="timeline timeline-vertical">
          {EXPERIENCE_DATA.map((exp, index) => (
            <li key={exp.title + exp.company}>
              {index !== 0 && <hr className="bg-primary" />}

              <div className="timeline-middle">
                <div className="w-5 h-5 rounded-full bg-primary" />
              </div>

              <div className="timeline-end timeline-box bg-base-200 p-6 max-w-xl">
                <p className="text-sm text-neutral-content">
                  {exp.startDate} - {exp.endDate}
                </p>

                <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>

                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="badge badge-lg">{exp.company}</span>
                  <span className="badge badge-lg">{exp.location}</span>
                  <span className="badge badge-lg">{exp.type}</span>
                </div>

                <p className="text-base text-neutral-content mt-2">{exp.duration}</p>

                <p className="text-base mt-3">{exp.description}</p>

                {exp.technologies && (
                  <div className="flex gap-2 flex-wrap mt-3">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-outline badge-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {index !== EXPERIENCE_DATA.length - 1 && <hr className="bg-primary" />}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}