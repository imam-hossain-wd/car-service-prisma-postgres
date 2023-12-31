import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { UserFilterableFields } from "./user.constants";


const createUser: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    console.log(data, 'user data');
    const result = await userService.createUser(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user create successfully',
      data: result,
    });
  });
const getUsers: RequestHandler = catchAsync(async (req, res) => {

  const filters = pick(req.query,UserFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
    const result = await userService.getAllusers(filters,options);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user Retrived successfully',
      data: result,
    });
  });
const getUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await userService.getSingleUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single user Retrived successfully',
      data: result,
    });
  });
const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
    const result = await userService.updateUser(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update user successfully',
      data: result,
    });
  });

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
    const result = await userService.deleteUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete user successfully',
      data: result,
    });
  });


  export const usercontroller = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
  }