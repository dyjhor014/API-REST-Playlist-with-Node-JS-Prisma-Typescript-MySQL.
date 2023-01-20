/*
  Warnings:

  - You are about to drop the column `id_song` on the `Playlist` table. All the data in the column will be lost.
  - Added the required column `id_playlist` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Playlist` DROP FOREIGN KEY `Playlist_id_song_fkey`;

-- AlterTable
ALTER TABLE `Playlist` DROP COLUMN `id_song`;

-- AlterTable
ALTER TABLE `songs` ADD COLUMN `id_playlist` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `songs` ADD CONSTRAINT `songs_id_playlist_fkey` FOREIGN KEY (`id_playlist`) REFERENCES `Playlist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
