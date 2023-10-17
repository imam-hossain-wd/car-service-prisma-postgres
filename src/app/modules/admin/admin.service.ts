import { paginationHelpers } from '../../../helpers/paginationHelper';
import prisma from '../../../shared/prisma';
import { Admin, Prisma } from '@prisma/client';
import { AdminSearchAbleFields } from './admin.constants';

const createAdmin = async (payload: Admin): Promise<Admin> => {
  const data = payload;
  const {
    gender,
    contactNo,
    bloodGroup,
    designation,
    email,
    emergencyContactNo,
    presentAddress,
    permanentAddress,
  } = data?.admin;

  const adminData = {
    firstName: data?.admin?.name.firstName,
    middleName: data?.admin?.name.middleName,
    lastName: data?.admin?.name.lastName,
    gender,
    contactNo,
    bloodGroup,
    designation,
    emergencyContactNo,
    presentAddress,
    permanentAddress,
    email,
    password: data.password,
  };
  const result = await prisma.admin.create({
    data: adminData,
  });
  return result;
};

const getAllAdmin = async () => {
  const result = await prisma.admin.findMany()
  return result
//  console.log(filters, 'filters');
//   const { page, size, skip } = paginationHelpers.calculatePagination(options);
//   console.log(page, "page");
//   console.log(size, 'size');
//   console.log(skip, "skip");
//   const { searchTerm, ...filterData } = filters;
//   const { sortBy, sortOrder } = options;


//   const andConditions = [];

//   if (searchTerm) {
//     andConditions.push({
//       OR: AdminSearchAbleFields.map(field => ({
//         [field]: {
//           contains: searchTerm,
//           mode: 'insensitive',
//         },
//       })),
//     });
//   } 

//   const whereConditions: Prisma.AdminWhereInput =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   const result = await prisma.admin.findMany({
//     where: whereConditions,
//     skip,
//     take: size,
//     orderBy: { [sortBy]: sortOrder },
//   });

//   const total = await prisma.admin.count({
//     where: whereConditions,
//   });

//   const totalPage = Math.ceil(total / size);

//   return {
//     data: result,
//     meta: { page, size, total, totalPage },
//   };
};


const getSingleAdmin = async (id:any): Promise<Admin | null> => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateAdmin = async (
  id: string,
  data: Partial<Admin>
): Promise<Admin> => {
  const result = await prisma.admin.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteAdmin = async (id: string): Promise<Admin | null> => {
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  });
  return result;
};

export const adminService = {
  createAdmin,
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
