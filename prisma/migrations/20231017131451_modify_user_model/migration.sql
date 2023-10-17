-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contactNo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'male';
