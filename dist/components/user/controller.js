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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.findAll = void 0;
const client_1 = require("@prisma/client");
const helpers_1 = require("../../helpers");
const prisma = new client_1.PrismaClient();
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json({
            ok: true,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.findAll = findAll;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        data.password = yield (0, helpers_1.encryptPass)(data.password);
        yield prisma.user.create({ data });
        res.status(201).json({
            ok: true,
            message: "User created"
        });
    }
    catch (error) {
        res.status(401).json({ ok: false, message: error });
    }
});
exports.addUser = addUser;
