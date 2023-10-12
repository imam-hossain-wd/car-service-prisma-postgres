import { z } from 'zod';

const createBookingZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "userId is required",
    }),
    serviceId: z.string({
      required_error: "serviceId is required",
    }),
    date: z.string({
      required_error: "date is required",
    }),
    status: z.string({
      required_error: "status is required",
    }),
  })
 
});

const updateBookingZodSchema = z.object({
    body: z.object({
      userId: z.string().optional(),
      serviceId: z.string().optional(),
      date: z.string().optional(),
      status: z.string().optional(),
    }),
  });

export const BookingValidation = {
    createBookingZodSchema,
    updateBookingZodSchema,
};