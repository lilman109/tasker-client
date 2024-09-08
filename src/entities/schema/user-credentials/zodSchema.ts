import { z } from "zod";

export const userNameSchema = z.string().min(1);
export const passwordSchema = z.string().min(1);

export const userCredentialsSchema = z.object({
  username: userNameSchema,
  password: passwordSchema,
});
