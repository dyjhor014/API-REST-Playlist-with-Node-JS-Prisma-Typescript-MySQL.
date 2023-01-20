"use strict";
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.listen(3000, () => {
    console.log("Server ready at: http:localhost:3000/");
});
