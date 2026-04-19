import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$username/skills/$skillid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { username, skillid } = Route.useParams();
  return <div>Hello "/users/$username/skills/$skillid"!<br/>
  
  username: {username}<br/>
  skillid: {skillid}<br/>
  http://localhost:3000/users/joydip/skills/5645646
  </div>
}
