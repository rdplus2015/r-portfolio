// ProjectView.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../layout/Header";
import { getColorForSkill } from "../Skills";
import { Tag } from "../Tag";
import type { Project } from "../../../services/projects";

export function ProjectView() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all projects once, then locate the one matching the current slug
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        const match = projects.find((p) => p.slug === slug);

        if (match) {
          setProject(match);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        setError("Impossible de charger le projet");
      }
    };

    fetchProject();
  }, [slug]);

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p>{error}</p>
        <Link to="/projects" className="link text-primary">Back to projects</Link>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p>Project not found.</p>
        <Link to="/projects" className="link text-primary">Back to projects</Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p>Chargement...</p>
      </div>
    );
  }

  const {
    title,
    long_description,
    backend_image,
    frontend_image,
    deployment_image,
    github_url,
    live_url,
    linkedin_url,
    tags,
    skills,
  } = project;

  const images = [frontend_image, backend_image, deployment_image].filter(Boolean);

  return (
    <>
      <Header />

      <div className="py-20 px-8 sm:px-6 bg-base-100 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">

          <Link to="/projects" className="link text-primary w-fit flex gap-2">
            <svg className="w-6 h-6" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>

            Back to projects</Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>

          <div className="flex gap-2 flex-wrap">
            {tags.split(",").map((tag) => (
              <span key={tag} className="badge badge-success">{tag.trim()}</span>
            ))}
          </div>

          {images.length > 0 && (
            <div className="carousel w-full rounded-box">
              {images.map((img, i) => (
                <div key={i} id={`slide-${i}`} className="carousel-item relative w-full">
                  <img
                    src={img}
                    alt={`${title} screenshot ${i + 1}`}
                    className="w-full object-cover"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide-${i === 0 ? images.length - 1 : i - 1}`} className="btn btn-circle">❮</a>
                    <a href={`#slide-${i === images.length - 1 ? 0 : i + 1}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-base sm:text-lg text-neutral-content">
            {long_description}
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Tag key={skill.id} label={skill.name} color={getColorForSkill(skill.name)}/>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {github_url && (
              <a href={github_url} className="btn btn-outline btn-primary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {linkedin_url && (
              <a href={linkedin_url} className="btn btn-outline btn-primary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {live_url && (
              <a href={live_url} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </>
  );
}