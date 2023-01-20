/*
  Warnings:

  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `songs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NOT NULL,
    `album` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `state` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `state` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlaylistToSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PlaylistToSong_AB_unique`(`A`, `B`),
    INDEX `_PlaylistToSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToSong` ADD CONSTRAINT `_PlaylistToSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `Playlist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToSong` ADD CONSTRAINT `_PlaylistToSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `songs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
