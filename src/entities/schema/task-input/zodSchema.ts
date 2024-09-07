import { z } from "zod";

export const taskInputSchema = z.object({
  title: z.string().min(1),
});
