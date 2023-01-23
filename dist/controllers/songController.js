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
exports.songController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class songController {
    static listSong(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const song = yield prisma.song.findMany();
            res.status(200).json(song);
        });
    }
    static createSong(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, artist, album, year, genre, url, duration } = req.body;
            const song = yield prisma.song.create({
                data: {
                    name: name,
                    artist: artist,
                    album: album,
                    year: year,
                    genre: genre,
                    url: url,
                    duration: duration
                },
            });
            res.status(201).json({ message: 'Canción creada exitosamente', song: song });
        });
    }
    static listSongById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const song = yield prisma.song.findFirst({
                where: { id: Number(id) }
            });
            res.status(200).json(song);
        });
    }
}
exports.songController = songController;
