import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id','title','slug','content','excerpt','coverImage','published','featured','viewCount','createdAt','updatedAt','authorId','categoryId']);

export default PostScalarFieldEnumSchema;
