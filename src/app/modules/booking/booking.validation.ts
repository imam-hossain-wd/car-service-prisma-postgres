import { z } from 'zod';

const createBookingZodSchema = z.object({
  userId: z.string({
    required_error: "userId is required",
  }),
  serviceId: z.string({
    required_error: "serviceId is required",
  }),
  date: z.date({
    required_error: "date is required",
  }),
  status: z.string({
    required_error: "status is required",
  }),
});

const updateBookingZodSchema = z.object({
    body: z.object({
      email: z.string().optional(),
      password: z.string().optional(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
  });

export const BookingValidation = {
    createBookingZodSchema,
    updateBookingZodSchema,
};