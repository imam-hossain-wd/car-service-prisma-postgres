import { Review } from "@prisma/client";
import prisma from "../../../shared/prisma";



const createReview = async (data: Review): Promise<Review> => {
    const result = await prisma.review.create({
      data,
    });
    return result;
  };

  const getAllReviews = async (): Promise<Review[] | null> => {
    const result = await prisma.review.findMany({
      include: {
        user: true,
      },
    });
    return result;
  };
  const getSingleReview = async (id:string):Promise<Review | null> => {
    const result = await prisma.review.findUnique({
      where: {
        id
      }
    });
    return result;
  };
  const updateReview = async (id:string, data:Partial<Review>): Promise<Review> => {
    const result = await prisma.review.update({
      where: {
        id
      }, data
    });
    return result;
  };
  const deleteReview = async (id:string):Promise<Review | null> => {
    const result = await prisma.review.delete({
      where: {
        id
      }
    });
    return result;
  };


  export const reviewService = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
  }