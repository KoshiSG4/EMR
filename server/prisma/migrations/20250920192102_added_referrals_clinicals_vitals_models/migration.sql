-- DropForeignKey
ALTER TABLE "LabTest" DROP CONSTRAINT "LabTest_medicalRecordId_fkey";

-- DropForeignKey
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_medicalRecordId_fkey";

-- DropForeignKey
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_medicationInventoryId_fkey";

-- DropForeignKey
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_patientMedicationId_fkey";

-- AlterTable
ALTER TABLE "Diagnosis" ADD COLUMN     "status" "DiagnoseStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "type" "DiagnoseType" NOT NULL DEFAULT 'MEDICAL';

-- AlterTable
ALTER TABLE "LabTest" ADD COLUMN     "clinicalDetailsId" TEXT,
ALTER COLUMN "medicalRecordId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MedicalRecord" ADD COLUMN     "clinicalDetailsId" TEXT;

-- AlterTable
ALTER TABLE "PatientMedication" ADD COLUMN     "clinicalDetailsId" TEXT;

-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "clinicalDetailsId" TEXT,
ALTER COLUMN "patientMedicationId" DROP NOT NULL,
ALTER COLUMN "medicationInventoryId" DROP NOT NULL,
ALTER COLUMN "medicalRecordId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VitalsRecord" (
    "id" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "bloodPressure" TEXT NOT NULL,
    "heartRate" TEXT NOT NULL,
    "respiratoryRate" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "spo2" TEXT NOT NULL,
    "painScore" TEXT NOT NULL,
    "recordedBy" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,
    "medicalRecordId" TEXT,
    "clinicalDetailsId" TEXT,

    CONSTRAINT "VitalsRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicalDetails" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chiefComplaint" TEXT NOT NULL,
    "hpi" TEXT NOT NULL,
    "allergies" TEXT,
    "notes" TEXT,
    "assessment" TEXT,
    "plan" TEXT,
    "recordedBy" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "ClinicalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReferralRecord" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referralType" TEXT NOT NULL,
    "referredTo" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "ReferralRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_clinicalDetailsId_fkey" FOREIGN KEY ("clinicalDetailsId") REFERENCES "ClinicalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalsRecord" ADD CONSTRAINT "VitalsRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalsRecord" ADD CONSTRAINT "VitalsRecord_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalsRecord" ADD CONSTRAINT "VitalsRecord_clinicalDetailsId_fkey" FOREIGN KEY ("clinicalDetailsId") REFERENCES "ClinicalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalDetails" ADD CONSTRAINT "ClinicalDetails_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReferralRecord" ADD CONSTRAINT "ReferralRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReferralRecord" ADD CONSTRAINT "ReferralRecord_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_patientMedicationId_fkey" FOREIGN KEY ("patientMedicationId") REFERENCES "PatientMedication"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_medicationInventoryId_fkey" FOREIGN KEY ("medicationInventoryId") REFERENCES "MedicationInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_clinicalDetailsId_fkey" FOREIGN KEY ("clinicalDetailsId") REFERENCES "ClinicalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientMedication" ADD CONSTRAINT "PatientMedication_clinicalDetailsId_fkey" FOREIGN KEY ("clinicalDetailsId") REFERENCES "ClinicalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_clinicalDetailsId_fkey" FOREIGN KEY ("clinicalDetailsId") REFERENCES "ClinicalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
