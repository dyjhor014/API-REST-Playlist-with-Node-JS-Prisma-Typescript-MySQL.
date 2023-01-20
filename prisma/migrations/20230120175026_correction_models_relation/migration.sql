/*
  Warnings:

  - You are about to drop the column `id_song` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `id_playlist` on the `songs` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Playlist` DROP FOREIGN KEY `Playlist_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `songs` DROP FOREIGN KEY `songs_id_playlist_fkey`;

-- DropIndex
DROP INDEX `Playlist_id_song_fkey` ON `Playlist`;

-- AlterTable
ALTER TABLE `Playlist` DROP COLUMN `id_song`,
    DROP COLUMN `id_user`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `songs` DROP COLUMN `id_playlist`;

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
