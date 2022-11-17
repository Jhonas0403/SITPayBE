import { Router } from "express";

import { methods as userController } from "../controllers/user.controller";
const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/add", userController.addUser);
router.post("/login", userController.loginUser);

export default router;