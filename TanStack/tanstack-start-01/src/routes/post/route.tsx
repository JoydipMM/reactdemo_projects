import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/post')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h2>Post custom route</h2>
    <Outlet />
  </div>
}
