import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/postdetails/$postid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postid } = Route.useParams();
  return <div>Hello "/post/postdetails/postid"! {postid}</div>
}
