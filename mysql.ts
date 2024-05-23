import { NextFunction, Request, Response } from "express";
import mysql, { ConnectionOptions } from "mysql2/promise";

const access: ConnectionOptions = {
  user: "root",
  password: process.env.MYSQL_SERVER_PASSWORD,
  database: "user",
  host: "127.0.0.1",
  port: 3306,
};

const createdb = (req: Request, res: Response, next: NextFunction) => {
  mysql
    .createConnection(access)
    .then((db) => (res.locals.db = db))
    .then(() => next());
};

export default createdb;
