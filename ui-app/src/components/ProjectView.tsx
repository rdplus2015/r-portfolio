import { useParams, Link } from "react-router-dom"
import { PROJECTS_DATA } from "../components/ProjectCard.tsx"

export function ProjectView() {
  const { slug } = useParams()
  const project = PROJECTS_DATA.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p>Project not found.</p>
        <Link to="/projects" className="link text-primary">Back to projects</Link>
      </div>
    )
  }

  const {
    title,
    longDescription,
    backendImage,
    frontendImage,
    deploymentImage,
    githubUrl,
    liveUrl,
    linkedinUrl,
    tags,
    skills,
  } = project

  const images = [frontendImage, backendImage, deploymentImage].filter(Boolean)

  return (
    <div className="py-20 px-4 sm:px-6 bg-base-100 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <Link to="/projects" className="link text-primary w-fit">← Back to projects</Link>

        <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
          {title}
        </h1>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div key={i} className="bg-base-200 rounded-box overflow-hidden">
                <img src={img} alt={`${title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <p className="text-base sm:text-lg text-neutral-content">
          {longDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="badge badge-outline">{skill}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {githubUrl && (
            <a href={githubUrl} className="btn btn-outline btn-primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} className="btn btn-outline btn-primary" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>

      </div>
    </div>
  )
}