

const CONTACT_DATA = {
    title: 'Contact',
    description: 'Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.',
    email: 'rdplus2015@gmail.com',
    githubUrl: 'https://github.com/rdplus2015',
    linkedinUrl: 'https://www.linkedin.com/in/rdplus2015/',
};


export function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>{CONTACT_DATA.title}</h2>
            <p>{CONTACT_DATA.description}</p>
            <ul>
                <li>Email: <a href={`mailto:${CONTACT_DATA.email}`}>{CONTACT_DATA.email}</a></li>
                <li>GitHub: <a href={CONTACT_DATA.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                <li>LinkedIn: <a href={CONTACT_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            </ul>
        </section>
    );
}