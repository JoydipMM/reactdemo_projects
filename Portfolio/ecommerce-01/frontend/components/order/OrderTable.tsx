import Link from "next/link";
import type { Order } from "@/types/order";
import { formatCurrency } from "@/lib/utils";
import { OrderStatus } from "./OrderStatus";
import { OrderCard } from "./OrderCard";

export function OrderTable({ orders }: { orders: Order[] }) {
  return (
    <>
      <div className="hidden overflow-hidden border border-stone-200 lg:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs uppercase tracking-[0.16em] text-neutral-500">
            <tr>
              <th className="px-5 py-4">Order</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Items</th>
              <th className="px-5 py-4">Total</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-5 py-5 font-semibold">#{order.id}</td>
                <td className="px-5 py-5 text-neutral-600">{order.date}</td>
                <td className="px-5 py-5 text-neutral-600">{order.items.length}</td>
                <td className="px-5 py-5 font-semibold">{formatCurrency(order.total)}</td>
                <td className="px-5 py-5"><OrderStatus status={order.status} /></td>
                <td className="px-5 py-5"><Link className="text-xs font-semibold uppercase tracking-[0.16em] underline" href="/dashboard/orders/order-id">View order</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-4 lg:hidden">
        {orders.map((order) => <OrderCard order={order} key={order.id} />)}
      </div>
    </>
  );
}
