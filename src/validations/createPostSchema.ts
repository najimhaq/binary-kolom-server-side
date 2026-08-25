import z from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().max(500).optional(),
  categoryId: z.string().optional(),
  published: z.boolean().optional().default(false),
});
