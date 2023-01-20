const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

//Listar usuarios
 router.get('/users', async (req, res, next) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

//Listar musicas
router.get('/songs', async (req, res, next) => {
  const users = await prisma.song.findMany();
  res.json(users);
});
module.exports = router;