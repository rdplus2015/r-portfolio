      /**
 * AdminRoutes.tsx
 *
 * Groups all backoffice routes under /admin/*, delegated from App.tsx
 * via a wildcard route. AdminLayout wraps this component once in App.tsx,
 * so every route defined here automatically renders inside the sidebar
 * layout, without repeating it per page.
 */

import { Routes, Route } from "react-router-dom"

import { AdminDashboard } from "../components/admin/Dashboard"

import { EducationForm } from "../components/admin/EducationForm"

import { ExperienceList } from "../components/admin/ExperienceList"
import { ExperienceForm } from "../components/admin/ExperienceForm"

import { SkillList } from "../components/admin/SkillList"
import { SkillForm } from "../components/admin/SkillForm"

import { ProjectForm } from "../components/admin/ProjectForm"


import { AboutForm } from "../components/admin/AboutForm"
import { LanguageForm } from "../components/admin/LanguageForm"
import { InterestForm } from "../components/admin/InterestForm"
import { EducationList } from "../components/admin/ EducationList"
import { Profile } from "../components/admin/profile"
import { ProjectList } from "../components/admin/ProjectList"

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

      {/* /admin/profile -> overview of about, languages, and interests */}
      <Route path="profile" element={<Profile />} />
      <Route path="profile/about/edit" element={<AboutForm />} />
      <Route path="profile/languages/new" element={<LanguageForm />} />
      <Route path="profile/languages/:id/edit" element={<LanguageForm />} />
      <Route path="profile/interests/new" element={<InterestForm />} />
      <Route path="profile/interests/:id/edit" element={<InterestForm />} />
    </Routes>
  )
}