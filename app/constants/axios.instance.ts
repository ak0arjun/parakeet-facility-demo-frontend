import axios from "axios";

// Create instance
export const axiosInstance = axios.create({
    baseURL: "https://parakeet-facility-backend.arjunkapoor-nsit.workers.dev/",
    headers: {
      "Access-Control-Allow-Origin":"*",
    }
  });