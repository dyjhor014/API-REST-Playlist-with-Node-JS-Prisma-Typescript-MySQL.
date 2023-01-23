"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = __importDefault(require("express"));
const songController_1 = require("../controllers/songController");
const router = express_1.default.Router();
exports.songRouter = router;
router.route('/songs')
    .post(songController_1.songController.createSong)
    .get(songController_1.songController.listSong);
router.route('/songs/:id')
    .get(songController_1.songController.listSongById);
