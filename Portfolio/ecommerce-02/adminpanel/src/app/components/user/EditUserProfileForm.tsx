"use client"
import Button from '../ui/Button'
import Input from '../ui/Input'
import z from 'zod'
import { getProfile } from '@/server-actions/user/getProfile'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfile } from '@/server-actions/user/updateProfile'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface EditProfileFormProps {
    userProfile: Awaited<ReturnType<typeof getProfile>>
}

export const editProfileSchema = z.object({
    name: z.string().trim().min(5, "Name must be at least 5 characters").max(20, "Name is too long"),
    firstName: z.string().trim().min(2, "Firstname must be at least 5 characters").max(20, "Firstname is too long"),
    lastName: z.string().trim().min(2, "Lastname must be at least 5 characters").max(20, "Lastname is too long"),
    phone: z.union([z.string(), z.number()])
        .transform((value) => value === "" ? undefined : String(value))
        .pipe(
            z.string()
                .regex(/^\d{10,12}$/, "Please enter a valid 10-12 digit phone number")
                .transform(Number)
                .optional(),
        ),
    email: z.email().optional(),
    street: z.string().trim().min(2, "Street is Required").max(30, "Street name is too long"),
    state: z.string().trim().min(2, "State is Required").max(30, "State name is too long"),
    city: z.string().trim().min(2, "City is Required").max(30, "City name is too long"),
    postCode: z.string().trim().min(3, "Postal Code is Required").max(10, "Postal Code is too long"),
    country: z.string().trim().min(2, "Country is Required").max(30, "Country name is too long"),
    isDefault: z.boolean().optional(),
})

export type EditProfileFormValues = z.infer<typeof editProfileSchema>

export default function EditUserProfileForm({userProfile}:EditProfileFormProps) {
    const router = useRouter();
    const address = userProfile?.address[0]
    const { register, handleSubmit, formState:{ errors, isSubmitted, isSubmitting }  } = useForm<
        z.input<typeof editProfileSchema>,
        unknown,
        EditProfileFormValues
    >({
        resolver: zodResolver(editProfileSchema),
        defaultValues:{
            name: userProfile?.name ?? "",
            phone: userProfile?.phone ?? undefined,
            firstName: address?.firstName ?? "",
            isDefault: address?.isDefault ?? false,
            lastName:  address?.lastName ?? "",
            state:  address?.state ?? "",
            street: address?.street ?? "",
            city: address?.city ?? "",
            postCode: address?.postCode ?? "",
            country: address?.country ?? "",
        }
    })

    const onSubmitHandler = async (data: EditProfileFormValues) => {
        console.log(data);
        const result = await updateProfile(data);

        if(!result.success){
            return toast.error(result.message);
        }

        toast.success(result.message);
        router.refresh();
    }

  return (
    <>
    <form className="mt-10 space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>

        {/* Profile */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                <div><Input label="Name" type="text" {...register("name")} error={errors.name?.message} /></div>
                {/* <div><Input label="Email" type="text" {...register("email")} disabled={true} /></div> */}
                <div>
                    <div className="w-full space-y-2">
                        <div className="text-sm font-medium text-foreground">Email</div>
                        <div className="w-full py-2 rounded-lg bg-background text-foreground placeholder:text-muted-foreground outline-none transition-colors mt-1 border border-border focus:border-primary h-12 px-4">
                            {userProfile?.email}
                        </div>
                    </div>
                </div>
                <div><Input label="Phone" type="text" {...register("phone")} error={errors.phone?.message} /></div>
                
            </div>
        </div>

        {/* Shipping Address */}
        <div className="rounded-2xl border border-border p-6">
            <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                <div><Input label="Firstname" {...register("firstName")} error={errors.firstName?.message} /></div>
                <div><Input label="Lastname" {...register("lastName")} error={errors.lastName?.message} /></div>
                <div><Input label="Country" {...register("country")} error={errors.country?.message} /></div>
                <div><Input label="State" {...register("state")} error={errors.state?.message} /></div>
                <div><Input label="City" {...register("city")} error={errors.city?.message} /></div>
                <div><Input label="Postal Code" {...register("postCode")} error={errors.postCode?.message} /></div>
                <div className='col-span-2'><Input variant="textarea" label="Street Address" {...register("street")} error={errors.street?.message} /></div>
                <div className='col-span-2'><label><input type='radio' {...register("isDefault")} /><span>Mark this address as default</span></label></div>
            </div>
        </div>


        <div className='mt-8 flex  justify-center gap-4 '>
            <Button disabled={isSubmitting} variant="primary">{isSubmitting ? "Saving..." : "Save Changes"}</Button>
        </div>

      </form>
    
    
    </>
  )
}
