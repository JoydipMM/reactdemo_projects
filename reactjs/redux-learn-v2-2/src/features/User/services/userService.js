import { client } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints"; 

export const fetchUserService = async () =>{
    // const response = await fetch("https://jsonplaceholder.typicode.com/users" );
    const response = await fetch(`${client.dummyjson}${ENDPOINTS.USERS}`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return await response.json();
}