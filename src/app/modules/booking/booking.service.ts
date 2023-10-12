import prisma from "../../../shared/prisma";
import { Booking} from '@prisma/client';


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

  const getAllBooking = async ():Promise<Booking[] | null> => {
    const result = await prisma.booking.findMany();
    return result;
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