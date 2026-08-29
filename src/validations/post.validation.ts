import { z } from 'zod';

export const createPostSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters.')
    .max(180, 'Title must be less than 180 characters.'),

  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters.')
    .max(200, 'Slug must be less than 200 characters.')
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Use lowercase letters, numbers, and hyphens only.'
    ),

  excerpt: z
    .string()
    .min(20, 'Excerpt must be at least 20 characters.')
    .max(350, 'Excerpt must be less than 350 characters.'),

  content: z.string().min(50, 'Content must be at least 50 characters.'),

  published: z.boolean().default(false),

  categoryId: z.string().min(1, 'Please select a category.'),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
