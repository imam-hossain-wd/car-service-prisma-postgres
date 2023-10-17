import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { service } from "./service.service";


const createService: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await service.createService(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'service create successfully',
      data: result,
    });
  });
const getAllServices: RequestHandler = catchAsync(async (req, res) => {
    const result = await service.getAllService();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'service Retrived successfully',
      data: result,
    });
  });
const getService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await service.getSingleService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single service Retrived successfully',
      data: result,
    });
  });
const updateService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
    const result = await service.updateService(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update service successfully',
      data: result,
    });
  });

const deleteService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await service.deleteService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete user successfully',
      data: result,
    });
  });


  export const serviceController = {
    createService,
    getService,
    getAllServices,
    updateService,
    deleteService
  }