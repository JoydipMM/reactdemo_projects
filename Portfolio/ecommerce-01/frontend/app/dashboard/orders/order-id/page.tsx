import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OrderItem } from "@/components/order/OrderItem";
import { OrderSummary } from "@/components/order/OrderSummary";
import { OrderTimeline } from "@/components/order/OrderTimeline";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { orders } from "@/data/orders";

const order = orders[0];

export const metadata: Metadata = {
  title: `Order ${order.id}`,
  description: `Static detail view for order ${order.id}.`,
};

export default function OrderDetailPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[256px_1fr]">
        <DashboardSidebar />
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Placed {order.date}</p>
          <h1 className="mt-3 text-4xl font-semibold uppercase tracking-wide">Order #{order.id}</h1>
          <div className="mt-8 border border-stone-200 p-6">
            <OrderTimeline status={order.status} />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Items</h2>
              <div className="mt-3 border-t border-stone-200">
                {order.items.map((item) => <OrderItem item={item} key={`${item.productId}-${item.size}`} />)}
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Info title="Shipping Address" lines={["Alex Morgan", "123 Example Street", "New York, NY 10001", "United States"]} />
                <Info title="Payment" lines={["Visa ending in 4242"]} />
              </div>
            </div>
            <div>
              <OrderSummary subtotal={order.subtotal} shipping={order.shipping} tax={order.tax} total={order.total} />
              <div className="mt-4 grid gap-3">
                <Button variant="outline" type="button">Download invoice</Button>
                <Button variant="secondary" type="button">Contact support</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Info({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="border border-stone-200 p-5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">{title}</h3>
      <div className="mt-4 grid gap-1 text-sm text-neutral-600">
        {lines.map((line) => <p key={line}>{line}</p>)}
      </div>
    </div>
  );
}
