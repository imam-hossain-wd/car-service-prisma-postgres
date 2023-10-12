"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        price: zod_1.z.number({
            required_error: 'firstName is required',
        }),
        availability: zod_1.z.boolean({
            required_error: 'availability is required',
        }),
    }),
});
const updateServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        availability: zod_1.z.boolean().optional(),
    }),
});
exports.ServiceValidation = {
    createServiceZodSchema,
    updateServiceZodSchema,
};
