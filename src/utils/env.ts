import { z } from "zod";

// Schema for .env file
const EnvSchema = z.object({
  VITE_OWM_API_KEY: z.string().regex(/^[a-zA-Z0-9]+$/),
});

// Parse the environment variables
const parsedEnv = EnvSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables:",
    parsedEnv.error.flatten().fieldErrors,
  );
  throw new Error("Environment variables parsing failed.");
}

export const env = parsedEnv.data;
