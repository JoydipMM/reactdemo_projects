"use server";
export async function FormAction(formData) {
    const title = formData.get("title");
    console.log(title);
}

export async function SubmitUserForm(formData){
    const username = formData.get("username");
    const email = formData.get("email");

    console.log("Submitted user data: ", username, email);
}