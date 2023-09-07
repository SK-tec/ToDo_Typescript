import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to  ToDo App");
});
connectDB();
//console.log(connectDB());
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
