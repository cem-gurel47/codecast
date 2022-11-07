import { Client } from "podcast-api";

const clientConfig = { apiKey: null };
const { API_KEY, NODE_ENV } = process.env;

if (NODE_ENV === "production") {
  clientConfig.apiKey = API_KEY;
}

export default Client(clientConfig);
