import { client } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";

export const fetchTradingMovies = async () =>{
    const res = await client.axiosClient.get(ENDPOINTS.movies.tranding);
    //console.log("dfdf ",res.data.results)
    return res.data.results;
}