"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class playlistController {
    static listPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const playlists = yield prisma.playlist.findMany({
                include: {
                    songs: true,
                }
            });
            res.status(200).json(playlists);
        });
    }
    static createPlaylist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, user, songs } = req.body;
            const playlist = yield prisma.playlist.create({
                data: {
                    name: name,
                    user: {
                        connect: {
                            id: user
                        }
                    },
                    songs: {
                        connect: [{ id: songs }]
                    }
                },
            });
            res.status(201).json({ message: 'Playlist creada exitosamente', playlist: playlist });
        });
    }
    static addSongs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { songs, id } = req.body;
            const addSong = yield prisma.playlist.update({
                where: { id },
                data: {
                    songs: {
                        connect: songs.map((id) => ({ id }))
                    },
                },
            });
            res.status(201).json({ message: 'Playlist actualizada exitosamente', playlist: addSong });
        });
    }
}
exports.playlistController = playlistController;
