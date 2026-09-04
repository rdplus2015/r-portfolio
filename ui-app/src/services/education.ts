import api from "./axiosInstance";

export interface Education {
  id: number;
  title: string;
  organization: string;
  location: string;
  description: string;
  start_date: string;
  end_date: string;
  issued_date: string;
  in_progress: boolean;
  badge_image: string;
  credential_url: string;
  order: number;
}

export const getEducation = async (): Promise<Education[]> => {
  const response = await api.get<Education[]>("/portfolio/education/");
  return response.data;
};