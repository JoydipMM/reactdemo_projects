"use client";
import React from 'react'
import Form from 'next/form';

const ContactForm = ({action}) => {
  return (
    <div>
        <h1>ContactForm</h1>
        <Form action={action}>
            <div>
                <input type="text" name="contactname" placeholder='Name' className='border p-2' />
            </div>
            <div>
                <input type="email" name="contactemail" placeholder='Email' className='border p-2' />
            </div>
            <div>
                <textarea type="text" name="contactmessage" placeholder='Message' rows={3} className='border p-2' />
            </div>
            <div>
                <input type='submit' className='border p-2 bg-amber-500' value={"Submit"} />
            </div>
        </Form>


    </div>
  )
}

export default ContactForm