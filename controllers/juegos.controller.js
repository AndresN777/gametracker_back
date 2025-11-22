import * as service from "../services/juegos.service.js";
import fs from "fs";
import path from "path";

export const getJuegos = async (req, res) => {
  try {
    const data = await service.getJuegos();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error en getJuegos" });
  }
};

export const postJuego = async (req, res) => {
  try {
    const juegoData = req.body;

    // asignar la ruta/nombre al modelo
    juegoData.imagenPortada = req.file.filename;
    // o: juegoData.imagenPortada = req.file.path;

    juegoData.fechaCreacion = new Date();

    const data = await service.postJuego(juegoData);

    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al registrar el juego" });
  }
};

export const getJuegoById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await service.getJuegoById(id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error en getJuegoById" });
  }
};

export const getReviewsJuego = async (req, res) => {
  try {
    const { juegoId } = req.params;
    const data = await service.getReviewsJuego(juegoId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error en getReviewsJuego" });
  }
};

export const updateJuego = async (req, res) => {
  try {
    const id = req.params.id;

    // 1) Buscar el juego actual
    const juegoActual = await service.getJuegoById(id);
    if (!juegoActual) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    // 2) Clonar el body (campos dinámicos)
    const nuevosDatos = { ...req.body };

    // 3) Si viene una nueva imagen → reemplazar
    if (req.file) {
      const nuevaImagen = req.file.filename;

      // ruta de la imagen vieja
      const oldImagePath = path.join(
        process.cwd(),
        "uploads",
        "juegos",
        juegoActual.imagenPortada
      );

      // eliminar la imagen vieja si existe
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      // asignar la nueva imagen al modelo
      nuevosDatos.imagenPortada = nuevaImagen;
    }

    // 4) Actualizar
    const juegoActualizado = await service.updateJuego(id, nuevosDatos);

    res.status(200).json(juegoActualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar el juego" });
  }
};
