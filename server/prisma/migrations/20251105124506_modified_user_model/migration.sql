/*
  Warnings:

  - Made the column `onCall` on table `Doctor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `onCall` on table `Nurse` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "onCall" SET NOT NULL;

-- AlterTable
ALTER TABLE "Nurse" ALTER COLUMN "onCall" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mustChangePassword" BOOLEAN NOT NULL DEFAULT true;
