import prisma from "../../../shared/prisma";
import { Admin } from '@prisma/client';


const createAdmin = async (data: Admin): Promise<Admin> => {
    const result = await prisma.admin.create({
      data,
    });
    return result;
  };

  const getAllAdmin = async ():Promise<Admin[] | null> => {
    const result = await prisma.admin.findMany();
    return result;
  };
  const getSingleAdmin = async (id:string):Promise<Admin | null> => {
    const result = await prisma.admin.findUnique({
      where: {
        id
      }
    });
    return result;
  };
  const updateAdmin = async (id:string, data:Partial<Admin>): Promise<Admin> => {
    const result = await prisma.admin.update({
      where: {
        id
      }, data
    });
    return result;
  };
  const deleteAdmin = async (id:string):Promise<Admin | null> => {
    const result = await prisma.admin.delete({
      where: {
        id
      }
    });
    return result;
  };


  export const adminService = {
    createAdmin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin
  }