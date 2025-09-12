import React, { useState } from 'react'

const NormalForm = ({onSubmitData}) => {

    const [formData, setFormData] = useState({
        username:"",
        useremail:""
    })

    const changeEvent = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>({...prev, [name]:value}));
    }

    const handleSubmit = (e) =>{  
        e.preventDefault();
        console.log("Form Data- username: "+ formData.username+ " useremail: " +formData.useremail);
        onSubmitData(formData);
    }  
    
  return (
    <div className={`card`}>
        <div>
            <h3 className="text-2xl font-bold text-cyan-900 mb-6">Simple Form</h3>
            {/* <label className="text-xs text-gray-600 p-0 mb-0">Tagline: Practice. Build. Repeat.</label> */}
        </div>

        <form onSubmit={handleSubmit}>
            <div className='w-full relative flex flex-col gap-y-5'>
                <div className='w-full relative flex flex-col gap-y-2'>
                    <label className='px-2.5'>User Name</label>
                    <input 
                    type='text' 
                    className='formfield' 
                    placeholder='Full Name' 
                    name="username" 
                    onChange={changeEvent} 
                    value={formData.name} 
                    />
                </div>
                <div className='w-full relative flex flex-col gap-y-2'>
                    <label className='px-2.5'>User Email</label>
                    <input
                    type='email'
                    className='formfield'
                    placeholder='Email'
                    name="useremail"
                    onChange={changeEvent}
                    value={formData.email}
                    />
                </div>
                <div className='w-full relative flex gap-x-2 justify-end'>
                    <button type='reset' className='py-1.5 px-3.5 bg-red-700 hover:bg-black rounded-2xl text-amber-50 flex items-center justify-center cursor-pointer'>Reset</button>
                    <button type='submit' className='py-1.5 px-3.5 bg-blue-700 hover:bg-black rounded-2xl text-amber-50 flex items-center justify-center cursor-pointer'>Submit</button>
                </div>
            </div>
        </form>


    </div>
  )
}

export default NormalForm
