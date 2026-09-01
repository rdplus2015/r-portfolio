/**
 * InterestForm.tsx
 *
 * Used for both creating a new interest entry and editing an existing
 * one.
 */

import { FormInput } from "./shared/FormInput"

export function InterestForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add / Edit Interest</h1>

      <form className="flex flex-col gap-4 max-w-md">
        <FormInput id="label" label="Interest" placeholder="e.g. Chess" />

        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  )
}