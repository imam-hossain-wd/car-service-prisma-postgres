import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import config from "../../../config";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { IRefreshTokenResponse } from "./auth.interface";


const login: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await authService.login(data);
    const { refreshToken, ...others } = result;
  
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };
  
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User login successfully!',
      data: others
    })
  });

  const refreshToken:RequestHandler = catchAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    const result = await authService.refreshToken(refreshToken);
  
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };
  
    res.cookie('refreshToken', refreshToken, cookieOptions);
    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: 200,
      success: true,
      message: 'get refresh token successfully !',
      data: result,
    });
  });
  
  export const authController = {
    login,
    refreshToken
  }