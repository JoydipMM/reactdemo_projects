import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div>
      <h2>Server Actions</h2>
      <p>server actions are asynchronous function that run only on the server and can be called directly from the react component</p>
      <p>they allow to execute server-side logic such as database operations, authentication and handling without creating API routes</p>
      <p>In general if we want to call any API in Nextjs component then first we use fetch/axios request to create web request then it goes to API routes and API route talks to database. So we need create a backend endpoint manually. </p>
      <p>But when it comes to "Server Actions", component can be client/server we write a asynchronous function and that asynchronous function can directly talk to database and perform some server side logic. So we no need to manage any request / response handling manually. Means Server Actions remove internal API Routes. </p>
      <h2>When to use server actions</h2>
      <p>They simplify mutations like: create, update, delete oparations</p>
      <p>Nestjs suggest us don't use "Server Actions" to fetch API. But we can use this for create, edit delete actions.</p>
      <br />
      <br />
      <p>A server Action is a server-side function marked with <b>"use server" directive</b> that can be invoked from React components.</p>
      <p>This <b>"Server Action"</b> directive tell Nextjs to treat the function as a server action</p>
      <p>Directive can be use at the <b>Top of the file</b> /  <b>inside in specific asynchronous function</b></p>
      <p>If we want use a file as a server action then we need to add "use server" directive at the top of the file like action.js/ts.</p>
      <p>So, when "use server" is placed at the top of the file, Nextjs treats the file as a server action and all export function are run on the server</p>
      <p><b>Example: </b> Most comonly used in form</p>
      <br />
      <br />

      <table>
        <tr>
          <th>Where to use server action</th>
          <th></th>
        </tr>
        <tr>
          <td>Form Submission</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>create/update/delete</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Internal UI Mutations</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Puction API</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Web Hook [webhook require public endpoints]</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Real Time Application</td>
          <td>No</td>
        </tr>
        <tr>
          <td>External Clients</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Heavy backend logic</td>
          <td>No</td>
        </tr>
      </table>

      <Link href={"/server-action-page/approach-01"} className='py-3 px-2 mx-1 bg-indigo-500 text-white'>Approach 01</Link>
      <Link href={"/server-action-page/approach-02"} className='py-3 px-2 mx-1 bg-indigo-500 text-white'>Approach 02</Link>

      
    </div>
  )
}

export default page