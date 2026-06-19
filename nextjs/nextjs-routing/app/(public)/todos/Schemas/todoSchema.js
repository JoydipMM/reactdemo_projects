import { z } from "zod";

export const todoSchema = z.object({
    title:z
    .string()
    .trim()
    .min(1, "Todo title is required") // if title is empty it will show "Todo title is required"
    .min(3,"Todo title must be at least 3 characters long")
    .max(50,"Todo title must be at most 50 characters long")
    .nonempty("Todo title is required"),
})

export const todoActionSchema = z.object({
    title:z
    .string()
    .trim()
    .min(1, "Todo title is required") // if title is empty it will show "Todo title is required"
    .min(3,"Todo title must be at least 3 characters long")
    .max(50,"Todo title must be at most 50 characters long").
    nonempty("Todo title is required"),
    isCompleted:z.boolean().optional(),
})