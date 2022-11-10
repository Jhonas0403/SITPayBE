import { request, Router } from "express";
import { methods as languageController } from "../controllers/language.controller";
const router = Router();

router.get("/", languageController.getLanguages);
router.post("/", languageController.addLanguage);
router.get("/:id", languageController.getLanguage);
router.delete("/:id", languageController.deleteLanguage);
router.put("/:id", languageController.updateLanguage);
export default router;
