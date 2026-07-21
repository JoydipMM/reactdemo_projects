import { z } from "zod";

export const authSchema = z.object({
    email: z.string().min(1, 'This field is required').email("Please enter a valid email address"),
    password: z.string().min(6).max(20),
});

export type authFormData = z.infer<typeof authSchema>;