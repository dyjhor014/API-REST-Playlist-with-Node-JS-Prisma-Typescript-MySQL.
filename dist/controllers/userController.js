"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
class userController {
    static listUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findMany();
            res.status(201).json(user);
        });
    }
    static createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const salt = bcryptjs_1.default.genSaltSync(10);
            const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
            const user = yield prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hashedPassword
                },
            });
            res.status(201).json({ message: 'Usuario creado exitosamente', user: user });
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({ where: { email: req.body.email } });
            if (user) {
                const isPasswordMatched = bcryptjs_1.default.compareSync(req.body.password, user.password);
                if (isPasswordMatched) {
                    res.status(200).json({ message: "successful login" });
                }
                else {
                    res.status(401).json({ error: "Invalid email or password" });
                }
            }
            else {
                res.status(401).json({ error: "Invalid email or password" });
            }
        });
    }
}
exports.userController = userController;
