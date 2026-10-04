"use server"

import toast from "react-hot-toast"
import { getCurrentUser } from "../auth/getCurrentUser";
import { prisma } from "@/database/db";

export async function getProfile(){
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) return null;

        const user = await prisma.user.findUnique({
            where: { id: currentUser.id },
            include: {
                address:{
                    where:{
                        isDefault: true
                    },
                    take:1
                }
            }
        })

        return user;
        
    } catch (error) {
        toast(`Failed to fetch the user data ${error}`)
        return null;
    }
}