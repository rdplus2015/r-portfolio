const DASHBOARD_STATS = [
  { label: "Projects", count: 4 },
  { label: "Skills", count: 12 },
  { label: "Education", count: 3 },
]

export function AdminDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats shadow">
        {DASHBOARD_STATS.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-title">{stat.label}</div>
            <div className="stat-value">{stat.count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}