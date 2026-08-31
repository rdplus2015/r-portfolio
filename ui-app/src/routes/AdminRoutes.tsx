// AdminRoutes.tsx
// Groups all backoffice routes under /admin/*.
// Delegated from App.tsx via a wildcard route.

import { Routes, Route } from "react-router-dom"

import { AdminDashboard } from "../components/admin/Dashboard"
import { EducationForm } from "../components/admin/EducationForm"
import { EducationList } from "../components/admin/ EducationList"


export function AdminRoutes() {
  return (
    <Routes>
        {/* /admin -> dashboard overview */}
        <Route index element={<AdminDashboard />} />

        {/* /admin/education, /admin/education/new, /admin/education/:id/edit */}
        <Route path="education" element={<EducationList />} />
        <Route path="education/new" element={<EducationForm />} />
        <Route path="education/:id/edit" element={<EducationForm />} />
        <Route path="education/new" element={<EducationForm />} />
        <Route path="education/:id/edit" element={<EducationForm />} />

    </Routes>
  )
}