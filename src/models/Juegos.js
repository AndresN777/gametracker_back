import mongoose from "mongoose";

const juegosSchema = new mongoose.Schema({
  titulo: { type: String, required: true, unique: true, maxlength: 50 },
  genero: { type: String, required: true, maxlength: 50 }, // "Acción", "RPG", "Estrategia", etc.
  plataforma: {
    type: String,
    required: true,
    enum: ["PC", "PlayStation", "Xbox", "Nintendo", "Mobile"],
  },
  añoLanzamiento: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => Number.isInteger(v),
      message: (props) => `${props.value} no es un número entero`,
    },
  },
  desarrollador: { type: String, required: true, maxlength: 50 },
  imagenPortada: { type: String, required: true }, // URL de la imagen
  descripcion: { type: String },
  completado: { type: Boolean, default: false },
  fechaCreacion: { type: Date },
});
export const Juegos = mongoose.model("Juegos", juegosSchema);

const juegosReviewsSchema = new mongoose.Schema(
  {
    juegoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Juegos",
      required: true,
    },
    puntuacion: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    textoReview: { type: String, required: true },
    horasJugadas: {
      type: Number,
      required: true,
      validate: {
        validator: (v) => Number.isInteger(v),
        message: (props) => `${props.value} no es un número entero`,
      },
    },
    dificultad: {
      type: String,
      enum: ["Fácil", "Media", "Difícil", "Exagerada"],
      required: true,
    },
  },
  { timestamps: true }
);
export const JuegosReviews = mongoose.model(
  "JuegosReviews",
  juegosReviewsSchema
);
