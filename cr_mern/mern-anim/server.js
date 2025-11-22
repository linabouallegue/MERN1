import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import ownerRoutes from "./routes/ownerRoutes.js";
import animalRoutes from "./routes/animalRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/owners", ownerRoutes);
app.use("/api/animals", animalRoutes);

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté à mern-anim"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));
