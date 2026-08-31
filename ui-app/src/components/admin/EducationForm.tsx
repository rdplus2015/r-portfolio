// EducationForm.tsx
// Used for both creating a new entry and editing an existing one.

import { FormInput } from "./shared/FormInput"
import { FormTextarea } from "./shared/FormTextarea"

export function EducationForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Education</h1>

      <form className="flex flex-col justify-center gap-4 max-w-md">
        {/* Degree name or certification title */}
        <FormInput
          id="title"
          label="Title"
          placeholder="e.g. DEC Techniques de l'informatique"
        />

        {/* School or certifying organization */}
        <FormInput
          id="organization"
          label="Organization"
          placeholder="e.g. Collège de Rosemont"
        />

        {/* Only relevant for education entries, optional for certifications */}
        <FormInput
          id="location"
          label="Location"
          placeholder="e.g. Montreal, Canada"
        />

        {/* Free text description of what was studied or achieved */}
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

        {/* Marks whether this entry is still ongoing (e.g. a degree in progress) */}
        <div className="flex items-center gap-2">
          <input id="inProgress" type="checkbox" className="checkbox" />
          <label className="label" htmlFor="inProgress">Currently in progress</label>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}