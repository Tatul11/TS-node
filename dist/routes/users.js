"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
const users = [];
usersRouter.get("/", (req, res, next) => {
    console.log("res", res.locals);
    const db = res.locals.db;
    db.query("SELECT * FROM info")
        .then(([data]) => res.json(data))
        .catch((err) => res.json({ message: err.message }));
});
usersRouter.post("/", (req, res, next) => {
    const user = req.body;
    users.push(user);
    res.json(users);
});
exports.default = usersRouter;
