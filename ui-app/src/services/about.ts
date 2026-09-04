import api from "./axiosInstance";

export interface Language {
  id: number;
  name: string;
  level: string;
  order: number;
}

export interface Interest {
  id: number;
  label: string;
  order: number;
}

export interface About {
  id: number;
  description: string;
  location: string;
  available: boolean;
  resume_url: string;
  languages: Language[];
  interests: Interest[];
}

export const getAbout = async (): Promise<About> => {
  const response = await api.get<About>("/portfolio/about/1/");
  return response.data;
};