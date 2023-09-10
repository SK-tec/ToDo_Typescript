import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
export interface ITask {
  title: string;
  completed: boolean;
}
// 2. Create a Schema corresponding to the document interface.
const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean },
  },
  { timestamps: true }
);
// 3. Create a Model.
export const Task = model<ITask>("Task", taskSchema);
