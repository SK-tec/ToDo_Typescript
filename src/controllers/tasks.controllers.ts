import { Request, Response } from "express";
import { Task } from "../model/task";

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = await Task.create({ ...req.body });
    //console.log(newTask);
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown type",
    });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    if (tasks.length === 0) {
      res.status(404).json({ message: "Tasks not found" });
    }
    res.json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await Task.findById({ _id: id });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (e) {
    res
      .status(500)
      .json({ message: e instanceof Error ? e.message : "Unknown type error" });
  }
};
export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log("update task executed");
    res.json(task);
  } catch (e) {
    res
      .status(500)
      .json({ message: e instanceof Error ? e.message : "Error is Unknown" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete({ _id: id });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (e) {
    res
      .status(500)
      .json({ message: e instanceof Error ? e.message : "Unknown Error" });
  }
};
