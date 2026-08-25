import rateLimit from 'express-rate-limit';
import type { Request, Response } from 'express';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later',
    });
  },
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Login/signup: 10 attempts
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      message: 'Too many auth attempts, please try again later',
    });
  },
});
