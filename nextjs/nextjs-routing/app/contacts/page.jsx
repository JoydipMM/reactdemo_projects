import React from 'react'
import { connectDB } from '@/shared/lib/db';
import Contact from '@/shared/models/Contact';
import ContactStatusButton from '@/components/ContactStatusButton';

const page = async () => {
    await connectDB();

    const contactData =  await Contact.find({});

    //console.log(contactData);
  return (
    <div>
        <h2>Conatct Server page</h2>
        {contactData.length > 0 && contactData.map((item, index) => (
            <div className='border mb-1' key={item._id}>
                {item.contactname}
                {item.contactstatus === "read" ? " (Read)" :<ContactStatusButton id={item._id.toString()}/> }
            </div>
            ))}
    </div>
  )
}

export default page