import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export class userController {
    static async createUsuario(req: Request, res: Response) {
        // Crear un nuevo usuario en la base de datos
        const { name, email, password } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            },
        });
        res.status(201).json({ message: 'Usuario creado exitosamente', user: user });
      }

    static async login(req: Request, res: Response) {
        const user = await prisma.user.findUnique({ where: { email: req.body.email } });
        if(user){
            const isPasswordMatched = bcryptjs.compareSync(req.body.password, user.password)
            if (isPasswordMatched) {
            // Generar y devolver un token de sesión para el usuario
            res.status(200).json({ message: "successful login" });
            } else {
            res.status(401).json({error: "Invalid email or password"})
            }
        }else{
        res.status(401).json({error: "Invalid email or password"})
        }
    }
  }