import { fetchProductsService } from "@/features/products/services/productService";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProductsService,
    });
};