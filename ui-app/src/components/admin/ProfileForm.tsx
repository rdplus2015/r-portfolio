/**
 * ProfileForm.tsx
 *
 * Single admin screen for managing personal profile data: bio, contact
 * info, languages, interests, and social links. Unlike Education,
 * Experience, Skill, and Project, these entities have no list view —
 * they represent a single, fixed set of data about one person, so a
 * single form covers create and update in one place.
 *
 * Languages, interests, and social links are entered as comma-separated
 * text for now; a proper add/remove list UI would require state to
 * manage dynamically.
 */

import { FormInput } from "./shared/FormInput"
import { FormTextarea } from "./shared/FormTextarea"

export function ProfileForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <form className="flex flex-col gap-6 max-w-2xl">
        {/* About section */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">About</legend>

          <FormTextarea id="bio" label="Bio" placeholder="Short biography..." />
          <FormTextarea id="whatIBring" label="What I Bring" placeholder="What makes you stand out..." />
          <FormInput id="avatarUrl" label="Avatar URL" placeholder="/images/avatar.png" />
          <FormInput id="location" label="Location" placeholder="e.g. Montreal, Canada" />
          <FormInput id="resumeUrl" label="Resume URL" placeholder="/resume.pdf" />

          <div className="flex items-center gap-2 mt-2">
            <input id="available" type="checkbox" className="checkbox" />
            <label className="label" htmlFor="available">Currently available for work</label>
          </div>

          <FormInput
            id="availabilityMsg"
            label="Availability Message"
            placeholder="e.g. Open to internships starting Summer 2027"
          />
        </fieldset>

        {/* Contact section */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Contact</legend>

          <FormInput id="email" label="Email" type="email" placeholder="you@example.com" />
          <FormInput id="phone" label="Phone" placeholder="+1 514 000 0000" />
        </fieldset>

        {/* Languages section */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Languages</legend>

          <FormInput
            id="languages"
            label="Languages (comma-separated, name:level)"
            placeholder="e.g. French:Native, English:Intermediate"
          />
        </fieldset>

        {/* Interests section */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Interests</legend>

          <FormInput
            id="interests"
            label="Interests (comma-separated)"
            placeholder="e.g. Chess, Piano, Drums, Anime"
          />
        </fieldset>

        {/* Social links section */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Social Links</legend>

          <FormInput id="githubUrl" label="GitHub URL" placeholder="https://github.com/..." />
          <FormInput id="linkedinUrl" label="LinkedIn URL" placeholder="https://linkedin.com/in/..." />
        </fieldset>

        <button type="submit" className="btn btn-primary mt-2">Save Profile</button>
      </form>
    </div>
  )
}/**
 * ProjectList.tsx
 *
 * Admin view listing all portfolio projects.
 * Column rendering is delegated to the generic DataTable component;
 * this file only defines the data shape and how each column is displayed.
 */

import { DataTable } from "./shared/DataTable"

// Simplified shape used for the list view — just enough to identify
// and scan a project at a glance. The full set of fields (descriptions,
// images, links, tags, skills) lives in ProjectForm.
interface ProjectItem {
  id: number
  title: string
  featured: boolean
  tags: string[]
}

const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    featured: true,
    tags: ["Personal Project"],
  },
]

export function ProjectList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="btn btn-primary">Add New</button>
      </div>

      <DataTable
        data={PROJECT_DATA}
        getRowKey={(item) => item.id}
        columns={[
          { header: "Title", render: (item) => item.title },
          {
            header: "Tags",
            render: (item) => (
              <div className="flex gap-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline">{tag}</span>
                ))}
              </div>
            ),
          },
          {
            header: "Featured",
            render: (item) =>
              item.featured ? (
                <span className="badge badge-primary">Yes</span>
              ) : (
                <span className="badge">No</span>
              ),
          },
        ]}
        onEdit={(item) => console.log("Edit", item)}
        onDelete={(item) => console.log("Delete", item)}
      />
    </div>
  )
}