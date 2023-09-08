import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { router } from "./routes/tasks.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to  ToDo App");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
  });
});
