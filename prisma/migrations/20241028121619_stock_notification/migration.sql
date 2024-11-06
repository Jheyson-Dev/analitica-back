/*
  Warnings:

  - Added the required column `message` to the `StockNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StockNotification" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT NOT NULL;
