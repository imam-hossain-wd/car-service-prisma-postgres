/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceTime` on the `Service` table. All the data in the column will be lost.
  - Added the required column `service_time` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "imageUrl",
DROP COLUMN "serviceTime",
ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "service_time" TEXT NOT NULL;
