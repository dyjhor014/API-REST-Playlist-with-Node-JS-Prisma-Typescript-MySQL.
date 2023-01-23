import express from 'express';
import { songController } from '../controllers/songController';

const router = express.Router();

router.route('/songs')
    .post(songController.createSong)
    .get(songController.listSong)

router.route('/songs/:id')
    .get(songController.listSongById)

export { router as songRouter };