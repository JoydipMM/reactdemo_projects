import  { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  { authSchema } from "../schemas/auth.schema";
import  type { authFormData } from "../schemas/auth.schema";

const RegisterForm = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<authFormData>({
    resolver: zodResolver(authSchema),
    mode: "onBlur",
  })

  return (
    <div>
      Register form
    </div>
  )
}

export default RegisterForm
