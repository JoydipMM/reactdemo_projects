import { client } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";


export const discoverMovies = async ({genreId, page=1}:{ genreId?:number, page?:number }) => {
    const res = await client.axiosClient.get(ENDPOINTS.discover.movies, {params:{
        with_genres: genreId,
        page
    }});
    return res.data.results;
}

export const discoverTV = async ({genreId, page=1}:{ genreId?:number, page?:number }) => {
    const res = await client.axiosClient.get(ENDPOINTS.discover.tv, {params:{
        with_genres: genreId,
        page
    }});
    return res.data.results;
}