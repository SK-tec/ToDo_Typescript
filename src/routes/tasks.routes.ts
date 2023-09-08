import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/tasks.controllers";

export const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
