import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import juegosRoutes from "../routes/juegos.routes.js";

const app = express();

// funcionalidades de cors y json para facilitar todo xd
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/juegos", juegosRoutes);

// base de datos
connectDB();

export default app;
