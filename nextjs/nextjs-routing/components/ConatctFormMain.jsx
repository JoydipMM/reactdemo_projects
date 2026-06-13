import React from 'react'
import ContactForm from "@/components/ContactForm";
import { contactFormAction } from "@/actions/contactFormAction";

const ConatctFormMain = () => {
  return (
    <div>
    <ContactForm action={contactFormAction} /> 



    </div>
  )
}

export default ConatctFormMain