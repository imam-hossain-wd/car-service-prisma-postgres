"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const createBookingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "userId is required",
        }),
        serviceId: zod_1.z.string({
            required_error: "serviceId is required",
        }),
        date: zod_1.z.string({
            required_error: "date is required",
        }),
        status: zod_1.z.string({
            required_error: "status is required",
        }),
    })
});
const updateBookingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        serviceId: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        status: zod_1.z.string().optional(),
    }),
});
exports.BookingValidation = {
    createBookingZodSchema,
    updateBookingZodSchema,
};
