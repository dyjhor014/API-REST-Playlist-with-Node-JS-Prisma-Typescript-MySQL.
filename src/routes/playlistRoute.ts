import express from 'express';
import { playlistController } from '../controllers/playlistController';

const router = express.Router();

router.route('/playlist')
    .post(playlistController.createPlaylist)
    .get(playlistController.listPlaylist)

router.route('/playlist/addsongs')
    .post(playlistController.addSongs)

export { router as playlistRouter };