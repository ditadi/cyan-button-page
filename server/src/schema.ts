
import { z } from 'zod';

// Simple schema for the button page response
export const buttonPageSchema = z.object({
  html: z.string()
});

export type ButtonPage = z.infer<typeof buttonPageSchema>;
