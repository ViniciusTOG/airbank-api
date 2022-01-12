/*
  Warnings:

  - The primary key for the `Transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `prismIdid` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_pkey",
DROP COLUMN "prismIdid",
ADD COLUMN     "prismaid" SERIAL NOT NULL,
ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("prismaid");
