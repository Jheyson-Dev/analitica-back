/*
  Warnings:

  - You are about to drop the `_UsersArea` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UsersArea" DROP CONSTRAINT "_UsersArea_A_fkey";

-- DropForeignKey
ALTER TABLE "_UsersArea" DROP CONSTRAINT "_UsersArea_B_fkey";

-- DropTable
DROP TABLE "_UsersArea";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;
