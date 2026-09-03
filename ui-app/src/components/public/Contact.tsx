import { useState, useEffect } from "react";
import { getSiteConfig, type SiteConfig } from "../../services/siteConfig";

export function Contact() {
  // Local state to hold the fetched site config and any fetch error
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch site config once on mount
  useEffect(() => {
    const fetchSiteConfig = async () => {
      try {
        const config = await getSiteConfig();
        setSiteConfig(config);
      } catch (err) {
        setError("Impossible de charger la configuration du site");
      }
    };

    fetchSiteConfig();
  }, []);

  // Early returns: loading / error states before rendering real content
  if (error) {
    return <p className="tag tabs-lg tag-danger">{error}</p>;
  }

  if (!siteConfig) {
    return <p className="tag tabs-lg tag-info">Chargement...</p>;
  }

  return (
    <section id="contact" className="py-30 px-4 sm:px-6 bg-base-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Contact
        </h2>
        <p className="text-base sm:text-lg text-neutral-content max-w-2xl">
          Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2 items-center sm:items-start w-full sm:w-auto">
          {/* Email link (mailto) */}
          <a href={"mailto:" + siteConfig.email_primary} className="btn btn-primary gap-2 w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {siteConfig.email_primary}
          </a>

          {/* GitHub profile link */}
          <a href={siteConfig.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary gap-2 w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.4-3.87-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
            GitHub Profile
          </a>

          {/* LinkedIn profile link */}
          <a href={siteConfig.linkedin_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary gap-2 w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" strokeWidth="2" />
              <circle cx="4" cy="4" r="2" strokeWidth="2" />
            </svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}