import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createContext } from 'vm';

const app:Express = express();
const prisma = new PrismaClient();

app.use(express.json());

//Conectamos las rutas
app.use('/api', require('./routes/api.route'));

app.listen(3000, () =>{
    try{
        console.log("Api rest listening at http://localhost:3000")
    }
    catch (error){
        console.log("Api rest not responding at http://localhost:3000")
    }
}
)