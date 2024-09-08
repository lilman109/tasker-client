import { z } from "zod";
import { userCredentialsSchema } from "./zodSchema";

export type UserCredentialsType = z.infer<typeof userCredentialsSchema>;
