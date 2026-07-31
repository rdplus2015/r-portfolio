export function LoginForm() {
  const credentials = {
    email: "",
    password: "",
  }

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Login</legend>

      <label className="label" htmlFor="email">Email</label>
      <input id="email" type="email" className="input" placeholder="Email" />

      <label className="label" htmlFor="password">Password</label>
      <input id="password" type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>
  )
}