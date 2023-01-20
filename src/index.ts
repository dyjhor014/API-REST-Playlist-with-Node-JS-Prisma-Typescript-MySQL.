import "dotenv/config";
import express, { Express, Request, Response } from 'express';
import cors from "cors";
import { usuarioRouter } from './routes/userRoute';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors()); //Midleware para acceder desde cualquier cliente al api
app.use(express.json()) //Midleware de que convierte el req.body en json

app.get('/', (_req, _res) =>{
    _res.send("Funcionando")
})

app.use('/api/v1', usuarioRouter);

app.listen(PORT, () => {
    console.log(`server at running http://localhost:${PORT}`)
})