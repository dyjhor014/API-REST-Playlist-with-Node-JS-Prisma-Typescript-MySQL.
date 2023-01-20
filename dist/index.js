"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use('/api', require('./routes/api.route'));
app.listen(3000, () => {
    try {
        console.log("Api rest listening at http://localhost:3000");
    }
    catch (error) {
        console.log("Api rest not responding at http://localhost:3000");
    }
});
