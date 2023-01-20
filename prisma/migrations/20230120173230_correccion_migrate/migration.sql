/*
  Warnings:

  - You are about to drop the column `id_playlist` on the `songs` table. All the data in the column will be lost.
  - Added the required column `id_song` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `songs` DROP FOREIGN KEY `songs_id_playlist_fkey`;

-- AlterTable
ALTER TABLE `Playlist` ADD COLUMN `id_song` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `songs` DROP COLUMN `id_playlist`;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_id_song_fkey` FOREIGN KEY (`id_song`) REFERENCES `songs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
