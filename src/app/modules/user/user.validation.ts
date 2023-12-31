import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required',
    }),
    gender: z.string({
      required_error: 'gender is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    userImage: z.string({
      required_error: 'userImage is required',
    }),

    firstName: z.string({
      required_error: 'firstName is required',
    }),
    lastName: z.string({
      required_error: 'lastName is required',
    }),
  }),
});

const updateUserZodSchema = z.object({
    body: z.object({
      email: z.string().optional(),
      password: z.string().optional(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
  });

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};