"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosArrowForward } from "react-icons/io";

interface breadCrumbItem {
    label: string,
    href?: string,
}

interface BreadCrumbsProps {
    items?: breadCrumbItem[]
}

export default function BreadCrumbs({items}: BreadCrumbsProps) {

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    {
      label: items?.[0]?.label ?? "Home",
      href: items?.[0]?.href ?? "/",
    },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      //const label = items?.[index + 1]?.label ?? formatLabel(segment);
      const label = items?.[index + 1]?.label ?? segment;
      return { label, href };
    }),
  ];

  console.log(breadcrumbs);

  return (
    <nav className='flex flex-wrap items-center gap-2 text-sm'>
      {breadcrumbs.map((item, index) => {
        const isLastItem = index === breadcrumbs.length - 1;
        return(
            <div className="flex items-center gap-2" key={item.href}>
                {!isLastItem ? (<Link href={item.href} className='text-gray-500 hover:text-gray-600'>{item.label}</Link>) : (<span className="font-medium text-foreground">{item.label}</span>) }
                {!isLastItem && <IoIosArrowForward className="text-gray-500" size={16} />}
            </div>
        )
      })}
    </nav>
  )
}
