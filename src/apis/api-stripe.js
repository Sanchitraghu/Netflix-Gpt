import axios from "axios";

const apiClientStripe = axios.create({
  baseURL: "http://localhost:5000",
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
