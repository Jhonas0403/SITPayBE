import { Router } from "express";

import { methods as codeController } from "../controllers/code.controller";

const router = Router();

router.post("/add", codeController.createCode);

export default router;
