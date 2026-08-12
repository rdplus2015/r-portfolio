const CONTACT_DATA = {
    title: "Contact",
    description: "Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.",
    email: "rdplus2015@gmail.com",
    githubUrl: "https://github.com/rdplus2015",
    linkedinUrl: "https://www.linkedin.com/in/rdplus2015/",
}

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 bg-base-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">

                <h2 className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-tight">
                    {CONTACT_DATA.title}
                </h2>

                <p className="text-base sm:text-lg text-neutral-content max-w-2xl">
                    {CONTACT_DATA.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                        href={"mailto:" + CONTACT_DATA.email}
                        className="btn btn-primary gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {CONTACT_DATA.email}
                    </a>

                    <a
                        href={CONTACT_DATA.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-primary gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.4-3.87-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                        </svg>
                        GitHub Profile
                    </a>

                    <a
                        href={CONTACT_DATA.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-primary gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="4" fill="#0A66C2" />
                            <path fill="white" d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                        </svg>
                        LinkedIn Profile
                    </a>
                </div>

            </div>
        </section>
    )
}