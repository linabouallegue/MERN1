require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

// Middlewares globaux
app.use(express.json());
app.use(morgan("dev"));

// CORS : AVANT les routes
const FRONT_URL = process.env.FRONT_URL || "http://localhost:5173"; // Vite default port
app.use(
  cors({
    origin: FRONT_URL,
    credentials: true, // OK même si tu n'utilises pas encore les cookies
  })
);

// Routes API
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// Gestion des erreurs
app.use(notFound);
app.use(errorHandler);

// Port backend = 5000 (classique pour MERN)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
