"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistRouter = void 0;
const express_1 = __importDefault(require("express"));
const playlistController_1 = require("../controllers/playlistController");
const router = express_1.default.Router();
exports.playlistRouter = router;
router.route('/playlist')
    .post(playlistController_1.playlistController.createPlaylist)
    .get(playlistController_1.playlistController.listPlaylist);
router.route('/playlist/addsongs')
    .post(playlistController_1.playlistController.addSongs);
