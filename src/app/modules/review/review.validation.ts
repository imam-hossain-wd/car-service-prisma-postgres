import { z } from 'zod';

const createReviewZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is required',
    }),
    serviceId: z.string({
      required_error: 'serviceId is required',
    }),

    rating: z.number({
      required_error: 'rating is required',
    }),
    comment: z.string({
      required_error: 'comment is required',
    }),
  }),
});


const updateReviewZodSchema = z.object({
    body: z.object({
      userId: z.string().optional(),
      serviceId: z.string().optional(),
      rating: z.number().optional(),
      content: z.boolean().optional(),
    }),
  });

export const ReviewValidation = {
  createReviewZodSchema,
  updateReviewZodSchema,
};