import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills/$skillid')({
  component: RouteComponent,
})

function RouteComponent() {

  const { skillid } = Route.useParams();
  return <div>Hello "/skills/$skillid"! ${skillid}
  
  <br/>
  http://localhost:3000/skills/56546546
  
  </div>
}
