"use client";

import Link from "next/link";
import { useState } from "react";
import { FiEye } from "react-icons/fi";

interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  items: number;
  total: number;
  payment: "Paid" | "Pending" | "Refunded";
  status: "Delivered" | "Processing" | "Pending" | "Cancelled";
  date: string;
}

const dummyOrders: Order[] = [
  {
    id: 1,
    orderNumber: "#1001",
    customer: "John Doe",
    items: 3,
    total: 149.99,
    payment: "Paid",
    status: "Delivered",
    date: "Jul 17, 2026",
  },
  {
    id: 2,
    orderNumber: "#1002",
    customer: "Jane Smith",
    items: 2,
    total: 84.5,
    payment: "Paid",
    status: "Processing",
    date: "Jul 16, 2026",
  },
  {
    id: 3,
    orderNumber: "#1003",
    customer: "Michael Johnson",
    items: 5,
    total: 219.99,
    payment: "Pending",
    status: "Pending",
    date: "Jul 15, 2026",
  },
  {
    id: 4,
    orderNumber: "#1004",
    customer: "Sarah Wilson",
    items: 1,
    total: 59.99,
    payment: "Refunded",
    status: "Cancelled",
    date: "Jul 14, 2026",
  },
];

export default function OrdersPage() {

    const [orders] = useState<Order[]>(dummyOrders);

  const handleViewOrder = (order: Order) => {
    alert(
      `Order: ${order.orderNumber}\nCustomer: ${order.customer}\nTotal: $${order.total.toFixed(2)}\nStatus: ${order.status}`
    );
  };

  const paymentStyles: Record<Order["payment"], string> = {
    Paid: "bg-emerald-100 text-emerald-600",
    Pending: "bg-amber-100 text-amber-600",
    Refunded: "bg-rose-100 text-rose-600",
  };

  const statusStyles: Record<Order["status"], string> = {
    Delivered: "text-emerald-600",
    Processing: "text-blue-600",
    Pending: "text-amber-600",
    Cancelled: "text-rose-600",
  };

  return (
    <>
    <div>
        <h2 className="text-3xl font-semibold">Orders</h2>
        <p className='mt-2 text-muted-foreground'>your order list</p>
    </div>


    <div className="w-full overflow-hidden rounded-2xl border border-border bg-background">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left">
          <thead className="bg-muted/50">
            <tr className="border-b border-border">
              <th className="px-5 py-5 text-sm font-semibold">Order</th>
              <th className="px-5 py-5 text-sm font-semibold">Customer</th>
              <th className="px-5 py-5 text-sm font-semibold">Items</th>
              <th className="px-5 py-5 text-sm font-semibold">Total</th>
              <th className="px-5 py-5 text-sm font-semibold">Payment</th>
              <th className="px-5 py-5 text-sm font-semibold">Status</th>
              <th className="px-5 py-5 text-sm font-semibold">Date</th>
              <th className="px-5 py-5 text-center text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border last:border-b-0 transition-colors hover:bg-muted/20"
              >
                {/* Order number and date */}
                <td className="px-5 py-5">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">
                      {order.orderNumber}
                    </p>
                    <p className="whitespace-nowrap text-xs text-muted-foreground">
                      {order.date}
                    </p>
                  </div>
                </td>

                {/* Customer */}
                <td className="whitespace-nowrap px-5 py-5 text-sm">
                  {order.customer}
                </td>

                {/* Items */}
                <td className="px-5 py-5 text-sm">{order.items}</td>

                {/* Total */}
                <td className="whitespace-nowrap px-5 py-5 text-sm font-semibold">
                  ${order.total.toFixed(2)}
                </td>

                {/* Payment */}
                <td className="px-5 py-5">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                      paymentStyles[order.payment]
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-5">
                  <span
                    className={`whitespace-nowrap text-xs font-semibold ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Date */}
                <td className="whitespace-nowrap px-5 py-5 text-sm">
                  {order.date}
                </td>

                {/* Action */}
                <td className="px-5 py-5 text-center">
                    <Link href={`/admin/orders/${order.id}`}>
                    <FiEye size={18} />
                    {/* <button
                        type="button"
                        aria-label={`View order ${order.orderNumber}`}
                        title="View order"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-muted"
                    >
                        
                    </button> */}
                    </Link>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-12 text-center text-sm text-muted-foreground"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>



    </>
  )
}
