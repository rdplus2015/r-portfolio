// ProjectCard.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProjects, type Project } from "../../services/projects.ts";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  frontendImage?: string;
  featured?: boolean;
  tags: string; // matches Django's single CharField, not an array
  skills: { id: number; name: string }[]; // matches Django's ManyToManyField to Skill
}

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
        {featured && <span className="badge badge-success badge-outline w-fit">Featured</span>}

        <h2 className="text-xl font-bold">{title}</h2>

        <div className="flex gap-2 flex-wrap">
          {tags.split(",").map((tag) => (
            <span key={tag} className="badge badge-primary w-fit">
              {tag.trim()}
            </span>
          ))}
        </div>

        <p>{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span key={skill.id} className="badge badge-primary badge-outline">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects, including nested skills, once on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Impossible de charger les projets");
      }
    };

    fetchProjects();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          slug={project.slug}
          description={project.description}
          frontendImage={project.frontend_image}
          featured={project.featured}
          tags={project.tags}
          skills={project.skills}
        />
      ))}
    </div>
  );
}