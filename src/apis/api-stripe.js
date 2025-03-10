import axios from "axios";

const apiClientStripe = axios.create({
  baseURL: "https://netflix-backend-z221.onrender.com",
});

apiClientStripe.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClientStripe;
