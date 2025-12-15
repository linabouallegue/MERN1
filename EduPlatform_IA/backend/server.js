require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// ROUTES
const aiRoutes = require("./routes/aiRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");

// Connexion MongoDB
connectDB();

const app = express();

// ========== MIDDLEWARES GLOBAUX ==========
app.use(express.json());
app.use(morgan("dev"));

// ========== CORS ==========
const FRONT_URL = process.env.FRONT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONT_URL,
    credentials: true,
  })
);

// ========== ROUTES API ==========
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// ✅ ROUTES IA (GEMINI)
app.use("/api/ai", aiRoutes);

// ========== GESTION DES ERREURS ==========
app.use(notFound);
app.use(errorHandler);

// ========== DÉMARRAGE SERVEUR ==========
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
