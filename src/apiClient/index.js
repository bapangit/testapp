import axios from "axios";
import { API_URL } from "../configs/AppConfigs";
const openClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export { openClient };
