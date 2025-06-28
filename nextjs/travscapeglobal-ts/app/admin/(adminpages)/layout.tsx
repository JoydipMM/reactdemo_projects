import Link from "next/link";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

        <>
            <h2>dasboard pages</h2>
            {children}
        </>
    )
}