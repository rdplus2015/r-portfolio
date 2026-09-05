import api from "./axiosInstance";
import type { Skill } from "./skills";

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  start_date: string | null;
  end_date: string | null;
  description: string;
  company_logo: string;
  technologies: Skill[];
  order: number;
}

export const getExperience = async (): Promise<Experience[]> => {
  const response = await api.get<Experience[]>("/portfolio/experience/");
  return response.data;
};