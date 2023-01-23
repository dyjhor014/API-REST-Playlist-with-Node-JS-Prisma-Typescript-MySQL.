import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class playlistController{
    static async listPlaylist(req:Request, res:Response){
        const playlists = await prisma.playlist.findMany({
            include:{
                songs: true,
            }
        });
        res.status(200).json(playlists);
    }
    static async createPlaylist(req:Request, res:Response){
        // Crear una playlist en la base de datos
        const { name, user, songs} = req.body;
        const playlist = await prisma.playlist.create({
            data: {
                name: name,
                user: {
                    connect:{
                        id: user
                    } 
                },
                songs: {
                    connect: [{id:songs}]
                }
            },
        });
        res.status(201).json({ message: 'Playlist creada exitosamente', playlist: playlist });
    }
    static async addSongs(req:Request, res:Response){
        const {songs, id} = req.body;
        const addSong = await prisma.playlist.update({
            where: {id},
            data: {
                songs:{
                    connect: songs.map((id:number) => ({id}))
                },
            },
        });
        
        res.status(201).json({ message: 'Playlist actualizada exitosamente', playlist: addSong });
    }
}