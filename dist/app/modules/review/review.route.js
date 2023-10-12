"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const review_validation_1 = require("./review.validation");
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
router.post('/create', (0, validationRequest_1.default)(review_validation_1.ReviewValidation.createReviewZodSchema), review_controller_1.reviewController.createReview);
router.get('/', review_controller_1.reviewController.getAllReview);
router.get('/:id', review_controller_1.reviewController.getSingleReview);
router.patch('/:id', (0, validationRequest_1.default)(review_validation_1.ReviewValidation.updateReviewZodSchema), review_controller_1.reviewController.updateReview);
router.delete('/:id', review_controller_1.reviewController.deleteReview);
exports.reviewRoutes = router;
