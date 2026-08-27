import type { Product } from "@/types/product";

const womenA =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80";
const womenB =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80";
const menA =
  "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80";
const menB =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80";
const detailA =
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80";
const detailB =
  "https://images.unsplash.com/photo-1506629905607-d8f2b17b5a4d?auto=format&fit=crop&w=1200&q=80";
const accessory =
  "https://images.unsplash.com/photo-1506629905607-d8f2b17b5a4d?auto=format&fit=crop&w=1200&q=80";

const colors = [
  { name: "Ivory", value: "#f4efe7" },
  { name: "Black", value: "#111111" },
  { name: "Stone", value: "#b8b1a4" },
  { name: "Sage", value: "#8e9a8d" },
];

const names = [
  ["Oversized Cotton Shirt", "Men's Shirts", 68, "New"],
  ["Relaxed Linen Trousers", "Women's Trousers", 96, "Best Seller"],
  ["Minimal Ribbed Sweater", "Sweaters", 88, undefined],
  ["Classic Denim Jacket", "Jackets", 128, "Limited"],
  ["Essential Heavyweight Tee", "T-Shirts", 42, "New"],
  ["Structured Wool Coat", "Jackets", 218, undefined],
  ["Relaxed Straight Jeans", "Jeans", 104, "Best Seller"],
  ["Soft Column Dress", "Dresses", 118, "New"],
  ["Cropped Poplin Shirt", "Women's Shirts", 74, undefined],
  ["Tailored Drawstring Trouser", "Men's Trousers", 112, "Sale"],
  ["Fine Merino Crewneck", "Sweaters", 98, undefined],
  ["Organic Cotton Tank", "T-Shirts", 34, undefined],
  ["Wide Leg Denim", "Jeans", 108, "Sale"],
  ["Lightweight Utility Jacket", "Jackets", 148, "New"],
  ["Satin Slip Dress", "Dresses", 132, "Limited"],
  ["Cashmere Blend Scarf", "Accessories", 76, undefined],
  ["Leather Everyday Belt", "Accessories", 64, "Best Seller"],
  ["Pima Cotton Long Sleeve", "T-Shirts", 58, undefined],
  ["Pleated City Trouser", "Women's Trousers", 124, undefined],
  ["Washed Oxford Shirt", "Men's Shirts", 82, "New"],
  ["Quilted Transitional Vest", "Jackets", 138, undefined],
  ["Rib Knit Midi Dress", "Dresses", 116, "Sale"],
  ["Slim Selvedge Denim", "Jeans", 132, undefined],
  ["Canvas Weekender Tote", "Accessories", 92, "Limited"],
] as const;

const imagePool = [detailA, womenA, menA, womenB, menB, detailB, accessory];

export const products: Product[] = names.map(
  ([name, category, price, badge], index) => ({
    id: `prod-${index + 1}`,
    name,
    slug: name.toLowerCase().replaceAll(" ", "-").replaceAll("'", ""),
    category,
    price,
    compareAtPrice: badge === "Sale" ? price + 28 : undefined,
    description:
      "A refined NOVA essential designed with clean lines, considered proportions, and soft everyday comfort.",
    images: [imagePool[index % imagePool.length], imagePool[(index + 2) % imagePool.length]],
    colors,
    sizes: category === "Accessories" ? ["One Size"] : ["XS", "S", "M", "L", "XL"],
    rating: 4.5 + (index % 5) / 10,
    reviewCount: 18 + index * 7,
    badge,
    inStock: index !== 13,
  }),
);

export const featuredProducts = products.slice(0, 4);
export const trendingProducts = products.slice(4, 12);
export const recommendedProducts = products.slice(8, 12);
export const recentlyViewedProducts = products.slice(12, 16);

export const heroImage =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85";

export const categories = [
  { name: "Women", href: "/products", image: womenA },
  { name: "Men", href: "/products", image: menA },
  { name: "Accessories", href: "/products", image: accessory },
];

export const editorialImages = {
  weekend:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
  essentials:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85",
  auth:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
};
