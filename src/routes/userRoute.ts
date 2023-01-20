import express, { Request, Response } from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

router.route('/users')
  .get(userController.getUsuario)
  .post(userController.createUsuario);

export { router as usuarioRouter };