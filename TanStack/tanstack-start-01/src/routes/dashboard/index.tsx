import { getApiLogicFn, saveApiLogicFn } from '#/server/apiLogic';
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
  pendingComponent: () => <div className='p-4 text-center'>Loading...</div>,
  pendingMs: 10000,
  loader: async () => {
    const data = await getApiLogicFn();
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

function RouteComponent() {
  const data = Route.useLoaderData();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const saveData = useServerFn(saveApiLogicFn);

  const submitEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Saving .....");
    await saveData({data:name});
    setStatus("Saved successfully");
    setName("");
  }

  return <>
  <div>Hello "/dashboard/"! Dashboard Home Page</div>
  {status}<br/>
  <form onSubmit={submitEvent}>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input type="submit" value="Submit" />
  </form>
  <br/>
  {data.users.map((user: any) => <span key={user.id}>{user.firstName}<br/></span>)}
  </>
}
