"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = require("./routes/userRoute");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, _res) => {
    _res.send("Funcionando");
});
app.use('/api/v1', userRoute_1.usuarioRouter);
app.listen(PORT, () => {
    console.log(`server at running http://localhost:${PORT}`);
});
