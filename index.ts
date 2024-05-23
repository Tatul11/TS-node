require("dotenv").config();
import express, { Express, Response, Request, NextFunction } from "express";
import usersRouter from "./routes/users";

const app = express();

app.use(express.json());
const PORT = 3001;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "ok" });
});

app.use("/users", usersRouter);

app.listen(PORT, () => console.log("TS running"));
