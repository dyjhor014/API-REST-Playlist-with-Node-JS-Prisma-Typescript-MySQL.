"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
exports.usuarioRouter = router;
router.route('/users')
    .post(userController_1.userController.createUsuario)
    .get(userController_1.userController.listUsuario);
router.route('/users/login')
    .post(userController_1.userController.login);
