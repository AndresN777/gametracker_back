import { Juegos } from "../src/models/Juegos.js";

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
