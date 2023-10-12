import { z } from 'zod';

const createServiceZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),

    price: z.number({
      required_error: 'firstName is required',
    }),
    availability: z.boolean({
      required_error: 'availability is required',
    }),
  }),
});

const updateServiceZodSchema = z.object({
    body: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      price: z.number().optional(),
      availability: z.boolean().optional(),
    }),
  });

export const ServiceValidation = {
  createServiceZodSchema,
  updateServiceZodSchema,
};