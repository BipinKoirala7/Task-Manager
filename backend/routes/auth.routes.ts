import { Router } from "express";
import { signup, login } from "../controllers/auth.controller";

const router = Router();

// Routes beginning with /api/auth
router.post("/signup", signup);
router.post("/login", login);

export default router;
