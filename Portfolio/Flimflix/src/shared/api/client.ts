// we import and create instance of AXIOS here if we need
import axios from "axios";


export const client = {
    dummyjson: `${(import.meta as any).env.VITE_DUMMY_JSON_URL}`,
    axiosClient: axios.create({
        baseURL: `${(import.meta as any).env.VITE_TMDB_API_BASE_URL}`,
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${(import.meta as any).env.VITE_TMDB_READ_ACCESS_TOKEN}`
        }
    }),
};