import { Prisma, Service } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { paginationHelpers } from "../../../helpers/paginationHelper";


const createService = async (data: Service): Promise<Service> => {
    const result = await prisma.service.create({
      data,
    });
    return result;
  };

 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getAllService = async (filters: any, options: any) => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters;
    const { sortBy, sortOrder } = options;
    
  
    const orConditions = [];
    if (searchTerm) {

      const priceSearchTerm = parseFloat(searchTerm);
  
      if (!isNaN(priceSearchTerm)) {
        orConditions.push({
          price: priceSearchTerm,
        });
      } else {
        orConditions.push({
          name: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        });
      }
    }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    const whereConditions: Prisma.ServiceWhereInput = orConditions.length > 0 ? { OR: orConditions } : {};
  
    const result = await prisma.service.findMany({
      where: whereConditions,
      skip,
      take: size,
      orderBy: { [sortBy]: sortOrder },
    });
  
    const total = await prisma.service.count({
      where: whereConditions,
    });
  
    const totalPage = Math.ceil(total / size);
    // console.log(result, 'rrrrrr');
    return {
      data: result,
      meta: { page, size, total, totalPage },
    };
  };
  

  const getSingleService = async (id:string):Promise<Service | null> => {
    const result = await prisma.service.findUnique({
      where: {
        id
      }
    });
    return result;
  };
  const updateService = async (id:string, data:Partial<Service>): Promise<Service> => {
    const result = await prisma.service.update({
      where: {
        id
      }, data
    });
    return result;
  };
  const deleteService = async (id:string):Promise<Service | null> => {
    const result = await prisma.service.delete({
      where: {
        id
      }
    });
    return result;
  };


  export const service = {
    createService,
    getAllService,
    getSingleService,
    updateService,
    deleteService
  }