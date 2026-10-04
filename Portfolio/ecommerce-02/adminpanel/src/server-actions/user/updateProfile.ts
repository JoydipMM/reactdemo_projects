"use server"

import { EditProfileFormValues } from "@/app/components/user/EditUserProfileForm";
import toast from "react-hot-toast";
import { getCurrentUser } from "../auth/getCurrentUser";
import { prisma } from "@/database/db";
import { revalidatePath } from "next/cache";

export async function updateProfile(data: EditProfileFormValues) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            toast.error("Unauthorized");
            return {
                success: false,
                message: "Unauthorized",
            }
        }

        // we will update multiple models in the database, 
        // so we will use a "transaction" to ensure that all updates are successful or none at all
        await prisma.$transaction(async (tx) => {
            // Update the user model with the new name and phone number
            await tx.user.update({
                where: {id: currentUser.id},
                data: {
                    name: data.name,
                    phone: data.phone,
                }
            });

            // Get user default address
            const defaultAddress = await tx.address.findFirst({
                where: { id: currentUser.id, isDefault: true }
            });

            if (defaultAddress) {
                // Update the default address with the new address data
                await tx.address.update({
                    where: { id: defaultAddress.id },
                    data:{
                        firstName: data.firstName,
                        lastName: data.lastName,
                        street: data.street,
                        city: data.city,
                        state: data.state,
                        postCode: data.postCode,
                        country: data.country,
                    }
                })
            }else{
                // Create a new address if no default address exists
                await tx.address.create({
                    data:{
                        userId: currentUser.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        street: data.street,
                        city: data.city,
                        state: data.state,
                        postCode: data.postCode,
                        country: data.country,
                        phone: data.phone,
                        isDefault: true,
                    }
                })
            }

        });

        revalidatePath("/account");
        revalidatePath("/account/edit");
        return {
            success: true,
            message: "Profile updated successfully",
        }

    }catch (error) {
        return {
            success: false,
            message: `Failed to update profile, ${error}`,
        }
    }

}