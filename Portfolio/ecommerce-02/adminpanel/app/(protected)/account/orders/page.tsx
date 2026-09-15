import Image from "next/image";
import Link from "next/link";
import { LuEye } from "react-icons/lu";

const dummyOrders = [
  {
    id: "12345",
    status: "Delivered",
    totalItems: 3,
    totalPrice: "$259.97",
    orderDate: "July 27, 2026",
    image: "piim-01.webp",
  },
  {
    id: "12346",
    status: "Processing",
    totalItems: 2,
    totalPrice: "$149.98",
    orderDate: "August 12, 2026",
    image: "piim-02.webp",
  },
  {
    id: "12347",
    status: "Shipped",
    totalItems: 1,
    totalPrice: "$89.99",
    orderDate: "September 02, 2026",
    image: "piim-03.webp",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
};

export default function OrderPage() {
  return (
    <>
      <p className="mt-2 text-muted-foreground">
        View your recent purchases and order status.
      </p>

      <div className="mt-10 space-y-5">
        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6"
          >
            <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-lg bg-surface sm:h-40 sm:w-32">
              <Image
                src={`/demo/products/${order.image}`}
                alt={`Order #${order.id} product`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>

            <div className="grid flex-1 gap-6 sm:grid-cols-3 sm:items-end lg:gap-12">
              <div className="sm:col-span-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-foreground">
                    Order #{order.id}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[order.status] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="mt-2 font-bold text-foreground">
                  {order.totalItems}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Total Price</p>
                <p className="mt-2 font-bold text-foreground">
                  {order.totalPrice}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="mt-2 font-bold text-foreground">
                  {order.orderDate}
                </p>
              </div>
            </div>
            <Link href={`/account/orders/${order.id}`} className="ml-auto">
              <button
                type="button" aria-label={`View order #${order.id}`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface text-foreground transition cursor-pointer hover:bg-primary hover:text-primary-foreground sm:ml-4"
              >
                <LuEye size={20} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
