-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "reference" TEXT,
    "currency" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "transactionDate" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
