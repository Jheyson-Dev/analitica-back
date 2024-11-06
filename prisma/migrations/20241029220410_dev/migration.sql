/*
  Warnings:

  - Added the required column `activity` to the `Voucher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voucher" ADD COLUMN     "activity" TEXT NOT NULL;
