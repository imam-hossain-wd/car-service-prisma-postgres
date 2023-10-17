import { paginationHelpers } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";
import { Booking, Prisma} from '@prisma/client';
import { BookingSearchAbleFields } from "./booking.constants";


const createBooking = async (data: Booking): Promise<Booking> => {
  console.log(data, 'booking data');
    const result = await prisma.booking.create({
      data,
      include:{
        user:true,
        service:true
      }
    });
    return result;
  };


  const getAllBooking = async (filters:any,options:any) => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, } = filters;
    const { sortBy, sortOrder } = options;

    const andConditions = [];
    if (searchTerm) {
      andConditions.push({
        OR: BookingSearchAbleFields.map(field => ({
          [field]: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        })),
      });
    }
    const whereConditions: Prisma.BookingWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.booking.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy: { [sortBy]: sortOrder },
  });

  const total = await prisma.booking.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / size);

  return {
    data: result,
    meta: { page, size, total, totalPage },
  };

  };

  const getSingleBooking = async (id:string):Promise<Booking | null> => {
    const result = await prisma.booking.findUnique({
      where: {
        id
      }
    });
    return result;
  };
  const updateBooking = async (id:string, data:Partial<Booking>): Promise<Booking> => {
    const result = await prisma.booking.update({
      where: {
        id
      }, data
    });
    return result;
  };
  const deleteBooking = async (id:string):Promise<Booking | null> => {
    const result = await prisma.booking.delete({
      where: {
        id
      }
    });
    return result;
  };


  export const bookingService = {
    createBooking,
    getAllBooking,
    getSingleBooking,
    updateBooking,
    deleteBooking
  }