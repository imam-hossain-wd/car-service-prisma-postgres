import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { reviewService } from "./review.service";



const createReview: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await reviewService.createReview(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review create successfully',
      data: result,
    });
  });
const getAllReview: RequestHandler = catchAsync(async (req, res) => {
    const result = await reviewService.getAllReviews();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Retrived successfully',
      data: result,
    });
  });
const getSingleReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await reviewService.getSingleReview(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Review Retrived successfully',
      data: result,
    });
  });
const updateReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
    const result = await reviewService.updateReview(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update Review successfully',
      data: result,
    });
  });

const deleteReview: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await reviewService.deleteReview(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete Review successfully',
      data: result,
    });
  });


  export const reviewController = {
    createReview,
    getSingleReview,
    getAllReview,
    updateReview,
    deleteReview
  }