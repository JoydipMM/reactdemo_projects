import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postid/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/post/$postid"!</div>
}
