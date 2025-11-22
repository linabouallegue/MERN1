// routes/profileRoutes.js
import express from "express";
import {
  createProfile,
  getProfiles,
  getProfileByUserId,
} from "../controllers/profileController.js";

const router = express.Router();

// Créer un profil
router.post("/", createProfile);

// Lister tous les profils
router.get("/", getProfiles);

// Récupérer un profil par ID utilisateur
router.get("/:userId", getProfileByUserId);

export default router;
