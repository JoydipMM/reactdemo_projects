"use client";
import React from 'react'
import Form from 'next/form';
import { updateContact } from '@/actions/contactFormAction';

const ContactStatusButton = ({id}) => {

    // by default form action get data from formData, So if we to get some extra data then we use bind() method.
    const action = updateContact.bind(null, id)
  return (
    <>
    <Form action={action}>
        <button>Mark as Read</button>
    </Form>
    </>
  )
}

export default ContactStatusButton