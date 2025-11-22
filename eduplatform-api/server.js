import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Test de base
app.get("/", (req, res) => {
  res.send("✅ Bienvenue sur EduPlatform API !");
});

// Routes utilisateurs
app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
