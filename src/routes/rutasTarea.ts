import { Router } from "express";
import { verTarea } from "../controllers/controllerTarea.js";

const router = Router();

router.get("/", verTarea);

export default router; 