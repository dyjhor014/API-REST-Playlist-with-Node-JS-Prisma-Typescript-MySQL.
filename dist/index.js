"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, router_1.default)(app);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port at http://localhost:${PORT}`);
});
