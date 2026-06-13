"use server";
export async function FormAction(formData) {
    const title = formData.get("title");
    console.log(title);
}

export async function FormActionWithProps(title){
    const newdata = {title};

    return {
        success:true,
        message: "sccess",
        data: newdata
    }
}