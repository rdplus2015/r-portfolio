import { useState, useEffect } from "react";
import { getExperience, type Experience as ExperienceData } from "../../services/experience.ts";

function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const days = end.getDate() - start.getDate();

  if (days < 0) months -= 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (remainingMonths > 0) parts.push(`${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(" and ") : "Less than a month";
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function ExperienceCard({ exp }: { exp: ExperienceData }) {
  return (
    <div className="bg-base-200 p-6 rounded-box w-full">
      <p className="text-sm text-neutral-content">
        {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
      </p>

      <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>

      <div className="flex gap-2 flex-wrap mt-2 items-center">
        {exp.company_logo && (
          <img src={exp.company_logo} alt={exp.company} className="w-6 h-6 rounded-full object-contain" />
        )}
        <span className="badge badge-lg">{exp.company}</span>
        <span className="badge badge-lg">{exp.location}</span>
        <span className="badge badge-lg">{exp.type}</span>
      </div>

      {exp.start_date && (
        <p className="text-base text-neutral-content mt-2">
          {formatDuration(exp.start_date, exp.end_date)}
        </p>
      )}

      <p className="text-base mt-3">{exp.description}</p>

      {exp.technologies.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {exp.technologies.map((tech) => (
            <span key={tech.id} className="badge badge-outline badge-lg">
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch experience entries, including nested technologies, once on mount
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await getExperience();
        setExperience(data);
      } catch (err) {
        setError("Impossible de charger les expériences");
      }
    };

    fetchExperience();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div id={"experience"} className="py-30 px-7 sm:px-6 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Experience
        </h2>

        <div className="relative flex flex-col gap-10">
          {/* Vertical line down the center on desktop, hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" />

          {experience.map((exp, index) => (
            <div
              key={exp.id}
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
  );
}