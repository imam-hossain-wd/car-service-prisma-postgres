import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { bookingService } from "./booking.service";


const createBooking: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await bookingService.createBooking(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'booking create successfully',
      data: result,
    });
  });
const getBooking: RequestHandler = catchAsync(async (req, res) => {
    const result = await bookingService.getAllBooking();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'booking Retrived successfully',
      data: result,
    });
  });
const getSingleBooking: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await bookingService.getSingleBooking(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single booking Retrived successfully',
      data: result,
    });
  });
const updateBooking: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
    const result = await bookingService.updateBooking(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update booking successfully',
      data: result,
    });
  });

const deleteBooking: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await bookingService.deleteBooking(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete booking successfully',
      data: result,
    });
  });


  export const bookingcontroller = {
    createBooking,
    getBooking,
    getSingleBooking,
    updateBooking,
    deleteBooking
  }