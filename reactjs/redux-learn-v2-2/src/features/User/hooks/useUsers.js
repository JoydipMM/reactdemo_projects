import { fetchUserAPI } from "@/features/user";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
    return useQuery({
        queryKey:["users"],
        queryFn:fetchUserAPI
    });
} 