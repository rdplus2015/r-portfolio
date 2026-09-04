import { useState, useEffect } from "react";
import { Tag } from "./Tag";
import { getAbout, type About as AboutData } from "../../services/about.ts";

export function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch about data (including nested languages/interests) once on mount
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout();
        setAbout(data);
      } catch (err) {
        setError("Impossible de charger les informations");
      }
    };

    fetchAbout();
  }, []);

  if (error) return <p>{error}</p>;
  if (!about) return <p>Chargement...</p>;

  return (
    <div id="about" className="py-20 px-7 sm:px-6 bg-base-200 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">

        {/* Location — SVG pin + text */}
        <div className="flex items-center gap-2 text-neutral-content">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-md">{about.location}</span>
        </div>

        {/* Availability badge — brighter ping */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-150 ${about.available ? "bg-success" : "bg-error"}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${about.available ? "bg-success" : "bg-error"}`}></span>
          </span>
          <span className="text-sm font-medium">
            {about.available ? "Available" : "Not available"}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-3">ABOUT ME</h1>

        <p className="text-lg sm:text-xl text-neutral-content leading-relaxed">{about.description}</p>

        {/* Languages */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-content/50">Languages</span>
          <div className="flex gap-2 flex-wrap">
            {about.languages.map((lang) => (
              <Tag key={lang.id} label={`${lang.name} — ${lang.level}`} color="var(--color-primary)" />
            ))}
          </div>
        </div>

        {/* Clear separation between languages and interests */}
        <div className="divider my-0"></div>

        {/* Interests */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-content/50">Interests</span>
          <div className="flex gap-2 flex-wrap">
            {about.interests.map((interest) => (
              <Tag key={interest.id} label={interest.label} color="var(--color-accent)" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}