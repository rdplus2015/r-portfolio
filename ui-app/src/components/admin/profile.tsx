/**
 * Profile.tsx
 *
 * Single admin page displaying the full personal profile at a glance:
 * about info (including contact and social links), languages, and
 * interests. Each section shows its current data with edit/add actions,
 * rather than being split into separate top-level pages.
 */

import { Link } from "react-router-dom"

const PROFILE_DATA = {
  bio: "Full-Stack and Cloud Native developer, currently pursuing a DEC in Computer Science Techniques.",
  location: "Montreal, Canada",
  email: "rdplus2015@gmail.com",
  phone: "+1 514 000 0000",
  githubUrl: "https://github.com/rdplus2015",
  linkedinUrl: "https://www.linkedin.com/in/rdplus2015/",
}

const LANGUAGES = [
  { id: 1, name: "French", level: "Native" },
  { id: 2, name: "English", level: "Intermediate" },
]

const INTERESTS = [
  { id: 1, label: "Chess" },
  { id: 2, label: "Piano" },
  { id: 3, label: "Drums" },
]

export function Profile() {
  return (
    <div className="flex flex-col gap-6">
      {/* About, contact, and social links — all fixed single values */}
      <section className="card bg-base-200 p-10 gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">About</h2>
          <Link to="/admin/profile/about/edit" className="btn btn-primary btn-sm">Edit</Link>
        </div>
        <p>{PROFILE_DATA.bio}</p>
        <p>{PROFILE_DATA.location}</p>
        <p>{PROFILE_DATA.email}</p>
        <p>{PROFILE_DATA.phone}</p>
        <p>GitHub: {PROFILE_DATA.githubUrl}</p>
        <p>LinkedIn: {PROFILE_DATA.linkedinUrl}</p>
      </section>

      {/* Languages — a real one-to-many relation, so it's a list */}
      <section className="card bg-base-200 p-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Languages</h2>
          <Link to="/admin/profile/languages/new" className="btn btn-primary btn-sm mb-3">Add New</Link>
        </div>
        <ul className="flex flex-col gap-1">
          {LANGUAGES.map((lang) => (
            <li key={lang.id} className="flex justify-between items-center">
              <span>{lang.name} — {lang.level}</span>
              <div className="flex gap-2">
                <Link to={`/admin/profile/languages/${lang.id}/edit`} className="btn btn-xs btn-warning">Edit</Link>
                <button className="btn btn-xs btn-error">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Interests — same reasoning as Languages */}
      <section className="card bg-base-200 p-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Interests</h2>
          <Link to="/admin/profile/interests/new" className="btn btn-primary btn-sm mb-3">Add New</Link>
        </div>
        <ul className="flex flex-col gap-1">
          {INTERESTS.map((interest) => (
            <li key={interest.id} className="flex justify-between items-center">
              <span>{interest.label}</span>
              <div className="flex gap-2">
                <Link to={`/admin/profile/interests/${interest.id}/edit`} className="btn btn-xs btn-warning">Edit</Link>
                <button className="btn btn-xs btn-error">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}