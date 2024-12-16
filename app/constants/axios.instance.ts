import axios from "axios";

// Create instance
export const axiosInstance = axios.create({
    baseURL: "https://parakeet-facility-backend.arjunkapoor-nsit.workers.dev/",
    // baseURL: "https://df78-2401-4900-8846-5109-87a9-6938-b5b9-ca87.ngrok-free.app/",
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Access-Control-Allow-Origin":"*",
    }
  });