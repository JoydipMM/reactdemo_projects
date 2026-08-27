export type ProductBadge = "New" | "Best Seller" | "Sale" | "Limited";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  images: string[];
  colors: { name: string; value: string }[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
  inStock: boolean;
};
