import { Button, Input } from '@/app/components';
import Link from 'next/link';
import React from 'react'
import { LuUser } from "react-icons/lu";

export default function EditAccountPage() {
  return (
    <>
    <p className="mt-2 text-muted-foreground">
        Edit your profile.
    </p>
      <form className="mt-10 space-y-6">

        {/* Profile */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                <div><Input label="Full Name" type="text" /></div>
                <div><Input label="Email" type="text" /></div>
                <div><Input label="Phone" type="text" /></div>
                
            </div>
            {/* <div className='mt-8 flex  justify-center gap-4 '>
                <Button variant="primary">Update</Button>
            </div> */}
        </div>

        {/* Shipping Address */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                <div><Input label="Country" /></div>
                <div><Input label="State" /></div>
                <div><Input label="City" /></div>
                <div><Input label="Postal Code" /></div>
                <div className='col-span-2'><Input variant="textarea" label="Street Address" /></div>
                
            </div>
            {/* <div className='mt-8 flex  justify-center gap-4 '>
                <Button variant="primary">Update</Button>
            </div> */}
        </div>


        <div className='mt-8 flex  justify-center gap-4 '>
            <Button variant="primary">Save Changes</Button>
        </div>

      </form>
    </>
  )
}
