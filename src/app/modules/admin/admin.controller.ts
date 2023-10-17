import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { AdminFilterableFields } from "./admin.constants";


const createAdmin: RequestHandler = catchAsync(async (req, res) => {

  const data = req.body;
    const result = await adminService.createAdmin(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin create successfully',
      data: result,
    });
  });
const getAllAdmin: RequestHandler = catchAsync(async (req, res) => {
  // const filters = pick(req.query,AdminFilterableFields);
  // const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  //   const result = await adminService.getAllAdmin(filters,options);
    const result = await adminService.getAllAdmin();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin Retrived successfully',
      data: result,
    });
  });
const getSingleAdmin: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await adminService.getSingleAdmin(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Admin Retrived successfully',
      data: result,
    });
  });
const updateAdmin: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
    const result = await adminService.updateAdmin(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update Admin successfully',
      data: result,
    });
  });

const deleteAdmin: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await adminService.deleteAdmin(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete Admin successfully',
      data: result,
    });
  });


  export const adminController = {
    createAdmin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin
  }