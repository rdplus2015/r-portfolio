import { useState, useEffect } from "react";
import { getEducation, type Education } from "../../services/education.ts";

export function Education() {
  const [education, setEducation] = useState<Education[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch education and certification data once on mount
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const data = await getEducation();
        setEducation(data);
      } catch (err) {
        setError("Impossible de charger les données de formation");
      }
    };

    fetchEducation();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div id={"education"} className="py-30 px-7 sm:px-6 bg-base-200 border-b border-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Education & Certifications
          </h2>
          <p className="text-neutral-content/60 text-base sm:text-lg">
            An overview of my academic background, certifications, and key credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {education.map((item) => (
            <div key={item.id} className="card bg-base-300 shadow-sm shadow-secondary-content hover:shadow-md hover:shadow-primary overflow-hidden border border-transparent hover:border-primary transition-colors duration-300">
              {item.badge_image && (
                <figure className="bg-base-100 h-65 flex items-center justify-center p-5">
                  <img
                    src={item.badge_image}
                    alt={`${item.organization} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </figure>
              )}

              <div className="card-body">
                <h2 className="text-xl font-bold">{item.title}</h2>

                <div className="flex gap-2 flex-wrap">
                  <span className="badge">{item.organization}</span>
                  {item.location && <span className="badge">{item.location}</span>}
                  {item.in_progress ? (
                    <span className="badge badge-warning">In Progress</span>
                  ) : (
                    <span className="badge badge-success">{item.issued_date}</span>
                  )}
                </div>

                {(item.start_date || item.end_date) && (
                  <p>
                    {item.start_date} - {item.end_date}
                  </p>
                )}

                {item.description && <p className="text-lg">{item.description}</p>}

                {item.credential_url && (
                  <a href={item.credential_url} className="link" target="_blank" rel="noopener noreferrer">
                    View credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}