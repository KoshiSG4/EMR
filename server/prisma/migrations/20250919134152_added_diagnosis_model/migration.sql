/*
  Warnings:

  - You are about to drop the column `diagnosis` on the `MedicalRecord` table. All the data in the column will be lost.
  - Added the required column `diagnosisId` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DiagnoseType" AS ENUM ('MEDICAL', 'ALLERGY', 'SURGICAL', 'FAMILY', 'SOCIAL');

-- CreateEnum
CREATE TYPE "DiagnoseStatus" AS ENUM ('ACTIVE', 'RESOLVED', 'CHRONIC');

-- AlterTable
ALTER TABLE "MedicalRecord" DROP COLUMN "diagnosis",
ADD COLUMN     "diagnosisId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagnosis_name_key" ON "Diagnosis"("name");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_diagnosisId_fkey" FOREIGN KEY ("diagnosisId") REFERENCES "Diagnosis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
