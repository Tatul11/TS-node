"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.get("/", (req, res, next) => {
    res.json({ message: "ok" });
});
app.use("/users", users_1.default);
app.listen(PORT, () => console.log("TS running"));
