import { Router } from "express";

import validateRequest from "../../middlewares/validationRequest";
import { BookingValidation } from "./booking.validation";
import { bookingcontroller } from "./booking.controller";


const router = Router();

router.post('/create', 
validateRequest(BookingValidation.createBookingZodSchema),
bookingcontroller.createBooking)
router.get('/', bookingcontroller.getBooking)
router.get('/:id', bookingcontroller.getSingleBooking)
router.patch('/:id',
validateRequest(BookingValidation.updateBookingZodSchema),
bookingcontroller.updateBooking)
router.delete('/:id', bookingcontroller.deleteBooking)

export const bookingRoutes = router;