import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <aside>sidebar</aside>
  <section>
    <div>Hello "/dashboard"! Dashboard Route file</div>
    <Outlet />
  </section>
  </>
}
