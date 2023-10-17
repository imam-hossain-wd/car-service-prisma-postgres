import { paginationHelpers } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { Prisma, User } from '@prisma/client';
import { UserSearchAbleFields } from "./user.constants";


const createUser = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
      data,
    });
    return result;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getAllusers = async (filters:any,options:any ) => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, } = filters;
    const { sortBy, sortOrder } = options;
    const andConditions = [];
    if (searchTerm) {
      andConditions.push({
        OR: UserSearchAbleFields.map(field => ({
          [field]: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        })),
      });
    }
    const whereConditions: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.user.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy: { [sortBy]: sortOrder },
  });

  const total = await prisma.user.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / size);
  return {
    data: result,
    meta: { page, size, total, totalPage },
  };
  };

  const getSingleUser = async (id:string):Promise<User | null> => {
    const result = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return result;
  };
  const updateUser = async (id:string, data:Partial<User>): Promise<User> => {
    const result = await prisma.user.update({
      where: {
        id
      }, data
    });
    return result;
  };
  const deleteUser = async (id:string):Promise<User | null> => {
    const result = await prisma.user.delete({
      where: {
        id
      }
    });
    return result;
  };


  export const userService = {
    createUser,
    getAllusers,
    getSingleUser,
    updateUser,
    deleteUser
  }