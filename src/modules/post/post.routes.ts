import { Router } from 'express';
import { requireAuth } from '../../middlewares/require-auth.js';
import { validate } from '../../middlewares/version2/validate.js';
import { requireRole } from '../../middlewares/require-role.js';
import PostSchema from '../../generated/zod/modelSchema/PostSchema.js';
import { createPost, getPosts } from './post.controllers.js';

export const postRouter = Router();

// ⭐ CREATE: Only authenticated users (admin/user)
postRouter.post(
  '/user/posts',
  requireAuth,
  requireRole('admin', 'user'),
  validate(PostSchema),
  createPost
);

// ⭐ READ: Public (no auth needed)
postRouter.get('/user/posts',getPosts);
