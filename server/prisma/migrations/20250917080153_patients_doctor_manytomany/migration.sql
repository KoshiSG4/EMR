/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_doctorId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "doctorId";

-- CreateTable
CREATE TABLE "_PatientDoctors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PatientDoctors_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PatientDoctors_B_index" ON "_PatientDoctors"("B");

-- AddForeignKey
ALTER TABLE "_PatientDoctors" ADD CONSTRAINT "_PatientDoctors_A_fkey" FOREIGN KEY ("A") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatientDoctors" ADD CONSTRAINT "_PatientDoctors_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
