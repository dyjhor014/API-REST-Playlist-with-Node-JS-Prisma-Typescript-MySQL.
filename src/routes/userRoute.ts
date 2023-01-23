import express, { Request, Response } from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

router.route('/users')
    .post(userController.createUsuario)

router.route('/users/login')
    .post(userController.login)

export { router as usuarioRouter };