import type { RequestHandler } from 'express';
import { generateSlug } from '../../utils/slug.js';
import { prisma } from '../../lib/prisma.js';
import { AppError } from '../../utils/app-error.js';
export const createPost: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new AppError('Authentication required', 401);
    }
    const { title, content, excerpt, categoryId, published } = req.body;

    // Unique slug generate
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
        authorId: req.user!.id,
        categoryId: categoryId || null,
      },
      include: {
        author: { select: { name: true, email: true, image: true } },
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
};

export const getPosts: RequestHandler = async (_req, res, next) => {
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
};
