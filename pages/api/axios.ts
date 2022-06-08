import axios from "axios";

const environment = process.env.NODE_ENV;
axios.defaults.baseURL =
  environment === "production"
    ? "http://codecast.vercel.app/api/"
    : "http://localhost:3000/api/";
axios.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  config.headers.ContentType = "application/json";

  return config;
});

export default axios;
