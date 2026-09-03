import api from "./axiosInstance";

export interface SiteConfig {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    emailPrimary: string;
    emailSecondary: string;
    phone: string;
    github_url: string;
    linkedin_url: string;
}

export const getSiteConfig = async () => {
  const response = await api.get("/");
  return response.data;
};