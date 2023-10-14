/*
  Warnings:

  - Added the required column `serviceTime` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "serviceTime" TEXT NOT NULL;
