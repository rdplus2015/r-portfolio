
interface ProjectCardProps {
  title: string
  slug: string
  description: string
  longDescription: string
  backendImage?: string
  frontendImage?: string
  deploymentImage?: string
  githubUrl?: string
  liveUrl?: string
  linkedinUrl?: string
  featured?: boolean
  tags: string[]
  skills: string[]
}

const PROJECTS_DATA: ProjectCardProps[] = [
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "A full-stack developer portfolio built from scratch, used as a learning vehicle for React, Django REST Framework, and cloud platforms.",
    longDescription:
      "This portfolio was built to practice React fundamentals before moving to Next.js, while also serving as my real, public-facing developer showcase. It connects to a Django REST Framework backend for dynamic content management, and it's deployed on Vercel with the API hosted on Railway.",
    backendImage: "/images/portfolio-backend.png",
    frontendImage: "/images/portfolio-frontend.png",
    deploymentImage: "/images/portfolio-deployment.png",
    githubUrl: "https://github.com/ridi/portfolio",
    liveUrl: "",
    linkedinUrl: "",
    featured: true,
    tags: ["Personal Project"],
    skills: ["React", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
  },
]

export function ProjectCard({
  title,
  description,
  frontendImage,
  githubUrl,
  liveUrl,
  linkedinUrl,
  featured,
  tags,
  skills,
}: ProjectCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <figure>
        <img src={frontendImage} alt={title} />
      </figure>

      <div className="card-body">
        {featured && <span className="badge badge-primary">Featured</span>}

        <h2 className="text-xl font-bold">{title}</h2>

        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>

        <p>{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span key={skill} className="badge badge-outline">
              {skill}
            </span>
          ))}
        </div>

        <div className="card-actions mt-4">
          {githubUrl && (
            <a href={githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <div className="flex flex-wrap gap-4">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  )
}