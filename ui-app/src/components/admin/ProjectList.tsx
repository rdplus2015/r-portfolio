/**
 * ProjectForm.tsx
 *
 * Used for both creating a new project and editing an existing one.
 * Covers short and long descriptions, three separate image categories
 * (frontend/backend/deployment), external links, and tags/skills.
 *
 * Tags and skills are entered as comma-separated text; image fields
 * accept a URL rather than a file upload.
 */

import { FormInput } from "./shared/FormInput"
import { FormTextarea } from "./shared/FormTextarea"

export function ProjectForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Project</h1>

      <form className="flex flex-col gap-4 max-w-2xl">
        {/* Project title */}
        <FormInput id="title" label="Title" placeholder="e.g. Personal Portfolio" />

        {/* URL-friendly identifier, used for the project detail route (/projects/:slug) */}
        <FormInput id="slug" label="Slug" placeholder="e.g. personal-portfolio" />

        {/* Short summary, shown on the project card */}
        <FormTextarea
          id="description"
          label="Short Description"
          placeholder="One or two sentences summarizing the project..."
        />

        {/* Full write-up, shown on the project detail page */}
        <FormTextarea
          id="longDescription"
          label="Long Description"
          placeholder="Full project write-up..."
        />

        {/* One image per category, matching the three ProjectCardProps image fields */}
        <FormInput id="frontendImage" label="Frontend Image URL" placeholder="/images/..." />
        <FormInput id="backendImage" label="Backend Image URL" placeholder="/images/..." />
        <FormInput id="deploymentImage" label="Deployment Image URL" placeholder="/images/..." />

        {/* External links, all optional */}
        <FormInput id="githubUrl" label="GitHub URL" placeholder="https://github.com/..." />
        <FormInput id="liveUrl" label="Live Demo URL" placeholder="https://..." />
        <FormInput id="linkedinUrl" label="LinkedIn Post URL" placeholder="https://linkedin.com/..." />

        {/* Comma-separated list, parsed into an array on submit */}
        <FormInput id="tags" label="Tags (comma-separated)" placeholder="e.g. Personal Project, Web App" />
        <FormInput id="skills" label="Skills (comma-separated)" placeholder="e.g. React, Django REST Framework" />

        {/* Marks whether this project should be highlighted on the public site */}
        <div className="flex items-center gap-2">
          <input id="featured" type="checkbox" className="checkbox" />
          <label className="label" htmlFor="featured">Featured project</label>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}