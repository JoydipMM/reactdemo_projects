import React from 'react'

const page = () => {


  // formData is a inbuild object
  async function FormAction(formData){
    "use server";
    const title = formData.get("title");
    console.log(formData);
    /*
    result show in terminal
    FormData {
      '$ACTION_ID_409b35a83f412ac5ea7f4f9a18b1a906bab6e70bad': '',
      title: 'Raja'
    }
    */
    console.log(title);
    /*
    result show in terminal
    Raja
    */
  }

  console.log("Server Action Page");

  return (
    <div>
      <h2>Approach 01</h2>
      

      {/* if we use server action function then in form tag we use action={FormActionFunction} instead of onSubmit={FormActionFunction} */}
      <form action={FormAction}>
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default page