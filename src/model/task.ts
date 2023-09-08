import exp from "constants";
import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
// 2. Create a Schema corresponding to the document interface.
const taskSchema = new Schema<ITask>({
  id: { type: Number },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean },
});
// 3. Create a Model.
export const Task = model<ITask>("Task", taskSchema);
