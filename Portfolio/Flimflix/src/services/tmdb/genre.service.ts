import { client } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";

export const fetchMoviesGenres = async () =>{
    const res = await client.axiosClient.get(ENDPOINTS.movies.genres);
    return res.data.genres;
}

export const fetchTvGenres = async () =>{
    const res = await client.axiosClient.get(ENDPOINTS.tv.genres);
    return res.data.genres;
}