/*
  Warnings:

  - The primary key for the `VerificationToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `identifier` column on the `VerificationToken` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_pkey",
DROP COLUMN "identifier",
ADD COLUMN     "identifier" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier");
