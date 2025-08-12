/*
  Warnings:

  - Added the required column `checked` to the `submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."submission" ADD COLUMN     "checked" BOOLEAN NOT NULL;
