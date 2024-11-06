-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_areaId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_managedId_fkey";

-- DropIndex
DROP INDEX "User_managedId_key";

-- CreateTable
CREATE TABLE "_UsersArea" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UsersArea_AB_unique" ON "_UsersArea"("A", "B");

-- CreateIndex
CREATE INDEX "_UsersArea_B_index" ON "_UsersArea"("B");

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersArea" ADD CONSTRAINT "_UsersArea_A_fkey" FOREIGN KEY ("A") REFERENCES "Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersArea" ADD CONSTRAINT "_UsersArea_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
