/**
 * 
 * SkillForm.tsx
 * 
 * Used for both creating a new skill and editing an existing one.
 * The category field uses FormSelect, since it must match one of a
 * fixed set of values (Frontend, Backend, DevOps) rather than free text.
 * 
 */

import { FormSelect } from "./shared/ FormSelect"
import { FormInput } from "./shared/FormInput"

// Fixed list of allowed categories, matching the filter options
// used on the public Skills section.
const CATEGORY_OPTIONS = ["Frontend", "Backend", "DevOps"]

export function SkillForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Skill</h1>

      <form className="flex flex-col gap-4 max-w-md">
        {/* Skill name */}
        <FormInput id="name" label="Name" placeholder="e.g. React" />

        {/* Category, restricted to a fixed set of options */}
        <FormSelect id="category" label="Category" options={CATEGORY_OPTIONS} />

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}