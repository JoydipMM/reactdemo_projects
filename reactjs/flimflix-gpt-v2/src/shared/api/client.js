import axios from "axios";
//import { API_BASE_URL } from "../../shared/utils/constants";
import { API_BASE_URL } from "@/shared/utils/constants";

const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
    }
})

export default axiosClient;