import { useState } from "react";
import { loginUser } from "../services/apiService";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (credential) => {
        try{
            setLoading(true);
            setError("");

            const res = await loginUser(credential);
            return res.data;

        }catch(err){
            setError(err?.response?.data?.message || "Login failed");
            throw err;
        }finally{
            setLoading(false);
        }

    }

    return { login, loading, error }
}