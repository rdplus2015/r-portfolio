/**
 * AdminRoutes.tsx
 *
 * This custom React backoffice has been superseded by Django's built-in
 * admin (django.contrib.admin), which already provides full CRUD for
 * every model without needing a separate frontend to build and maintain.
 *
 * The routes below are kept commented out for reference, in case a
 * custom admin UI is revisited later — but they are not currently wired
 * into the app.
 */

// import { Routes, Route } from "react-router-dom"
//
// import { AdminDashboard } from "../Dashboard"
//
// import { EducationList } from "../EducationList"
// import { EducationForm } from "../EducationForm"
//
// import { ExperienceList } from "../ExperienceList"
// import { ExperienceForm } from "../ExperienceForm"
//
// import { SkillList } from "../SkillList"
// import { SkillForm } from "../SkillForm"
//
// import { ProjectList } from "../ProjectList"
// import { ProjectForm } from "../ProjectForm"
//
// import { Profile } from "../Profile"
// import { AboutForm } from "../AboutForm"
// import { LanguageForm } from "../LanguageForm"
// import { InterestForm } from "../InterestForm"
//
// export function AdminRoutes() {
//   return (
//     <Routes>
//       {/* /admin -> dashboard overview */}
//       <Route index element={<AdminDashboard />} />
//
//       {/* /admin/education, /admin/education/new, /admin/education/:id/edit */}
//       <Route path="education" element={<EducationList />} />
//       <Route path="education/new" element={<EducationForm />} />
//       <Route path="education/:id/edit" element={<EducationForm />} />
//
//       {/* /admin/experience, /admin/experience/new, /admin/experience/:id/edit */}
//       <Route path="experience" element={<ExperienceList />} />
//       <Route path="experience/new" element={<ExperienceForm />} />
//       <Route path="experience/:id/edit" element={<ExperienceForm />} />
//
//       {/* /admin/skills, /admin/skills/new, /admin/skills/:id/edit */}
//       <Route path="skills" element={<SkillList />} />
//       <Route path="skills/new" element={<SkillForm />} />
//       <Route path="skills/:id/edit" element={<SkillForm />} />
//
//       {/* /admin/projects, /admin/projects/new, /admin/projects/:id/edit */}
//       <Route path="projects" element={<ProjectList />} />
//       <Route path="projects/new" element={<ProjectForm />} />
//       <Route path="projects/:id/edit" element={<ProjectForm />} />
//
//       {/* /admin/profile -> overview of about, languages, and interests */}
//       <Route path="profile" element={<Profile />} />
//       <Route path="profile/about/edit" element={<AboutForm />} />
//       <Route path="profile/languages/new" element={<LanguageForm />} />
//       <Route path="profile/languages/:id/edit" element={<LanguageForm />} />
//       <Route path="profile/interests/new" element={<InterestForm />} />
//       <Route path="profile/interests/:id/edit" element={<InterestForm />} />
//     </Routes>
//   )
// }