import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { OrderTable } from "@/components/order/OrderTable";
import { Container } from "@/components/ui/Container";
import { orders } from "@/data/orders";
import { mockUser } from "@/data/users";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "NOVA customer account dashboard template.",
};

export default function DashboardPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[256px_1fr]">
        <DashboardSidebar />
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Good morning</p>
          <h1 className="mt-3 text-4xl font-semibold uppercase tracking-wide">Welcome back, {mockUser.name.split(" ")[0]}.</h1>
          <p className="mt-3 text-neutral-600">Welcome back to your NOVA account.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard label="Orders" value={String(mockUser.orderCount)} />
            <StatCard label="Wishlist" value={String(mockUser.wishlistCount)} />
            <StatCard label="Rewards" value={`${mockUser.rewards} pts`} />
          </div>
          <div className="mt-12">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">Recent orders</h2>
            <OrderTable orders={orders.slice(0, 3)} />
          </div>
        </section>
      </div>
    </Container>
  );
}
