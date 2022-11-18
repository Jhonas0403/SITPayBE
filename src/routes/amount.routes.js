import { Router } from "express";

import { methods as amountController } from "../controllers/amount.controller";

const router = Router();

router.get("/:id", amountController.getAmount);
router.put("/recarga/:id", amountController.updateAmount);

export default router;
