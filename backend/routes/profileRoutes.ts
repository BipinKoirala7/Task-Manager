import { Router } from "express";
import { getProfile } from "../controllers/profileControllers";
import { verifyAccessToken } from "../middlewares";

const router = Router();

// Routes beginning with /api/profile
router.get("/", verifyAccessToken, getProfile);

export default router;
