/*
  Warnings:

  - The primary key for the `Emails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Emails" DROP CONSTRAINT "Emails_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Emails_pkey" PRIMARY KEY ("id");
