/**
 * AdminRoutes.tsx
 *
 * Groups all backoffice routes under /admin/*, delegated from App.tsx
 * via a wildcard route. AdminLayout wraps this component once in App.tsx,
 * so every route defined here automatically renders inside the sidebar
 * layout, without repeating it per page.
 */

import { Routes, Route } from "react-router-dom"


import { EducationForm } from "../components/admin/EducationForm"

import { ExperienceList } from "../components/admin/ExperienceList"
import { ExperienceForm } from "../components/admin/ExperienceForm"

import { SkillList } from "../components/admin/SkillList"
import { SkillForm } from "../components/admin/SkillForm"


import { ProfileForm, ProjectList } from "../components/admin/ProfileForm"
import { EducationList } from "../components/admin/ EducationList"
import { AdminDashboard } from "../components/admin/Dashboard"
import { ProjectForm } from "../components/admin/ProjectForm"


export function AdminRoutes() {
  return (
    <Routes>
      {/* /admin -> dashboard overview */}
      <Route index element={<AdminDashboard />} />

      {/* /admin/education, /admin/education/new, /admin/education/:id/edit */}
      <Route path="education" element={<EducationList />} />
      <Route path="education/new" element={<EducationForm />} />
      <Route path="education/:id/edit" element={<EducationForm />} />

      {/* /admin/experience, /admin/experience/new, /admin/experience/:id/edit */}
      <Route path="experience" element={<ExperienceList />} />
      <Route path="experience/new" element={<ExperienceForm />} />
      <Route path="experience/:id/edit" element={<ExperienceForm />} />

      {/* /admin/skills, /admin/skills/new, /admin/skills/:id/edit */}
      <Route path="skills" element={<SkillList />} />
      <Route path="skills/new" element={<SkillForm />} />
      <Route path="skills/:id/edit" element={<SkillForm />} />

      {/* /admin/projects, /admin/projects/new, /admin/projects/:id/edit */}
      <Route path="projects" element={<ProjectList />} />
      <Route path="projects/new" element={<ProjectForm />} />
      <Route path="projects/:id/edit" element={<ProjectForm />} />

      {/* /admin/profile -> single form, no list (About, Language, Interest, SocialLink, SiteConfig) */}
      <Route path="profile" element={<ProfileForm />} />
    </Routes>
  )
}