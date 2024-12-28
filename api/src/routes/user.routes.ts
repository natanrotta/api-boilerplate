import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import userController from "../controller/user.controller";

const router = Router();

router.get("/find", authMiddleware, userController.find);

export default router;
