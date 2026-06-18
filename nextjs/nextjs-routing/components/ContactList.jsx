import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { GetContactsAction } from '@/actions/contactFormAction';

const ContactList = () => {

  const [contacts, setContacts] = useState([]);



    const getContactData = async () => {
      // const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // const data = await res.json();
      
      const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
      console.log("Get dataaaaa --  ", data);
      return data;
    }


    const {data: contactsData, isLoading, error} = useQuery({
      queryKey: ["conatcts_query_data"],
      queryFn: () => getContactData(),
    })


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
    <hr/>
    <br/>
    { isLoading && <div>Loading...</div>}
    { error && <div>{error.message}</div>}
    {contactsData?.length > 0 && contactsData.map((contact,index)=>(
      <div className="border p-2 mb-1" key={contact.id}>
        {contact.name} - {contact.id}
      </div>
    ))}
    
    </>
  )
}

export default ContactList