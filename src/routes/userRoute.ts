import express from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

router.route('/users')
    .post(userController.createUsuario)
    .get(userController.listUsuario)

router.route('/users/login')
    .post(userController.login)

export { router as usuarioRouter };