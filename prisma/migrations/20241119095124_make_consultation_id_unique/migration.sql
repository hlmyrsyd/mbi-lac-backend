/*
  Warnings:

  - The `height` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weight` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[consultationId]` on the table `ConsultationData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "height",
ADD COLUMN     "height" INTEGER,
DROP COLUMN "weight",
ADD COLUMN     "weight" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "ConsultationData_consultationId_key" ON "ConsultationData"("consultationId");
