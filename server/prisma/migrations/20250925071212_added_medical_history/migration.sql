-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "chronicConditions" TEXT,
    "pastIllnesses" TEXT,
    "surgeries" TEXT,
    "hospitalizations" TEXT,
    "familyHistory" TEXT,
    "smokingStatus" TEXT,
    "alcoholUse" TEXT,
    "drugUse" TEXT,
    "occupation" TEXT,
    "lifestyle" TEXT,
    "allergies" TEXT,
    "obstetricHistory" TEXT,
    "menstrualHistroy" TEXT,
    "immunizations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
