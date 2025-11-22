import { Juegos, JuegosReviews } from "../src/models/Juegos.js";

export const getJuegos = async () => {
  return await Juegos.find();
};

export const getJuegoById = async (id) => {
  return await Juegos.findById(id);
};

export const postJuego = async (juegoData) => {
  const nuevoJuego = new Juegos(juegoData);
  return await nuevoJuego.save();
};

export const getReviewsJuego = async (juegoId) => {
  return await JuegosReviews.find({ juegoId });
};

export const updateJuego = async (id, data) => {
  return await Juegos.findByIdAndUpdate(id, data, {
    new: true, // retorna el documento actualizado
    runValidators: true, // respeta validaciones del schema
  });
};

export const postReviewJuego = async (reviewData) => {
  const nuevaReview = new JuegosReviews(reviewData);
  return await nuevaReview.save();
};

export const updateReview = async (reviewId, data) => {
  return await JuegosReviews.findByIdAndUpdate(reviewId, data, {
    new: true,
    runValidators: true,
  });
};
