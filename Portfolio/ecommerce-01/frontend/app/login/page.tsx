import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your static NOVA account UI.",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
