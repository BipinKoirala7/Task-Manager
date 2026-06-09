import { Router } from "express";
import {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} from "../controllers/task.controller";
import { verifyAccessToken } from "../middlewares";

const router = Router();

// Routes beginning with /api/tasks
router.get("/", verifyAccessToken, getTasks);
router.get("/:taskId", verifyAccessToken, getTask);
router.post("/", verifyAccessToken, postTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

export default router;
