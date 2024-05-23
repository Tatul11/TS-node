import express, { Express, Response, Request, NextFunction } from "express";
import { IUser } from "../interfaces/interfaces";
import { Connection } from "mysql2/promise";
const usersRouter = express.Router();

const users: IUser[] = [];

usersRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("res", res.locals);

  const db = res.locals.db as Connection;
  db.query("SELECT * FROM info")
    .then(([data]) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
});

usersRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  users.push(user);
  res.json(users);
});

export default usersRouter;
