import { Router } from "express";

import { methods as codeController } from "../controllers/code.controller";

const router = Router();

router.post("/add", codeController.createCode);
router.get("/:id", codeController.listAllQr);
router.put("/cancel/:id", codeController.updateCode);

export default router;
