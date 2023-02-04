/*
  Warnings:

  - You are about to drop the column `pedalId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `pedalId` on the `stock` table. All the data in the column will be lost.
  - Added the required column `pedal_id` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pedal_id` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_fk0";

-- DropForeignKey
ALTER TABLE "stock" DROP CONSTRAINT "stock_fk0";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "pedalId",
ADD COLUMN     "pedal_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "stock" DROP COLUMN "pedalId",
ADD COLUMN     "pedal_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_fk0" FOREIGN KEY ("pedal_id") REFERENCES "pedals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_fk0" FOREIGN KEY ("pedal_id") REFERENCES "pedals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
