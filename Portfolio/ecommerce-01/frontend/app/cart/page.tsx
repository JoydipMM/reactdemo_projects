import type { Metadata } from "next";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { orders } from "@/data/orders";

const cartItems = orders[0].items;

export const metadata: Metadata = {
  title: "Cart",
  description: "Static NOVA shopping bag page.",
};

export default function CartPage() {
  const subtotal = 164;
  const tax = 16;
  const total = 180;

  return (
    <Container className="py-12">
      <h1 className="text-5xl font-semibold uppercase tracking-wide">Your bag</h1>
      <p className="mt-3 text-neutral-600">{cartItems.length} items</p>
      {cartItems.length === 0 ? (
        <EmptyState title="Your bag is empty" message="Looks like you haven't added anything to your bag yet." action={{ label: "Start shopping", href: "/products" }} />
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <section aria-label="Cart items">
            {cartItems.map((item) => <CartItem item={item} key={`${item.productId}-${item.size}`} />)}
          </section>
          <CartSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      )}
    </Container>
  );
}
