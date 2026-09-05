import api from "./axiosInstance";
import type { Skill } from "./skills";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  long_description: string;
  backend_image: string;
  frontend_image: string;
  deployment_image: string;
  github_url: string;
  live_url: string;
  linkedin_url: string;
  tags: string;
  skills: Skill[];
  featured: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>("/portfolio/projects/");
  return response.data;
};