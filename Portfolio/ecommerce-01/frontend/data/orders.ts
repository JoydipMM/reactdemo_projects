import type { Order } from "@/types/order";
import { products } from "./products";

export const orders: Order[] = [
  {
    id: "NV-10482",
    date: "June 18, 2026",
    status: "Delivered",
    items: [
      { productId: "prod-1", name: products[0].name, image: products[0].images[0], size: "M", color: "Ivory", quantity: 1, price: 68 },
      { productId: "prod-2", name: products[1].name, image: products[1].images[0], size: "S", color: "Black", quantity: 1, price: 96 },
      { productId: "prod-16", name: products[15].name, image: products[15].images[0], size: "One Size", color: "Stone", quantity: 1, price: 76 },
    ],
    subtotal: 160,
    shipping: 0,
    tax: 24,
    total: 184,
  },
  {
    id: "NV-10451",
    date: "June 10, 2026",
    status: "Shipped",
    items: [
      { productId: "prod-5", name: products[4].name, image: products[4].images[0], size: "L", color: "Black", quantity: 2, price: 42 },
      { productId: "prod-17", name: products[16].name, image: products[16].images[0], size: "One Size", color: "Black", quantity: 1, price: 64 },
    ],
    subtotal: 126,
    shipping: 0,
    tax: 19,
    total: 145,
  },
  {
    id: "NV-10412",
    date: "May 29, 2026",
    status: "Delivered",
    items: [
      { productId: "prod-7", name: products[6].name, image: products[6].images[0], size: "32", color: "Indigo", quantity: 1, price: 104 },
      { productId: "prod-10", name: products[9].name, image: products[9].images[0], size: "M", color: "Stone", quantity: 1, price: 112 },
    ],
    subtotal: 216,
    shipping: 0,
    tax: 24,
    total: 240,
  },
  {
    id: "NV-10398",
    date: "May 16, 2026",
    status: "Processing",
    items: [{ productId: "prod-8", name: products[7].name, image: products[7].images[0], size: "S", color: "Sage", quantity: 1, price: 118 }],
    subtotal: 118,
    shipping: 0,
    tax: 18,
    total: 136,
  },
  {
    id: "NV-10372",
    date: "April 28, 2026",
    status: "Cancelled",
    items: [{ productId: "prod-14", name: products[13].name, image: products[13].images[0], size: "M", color: "Ivory", quantity: 1, price: 148 }],
    subtotal: 148,
    shipping: 0,
    tax: 0,
    total: 148,
  },
];
