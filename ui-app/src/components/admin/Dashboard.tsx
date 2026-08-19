const DASHBOARD_STATS = [
  { label: "Projects", count: 4 },
  { label: "Skills", count: 12 },
  { label: "Education", count: 3 },
]

export function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>

      <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-200 w-full">
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