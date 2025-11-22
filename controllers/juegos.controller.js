import * as service from "../services/juegos.service.js";

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
