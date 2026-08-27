import type { OrderStatus as Status } from "@/types/order";
import { cn } from "@/lib/utils";

const colors: Record<Status, string> = {
  Processing: "bg-amber-50 text-amber-800",
  Shipped: "bg-blue-50 text-blue-800",
  Delivered: "bg-emerald-50 text-emerald-800",
  Cancelled: "bg-red-50 text-red-800",
};

export function OrderStatus({ status }: { status: Status }) {
  return <span className={cn("inline-flex px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]", colors[status])}>{status}</span>;
}
