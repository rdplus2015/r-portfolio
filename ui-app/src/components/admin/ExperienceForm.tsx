/**
 * ExperienceForm.tsx
 *
 * Used for both creating a new experience entry and editing an existing
 * one. Follows the same pattern as EducationForm, reusing the shared
 * FormInput and FormTextarea components.
 *
 */

import { FormInput } from "./shared/FormInput"
import { FormTextarea } from "./shared/FormTextarea"

export function ExperienceForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Experience</h1>

      <form className="flex flex-col gap-4 max-w-md">
        {/* Job title */}
        <FormInput
          id="title"
          label="Title"
          placeholder="e.g. Software Developer"
        />

        {/* Employer name */}
        <FormInput
          id="company"
          label="Company"
          placeholder="e.g. Concordia Security Centre"
        />

        {/* Job location */}
        <FormInput
          id="location"
          label="Location"
          placeholder="e.g. Montreal, Canada"
        />

        {/* Free text description of responsibilities and achievements */}
        <FormTextarea
          id="description"
          label="Description"
          placeholder="Short description..."
        />

        {/* Start / end dates */}
        <div className="flex gap-4">
          <div className="flex-1">
            <FormInput id="startDate" label="Start Date" type="date" />
          </div>
          <div className="flex-1">
            <FormInput id="endDate" label="End Date" type="date" />
          </div>
        </div>

        {/* Marks whether this is the current position */}
        <div className="flex items-center gap-2">
          <input id="isCurrent" type="checkbox" className="checkbox" />
          <label className="label" htmlFor="isCurrent">This is my current position</label>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}