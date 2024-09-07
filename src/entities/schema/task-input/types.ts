import { z } from "zod";
import { taskInputSchema } from "./zodSchema";

export type TaskInputType = z.infer<typeof taskInputSchema>;
