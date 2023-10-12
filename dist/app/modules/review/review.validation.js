"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
        serviceId: zod_1.z.string({
            required_error: 'serviceId is required',
        }),
        rating: zod_1.z.number({
            required_error: 'rating is required',
        }),
        content: zod_1.z.string({
            required_error: 'content is required',
        }),
    }),
});
const updateReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        serviceId: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        content: zod_1.z.boolean().optional(),
    }),
});
exports.ReviewValidation = {
    createReviewZodSchema,
    updateReviewZodSchema,
};
