import { Router } from "express";
import * as controller from "../controllers/juegos.controller.js";
import { uploadJuegoImage } from "../services/upload.service.js";

const router = Router();

router.get("/", controller.getJuegos);
router.post(
  "/",
  uploadJuegoImage.single("imagenPortada"),
  controller.postJuego
);
router.get("/:id", controller.getJuegoById);

router.get("/:juegoId/reviews", controller.getReviewsJuego);

export default router;
