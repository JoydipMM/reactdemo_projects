import SkillCard from '#/components/SkillCard'
import { createFileRoute } from '@tanstack/react-router'
import { Heart } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      Home <br/>
      <SkillCard name="React" />
      <SkillCard name="Java" />
    </main>
  )
}
