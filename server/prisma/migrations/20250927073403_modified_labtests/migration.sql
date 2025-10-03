/*
  Warnings:

  - You are about to drop the column `result` on the `LabTest` table. All the data in the column will be lost.
  - Added the required column `department` to the `LabTest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LabTest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('ROUTINE', 'URGENT', 'STAT');

-- AlterTable
ALTER TABLE "LabTest" DROP COLUMN "result",
ADD COLUMN     "billingCode" TEXT,
ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "cancelledBy" TEXT,
ADD COLUMN     "cost" DOUBLE PRECISION,
ADD COLUMN     "coveredByInsurance" BOOLEAN DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "orderNotes" TEXT,
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'ROUTINE',
ADD COLUMN     "reasonForCancellation" TEXT,
ADD COLUMN     "results" JSONB,
ADD COLUMN     "specimenCollectedAt" TIMESTAMP(3),
ADD COLUMN     "specimenId" TEXT,
ADD COLUMN     "specimenType" TEXT,
ADD COLUMN     "testCode" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "validatedBy" TEXT;
