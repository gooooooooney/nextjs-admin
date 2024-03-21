import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(50),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
