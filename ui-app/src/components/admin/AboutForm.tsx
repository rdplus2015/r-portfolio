/**
 * AboutForm.tsx
 *
 * Edits the About section: bio, contact info, and social links.
 * All fields here have exactly one value, unlike Languages and
 * Interests which are managed as separate lists.
 */

import { FormInput } from "./shared/FormInput"
import { FormTextarea } from "./shared/FormTextarea"

export function AboutForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit About</h1>

      <form className="flex flex-col gap-4 max-w-2xl">
        <FormTextarea id="bio" label="Bio" placeholder="Short biography..." />
        <FormTextarea id="whatIBring" label="What I Bring" placeholder="What makes you stand out..." />
        <FormInput id="avatarUrl" label="Avatar URL" placeholder="/images/avatar.png" />
        <FormInput id="location" label="Location" placeholder="e.g. Montreal, Canada" />
        <FormInput id="resumeUrl" label="Resume URL" placeholder="/resume.pdf" />

        <div className="flex items-center gap-2">
          <input id="available" type="checkbox" className="checkbox" />
          <label className="label" htmlFor="available">Currently available for work</label>
        </div>

        <FormInput
          id="availabilityMsg"
          label="Availability Message"
          placeholder="e.g. Open to internships starting Summer 2027"
        />

        <FormInput id="email" label="Email" type="email" placeholder="you@example.com" />
        <FormInput id="phone" label="Phone" placeholder="+1 514 000 0000" />

        <FormInput id="githubUrl" label="GitHub URL" placeholder="https://github.com/..." />
        <FormInput id="linkedinUrl" label="LinkedIn URL" placeholder="https://linkedin.com/in/..." />

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}