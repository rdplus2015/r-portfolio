import { Link } from "react-router-dom"

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
  slug,
  description,
  frontendImage,
  featured,
  tags,
  skills,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="card w-full sm:w-96 bg-base-200 shadow-sm overflow-hidden hover:shadow-md hover:shadow-primary transition-shadow duration-300">
      {frontendImage && (
        <figure className="bg-base-100 h-56">
          <img src={frontendImage} alt={title} className="w-full h-full object-cover" />
        </figure>
      )}

      <div className="card-body">
        {featured && <span className="badge badge-primary w-fit">Featured</span>}

        <h2 className="text-xl font-bold">{title}</h2>

        <div className="flex gap-2 flex-wrap">
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
      </div>
    </Link>
  )
}

export function ProjectsList() {
  return (
    <div className="flex flex-wrap gap-6">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  )
}

export { PROJECTS_DATA }
export type { ProjectCardProps }