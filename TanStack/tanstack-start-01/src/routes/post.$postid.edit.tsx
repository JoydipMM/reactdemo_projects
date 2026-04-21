import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postid/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postid } = Route.useParams();
  return <div>Hello "/post/$postid/edit"! {postid}</div>
}
