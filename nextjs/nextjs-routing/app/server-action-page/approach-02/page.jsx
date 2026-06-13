import React from 'react'
import { FormAction } from '@/actions/formActions';

const page = () => {

  console.log("Server Action Page");

  return (
    <div>
      <h2>Approach 02</h2>
      <p>Here we call the form action asynchronous function from another file. Which is will be inside "actions" folder in root folder. file name I give "formAction.js" and mmarked this entire file as "use server". create the async function in formAction.js and import that function here </p>
      

      {/* if we use server action function then in form tag we use action={FormActionFunction} instead of onSubmit={FormActionFunction} */}
      <form action={FormAction}>
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default page