"use client";
import { useParams } from 'next/navigation'
import Image from "next/image";
import { Button } from '@/app/components';

interface OrderItem {
  id: number;
  name: string;
  image: string;
  size: string;
  quantity: number;
  price: number;
}

interface OrderDetailsData {
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  paymentMethod: string;
  paymentStatus: "PAID" | "PENDING" | "REFUNDED";
}

const dummyOrder: OrderDetailsData = {
  orderNumber: "#1001",
  items: [
    {
      id: 1,
      name: "Classic Jean Jacket",
      image: "/demo/products/piim-01.webp",
      size: "L",
      quantity: 1,
      price: 40.0,
    },
    {
      id: 2,
      name: "Modern Stock Jeans",
      image: "/demo/products/piim-02.webp",
      size: "M",
      quantity: 1,
      price: 59.99,
    },
  ],
  subtotal: 99.99,
  shipping: 0,
  tax: 5.0,
  paymentMethod: "CASH_ON_DELIVERY",
  paymentStatus: "PENDING",
};

export default function OrderDetailPage() {
    const params = useParams();
    console.log(params.orderId);


    const order = dummyOrder;

    const total = order.subtotal + order.shipping + order.tax;

    const paymentStatusStyles: Record<OrderDetailsData["paymentStatus"], string> = {
        PAID: "bg-emerald-100 text-emerald-700",
        PENDING: "bg-amber-100 text-amber-700",
        REFUNDED: "bg-rose-100 text-rose-700",
    };

  return (
    <>
    <div>
        <h2 className="text-3xl font-semibold">Order: #3434</h2>
        <p className='mt-2 text-muted-foreground'>your order details</p>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
    <div className='flex flex-col gap-6 lg:col-span-2'>

        {/* order person details */}
        <section className="overflow-hidden rounded-2xl border border-border bg-background lg:col-span-2">
            <div className="border-b border-border px-6 py-5">
                <h2 className="text-lg font-semibold">Customer Information</h2>
            </div>
            <div className='border-b border-border px-6 py-5'>
                <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
                    <div className='flex flex-col'>
                        <p className="mt-2 text-sm text-muted-foreground">Name</p>
                        <h3 className="text-sm font-semibold sm:text-base">John Deo</h3>
                    </div>
                    <div className='flex flex-col'>
                        <p className="mt-2 text-sm text-muted-foreground">Email</p>
                        <h3 className="text-sm font-semibold sm:text-base">email@gmail.com</h3>
                    </div>
                    <div className='flex flex-col'>
                        <p className="mt-2 text-sm text-muted-foreground">Phone</p>
                        <h3 className="text-sm font-semibold sm:text-base">67567567567</h3>
                    </div>
                    <div className='flex flex-col'>
                        <p className="mt-2 text-sm text-muted-foreground">Address</p>
                        <h3 className="text-sm font-semibold sm:text-base">fgdfgdf gfdgd</h3>
                    </div>
                    
                </div>
            </div>
        </section>

        {/* Order Items */}
        <section className="overflow-hidden rounded-2xl border border-border bg-background lg:col-span-2">
            <div className="border-b border-border px-6 py-5">
            <h2 className="text-lg font-semibold">Order Items</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Order {order.orderNumber}
            </p>
            </div>

            <div>
            {order.items.map((item) => (
                <div
                key={item.id}
                className="flex items-center gap-4 border-b border-border p-5 last:border-b-0 sm:gap-5 sm:p-6"
                >
                {/* Product Image */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted sm:h-24 sm:w-24">
                    <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    />
                </div>

                {/* Product Information */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold sm:text-base">
                    {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                    Size: {item.size}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                    </p>
                </div>

                {/* Item Price */}
                <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold sm:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </section>
    </div>

      {/* Right Side Sections */}
      <div className="flex flex-col gap-6">
        {/* Order status */}
        <section className="rounded-2xl border border-border bg-background p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            
            <div className="flex items-center justify-between gap-4 text-sm">
                <select className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary">
                    <option>PENDING</option>
                </select>
            </div>

            <div className="border-t border-border pt-4">
              <Button fullWidth>Update Order</Button>
            </div>

          </div>
        </section>

        {/* Order Summary */}
        <section className="rounded-2xl border border-border bg-background p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">
                ${order.subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">
                ${order.shipping.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="font-medium">
                ${order.tax.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="rounded-2xl border border-border bg-background p-6">
          <h2 className="text-lg font-semibold">Payment</h2>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Method</span>
              <span className="break-all text-right font-medium">
                {order.paymentMethod}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Status</span>

              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  paymentStatusStyles[order.paymentStatus]
                }`}
              >
                {order.paymentStatus}
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
    
    </>
  )
}
