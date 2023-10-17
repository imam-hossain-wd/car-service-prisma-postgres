import {
  ILogin,
  ILoginResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const login = async (data: ILogin):Promise<ILoginResponse | undefined> => {
  const { email, password } = data;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  const isAdminExit = await prisma.admin.findFirst({
    where: {
      email,
    },
  });

  const isSuperAdminExit = await prisma.superAdmin.findFirst({
    where:{
      email
    }
  })
  
  if (isSuperAdminExit && isSuperAdminExit?.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }
  if (isAdminExit && isAdminExit?.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }


  if (isUserExist && isUserExist?.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  if (
    (isUserExist && isUserExist.password === password) ||
    (isAdminExit && isAdminExit.password === password) || isSuperAdminExit && isSuperAdminExit.password ===password
  ) {
    const id = isUserExist?.id || isAdminExit?.id || isSuperAdminExit?.id;
    const role = isUserExist?.role || isAdminExit?.role || isSuperAdminExit?.role;

    const accessToken = jwtHelpers.createToken(
      { id, role },
      config.jwt.secret as Secret,
      config.jwt.expires_in as string
    );

    const refreshToken = jwtHelpers.createToken(
      { id, role },
      config.jwt.refresh_secret as Secret,
      config.jwt.refresh_expires_in as string
    );
    return {
      accessToken,
      refreshToken,
    };
  }
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { id, role } = verifiedToken;

  const isUserExist = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const newAccessToken = jwtHelpers.createToken(
    {
      id,
      role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  login,
  refreshToken,
};
