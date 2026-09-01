/**
 * LanguageForm.tsx
 *
 * Used for both creating a new language entry and editing an existing
 * one. The level field uses FormSelect, restricted to a fixed set of
 * proficiency levels.
 */

import { FormSelect } from "./shared/ FormSelect"
import { FormInput } from "./shared/FormInput"


const LEVEL_OPTIONS = ["Native", "Fluent", "Intermediate", "Basic"]

export function LanguageForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Language</h1>

      <form className="flex flex-col gap-4 max-w-md">
        <FormInput id="name" label="Language" placeholder="e.g. French" />
        <FormSelect id="level" label="Level" options={LEVEL_OPTIONS} />

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}