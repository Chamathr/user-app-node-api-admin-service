/*
  Warnings:

  - You are about to drop the column `status` on the `admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `status`,
    MODIFY `role` ENUM('USER', 'ADMIN', 'SUPER_ADMIN') NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'ADMIN', 'SUPER_ADMIN') NOT NULL DEFAULT 'USER';
