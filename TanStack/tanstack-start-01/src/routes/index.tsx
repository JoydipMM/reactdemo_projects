import SkillCard from '#/components/SkillCard'
import { createFileRoute, notFound, useRouter } from '@tanstack/react-router'
import { Heart } from 'lucide-react'

export const Route = createFileRoute('/')({ 
  component: App,
  pendingComponent: () => <div className='p-4 text-center'>Loading...</div>,
  pendingMs: 10000,
  loader: async () => {
    const response = await fetch('https://dummyjson.com/users');
    //throw new Error('Error');
    //throw notFound();
    const data = await response.json();
    //console.log(data);
    if(!data.users || data.users.length === 0) {
      throw notFound();
    }
    return data;
  }, 

  errorComponent: ({error}) => {
    const route = useRouter();
    return (
      <>
      <div className='p-4 text-center'>{error.message}</div>
      <button onClick={() => route.invalidate()}>Try Again</button>
      </>
    )
  },

  notFoundComponent: () => <div className='p-4 text-center'>Not Found</div>,

})

function App() {
  const data = Route.useLoaderData();
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      Home <br/>
      {/* <SkillCard name="React" />
      <SkillCard name="Java" /> */}
      {data.users.map((user: any) => <SkillCard  key={user.id} name={user.firstName} />)}
    </main>
  )
}
