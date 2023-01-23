import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class songController {
    static async listSong(req:Request, res:Response){
        const song = await prisma.song.findMany();
        res.status(200).json(song);
    }
    static async createSong(req: Request, res: Response) {
        // Crear una nueva cancion en la base de datos
        const { name, artist, album, year, genre, url, duration } = req.body;
        const song = await prisma.song.create({
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
      }
    static async listSongById(req:Request, res:Response){
        const { id } = req.params;
        const song = await prisma.song.findFirst({
            where: { id : Number(id)} 
        })
        res.status(200).json(song);
    }
  }