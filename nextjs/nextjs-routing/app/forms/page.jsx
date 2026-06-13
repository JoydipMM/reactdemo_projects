import React from 'react'
import Form from 'next/form';
import { SubmitUserForm } from '@/actions/formActions';
import Link from 'next/link';
import Image from 'next/image';

const FormPage = () => {
  return (
    <div>
        <h2>Form Page</h2>
        <hr/>
        <br/>
        <br/>
        <h2>Server action Form</h2>
        <hr/>
        <Form action={SubmitUserForm}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <button type="submit">Submit</button>
        </Form>
        <br/>
        <br/>
        <br/>
        <h2>Search params Form</h2>
        <hr/>
        <Form action="forms/serach">
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <button type="submit">Submit</button>
        </Form>
        <br/>
        <br/>
        <h2>Search params 2 Form</h2>
        <hr/>
        <Form action="forms/search-post">
            <input type="text" name="query" placeholder="search post by ID" />
            <button type="submit">Submit</button>
        </Form>
        <br/>
        <Link href={{
            pathname: "/forms/search-post",
            query: {query: "8"}
        }} >Link with Query parameter</Link>

        <Image src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={400} quality={100} />
    </div>
  )
}

export default FormPage