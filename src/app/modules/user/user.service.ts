import prisma from "../../../shared/prisma";
import { User } from '@prisma/client';


const createUser = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
      data,
    });
    return result;
  };

  const getAllusers = async ():Promise<User[] | null> => {
    const result = await prisma.user.findMany();
    return result;
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