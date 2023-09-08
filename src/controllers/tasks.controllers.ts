import { Request, Response } from "express";
import { Task } from "../model/task";

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = await Task.create({ ...req.body });
    //console.log(newTask);
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unkown error" });
    }
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unkown error" });
    }
  }
};
