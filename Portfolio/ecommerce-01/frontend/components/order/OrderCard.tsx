import Image from "next/image";
import Link from "next/link";
import type { Order } from "@/types/order";
import { formatCurrency } from "@/lib/utils";
import { OrderStatus } from "./OrderStatus";

export function OrderCard({ order }: { order: Order }) {
  return (
    <article className="border border-stone-200 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">Order #{order.id}</h3>
          <p className="mt-1 text-sm text-neutral-500">{order.date} · {order.items.length} items</p>
        </div>
        <OrderStatus status={order.status} />
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex -space-x-3">
          {order.items.slice(0, 3).map((item) => (
            <div className="relative size-12 overflow-hidden rounded-full border-2 border-white bg-stone-100" key={item.productId}>
              <Image alt={item.name} className="object-cover" fill sizes="48px" src={item.image} />
            </div>
          ))}
        </div>
        <p className="font-semibold">{formatCurrency(order.total)}</p>
      </div>
      <Link className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.16em] underline" href="/dashboard/orders/order-id">View order</Link>
    </article>
  );
}
