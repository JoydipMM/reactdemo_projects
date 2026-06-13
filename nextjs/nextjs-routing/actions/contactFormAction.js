"use server";
import { connectDB } from "@/shared/lib/db";
import Contact from "@/shared/models/Contact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function contactFormAction(formData){
    await connectDB();
    console.log(formData);
    const data = {
        contactname: formData.get("contactname"),
        contactemail : formData.get("contactemail"),
        contactmessage : formData.get("contactmessage"),
        contactstatus : "pending"
    }
    console.log(data);

    await Contact.create(data).catch((err) => console.log(err));

    console.log("New Contact info added successfully!!!");

    redirect("/contacts");
}


export async function GetContactsAction(){
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }); // syntax: await ModelName.find().sort();
    return contacts;
}

export async function updateContact(id){
    await connectDB();
    await Contact.findByIdAndUpdate(id, {
        contactstatus: "read"
    })

    /*
    revalidatePath() is a Next.js function used to clear the cache and re-render a specific route after data changes.
    It's commonly used inside Server Actions after creating, updating, or deleting data.
    */
    revalidatePath("/contacts");
}