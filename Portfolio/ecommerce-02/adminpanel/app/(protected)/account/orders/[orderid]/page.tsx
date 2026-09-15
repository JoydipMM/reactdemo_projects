import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft, LuMapPin, LuPackage } from "react-icons/lu";

const dummyOrderDetails = {
  id: "ORD-2026-F8GQ6B",
  placedOn: "9/6/2026",
  status: "Pending",
  items: [
    {
      id: 1,
      name: "Modern Stock jeans",
      size: "M",
      color: "Black",
      quantity: 1,
      price: "$59.99",
      image: "piim-02.webp",
    },
  ],
  summary: {
    subtotal: "$59.99",
    shipping: "Free",
    tax: "$3.00",
    total: "$62.99",
  },
  shippingAddress: {
    name: "fhfhfgh fghfghf",
    phone: "54645646456",
    street: "fghfgh",
    cityState: "fghfgh, fghfgh",
    country: "fghfgh",
  },
};

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-600",
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
};

export default async function OrderDetailsPage({params}: { params: Promise<{ orderid: string }>}) {
  const { orderid } = await params;
  const order = { ...dummyOrderDetails, id: orderid?.startsWith("ORD-") ? orderid : dummyOrderDetails.id};

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/account/orders"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-white px-5 font-semibold text-foreground transition hover:border-primary"
            >
              <LuArrowLeft size={18} />
              Back to Orders
            </Link>

            <h1 className="mt-6 text-3xl font-black tracking-wide text-foreground sm:text-4xl">
              {order.id}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Placed on {order.placedOn}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase ${
              statusStyles[order.status] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {order.status}
          </span>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <LuPackage size={20} />
            <h2 className="text-2xl font-bold text-foreground">
              Ordered Items
            </h2>
          </div>

          <div className="space-y-5">
            {order.items.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-border p-5 sm:flex-row sm:items-start"
              >
                <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={`/demo/products/${item.image}`}
                    alt={item.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium">
                        Size: {item.size}
                      </span>
                      <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium">
                        Color: {item.color}
                      </span>
                      <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <p className="text-2xl font-black text-foreground">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="mb-8 text-3xl font-black text-foreground">
              Order Summary
            </h2>

            <div className="space-y-5 text-lg">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{order.summary.subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{order.summary.shipping}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>{order.summary.tax}</span>
              </div>
              <div className="flex items-center justify-between pt-5 text-2xl font-black">
                <span>Total</span>
                <span>{order.summary.total}</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <LuMapPin size={20} />
              <h2 className="text-2xl font-black text-foreground">
                Shipping Address
              </h2>
            </div>

            <div className="space-y-3 text-lg">
              <p className="font-semibold text-foreground">
                {order.shippingAddress.name}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.phone}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.street}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.cityState}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.country}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <LuMapPin size={20} />
              <h2 className="text-2xl font-black text-foreground">
                Payment Details
              </h2>
            </div>

            <div className="space-y-3 text-lg">
              <p className="font-semibold text-foreground">
                {order.shippingAddress.name}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.phone}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.street}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.cityState}
              </p>
              <p className="text-muted-foreground">
                {order.shippingAddress.country}
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
