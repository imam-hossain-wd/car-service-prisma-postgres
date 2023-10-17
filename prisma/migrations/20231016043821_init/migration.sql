/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Admin` table. All the data in the column will be lost.
  - The `id` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `bloodGroup` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactNo` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permanentAddress` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentAddress` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Admin_email_key";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "bloodGroup" TEXT NOT NULL,
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "emergencyContactNo" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "middleName" TEXT NOT NULL,
ADD COLUMN     "permanentAddress" TEXT NOT NULL,
ADD COLUMN     "presentAddress" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");
