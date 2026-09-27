import Link from 'next/link'

interface SidebarContentProps {
  pathname: string,
  closeSidebar: () => void
}

const navigation = [
  {
    title: "Main",
    items: [
      {
        href:"/admin",
        label: "Dashboard",
      }
    ]
  },
  {
    title: "Catalog",
    items: [
      {
        href:"/admin/products",
        label: "Products",
      },
      {
        href:"/admin/add-product",
        label: "Create Product",
      },
    ]
  },
  {
    title: "Sales",
    items: [
      {
        href:"/admin/orders",
        label: "Orders",
      }
    ]
  },
]

export default function SidebarContent({ pathname, closeSidebar}: SidebarContentProps) {
  return (
    <div className='border-b border-border px-6 py-6'>
      <Link href="/admin" className="text-2xl font-semibold">Admin Panel</Link>

      {/* navigation */}
      <div className='flex-1 overflow-y-auto py-6'>
        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-bold uppercase text-muted-foreground">
              {section.title}
            </p>
            <div className="space-y-1">
              <ul role="list" className="mt-4 space-y-2">
                {section.items.map((item) => {
                  const isActive = item.href === pathname
                  return (
                  <li key={item.href} className="text-muted-foreground">
                    <Link href={item.href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${ isActive ? "bg-primary text-primary-foreground" : "" }`} onClick={() => closeSidebar()}>{item.label}</Link>
                  </li>
                )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>



        {/* bottom */}
        <div className="border-t border-border p-4">
          <Link href="/shop" className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-surface">View Shop</Link>
          <Link href="/logout" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-destructive transition hover:bg-red-100">Log out</Link>
        </div>


    </div>
  )
}
