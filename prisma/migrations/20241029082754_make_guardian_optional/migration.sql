-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "breastfeedHistory" TEXT[],
ADD COLUMN     "diseaseHistory" TEXT[],
ADD COLUMN     "guardianAge" INTEGER,
ADD COLUMN     "guardianGender" TEXT,
ADD COLUMN     "guardianName" TEXT,
ADD COLUMN     "guardianStatus" TEXT,
ADD COLUMN     "height" TEXT,
ADD COLUMN     "laborHistory" TEXT[],
ADD COLUMN     "weight" TEXT;

-- CreateTable
CREATE TABLE "ConsultationHistory" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "ConsultationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationData" (
    "id" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "activity" TEXT[],
    "fnbIntake" TEXT[],
    "lastMed" TEXT[],
    "opinion" TEXT[],
    "anxiety" TEXT[],
    "pain" TEXT[],

    CONSTRAINT "ConsultationData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConsultationHistory" ADD CONSTRAINT "ConsultationHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultationData" ADD CONSTRAINT "ConsultationData_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "ConsultationHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
