import { useState } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: call the auth endpoint (Django) with { email, password }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-6">
        <legend className="fieldset-legend text-lg">Login</legend>

        <label className="label" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="input w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label mt-2" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="input w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
      </form>
    </div>
  )
}