import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

apiClient.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Accept"] = "application/json";
    config.headers["Authorization"] =
      "Bearer " + process.env.REACT_APP_TMDB_TOKEN;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
