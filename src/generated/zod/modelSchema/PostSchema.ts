import { z } from 'zod';

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.cuid(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  excerpt: z.string().nullable(),
  coverImage: z.string().nullable(),
  published: z.boolean(),
  featured: z.boolean(),
  viewCount: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  authorId: z.string(),
  categoryId: z.string().nullable(),
})

export type Post = z.infer<typeof PostSchema>

export default PostSchema;
