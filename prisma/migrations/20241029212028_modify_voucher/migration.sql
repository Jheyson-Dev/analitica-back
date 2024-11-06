/*
  Warnings:

  - You are about to drop the column `immediateBossSignedAt` on the `Voucher` table. All the data in the column will be lost.
  - You are about to drop the column `municipalManagerSignedAt` on the `Voucher` table. All the data in the column will be lost.
  - You are about to drop the column `operatorSignedAt` on the `Voucher` table. All the data in the column will be lost.
  - You are about to drop the column `requesterSignedAt` on the `Voucher` table. All the data in the column will be lost.
  - You are about to drop the column `supplyManagerSignedAt` on the `Voucher` table. All the data in the column will be lost.
  - You are about to drop the column `warehouseManagerSignedAt` on the `Voucher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Voucher" DROP COLUMN "immediateBossSignedAt",
DROP COLUMN "municipalManagerSignedAt",
DROP COLUMN "operatorSignedAt",
DROP COLUMN "requesterSignedAt",
DROP COLUMN "supplyManagerSignedAt",
DROP COLUMN "warehouseManagerSignedAt",
ADD COLUMN     "immediateBossId" INTEGER,
ADD COLUMN     "immediateBossSigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "municipalManagerId" INTEGER,
ADD COLUMN     "municipalManagerSigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "operatorId" INTEGER,
ADD COLUMN     "operatorSigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "requesterSigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "supplyManagerId" INTEGER,
ADD COLUMN     "supplyManagerSigned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "warehouseManagerId" INTEGER,
ADD COLUMN     "warehouseManagerSigned" BOOLEAN NOT NULL DEFAULT false;
