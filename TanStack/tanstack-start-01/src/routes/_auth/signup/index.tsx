import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/_auth/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <h2>Hello "/_auth/signup/"!</h2>
    <Button variant="outline">Button</Button>
    <Button variant="outline" size="icon" aria-label="Submit"><ArrowUpIcon /></Button>
  </>
  )
}
