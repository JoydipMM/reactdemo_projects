import { client } from '@/shared/api/client';
import { ENDPOINTS } from '@/shared/api/endpoints';

export const fetchHomeBannerData = async () => {
    //const res =  await client.axiosClient.get("/tv/popular");
    const res =  await client.axiosClient.get(ENDPOINTS.movies.popular);
    //console.log(res.data.results)
    return res.data.results;
};