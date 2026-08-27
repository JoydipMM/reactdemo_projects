import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OrderTable } from "@/components/order/OrderTable";
import { Container } from "@/components/ui/Container";
import { orders } from "@/data/orders";

export const metadata: Metadata = {
  title: "Orders",
  description: "Static NOVA order history page.",
};

const tabs = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function OrdersPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[256px_1fr]">
        <DashboardSidebar />
        <section>
          <h1 className="text-5xl font-semibold uppercase tracking-wide">My orders</h1>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Order status filters">
            {tabs.map((tab, index) => (
              <button
                aria-selected={index === 0}
                className={index === 0 ? "shrink-0 bg-neutral-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white" : "shrink-0 border border-stone-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]"}
                key={tab}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <OrderTable orders={orders} />
          </div>
        </section>
      </div>
    </Container>
  );
}
