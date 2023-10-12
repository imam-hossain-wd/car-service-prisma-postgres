import { Router } from "express";
import validateRequest from "../../middlewares/validationRequest";
import { ReviewValidation } from "./review.validation";
import { reviewController } from "./review.controller";



const router = Router();

router.post('/create', 
validateRequest(ReviewValidation.createReviewZodSchema),
reviewController.createReview)
router.get('/', reviewController.getAllReview)
router.get('/:id', reviewController.getSingleReview)
router.patch('/:id',
validateRequest(ReviewValidation.updateReviewZodSchema),
reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)

export const reviewRoutes = router;