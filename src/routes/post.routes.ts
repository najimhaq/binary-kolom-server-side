import { Router } from 'express';
import { z } from 'zod';

import { generateSlug } from '../utils/slug.js';
import { createPostSchema } from '../validations/createPostSchema.js';
import { validate } from '../middlewares/version2/validate.js';
import { prisma } from '../lib/prisma.js';

const router = Router();

// ⭐ Zod Schema — Strict Validation (Security)


// Create Blog Post
router.post('/', validate(createPostSchema), async (req, res, next) => {
  try {
    const { title, content, excerpt, categoryId, published } = req.body;

    // Check duplicate slug
    const baseSlug = generateSlug(title);
    let slug = baseSlug;
    let count = 1;

    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        published,
        // Temporary: Will use auth session in next lesson
        authorId: 'temp-admin-id',
        categoryId: categoryId || null,
      },
      include: {
        author: { select: { name: true, email: true } },
        category: true,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: post,
    });
  } catch (error) {
    next(error);
  }
});

// Get All Published Posts (Public)
router.get('/', async (_req, res, next) => {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: { select: { name: true, image: true } },
        category: { select: { name: true, slug: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ success: true, data: posts });
  } catch (error) {
    next(error);
  }
});

export default router;
