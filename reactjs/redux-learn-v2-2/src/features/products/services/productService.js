import { client } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";

export const fetchProductsService = async () => {
    const response = await fetch(`${client.dummyjson}${ENDPOINTS.PRODUCTS}`);
    if(! response.ok){
        throw new Error("Failed to fetch products");
    }
    return await response.json();
}