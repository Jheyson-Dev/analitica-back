-- CreateTable
CREATE TABLE "Voucher" (
    "id" SERIAL NOT NULL,
    "requesterId" INTEGER NOT NULL,
    "gasStation" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "meta" TEXT,
    "operator" TEXT,
    "vehicle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "requesterSignedAt" TIMESTAMP(3),
    "immediateBossSignedAt" TIMESTAMP(3),
    "municipalManagerSignedAt" TIMESTAMP(3),
    "supplyManagerSignedAt" TIMESTAMP(3),
    "operatorSignedAt" TIMESTAMP(3),
    "warehouseManagerSignedAt" TIMESTAMP(3),

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherItem" (
    "id" SERIAL NOT NULL,
    "voucherId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "VoucherItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherItem" ADD CONSTRAINT "VoucherItem_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
