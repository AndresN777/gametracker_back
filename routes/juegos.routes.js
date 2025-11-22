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
router.patch(
  "/:id",
  uploadJuegoImage.single("imagenPortada"),
  controller.updateJuego
);
router.post("/:juegoId/reviews", controller.postReviewJuego);
router.patch("/:reviewId/reviews", controller.updateReview);
router.delete("/:id", controller.deleteJuego);
router.delete("/:reviewId/reviews", controller.deleteReview);

export default router;
