import mongoose, { Document, Model } from "mongoose";

export interface ITask extends Document {
  user: mongoose.Types.ObjectId;
  description: string;
}

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Task: Model<ITask> =
  (mongoose.models.Task as Model<ITask>) ||
  mongoose.model<ITask>("Task", taskSchema);
export default Task;
