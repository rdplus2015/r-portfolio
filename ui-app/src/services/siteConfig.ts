import api from "./axiosInstance";

export interface SiteConfig {
  id: number;
  site_name: string;
  site_description: string;
  site_url: string;
  email_primary: string;
  email_secondary: string;
  phone: string;
  github_url: string;
  linkedin_url: string;
}

export const getSiteConfig = async (): Promise<SiteConfig> => {
  const response = await api.get<SiteConfig>("/portfolio/site-config/1/");
  return response.data;
};