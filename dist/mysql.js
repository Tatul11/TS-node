"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const access = {
    user: "root",
    password: process.env.MYSQL_SERVER_PASSWORD,
    database: "user",
    host: "127.0.0.1",
    port: 3306,
};
const createdb = (req, res, next) => {
    promise_1.default
        .createConnection(access)
        .then((db) => (res.locals.db = db))
        .then(() => next());
};
exports.default = createdb;
