import { Router } from "express";
import * as controller from "../controllers/juegos.controller.js";

const router = Router();

router.get("/", controller.getJuegos);
router.post("/", controller.postJuego);
router.get("/:id", controller.getJuegoById);

router.get("/:juegoId/reviews", controller.getReviewsJuego);

export default router;
