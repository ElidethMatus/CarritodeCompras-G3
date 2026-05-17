import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Carrito from "./models/Carrito";
import "./config/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/carrito", async (req, res) => {
  try {
    const carrito = await Carrito.findAll();
    if (carrito.length > 0) {
      res.status(200).json(carrito);
    } else {
      res.status(404).json({ error: "Carrito no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el carrito" });
  }
});

app.post("/api/carrito", async (req, res) => {
  try {
    const producto = await Carrito.create(req.body);
    if (producto !== null) {
      res.status(201).json(producto);
    } else {
      res.status(400).json({ error: "Error al agregar al carrito" });
    }
  } catch (error) {
    res.status(400).json({ error: "Error al agregar al carrito" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
