import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app:Express = express();
const prisma = new PrismaClient();

app.use(express.json());

//Hacemos peticion GET para mostrar un mensaje en el navegador
app.get(`/`, (req:Request,res:Response) =>{
    res.send("Hola mundo desde Api Rest con prisma y TS");
});

//Creamos autor con el metodo POST
app.post('/author', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
        },
    });

    res.json(user);
});

//Mostramos los autores con el metodo GET
app.get('/authors', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()

    res.json(users);
});

//Agregamos registros a la tabla post mediante POST
app.post('/post', async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { connect: { id: author } },
        },
    });

    res.json(post);
});

//mostramos los posts con GET
app.get('/posts', async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany()

    res.json(posts);
});

app.listen(3000, () =>
    console.log("Api rest listening at http://localhost:3000")
)