import api from "./axiosInstance";

export interface Skill {
    "id": string;
    "name": string;
    "category": string;
    "order": number;
}

export const getSkills =  async (): Promise<Skill[]> => {
    const response = await api.get<Skill[]>("/portfolio/skills/");
    return response.data;
};