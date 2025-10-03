/*
  Warnings:

  - The `smokingStatus` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `alcoholUse` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `drugUse` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lifestyle` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('OMNIVORE', 'VEGETARIAN', 'VEGAN', 'PESCATARIAN', 'KETO', 'HIGH_PROTEIN', 'OTHER');

-- CreateEnum
CREATE TYPE "SmokingStatus" AS ENUM ('NEVER', 'CURRENT_DAILY', 'CURRENT_OCCASIONAL', 'FORMER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "AlcoholUse" AS ENUM ('NEVER', 'OCCASIONAL', 'MODERATE', 'DAILY', 'HEAVY', 'FORMER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "DrugUse" AS ENUM ('NEVER', 'OCCASIONAL', 'REGULAR', 'FORMER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "Lifestyle" AS ENUM ('SEDENTARY', 'LIGHTLY_ACTIVE', 'MODERATELY_ACTIVE', 'VERY_ACTIVE', 'EXTRA_ACTIVE');

-- AlterTable
ALTER TABLE "History" ADD COLUMN     "alcoholNotes" TEXT,
ADD COLUMN     "diet" "Diet",
ADD COLUMN     "dietNotes" TEXT,
ADD COLUMN     "drugNotes" TEXT,
ADD COLUMN     "smokingNotes" TEXT,
DROP COLUMN "smokingStatus",
ADD COLUMN     "smokingStatus" "SmokingStatus",
DROP COLUMN "alcoholUse",
ADD COLUMN     "alcoholUse" "AlcoholUse",
DROP COLUMN "drugUse",
ADD COLUMN     "drugUse" "DrugUse",
DROP COLUMN "lifestyle",
ADD COLUMN     "lifestyle" "Lifestyle";
