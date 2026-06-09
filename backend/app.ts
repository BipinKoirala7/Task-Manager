import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import profileRoutes from "./routes/profileRoutes";

const app = express();

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL || "";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Mongodb connected...");
  })
  .catch((err) => {
    throw err;
  });

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")),
  );
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

export default app;
