"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
        firstName: zod_1.z.string({
            required_error: 'firstName is required',
        }),
        lastName: zod_1.z.string({
            required_error: 'lastName is required',
        }),
    }),
});
const updateAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
    }),
});
exports.AdminValidation = {
    createAdminZodSchema,
    updateAdminZodSchema,
};
