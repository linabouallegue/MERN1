// routes/userRoutes.js
import express from "express";
import { createUser, getUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

// Route pour créer un utilisateur
router.post("/", createUser);

// Route pour lister tous les utilisateurs
router.get("/", getUsers);

// Route pour récupérer un utilisateur par ID
router.get("/:id", getUserById);

export default router;
