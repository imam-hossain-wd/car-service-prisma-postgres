"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const booking_validation_1 = require("./booking.validation");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
router.post('/create', (0, validationRequest_1.default)(booking_validation_1.BookingValidation.createBookingZodSchema), booking_controller_1.bookingcontroller.createBooking);
router.get('/', booking_controller_1.bookingcontroller.getBooking);
router.get('/:id', booking_controller_1.bookingcontroller.getSingleBooking);
router.patch('/:id', (0, validationRequest_1.default)(booking_validation_1.BookingValidation.updateBookingZodSchema), booking_controller_1.bookingcontroller.updateBooking);
router.delete('/:id', booking_controller_1.bookingcontroller.deleteBooking);
exports.bookingRoutes = router;
