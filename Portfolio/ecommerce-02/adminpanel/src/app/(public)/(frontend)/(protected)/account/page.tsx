import { Button } from '@/app/components';
import { getProfile } from '@/server-actions/user/getProfile';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { LuUser } from "react-icons/lu";

export default async function AccountPage() {

  const userProfile = await getProfile();

  if(!userProfile){
    redirect("/signin")
  }

  const address = userProfile.address[0]
  //console.log(address);

  return (
    <>
      <p className="mt-2 text-muted-foreground">
        Manage your profile, orders and account.
      </p>
      <div className="mt-10 space-y-6">

        {/* Profile */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <LuUser size={20} />
                <h2 className="text-xl font-semibold">Profile Information</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                <div><p className="text-sm text-muted-foreground">Full Name</p><p className="font-medium">{userProfile?.name}</p></div>
                <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">{userProfile?.email ?? "-"}</p></div>
                <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">{userProfile?.phone ?? "-"}</p></div>
                <div><p className="text-sm text-muted-foreground">Member Since</p><p className="font-medium">{userProfile.createdAt.toLocaleDateString("en-US",{
                  month:"long",
                  year: "numeric"
                })}</p></div>
            </div>
            <div className='mt-8 flex  justify-center gap-4 '>
                <Link href="/account/edit"><Button variant="primary">Edit Profile</Button></Link>
                <Link href="/account/orders"><Button variant="outline">My Orders</Button></Link>
            </div>
        </div>


        {/* Shipping Address */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {address ? (
                  <div><p className="text-sm text-muted-foreground">
                    {address.firstName} {address.lastName},<br/>
                    <b>Street:</b> {address.street}<br/>
                    <b>City:</b> {address.city}<br/>
                    <b>State:</b> {address.state}<br/>
                    {/* <b>Country:</b> {address.country}<br/> */}
                    <b>postCode:</b> {address.postCode ?? "Not provided"}<br/>
                    </p></div>
                ) : (
                  <div><p className="text-sm text-muted-foreground">
                 No shipping address added yet.   
                    </p></div>
                )}
            </div>
            <div className='mt-8 flex  justify-center gap-4 '>
                {/* <Link href="/account/edit"><Button variant="primary">Edit Profile</Button></Link> */}
                {/* <Button variant="outline">My Order</Button> */}
            </div>
        </div>

        <p className="text-muted-foreground">No shipping address added yet.</p>





      </div>
    </>
  );
}
