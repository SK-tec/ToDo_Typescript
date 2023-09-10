import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db";
import { router } from "./routes/tasks.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

//Middlewares
//express.json() - middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to  ToDo App");
});
if (process.env.NODE_ENV === "production") {
  /*path.join() - joins specified paths into one
  _dirname -gives absolute path of currently executing file
  */
  const buildPath = path.join(__dirname, ".../client/build");
  //Serve static files from the build folder
  app.use(express.static(buildPath));
  //Serve the index.html file if a route is not found
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
  });
});
