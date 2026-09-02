
/**
 * Axios instance for making HTTP requests to the backend API.
 */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export default api;