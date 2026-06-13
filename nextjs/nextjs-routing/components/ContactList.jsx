import React, { useState, useEffect } from 'react'
import { GetContactsAction } from '@/actions/contactFormAction';

const ContactList = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    const getContacts = async () => {
      const contacts = await GetContactsAction();
      setContacts(contacts);
    }
    getContacts();
  },[]);

  return (
    <>
    <h2><b>Contact List</b></h2>
    {contacts.length > 0 && contacts.map((contact,index)=>(
      <div className="border p-2 mb-1" key={contact._id}>
        {contact.contactname} - {contact._id}
      </div>
    ))}
    
    </>
  )
}

export default ContactList