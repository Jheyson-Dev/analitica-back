/*
  Warnings:

  - A unique constraint covering the columns `[managerId]` on the table `Area` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[managedId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Area" ADD COLUMN     "managerId" INTEGER,
ADD COLUMN     "responsibleId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "managedId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Area_managerId_key" ON "Area"("managerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_managedId_key" ON "User"("managedId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_managedId_fkey" FOREIGN KEY ("managedId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;
