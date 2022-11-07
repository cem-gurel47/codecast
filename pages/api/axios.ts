import axios from "axios";

const environment = process.env.NODE_ENV;
axios.defaults.baseURL =
  environment === "production"
    ? "http://www.codecast.space/api/"
    : "http://localhost:3000/api/";
// axios.defaults.baseURL = "http://www.codecast.space/api/";

axios.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  config.headers.ContentType = "application/json";

  return config;
});

export default axios;
