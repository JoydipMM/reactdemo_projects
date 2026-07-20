import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  { authSchema } from "../schema/auth.schema";
import type { AuthFormData } from "../schema/auth.schema";


const useRegistrationHook = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<AuthFormData>({
        resolver: zodResolver(authSchema),
        mode: "onBlur",
    });

    const onSubmit = async (data: AuthFormData) => {
        try {
            setLoading(true);
            //await authApi.register(data);
            console.log(data);
        } finally {
            setLoading(false);
        }
    };

    return{
        ...form,
        loading,
        onSubmit
    }

}

export default useRegistrationHook;