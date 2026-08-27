import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a static NOVA account UI.",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
